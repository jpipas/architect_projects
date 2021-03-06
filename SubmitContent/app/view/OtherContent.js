/*
 * File: app/view/OtherContent.js
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

Ext.define('SubmitContent.view.OtherContent', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.otherContent',

    id: 'other_content_panel',
    itemId: 'othercontentpanel',
    autoDestroy: false,
    layout: {
        align: 'stretch',
        type: 'vbox'
    },
    title: 'All other Content & Photos',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            defaults: {
                labelAlign: 'top',
                padding: 10
            },
            items: [
                {
                    xtype: 'combobox',
                    flex: 1,
                    id: 'publication_id',
                    itemId: 'publication_id',
                    name: 'publication_id',
                    fieldLabel: 'Choose Your Publication',
                    labelStyle: 'font-weight:bold',
                    allowBlank: false,
                    emptyText: 'Select a Publication...',
                    displayField: 'name',
                    store: 'Publication',
                    valueField: 'id'
                },
                {
                    xtype: 'label',
                    flex: 1,
                    margin: '0 10',
                    padding: 10,
                    style: '{\n    font-weight:bold\n}',
                    text: 'Select Type of Classified(s):'
                },
                {
                    xtype: 'fieldcontainer',
                    flex: 1,
                    height: 120,
                    width: 400,
                    defaults: {
                        labelAlign: 'top',
                        padding: 10
                    },
                    layout: {
                        type: 'column'
                    },
                    items: [
                        {
                            xtype: 'checkboxgroup',
                            columnWidth: 0.5,
                            margin: '0 0 0 10',
                            layout: {
                                align: 'stretch',
                                type: 'vbox'
                            },
                            fieldLabel: 'Resident Features',
                            labelStyle: 'text-decoration:underline',
                            items: [
                                {
                                    xtype: 'checkboxfield',
                                    name: 'business_feature',
                                    boxLabel: 'Business Feature',
                                    uncheckedValue: 'off'
                                },
                                {
                                    xtype: 'checkboxfield',
                                    name: 'family_feature',
                                    boxLabel: 'Family Feature',
                                    uncheckedValue: 'off'
                                },
                                {
                                    xtype: 'checkboxfield',
                                    name: 'pet_feature',
                                    boxLabel: 'Pet Feature',
                                    uncheckedValue: 'off'
                                },
                                {
                                    xtype: 'checkboxfield',
                                    name: 'neighborhood_welcome',
                                    boxLabel: 'Welcome to the Neighborhood Feature',
                                    uncheckedValue: 'off'
                                }
                            ]
                        },
                        {
                            xtype: 'checkboxgroup',
                            columnWidth: 0.5,
                            margin: '0 0 0 10',
                            layout: {
                                align: 'stretch',
                                type: 'vbox'
                            },
                            fieldLabel: 'Homeowner Association',
                            labelStyle: 'text-decoration:underline',
                            items: [
                                {
                                    xtype: 'checkboxfield',
                                    name: 'ceo_letters',
                                    boxLabel: 'President & Committee Letters',
                                    uncheckedValue: 'off'
                                },
                                {
                                    xtype: 'checkboxfield',
                                    name: 'news_events',
                                    boxLabel: 'News & Special Dates/Events',
                                    uncheckedValue: 'off'
                                },
                                {
                                    xtype: 'checkboxfield',
                                    name: 'notices_reminders',
                                    boxLabel: 'Important Notices & Covenant Reminders',
                                    uncheckedValue: 'off'
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'checkboxgroup',
                    flex: 1,
                    margin: '0 0 0 10',
                    layout: {
                        align: 'stretch',
                        type: 'vbox'
                    },
                    fieldLabel: 'Other Article, Photos or Postings Submissions',
                    labelStyle: 'text-decoration:underline',
                    items: [
                        {
                            xtype: 'checkboxfield',
                            name: 'vacation',
                            boxLabel: 'Vacation, Wedding Photos & Announcements',
                            uncheckedValue: 'off'
                        },
                        {
                            xtype: 'checkboxfield',
                            name: 'groups',
                            boxLabel: 'Subdivision Groups: Book Club, Bunko, Women\'s Group, etc.',
                            uncheckedValue: 'off'
                        },
                        {
                            xtype: 'checkboxfield',
                            name: 'events',
                            boxLabel: 'Events: School, Charities, Community & Organizations',
                            uncheckedValue: 'off'
                        },
                        {
                            xtype: 'checkboxfield',
                            name: 'accomplishments',
                            boxLabel: 'Accomplishments: School, Sports & Extracurricular Activities',
                            uncheckedValue: 'off'
                        },
                        {
                            xtype: 'checkboxfield',
                            name: 'miscellaneous',
                            boxLabel: 'Miscellaneous',
                            uncheckedValue: 'off'
                        }
                    ]
                },
                {
                    xtype: 'label',
                    flex: 1,
                    hidden: true,
                    html: '<div class=\'message_box\'>NOTE: Added your file(s) first by clicking on the \'Add\' button.  Then select your file to upload. Repeat for each file you wish to submit. Finally, when you\'ve added all your file(s), click on the \'Upload\' button to send your file(s) to Neighborhood Communications.</div>',
                    margin: '0 10'
                },
                {
                    xtype: 'fieldcontainer',
                    flex: 1,
                    height: 10,
                    id: 'file_upload',
                    itemId: 'file_upload',
                    margin: 10,
                    padding: 10
                },
                {
                    xtype: 'textareafield',
                    flex: 1,
                    height: 140,
                    itemId: 'special_instructions',
                    margin: 10,
                    padding: '0 10',
                    name: 'special_instructions',
                    fieldLabel: 'Special Instructions'
                }
            ]
        });

        me.callParent(arguments);
    }

});