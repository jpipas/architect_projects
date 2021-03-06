/*
 * File: app/view/hrw3.js
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

Ext.define('SubmitContent.view.hrw3', {
    extend: 'Ext.form.Panel',
    alias: 'widget.contentForm',

    height: 600,
    id: 'contentForm',
    itemId: 'contentForm',
    minHeight: 500,
    width: 600,
    autoScroll: true,
    bodyPadding: 10,
    title: 'Submit New Content',
    standardSubmit: true,
    url: 'server/web/index.php/submitcontent',

    initComponent: function() {
        var me = this;

        me.initialConfig = Ext.apply({
            standardSubmit: true,
            url: 'server/web/index.php/submitcontent'
        }, me.initialConfig);

        Ext.applyIf(me, {
            defaults: {
                labelAlign: 'top',
                padding: 10
            },
            items: [
                {
                    xtype: 'fieldset',
                    defaults: {
                        labelAlign: 'top',
                        padding: 10
                    },
                    layout: {
                        align: 'stretch',
                        type: 'vbox'
                    },
                    title: 'Information',
                    items: [
                        {
                            xtype: 'fieldcontainer',
                            flex: 1,
                            margins: '0',
                            margin: 0,
                            padding: '0 10',
                            defaults: {
                                labelAlign: 'top',
                                padding: 10
                            },
                            layout: {
                                type: 'column'
                            },
                            fieldLabel: 'Label',
                            hideLabel: true,
                            labelAlign: 'top',
                            items: [
                                {
                                    xtype: 'textfield',
                                    columnWidth: 0.5,
                                    itemId: 'first_name',
                                    name: 'first_name',
                                    fieldLabel: 'First Name',
                                    labelAlign: 'top',
                                    labelStyle: 'color:#FF7F44',
                                    allowBlank: false
                                },
                                {
                                    xtype: 'textfield',
                                    columnWidth: 0.5,
                                    itemId: 'last_name',
                                    name: 'last_name',
                                    fieldLabel: 'Last Name',
                                    labelAlign: 'top',
                                    labelStyle: 'color:#FF7F44',
                                    allowBlank: false
                                }
                            ]
                        },
                        {
                            xtype: 'textfield',
                            flex: 1,
                            itemId: 'address1',
                            margin: '0 10',
                            name: 'address1',
                            fieldLabel: 'Address'
                        },
                        {
                            xtype: 'textfield',
                            flex: 1,
                            itemId: 'address2',
                            name: 'address2',
                            fieldLabel: 'Address',
                            hideLabel: true
                        },
                        {
                            xtype: 'fieldcontainer',
                            flex: 1,
                            width: 565,
                            defaults: {
                                labelAlign: 'top',
                                padding: 10
                            },
                            layout: {
                                type: 'column'
                            },
                            fieldLabel: 'Label',
                            hideLabel: true,
                            items: [
                                {
                                    xtype: 'textfield',
                                    columnWidth: 0.36,
                                    itemId: 'city',
                                    name: 'city',
                                    fieldLabel: 'City'
                                },
                                {
                                    xtype: 'combobox',
                                    columnWidth: 0.36,
                                    itemId: 'state_id',
                                    name: 'state_id',
                                    fieldLabel: 'State',
                                    displayField: 'name',
                                    hiddenName: 'state_id',
                                    store: 'State',
                                    typeAhead: true,
                                    valueField: 'name'
                                },
                                {
                                    xtype: 'textfield',
                                    columnWidth: 0.25,
                                    id: 'postal_code',
                                    itemId: 'postal_code',
                                    name: 'postal_code',
                                    fieldLabel: 'Zip Code',
                                    labelAlign: 'top',
                                    labelStyle: 'color:#FF7F44',
                                    allowBlank: false,
                                    maxLength: 5,
                                    minLength: 5
                                }
                            ]
                        },
                        {
                            xtype: 'fieldcontainer',
                            flex: 1,
                            margins: '0',
                            margin: 0,
                            padding: '0 10',
                            defaults: {
                                labelAlign: 'top',
                                padding: 10
                            },
                            layout: {
                                type: 'column'
                            },
                            fieldLabel: 'Label',
                            hideLabel: true,
                            labelAlign: 'top',
                            items: [
                                {
                                    xtype: 'textfield',
                                    columnWidth: 0.5,
                                    itemId: 'email_address',
                                    name: 'email_address',
                                    fieldLabel: 'Email Address',
                                    labelAlign: 'top',
                                    labelStyle: 'color:#FF7F44',
                                    allowBlank: false,
                                    vtype: 'email',
                                    vtypeText: 'Invalid email.  Please put in the form of user@domain.com'
                                },
                                {
                                    xtype: 'textfield',
                                    columnWidth: 0.5,
                                    id: 'phone_number',
                                    itemId: 'phone_number',
                                    name: 'phone_number',
                                    fieldLabel: 'Phone Number',
                                    labelAlign: 'top',
                                    labelStyle: 'color:#FF7F44',
                                    allowBlank: false
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'fieldset',
                    itemId: 'contentPane',
                    title: 'Content Information',
                    items: [
                        {
                            xtype: 'label',
                            text: 'Please select the type of content and then scroll down and continue filling out this form.'
                        },
                        {
                            xtype: 'radiogroup',
                            disabled: true,
                            id: 'contentType',
                            margin: '10 0',
                            fieldLabel: 'Type of Content',
                            allowBlank: false,
                            items: [
                                {
                                    xtype: 'radiofield',
                                    itemId: 'classifieds',
                                    name: 'contentType',
                                    boxLabel: 'Classified Ads & Job Postings',
                                    inputValue: 'classified'
                                },
                                {
                                    xtype: 'radiofield',
                                    itemId: 'other_content',
                                    name: 'contentType',
                                    boxLabel: 'All other Content & Photos',
                                    inputValue: 'other'
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'textfield',
                    anchor: '100%',
                    hidden: true,
                    name: 'content_coordinator'
                },
                {
                    xtype: 'textfield',
                    anchor: '100%',
                    hidden: true,
                    id: 'publication_name',
                    itemId: 'publication_name',
                    name: 'publication_name'
                },
                {
                    xtype: 'textareafield',
                    anchor: '100%',
                    hidden: true,
                    name: 'uploadedFiles'
                }
            ],
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'bottom',
                    items: [
                        {
                            xtype: 'tbseparator',
                            flex: 4
                        },
                        {
                            xtype: 'button',
                            flex: 1,
                            formBind: true,
                            id: 'submitcontent',
                            itemId: 'submitcontent',
                            text: 'Submit  Content'
                        },
                        {
                            xtype: 'button',
                            flex: 1,
                            id: 'clearForm',
                            itemId: 'clearForm',
                            text: 'Clear'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});