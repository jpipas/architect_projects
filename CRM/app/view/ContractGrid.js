/*
 * File: app/view/ContractGrid.js
 *
 * This file was generated by Sencha Architect version 2.1.0.
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

Ext.define('JavisERP.view.ContractGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.contractgrid',

    preventHeader: true,
    title: 'ContractsGrid',
    forceFit: true,
    store: 'ContractStore',

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
                            iconCls: 'ui-silk ui-silk-folder-edit',
                            tooltip: 'Edit Contract'
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
                    dataIndex: 'contract_number',
                    flex: 2,
                    text: 'Contract No.'
                },
                {
                    xtype: 'gridcolumn',
                    defaultWidth: 160,
                    dataIndex: 'client_name',
                    flex: 4,
                    text: 'Client Name'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'total_sales',
                    flex: 1,
                    text: 'Total Sales Amt.'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'discount',
                    flex: 1,
                    text: 'Discount'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'subtotal',
                    flex: 1,
                    text: 'Subtotal'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'first_month_payment',
                    flex: 1,
                    text: 'First Months Payment'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'monthly_payment',
                    flex: 1,
                    text: 'Monthly Payment'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'payment_type_id',
                    flex: 2,
                    text: 'Payment Type'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'sale_date',
                    flex: 1,
                    text: 'Sale Date'
                }
            ],
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'top',
                    items: [
                        {
                            xtype: 'button',
                            icon: 'resources/icon/folder_add.png',
                            text: 'New Contract'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});