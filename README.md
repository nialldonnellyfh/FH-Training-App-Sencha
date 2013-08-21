#Introduction to Sencha Touch

## Overview

This branch provides a sample a application which makes use of the <a href='http://www.gorillalogic.com/monkeytalk'>MonkeyTalk</a> testing functionality provided by the FeedHenry platform. It contains all code required to run the MonkeyTalk tests against the app.

## Step 1 

Fork this application to your GitHub account.

## Step 2

Go to the FeedHenry domain that you will use to build the platform and create a new app in the Studio. If you don't know which domain to use, use our <a href='http://hpcs.feedhenry.com'>hpcs.feedhenry.com</a>. 

During app creation, when prompted, select the option "Create an App from a Git repository" and click next. 

On the next screen enter an application name, provide the Git URL with the format "git@github.com:{YOUR GIT USERNAME}/FH-Training-App-Sencha.git" and enter "ci_testing" in the Git Branch field then click next.

After a few seconds you will be presented with an SSH key that you will need to add to your GitHub account add this then click next and select "Quickstart" once the app has finished being created.

## Step 3

On the left tab in the Studio navigate to the "Hybrid Client" section and select "Configuration".

Select the tab representing platform you plan to build for and check the "Enable MonkeyTalk" box. Then scroll down and click Save. If you plan to run the app on the iOS Simulator ensure to check the "Simulator Only" box under the iPhone/iPad/iOS tab and click Save

## Step 4

Build the application and download it using the "Build" tab on the left of the Studio.

Place it in the path_to_repo/test/fixtures/monkeytalk/ directory.

## Step 5

We will now run the tests. Depending on the platform you have built for use the following steps.

### iOS Simulator
Extract the contents of the .zip file and copy the filename of the extracted file to the clipboard.
Open the file path_to_repo/build.xml and change the value of the the property "fh.iphoneapppath" to point to your application like so.

    <property name="fh.iphoneapppath" value="test/fixtures/monkeytalk/MyAppName.app/MyAppName"/>

Now run the tests by typing the following into the terminal:

    ant local-ios-sim

### iOS Device
Ensure the app is installed on device and has a Wifi connection on the same network as your development machine. In build.xml find the "local-test-ios-device" target and change its "host" property to the IP Address of your iOS device. To run tests type the following:

    ant local-test-ios-device


### Android Emulator
Install the application APK on the emulator and open the application. Now run the command:

    ant local-test-android-emulator