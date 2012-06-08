/*
 * File: app/view/NavBar.js
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

Ext.define('NCPublishers.view.NavBar', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.navbar',

    maxHeight: 28,
    layout: {
        align: 'stretch',
        type: 'vbox'
    },

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            dockedItems: [
                {
                    xtype: 'toolbar',
                    id: 'nav-toolbar',
                    flex: 1,
                    dock: 'top',
                    items: [
                        {
                            xtype: 'splitbutton',
                            iconCls: 'ui-silk ui-silk-clock',
                            tooltip: 'Recent Records'
                        },
                        {
                            xtype: 'splitbutton',
                            iconCls: 'ui-silk ui-silk-star',
                            tooltip: 'Favorite Records'
                        },
                        {
                            xtype: 'splitbutton',
                            itemId: 'Dashboard',
                            text: 'Home',
                            menu: {
                                xtype: 'menu',
                                width: 120,
                                preventHeader: true,
                                title: 'HomeMenu',
                                items: [
                                    {
                                        xtype: 'menuitem',
                                        itemId: 'Dashboard',
                                        iconCls: 'ui-silk ui-silk-application-home',
                                        text: 'Dashboard'
                                    },
                                    {
                                        xtype: 'menuitem',
                                        iconCls: 'ui-silk ui-silk-application-edit',
                                        text: 'Preferences'
                                    }
                                ]
                            }
                        },
                        {
                            xtype: 'tbseparator'
                        },
                        {
                            xtype: 'splitbutton',
                            itemId: 'Activities',
                            text: 'Activities',
                            menu: {
                                xtype: 'menu',
                                width: 120,
                                preventHeader: true,
                                title: 'ActivitiesMenu',
                                items: [
                                    {
                                        xtype: 'menuitem',
                                        iconCls: 'ui-silk ui-silk-calendar',
                                        text: 'Calendar',
                                        menu: {
                                            xtype: 'menu',
                                            width: 120,
                                            items: [
                                                {
                                                    xtype: 'menuitem',
                                                    iconCls: 'ui-silk ui-silk-date-add',
                                                    text: 'New Event'
                                                },
                                                {
                                                    xtype: 'menuitem',
                                                    iconCls: 'ui-silk ui-silk-date-magnify',
                                                    text: 'Search'
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        xtype: 'menuitem',
                                        iconCls: 'ui-silk ui-silk-note',
                                        text: 'Tasks',
                                        menu: {
                                            xtype: 'menu',
                                            width: 120,
                                            items: [
                                                {
                                                    xtype: 'menuitem',
                                                    iconCls: 'ui-silk ui-silk-note-add',
                                                    text: 'New'
                                                },
                                                {
                                                    xtype: 'menuitem',
                                                    iconCls: 'ui-silk ui-silk-page-white-magnify',
                                                    text: 'Search'
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        xtype: 'menuitem',
                                        iconCls: 'ui-silk ui-silk-telephone',
                                        text: 'Phone Calls',
                                        menu: {
                                            xtype: 'menu',
                                            width: 120,
                                            items: [
                                                {
                                                    xtype: 'menuitem',
                                                    iconCls: 'ui-silk ui-silk-telephone-add',
                                                    text: 'New'
                                                },
                                                {
                                                    xtype: 'menuitem',
                                                    iconCls: 'ui-silk ui-silk-magnifier',
                                                    text: 'Search'
                                                }
                                            ]
                                        }
                                    }
                                ]
                            }
                        },
                        {
                            xtype: 'tbseparator'
                        },
                        {
                            xtype: 'splitbutton',
                            text: 'Lists',
                            menu: {
                                xtype: 'menu',
                                width: 120,
                                preventHeader: true,
                                title: 'ListMenu',
                                items: [
                                    {
                                        xtype: 'menuitem',
                                        itemId: 'SalesRepGrid',
                                        iconCls: 'ui-silk ui-silk-user-gray',
                                        text: 'Sales Reps'
                                    },
                                    {
                                        xtype: 'menuitem',
                                        itemId: 'ClientGrid',
                                        iconCls: 'ui-silk ui-silk-group',
                                        text: 'Clients'
                                    },
                                    {
                                        xtype: 'menuitem',
                                        itemId: 'PublicationGrid',
                                        iconCls: 'ui-silk ui-silk-newspaper',
                                        text: 'Publications'
                                    },
                                    {
                                        xtype: 'menuitem',
                                        itemId: 'AdvertisementGrid',
                                        iconCls: 'ui-silk ui-silk-page-white-picture',
                                        text: 'Advertisements'
                                    },
                                    {
                                        xtype: 'menuitem',
                                        itemId: 'ContractGrid',
                                        iconCls: 'ui-silk ui-silk-folder-table',
                                        text: 'Contracts'
                                    },
                                    {
                                        xtype: 'menuitem',
                                        itemId: 'TerritoryGrid',
                                        iconCls: 'ui-silk ui-silk-map',
                                        text: 'Territories'
                                    }
                                ]
                            }
                        },
                        {
                            xtype: 'tbseparator'
                        },
                        {
                            xtype: 'splitbutton',
                            text: 'Reports',
                            menu: {
                                xtype: 'menu',
                                width: 120,
                                preventHeader: true,
                                title: 'ReportsMenu',
                                items: [
                                    {
                                        xtype: 'menuitem',
                                        iconCls: 'ui-silk ui-silk-money',
                                        text: 'Sales Report'
                                    },
                                    {
                                        xtype: 'menuitem',
                                        iconCls: 'ui-silk ui-silk-application-view-list',
                                        text: 'Ad List'
                                    },
                                    {
                                        xtype: 'menuitem',
                                        iconCls: 'ui-silk ui-silk-calculator',
                                        text: 'Commissions'
                                    }
                                ]
                            }
                        },
                        {
                            xtype: 'tbseparator'
                        },
                        {
                            xtype: 'button',
                            text: 'Support'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});