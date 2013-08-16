app.views.Home = Ext.extend(Ext.Panel, {
  title: 'Home',
  iconCls: 'home',

  dockedItems: [
  	{
  		dock: 'top',
  		xtype: 'toolbar',
  		title: '<img class="logo" src="app/images/logo.png" />',
  	}
  ],

  items: [
    {
  		xtype: 'panel',
  		height: 20
  	},

  	/* Video & Google Maps Buttons */
  	new Ext.Panel({
  		height: 100,

  		layout: {
	      type: 'hbox',
	      pack: 'center',  
	    },
	    items: [
	    	{
		  		xtype: 'spacer'
		  	},
		  	{
		  		xtype: 'button',
		  		cls: 'mapIcon',
          id: 'mapBtn',
		  		width:  100,
		  		height: 100,
		  		handler: function() {
		  			app.views.viewport.setActiveItem(app.views.map, {type: 'slide', direction: 'left'});
		  		}
		  	},
		  	{
		  		xtype: 'spacer'
		  	},
		  	{
		  		xtype: 'button',
		  		cls: 'twitterIcon',
          id: 'twitterBtn',
		  		width:  100,
		  		height: 100,
		  		handler: function() {
		  			app.views.viewport.setActiveItem(app.views.twitter, {type: 'slide', direction: 'left'});
		  		}
		  	},
		  	{
		  		xtype: 'spacer'
		  	}
	    ]
  	}),

  	{
  		xtype: 'panel',
  		height: 20
  	},

  	/* Camera and Twitter Buttons */
  	new Ext.Panel({
  		height: 100,

  		layout: {
	      type: 'hbox',
	      pack: 'center',  
	    },
	    items: [
	    	{
		  		xtype: 'spacer'
		  	},
		  	{
		  		xtype: 'button',
		  		cls:  'paymentIcon',
          id: 'paymentBtn',
		  		width:  100,
		  		height: 100,
		  		handler: function() {
		  			app.views.viewport.setActiveItem(app.views.payment, {type: 'slide', direction: 'left'});
		  		}
		  	},
		  	{
		  		xtype: 'spacer'
		  	},
		  	{
		  		xtype: 'button',
		  		cls: 'cameraIcon',
          id: 'cameraBtn',
		  		width:  100,
		  		height: 100,
		  		handler: function() {
		  		  Ext.dispatch({
			        controller: app.controllers.camera,
			        action: 'openCamera'
			      });
		  		}
		  	},
		  	{
		  		xtype: 'spacer'
		  	}
	    ]
  	}),

  	{
  		xtype: 'panel',
  		height: 20
  	},

  	/* Webview & Settings Buttons  */
  	new Ext.Panel({
  		height: 100,

  		layout: {
	      type: 'hbox',
	      pack: 'center',  
	    },
	    items: [
	    	{
		  		xtype: 'spacer'
		  	},
		  	{
		  		xtype: 'button',
		  		cls: 'webviewIcon',
          id: 'webviewBtn',
		  		width:  100,
		  		height: 100,
		  		handler: function() {
		  			$fh.webview({
		  				title: 'FeedHenry',
		  				url: 'http://www.feedhenry.com/'
		  			});
		  		}
		  	},
		  	{
		  		xtype: 'spacer'
		  	},		  	
		  	{
		  		xtype: 'button',
		  		cls: 'settingsIcon',
          id: 'settingsBtn',
		  		width:  100,
		  		height: 100,
		  		handler: function() {
		  			app.views.viewport.setActiveItem(app.views.settings, {type: 'slide', direction: 'left'});
		  		}
		  	},
		  	{
		  		xtype: 'spacer'
		  	}
	    ]
  	}),
  ]
});