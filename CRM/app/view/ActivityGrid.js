/*
 * File: app/view/ActivityGrid.js
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

Ext.define('JavisERP.view.ActivityGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.activitygrid',

    border: 0,
    itemId: 'ActivitiesGrid',
    title: 'My Grid Panel',
    forceFit: true,
    store: 'ActivityStore',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            viewConfig: {

            },
            columns: [
                {
                    xtype: 'actioncolumn',
                    maxWidth: 50,
                    defaultWidth: 50,
                    items: [
                        {

                        }
                    ]
                },
                {
                    xtype: 'gridcolumn',
                    hidden: true,
                    dataIndex: 'id',
                    text: 'Id'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'title',
                    text: 'Title'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'date',
                    text: 'Date'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'time',
                    text: 'Time'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'owner',
                    text: 'Owner'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'status',
                    text: 'Status'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'assigned_to',
                    text: 'Assigned To'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'type',
                    text: 'Type'
                }
            ],
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'top',
                    items: [
                        {
                            xtype: 'button',
                            iconCls: 'ui-silk ui-silk-clock-add',
                            text: 'New Task'
                        },
                        {
                            xtype: 'tbseparator'
                        },
                        {
                            xtype: 'button',
                            iconCls: 'ui-silk ui-silk-telephone-add',
                            text: 'New Phone Call'
                        },
                        {
                            xtype: 'tbseparator'
                        },
                        {
                            xtype: 'button',
                            iconCls: 'ui-silk ui-silk-date-add',
                            text: 'New Event'
                        },
                        {
                            xtype: 'tbseparator'
                        },
                        {
                            xtype: 'combobox',
                            itemId: 'typeFilter',
                            hideLabel: true,
                            emptyText: 'Filter Activity Type...',
                            displayField: 'description',
                            queryMode: 'local',
                            store: 'ActivityTypeStore'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});