/*
 * File: app/view/AdvertisementGrid.js
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

Ext.define('JavisERP.view.AdvertisementGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.advertisementgrid',

    height: 250,
    autoScroll: true,
    titleCollapse: false,
    forceFit: true,
    hideHeaders: false,
    store: 'AdvertisementStore',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            viewConfig: {

            },
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'top',
                    items: [
                        {
                            xtype: 'button',
                            iconCls: 'ui-silk ui-silk-layout-add',
                            text: 'New Advertisement',
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
            columns: [
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'id',
                    text: 'ID'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'publication.name',
                    text: 'Publication'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'adType.name',
                    text: 'Ad Type'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'adSize.name',
                    text: 'Ad Size'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'created_at',
                    text: 'Created On'
                },
                {
                    xtype: 'gridcolumn',
                    hidden: true,
                    dataIndex: 'modified_at',
                    hideable: false,
                    text: 'Last Modified'
                }
            ]
        });

        me.callParent(arguments);
    },

    onButtonClick: function(button, e, options) {

        var adWindow = new JavisERP.view.AdvertisementWindow();

        var comboFieldBox = Ext.create('JavisERP.view.ComboFieldBox',
            {
                xtype: 'ComboFieldBox',
                fieldLabel: 'Publication(s)',
                displayField: 'description',
                emptyText: 'select a publication...',
                descField: 'id',
                valueField: 'id',
                store: 'PublicationStore',
                queryMode: 'local',
                height:250,
                anchor:'95%',
                typeAhead: true,
                name: 'publicationlist'
            });

        var container = adWindow.query('fieldcontainer > #adwindow_col1');
        container[0].insert(1,comboFieldBox);
        adWindow.show();
    }

});