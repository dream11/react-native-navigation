package com.reactnativenavigation.views.pip;

import android.animation.Animator;
import android.animation.AnimatorSet;
import android.animation.ObjectAnimator;
import android.app.Activity;
import android.content.Context;
import android.graphics.Point;
import android.util.AttributeSet;
import android.util.DisplayMetrics;
import android.view.MotionEvent;
import android.view.View;
import android.view.ViewGroup;
import android.widget.FrameLayout;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.coordinatorlayout.widget.CoordinatorLayout;

import com.reactnativenavigation.parse.CustomPIPDimension;
import com.reactnativenavigation.utils.UiUtils;
import com.reactnativenavigation.utils.ViewUtils;
import com.reactnativenavigation.views.ViewExtension;

public class PIPFloatingLayout extends CoordinatorLayout {
    private float dX, dY;
    private Activity activity;
    private int pipLayoutLeft = 0, pipLayoutTop = 0;
    private FrameLayout.LayoutParams layoutParams;
    private PIPStates pipState = PIPStates.NOT_STARTED;
    private CustomPIPDimension pipDimension;
    private IPIPListener pipListener;
    private AnimatorSet runningAnimation;

    public PIPFloatingLayout(@NonNull Activity activity) {
        super(activity);
        this.activity = activity;
    }

    public PIPFloatingLayout(@NonNull Context context, @Nullable AttributeSet attrs) {
        super(context, attrs);
    }

    public PIPFloatingLayout(@NonNull Context context, @Nullable AttributeSet attrs, int defStyleAttr) {
        super(context, attrs, defStyleAttr);
    }

    public void setCustomPIPDimensions(CustomPIPDimension dimension) {
        this.pipDimension = dimension;
    }

    @Override
    public boolean onInterceptTouchEvent(MotionEvent event) {
        switch (event.getAction()) {
            case MotionEvent.ACTION_DOWN:
            case MotionEvent.ACTION_UP:
                return shouldInterceptTouchEvent();
            case MotionEvent.ACTION_MOVE:
                return true;
            default:
                return false;
        }
    }

    @Override
    public boolean onTouchEvent(MotionEvent event) {
        boolean isHandled = false;
        switch (event.getAction()) {
            case MotionEvent.ACTION_DOWN:
                if (shouldInterceptTouchEvent()) {
                    dX = getX() - event.getRawX();
                    dY = getY() - event.getRawY();
                    isHandled = true;
                }
                break;

            case MotionEvent.ACTION_MOVE:
                float halfWidth = getWidth() / 2.0f;
                float halfHeight = getHeight() / 2.0f;
                float destX = event.getRawX() + dX - halfWidth;
                float destY = event.getRawY() + dY - halfHeight;
                if (destX < 0) {
                    destX = 0;
                }
                if ((destX + getWidth()) > UiUtils.getWindowWidth(getContext())) {
                    destX = UiUtils.getWindowWidth(getContext()) - getWidth();
                }
                if (destY < 0) {
                    destY = 0;
                }
                if ((destY + getHeight()) > UiUtils.getWindowHeight(getContext())) {
                    destY = UiUtils.getWindowHeight(getContext()) - getHeight();
                }
                animate().x(destX).y(destY).setDuration(0).start();
                isHandled = true;
                break;
            case MotionEvent.ACTION_UP:
                if (shouldInterceptTouchEvent()) {
                    isHandled = true;
                    animateToExpand();
                }
                break;
        }
        return isHandled;
    }

    private void setNativePIPMode() {
        dX = 0;
        dY = 0;
        animate().x(0).y(0).setDuration(0).start();
        Point loc = ViewUtils.getLocationOnScreen(this);
        this.pipLayoutLeft = loc.x;
        this.pipLayoutTop = loc.y;
        this.layoutParams = (FrameLayout.LayoutParams) getLayoutParams();
        FrameLayout.LayoutParams pipLayoutLayoutParams = new FrameLayout.LayoutParams(FrameLayout.LayoutParams.MATCH_PARENT, FrameLayout.LayoutParams.MATCH_PARENT);
        pipLayoutLayoutParams.setMargins(0, 0, 0, 0);
        setLayoutParams(pipLayoutLayoutParams);
    }

    private void setCustomPIPMode() {
        animate().x(this.pipLayoutLeft).y(this.pipLayoutTop).setDuration(0).start();
        setLayoutParams(layoutParams);
    }

    private void initializeCustomLayoutParams() {
        DisplayMetrics displayMetrics = new DisplayMetrics();
        activity.getWindowManager().getDefaultDisplay().getMetrics(displayMetrics);
        layoutParams = new FrameLayout.LayoutParams(this.pipDimension.compact.width.get(), this.pipDimension.compact.height.get());
        this.pipLayoutTop = 0;
        this.pipLayoutLeft = 0;
    }

    private void resetPIPLayout() {
        DisplayMetrics displayMetrics = new DisplayMetrics();
        activity.getWindowManager().getDefaultDisplay().getMetrics(displayMetrics);
        this.pipLayoutTop = 0;
        this.pipLayoutLeft = 0;
        layoutParams = new FrameLayout.LayoutParams(0, 0);
        layoutParams.setMargins(0, 0, 0, 0);
        setLayoutParams(layoutParams);
        removeAllViews();
        cancelAnimations();
    }

    public void initiateRestore() {
        Point loc = ViewUtils.getLocationOnScreen(this);
        animate().x(0).y(0).setDuration(0).start();
        this.setX(UiUtils.pxToDp(activity, loc.x));
        this.setY(UiUtils.pxToDp(activity, loc.y));
    }

    private boolean shouldInterceptTouchEvent() {
        return this.pipState == PIPStates.CUSTOM_MOUNTED || this.pipState == PIPStates.CUSTOM_COMPACT;
    }

    private void setCustomCompactState() {
        ViewGroup.LayoutParams params = getLayoutParams();
        params.width = UiUtils.dpToPx(activity, pipDimension.compact.width.get());
        params.height = UiUtils.dpToPx(activity, pipDimension.compact.height.get());
        setLayoutParams(params);
    }

    private void setCustomExpandedState() {
        ViewGroup.LayoutParams params = getLayoutParams();
        params.width = UiUtils.dpToPx(activity, pipDimension.expanded.width.get());
        params.height = UiUtils.dpToPx(activity, pipDimension.expanded.height.get());
        setLayoutParams(params);
        animateToCompact(5000);
    }

    private AnimatorSet createViewSizeAnimation(float currentHeight, float targetHeight, float currentWidth, float targetWidth, int duration) {
        ObjectAnimator heightAnimator = ObjectAnimator.ofFloat(this, ViewExtension.HEIGHT, UiUtils.dpToPx(activity, currentHeight), UiUtils.dpToPx(activity, targetHeight));
        ObjectAnimator widthAnimator = ObjectAnimator.ofFloat(this, ViewExtension.WIDTH, UiUtils.dpToPx(activity, currentWidth), UiUtils.dpToPx(activity, targetWidth));
        AnimatorSet animatorSet = new AnimatorSet();
        animatorSet.playTogether(heightAnimator, widthAnimator);
        animatorSet.setDuration(duration);
        return animatorSet;
    }

    private void animateToCompact(int delay) {
        runningAnimation = createViewSizeAnimation(pipDimension.expanded.height.get(), pipDimension.compact.height.get(), pipDimension.expanded.width.get(), pipDimension.compact.width.get(), 100);
        runningAnimation.setStartDelay(delay);
        runningAnimation.start();
        runningAnimation.addListener(new Animator.AnimatorListener() {
            @Override
            public void onAnimationStart(Animator animation) {

            }

            @Override
            public void onAnimationEnd(Animator animation) {
                updatePIPState(PIPStates.CUSTOM_COMPACT);
            }

            @Override
            public void onAnimationCancel(Animator animation) {

            }

            @Override
            public void onAnimationRepeat(Animator animation) {

            }
        });
    }

    private void animateToExpand() {
        runningAnimation = createViewSizeAnimation(pipDimension.compact.height.get(), pipDimension.expanded.height.get(), pipDimension.compact.width.get(), pipDimension.expanded.width.get(), 100);
        runningAnimation.start();
        runningAnimation.addListener(new Animator.AnimatorListener() {
            @Override
            public void onAnimationStart(Animator animation) {

            }

            @Override
            public void onAnimationEnd(Animator animation) {
                updatePIPState(PIPStates.CUSTOM_EXPANDED);
            }

            @Override
            public void onAnimationCancel(Animator animation) {

            }

            @Override
            public void onAnimationRepeat(Animator animation) {

            }
        });
    }

    public void updatePIPState(PIPStates pipState) {
        PIPStates oldState = this.pipState;
        this.pipState = pipState;
        switch (this.pipState) {
            case NOT_STARTED:
                resetPIPLayout();
                break;
            case MOUNT_START:
                resetPIPLayout();
                initializeCustomLayoutParams();
                setCustomPIPMode();
                break;
            case CUSTOM_COMPACT:
                setCustomCompactState();
                break;
            case CUSTOM_EXPANDED:
                setCustomExpandedState();
                break;
            case NATIVE_MOUNTED:
                cancelAnimations();
                setNativePIPMode();
                break;
            case CUSTOM_MOUNTED:
                setCustomPIPMode();
                setCustomCompactState();
                animateToExpand();
                break;

        }
        if (this.pipListener != null) {
            this.pipListener.onPIPStateChanged(oldState, pipState);
        }
    }

    @Override
    public void addView(View child) {
        super.addView(child);
        CoordinatorLayout.LayoutParams params = new CoordinatorLayout.LayoutParams(CoordinatorLayout.LayoutParams.WRAP_CONTENT, CoordinatorLayout.LayoutParams.WRAP_CONTENT);
        params.setMargins(0, 0, 0, 0);
        child.setLayoutParams(params);
    }

    public void setPipListener(IPIPListener pipListener) {
        this.pipListener = pipListener;
    }

    public void cancelAnimations() {
        if (runningAnimation != null) {
            runningAnimation.cancel();
            runningAnimation = null;
        }
    }

    public interface IPIPListener {
        void onPIPStateChanged(PIPStates oldPIPState, PIPStates pipState);
    }
}