package com.dreampick.app;

import android.os.Bundle;

import io.branch.rnbranch.*;
import android.content.Intent;

import com.facebook.react.ReactActivity;

import org.devio.rn.splashscreen.SplashScreen;

public class MainActivity extends ReactActivity {
 
  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "dreampick";
  }

  // Override onStart, onNewIntent:
  @Override
  protected void onStart() {
    super.onStart();
    RNBranchModule.initSession(getIntent().getData(), this);
  }

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    SplashScreen.show(this);
    super.onCreate(savedInstanceState);
  }

  @Override
  public void onNewIntent(Intent intent) {
    super.onNewIntent(intent);
    // RNBranchModule.onNewIntent(intent);
  }
}
