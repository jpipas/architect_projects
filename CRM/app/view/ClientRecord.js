/*
 * File: app/view/ClientRecord.js
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

Ext.define('JavisERP.view.ClientRecord', {
    extend: 'Ext.form.Panel',
    alias: 'widget.clientrecord',
    requires: [
        'JavisERP.view.RecordNavigation',
        'JavisERP.view.ContactGrid',
        'JavisERP.view.PublicationGrid'
    ],

    id: 'clientrecord',
    layout: {
        align: 'stretch',
        type: 'vbox'
    },
    bodyPadding: 5,
    title: 'Client Record',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            defaults: {
                anchor: '100%',
                labelAlign: 'right'
            },
            dockedItems: [
                {
                    xtype: 'recordnav',
                    itemId: 'RecordNavigation',
                    flex: 1,
                    dock: 'top'
                }
            ],
            items: [
                {
                    xtype: 'fieldcontainer',
                    itemId: 'RecordHeader',
                    minHeight: 100,
                    maintainFlex: false,
                    defaults: {
                        labelAlign: 'right'
                    },
                    layout: {
                        padding: '0 0 25 0',
                        type: 'hbox'
                    },
                    flex: 1,
                    items: [
                        {
                            xtype: 'fieldcontainer',
                            border: 'false',
                            itemId: 'Column1',
                            defaultType: 'textfield',
                            defaults: {
                                labelAlign: 'right',
                                anchor: '95%'
                            },
                            layout: {
                                type: 'anchor'
                            },
                            flex: 1,
                            items: [
                                {
                                    xtype: 'displayfield',
                                    name: 'name',
                                    fieldLabel: 'Company Name',
                                    anchor: '95%'
                                },
                                {
                                    xtype: 'displayfield',
                                    name: 'territory',
                                    fieldLabel: 'Territory',
                                    anchor: '95%'
                                },
                                {
                                    xtype: 'displayfield',
                                    name: 'email_address',
                                    fieldLabel: 'Email Address',
                                    anchor: '95%'
                                },
                                {
                                    xtype: 'displayfield',
                                    name: 'phone',
                                    fieldLabel: 'Phone',
                                    anchor: '95%'
                                },
                                {
                                    xtype: 'displayfield',
                                    name: 'fax',
                                    fieldLabel: 'Fax',
                                    anchor: '95%'
                                }
                            ]
                        },
                        {
                            xtype: 'fieldcontainer',
                            border: 'false',
                            itemId: 'Column2',
                            defaults: {
                                labelAlign: 'right',
                                anchor: '95%'
                            },
                            layout: {
                                type: 'anchor'
                            },
                            flex: 1,
                            items: [
                                {
                                    xtype: 'displayfield',
                                    name: 'address1',
                                    fieldLabel: 'Address Line 1',
                                    anchor: '100%'
                                },
                                {
                                    xtype: 'displayfield',
                                    name: 'address2',
                                    fieldLabel: 'Address Line 2',
                                    anchor: '100%'
                                },
                                {
                                    xtype: 'displayfield',
                                    name: 'city',
                                    fieldLabel: 'City',
                                    anchor: '100%'
                                },
                                {
                                    xtype: 'displayfield',
                                    name: 'state',
                                    fieldLabel: 'State',
                                    anchor: '100%'
                                },
                                {
                                    xtype: 'displayfield',
                                    name: 'zip',
                                    fieldLabel: 'Zip',
                                    anchor: '100%'
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'tabpanel',
                    height: 350,
                    itemId: 'ClientSublists',
                    defaults: {
                        labelAlign: 'right'
                    },
                    activeTab: 1,
                    plain: false,
                    flex: 3,
                    items: [
                        {
                            xtype: 'panel',
                            layout: {
                                type: 'fit'
                            },
                            bodyPadding: 5,
                            title: 'General',
                            items: [
                                {
                                    xtype: 'tabpanel',
                                    itemId: 'General-Sublists',
                                    activeTab: 1,
                                    items: [
                                        {
                                            xtype: 'panel',
                                            title: 'Contacts',
                                            items: [
                                                {
                                                    xtype: 'contactgrid',
                                                    itemId: 'ContactGrid'
                                                }
                                            ],
                                            dockedItems: [
                                                {
                                                    xtype: 'toolbar',
                                                    dock: 'top',
                                                    items: [
                                                        {
                                                            xtype: 'button',
                                                            itemId: 'newcontact',
                                                            iconCls: 'ui-silk ui-silk-vcard-add',
                                                            text: 'New Contact'
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            xtype: 'panel',
                                            title: 'Activities',
                                            items: [
                                                {
                                                    xtype: 'gridpanel',
                                                    border: 0,
                                                    itemId: 'ActivitiesGrid',
                                                    preventHeader: true,
                                                    title: 'My Grid Panel',
                                                    forceFit: true,
                                                    store: 'ActivityStore',
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
                                                    ]
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
                                        },
                                        {
                                            xtype: 'panel',
                                            title: 'User Notes',
                                            items: [
                                                {
                                                    xtype: 'gridpanel',
                                                    border: 0,
                                                    preventHeader: true,
                                                    title: 'User Notes',
                                                    forceFit: true,
                                                    store: 'UserNoteStore',
                                                    viewConfig: {

                                                    },
                                                    columns: [
                                                        {
                                                            xtype: 'actioncolumn',
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
                                                            dataIndex: 'date',
                                                            text: 'Date'
                                                        },
                                                        {
                                                            xtype: 'gridcolumn',
                                                            dataIndex: 'author',
                                                            text: 'Author'
                                                        },
                                                        {
                                                            xtype: 'gridcolumn',
                                                            dataIndex: 'title',
                                                            text: 'Title'
                                                        },
                                                        {
                                                            xtype: 'gridcolumn',
                                                            dataIndex: 'memo',
                                                            text: 'Memo'
                                                        }
                                                    ]
                                                }
                                            ],
                                            dockedItems: [
                                                {
                                                    xtype: 'toolbar',
                                                    dock: 'top',
                                                    items: [
                                                        {
                                                            xtype: 'button',
                                                            iconCls: 'ui-silk ui-silk-note-add',
                                                            text: 'New Note'
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            xtype: 'panel',
                                            title: 'Files'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            xtype: 'panel',
                            autoScroll: false,
                            defaults: {
                                labelAlign: 'right'
                            },
                            layout: {
                                align: 'stretch',
                                type: 'vbox'
                            },
                            bodyPadding: 5,
                            title: 'Sales',
                            items: [
                                {
                                    xtype: 'container',
                                    height: 50,
                                    itemId: 'SalesSublistHeader',
                                    maxHeight: 80,
                                    layout: {
                                        type: 'hbox'
                                    },
                                    flex: 1,
                                    items: [
                                        {
                                            xtype: 'fieldcontainer',
                                            itemId: 'Column1',
                                            defaults: {
                                                labelAlign: 'right',
                                                anchor: '95%'
                                            },
                                            layout: {
                                                type: 'anchor'
                                            },
                                            flex: 1,
                                            items: [
                                                {
                                                    xtype: 'textfield',
                                                    fieldLabel: 'Assigned Sales Rep',
                                                    labelWidth: 150,
                                                    anchor: '95%'
                                                },
                                                {
                                                    xtype: 'textfield',
                                                    fieldLabel: 'Label',
                                                    labelWidth: 150,
                                                    anchor: '95%'
                                                }
                                            ]
                                        },
                                        {
                                            xtype: 'fieldcontainer',
                                            itemId: 'Column2',
                                            defaults: {
                                                labelAlign: 'right',
                                                anchor: '100%'
                                            },
                                            layout: {
                                                type: 'anchor'
                                            },
                                            flex: 1,
                                            items: [
                                                {
                                                    xtype: 'textfield',
                                                    fieldLabel: 'Overdue Balance',
                                                    anchor: '95%'
                                                },
                                                {
                                                    xtype: 'textfield',
                                                    fieldLabel: 'Label',
                                                    anchor: '95%'
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    xtype: 'tabpanel',
                                    itemId: 'SalesSublistTabs',
                                    width: 100,
                                    activeTab: 0,
                                    plain: false,
                                    items: [
                                        {
                                            xtype: 'panel',
                                            title: 'Publications',
                                            items: [
                                                {
                                                    xtype: 'publicationgrid',
                                                    itemId: 'PublicationGrid'
                                                }
                                            ]
                                        },
                                        {
                                            xtype: 'panel',
                                            title: 'Contracts'
                                        },
                                        {
                                            xtype: 'panel',
                                            title: 'Advertisements'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            xtype: 'panel',
                            layout: {
                                align: 'stretch',
                                type: 'vbox'
                            },
                            bodyPadding: 5,
                            title: 'Financial',
                            tabConfig: {
                                xtype: 'tab',
                                autoWidth: false
                            },
                            items: [
                                {
                                    xtype: 'container',
                                    height: 50,
                                    itemId: 'FinancialSublistHeader',
                                    maxHeight: 50,
                                    layout: {
                                        align: 'stretch',
                                        padding: '',
                                        type: 'hbox'
                                    },
                                    flex: 1,
                                    items: [
                                        {
                                            xtype: 'container',
                                            flex: 1,
                                            items: [
                                                {
                                                    xtype: 'textfield',
                                                    fieldLabel: 'Label'
                                                },
                                                {
                                                    xtype: 'textfield',
                                                    fieldLabel: 'Label'
                                                }
                                            ]
                                        },
                                        {
                                            xtype: 'container',
                                            flex: 1,
                                            items: [
                                                {
                                                    xtype: 'textfield',
                                                    fieldLabel: 'Label'
                                                },
                                                {
                                                    xtype: 'textfield',
                                                    fieldLabel: 'Label'
                                                }
                                            ]
                                        },
                                        {
                                            xtype: 'container',
                                            flex: 1,
                                            items: [
                                                {
                                                    xtype: 'textfield',
                                                    fieldLabel: 'Label'
                                                },
                                                {
                                                    xtype: 'checkboxfield',
                                                    boxLabel: 'Box Label',
                                                    boxLabelAlign: 'before'
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    xtype: 'gridpanel',
                                    padding: '10 0',
                                    autoScroll: true,
                                    bodyBorder: false,
                                    preventHeader: true,
                                    title: 'PaymentsGrid',
                                    titleCollapse: true,
                                    store: 'PaymentStore',
                                    flex: 1,
                                    columns: [
                                        {
                                            xtype: 'gridcolumn',
                                            dataIndex: 'string',
                                            text: 'String'
                                        },
                                        {
                                            xtype: 'numbercolumn',
                                            dataIndex: 'number',
                                            text: 'Number'
                                        },
                                        {
                                            xtype: 'datecolumn',
                                            dataIndex: 'date',
                                            text: 'Date'
                                        },
                                        {
                                            xtype: 'booleancolumn',
                                            dataIndex: 'bool',
                                            text: 'Boolean'
                                        }
                                    ],
                                    viewConfig: {

                                    }
                                }
                            ]
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});