/*
 * File: app/view/ClientPortlet.js
 *
 * This file was generated by Sencha Architect version 2.1.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.1.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('JavisERP.view.ClientPortlet', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.clientportlet',

    height: 250,
    itemId: 'clientportlet',
    minHeight: 300,
    width: 868,
    autoScroll: false,
    header: false,
    columnLines: true,
    forceFit: true,
    scroll: 'vertical',
    store: 'ClientStore',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            columns: [
                {
                    xtype: 'actioncolumn',
                    draggable: false,
                    frame: false,
                    itemId: 'actions',
                    maxWidth: 50,
                    layout: {
                        type: 'fit'
                    },
                    defaultWidth: 50,
                    sortable: false,
                    align: 'center',
                    flex: 1,
                    hideable: false,
                    menuDisabled: true,
                    altText: 'Actions',
                    items: [
                        {
                            altText: 'Edit',
                            disabled: false,
                            icon: 'resources/icons/user_edit.png',
                            tooltip: 'Edit'
                        },
                        {
                            altText: 'View',
                            icon: 'resources/icons/user.png',
                            tooltip: 'View'
                        }
                    ]
                },
                {
                    xtype: 'numbercolumn',
                    hidden: true,
                    dataIndex: 'id',
                    flex: 1,
                    text: 'ID',
                    format: '0'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'name',
                    flex: 3,
                    text: 'Name'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'address1',
                    flex: 3,
                    text: 'Address'
                },
                {
                    xtype: 'gridcolumn',
                    hidden: true,
                    dataIndex: 'address2',
                    flex: 1,
                    text: 'Address Line 2'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'city',
                    flex: 1,
                    text: 'City'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'state',
                    flex: 1,
                    text: 'State'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'zip',
                    flex: 1,
                    text: 'Zip'
                },
                {
                    xtype: 'gridcolumn',
                    getter: function(record) {
                        var obj = record.get('territory');
                        return Ext.isObject( obj )  ? obj.name : obj;
                    },
                    setter: function(record, value) {
                        var obj = record.get('obj') || {};
                        record.set('territory', Ext.apply(obj,{name: value}));
                    },
                    dataIndex: 'territory',
                    flex: 1,
                    text: 'Territory'
                }
            ],
            viewConfig: {
                itemId: 'ClientGridView'
            },
            listeners: {
                beforerender: {
                    fn: me.onClientPortletBeforeRender,
                    scope: me
                }
            },
            dockedItems: [
                {
                    xtype: 'pagingtoolbar',
                    dock: 'bottom',
                    itemId: 'ClientPagingToolbar',
                    displayInfo: true,
                    store: 'ClientStore'
                }
            ]
        });

        me.callParent(arguments);
    },

    onClientPortletBeforeRender: function(abstractcomponent, options) {
        abstractcomponent.getStore().load();
    }

});