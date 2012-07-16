/*
 * File: app/view/ContactGrid.js
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

Ext.define('JavisERP.view.ContactGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.contactgrid',

    border: 0,
    preventHeader: true,
    title: 'My Grid Panel',
    forceFit: true,
    store: 'ContactStore',
    columnLines: false,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            viewConfig: {

            },
            columns: [
                {
                    xtype: 'actioncolumn',
                    items: [
                        {
                            icon: 'resources/icons/vcard.png',
                            tooltip: 'View'
                        }
                    ]
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'id',
                    text: 'ID'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'name',
                    text: 'Name'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'email_address',
                    text: 'Email Address'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'cell_phone',
                    text: 'Cell Phone'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'role',
                    text: 'Role'
                }
            ]
        });

        me.callParent(arguments);
    }

});