/*
 * File: app.js
 *
 * This file was generated by Sencha Architect version 2.0.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.0.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.0.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.Loader.setConfig({
    enabled: true,
    paths: {
        'Ext.ux': 'ux/'
    }
});

Ext.application({
    requires: [
        'MyApp.view.override.FeedGrid',
        'MyApp.view.override.FeedPost'
    ],

    models: [
        'Feed',
        'FeedItem'
    ],
    stores: [
        'FeedStore',
        'FeedItemStore',
        'DefaultFeedsStore'
    ],
    views: [
        'MyViewport',
        'FeedPanel',
        'FeedDetail',
        'FeedGrid',
        'FeedPost',
        'FeedInfo',
        'FeedWindow'
    ],
    autoCreateViewport: true,
    name: 'MyApp',
    controllers: [
        'FeedController'
    ],

    launch: function() {
        Ext.syncRequire([
        'Ext.ux.PreviewPlugin'
        ]);
    }

});
