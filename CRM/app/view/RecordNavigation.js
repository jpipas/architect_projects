/*
 * File: app/view/RecordNavigation.js
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

Ext.define('JavisERP.view.RecordNavigation', {
    extend: 'Ext.toolbar.Toolbar',
    alias: 'widget.recordnav',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'button',
                    id: 'back-arrow',
                    iconCls: 'ui-silk ui-silk-control-rewind',
                    tooltip: 'Prev. Record'
                },
                {
                    xtype: 'button',
                    id: 'next-arrow',
                    iconCls: 'ui-silk ui-silk-control-fastforward',
                    tooltip: 'Next Record'
                },
                {
                    xtype: 'button',
                    text: 'Edit'
                },
                {
                    xtype: 'button',
                    text: 'New'
                },
                {
                    xtype: 'tbseparator'
                },
                {
                    xtype: 'button',
                    itemId: 'ClientGrid',
                    text: 'List View'
                }
            ]
        });

        me.callParent(arguments);
    }

});