/*
 * File: app/view/FeedDetail.js
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

Ext.define('MyApp.view.FeedDetail', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.feeddetail',
    requires: [
        'MyApp.view.FeedGrid',
        'MyApp.view.FeedPost'
    ],

    layout: {
        type: 'border'
    },

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            listeners: {
                added: {
                    fn: me.onPanelAdded,
                    scope: me
                }
            },
            items: [
                {
                    xtype: 'feedgrid',
                    id: 'feedgrid',
                    minHeight: 200,
                    minWidth: 150,
                    flex: 2,
                    region: 'center'
                },
                {
                    xtype: 'container',
                    itemId: 'south',
                    minHeight: 150,
                    layout: {
                        type: 'fit'
                    },
                    flex: 2,
                    region: 'south',
                    split: true,
                    items: [
                        {
                            xtype: 'feedpost',
                            itemId: 'feedpost'
                        }
                    ]
                },
                {
                    xtype: 'container',
                    hidden: true,
                    itemId: 'east',
                    minWidth: 150,
                    layout: {
                        type: 'fit'
                    },
                    flex: 1,
                    region: 'east',
                    split: true
                }
            ]
        });

        me.callParent(arguments);
    },

    onPanelAdded: function(abstractcomponent, container, pos, options) {
        this.loadFeed(this.url);
    },

    loadFeed: function(url) {
        this.url = url;

        this.down('#feedgrid').loadFeed(url);
    }

});