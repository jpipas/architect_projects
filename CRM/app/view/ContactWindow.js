/*
 * File: app/view/ContactWindow.js
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

Ext.define('JavisERP.view.ContactWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.contactwindow',

    height: 250,
    hidden: false,
    width: 400,
    layout: {
        type: 'fit'
    },
    closeAction: 'hide',
    title: 'New Contact',
    modal: true,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'form',
                    itemId: 'ContactForm',
                    bodyPadding: 10,
                    title: '',
                    dockedItems: [
                        {
                            xtype: 'toolbar',
                            dock: 'top',
                            items: [
                                {
                                    xtype: 'button',
                                    iconCls: 'ui-silk ui-silk-disk',
                                    text: 'Save'
                                },
                                {
                                    xtype: 'button',
                                    text: 'Cancel',
                                    listeners: {
                                        click: {
                                            fn: me.onButtonClick,
                                            scope: me
                                        }
                                    }
                                }
                            ]
                        }
                    ],
                    items: [
                        {
                            xtype: 'textfield',
                            anchor: '100%',
                            itemId: 'name',
                            name: 'name',
                            fieldLabel: 'Name'
                        },
                        {
                            xtype: 'textfield',
                            anchor: '100%',
                            itemId: 'email_address',
                            name: 'email_address',
                            fieldLabel: 'Email Address'
                        },
                        {
                            xtype: 'textfield',
                            anchor: '100%',
                            itemId: 'cell_phone',
                            name: 'cell_phone',
                            fieldLabel: 'Phone Number'
                        },
                        {
                            xtype: 'combobox',
                            anchor: '100%',
                            itemId: 'role',
                            name: 'role_id',
                            fieldLabel: 'Role',
                            displayField: 'description',
                            store: 'ContactRoleStore'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    },

    onButtonClick: function(button, e, options) {
        console.log(button);
    }

});