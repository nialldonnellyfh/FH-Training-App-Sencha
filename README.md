<<<<<<< HEAD
#Introduction to Sencha Touch

## Overview

As part of this training Session we are going to create a simple Sencha Touch 1.1 Application. The app will train you in how to build a Sencha touch User Interface and how to navigate within it. You will also learn to use the FeedHenry APIs.

![](https://github.com/feedhenry/FH-Training-App-Sencha/raw/v1/docs/HomeView.png)

## Step 1 

To begin this tutorial download the boilerplate code from <a href="https://github.com/feedhenry/FH-Training-App-Sencha/zipball/boilerplate">this link</a> and copy to your workspace or use the following git commands to setup the project in your workspace:

    cd my-workspace-folder
    git clone git@github.com:feedhenry/FH-Training-App-Sencha.git.
    cd FH-Training-App-Sencha
    git checkout boilerplate

This represents our basic file structure for the entire tutorial.

## Step 2

You are now setup to begin the tutorial. To begin Part 1 click <a href="https://github.com/feedhenry/FH-Training-App-Sencha/tree/boilerplate">here</a>. 

## Links to Tutorial Sections & Tags:


* <a href="https://github.com/feedhenry/FH-Training-App-Sencha/tree/boilerplate">Part 1</a>
* <a href="https://github.com/feedhenry/FH-Training-App-Sencha/tree/v1">Part 2</a> & <a href="https://github.com/feedhenry/FH-Training-App-Sencha/zipball/v1">Finished Code Pt1.zip</a>
* <a href="https://github.com/feedhenry/FH-Training-App-Sencha/tree/v2">Part 3</a> & <a href="https://github.com/feedhenry/FH-Training-App-Sencha/zipball/v2">Finished Code Pt2.zip</a>
* <a href="https://github.com/feedhenry/FH-Training-App-Sencha/tree/v3">Part 4</a> & <a href="https://github.com/feedhenry/FH-Training-App-Sencha/zipball/v3">Finished Code Pt3.zip</a>
* <a href="https://github.com/feedhenry/FH-Training-App-Sencha/tree/v4">Part 5</a> & <a href="https://github.com/feedhenry/FH-Training-App-Sencha/zipball/v4">Finished Code Pt4.zip</a>
* <a href="https://github.com/feedhenry/FH-Training-App-Sencha/tree/v5">Part 6</a> & <a href="https://github.com/feedhenry/FH-Training-App-Sencha/zipball/v5">Finished Code Pt5.zip</a>
* <a href="https://github.com/feedhenry/FH-Training-App-Sencha/tree/v6">Part 7</a> & <a href="https://github.com/feedhenry/FH-Training-App-Sencha/zipball/v6">Finished Code Pt6.zip</a>
* <a href="https://github.com/feedhenry/FH-Training-App-Sencha/tree/v7">Part 8</a> & <a href="https://github.com/feedhenry/FH-Training-App-Sencha/zipball/v7">Finished Code Pt7.zip</a>
* <a href="https://github.com/feedhenry/FH-Training-App-Sencha/tree/v8">Part 9</a> & <a href="https://github.com/feedhenry/FH-Training-App-Sencha/zipball/v8">Finished Code Pt8.zip</a>

* <a href="https://github.com/feedhenry/FH-Training-App-Sencha/zipball/v9">Finished Code Pt9.zip</a> 


=======
# FeedHenry Sencha Tutorial - Part 1

## Overview

To get the starting point for this section 'git checkout boilerplate'.

In this tutorial we will be creating the basic structure of the app. At the end of this tutorial you will know how to:

* Initialize the Sencha touch library   (app/app.js)
* Create a viewport                     (app/views/Viewport.js)
* Create a view with some UI components (app/views/Home.js)

![](https://github.com/feedhenry/FH-Training-App-Sencha/raw/v1/docs/HomeView.png)

## Step 1

First we need to initialize the Sencha Touch framework. This code registers the 'app' namespace and also creates an instance of the viewport. The viewport will contain any view that will be used in the app. This is done by adding the following code to app.js.

	/* name: 'app' will create the following namespaces:
	 * app.views,
	 * app.models,
	 * app.controllers,
	 * app.stores
	 */
	Ext.regApplication({
	  name: 'app',
	  launch: function() {
	  	console.log("App Launched");
	  	/*
	  	 * Uncomment the below line once you've written viewport.js
	  	 * as tasked in Step 2
	  	 */
	    //this.views.viewport = new this.views.Viewport();
	  }
	});

## Step 2

Now that the Sencha Touch framework is initialized we can create the viewport. Create a file 'Viewport.js' in the views directory. Think of the viewport as a container that will hold any views/pages we will use in the app. The comments below explain the signifigance of each part of code.

	/*
	 * Add our Viewport to the views namespace. 
	 * The Viewport is going to be a Panel, a type of Sencha component.
	 * The viewport will hold our cards (views/pages) that we will switch
	 * between when using the app.
	 */
	app.views.Viewport = Ext.extend(Ext.Panel, {
	  fullscreen: true,
	  ui: 'light',
	  layout: 'card',

	  /*
	   * The animation type, if any, that will be used for swtching between the
	   * cards we have stored in the Viewport.
	   */
	  cardSwitchAnimation: {
	    type: 'slide',
	    cover: true
	  },

	  initComponent: function() {
	    /*
	     * Put instances of cards into app.views namespace
	     * These cards will be other views you have defined
	     */
	    Ext.apply(app.views, {

	    });
	    // Put instances of cards (views) into viewport here
	    Ext.apply(this, {
	      items: [

	      ]
	    });
	    app.views.Viewport.superclass.initComponent.apply(this, arguments);
	  }
	});

	/*
	 * This global variable will hold a loading spinner (Load Mask). 
	 * Where necessary we can call mask.show() for loading pages.
	 */
	var mask = new Ext.LoadMask(Ext.getBody(), {
	  msg: "Loading Data"
	});


We add any views we create to the instance of the viewport. The first view we create is the 'Home' view, this view contains a number of buttons which (In later versions) will go to different views.

## Task - Add a view to the viewport

Inside the ‘initComponent’ function locate the following code;

	//put instances of cards into viewport
	Ext.apply(this, {
	  items: [

	  ]
	});

Inside the items array add the following code;

	{
	  html: 'Test View'
	}

If you open your index.html page you will now see the following;

![](https://github.com/feedhenry/FH-Training-App-Sencha/raw/v1/docs/TestView.png)

To get the finished code for this section and the start for <a href="https://github.com/feedhenry/FH-Training-App-Sencha/tree/v1">part 2 </a>'git checkout v1' or click <a href="https://github.com/feedhenry/FH-Training-App-Sencha/zipball/v1">here</a>
>>>>>>> c0447988ed573aa9ce0d59f6c1b2fb25f9df29fd
