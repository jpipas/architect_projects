/*
 * File: app/controller/ClientController.js
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

Ext.define('JavisERP.controller.ClientController', {
    extend: 'Ext.app.Controller',

    refs: [
        {
            ref: 'clientGrid',
            selector: 'clientgrid'
        },
        {
            ref: 'contentCards',
            selector: 'contentCards'
        },
        {
            ref: 'clientRecord',
            selector: 'clientrecord'
        },
        {
            ref: 'contactWindow',
            selector: 'contactwindow'
        },
        {
            ref: 'contractGrid',
            selector: 'contractgrid'
        },
        {
            ref: 'contactGrid',
            selector: 'contactgrid'
        },
        {
            ref: 'publicationGrid',
            selector: 'publicationgrid'
        },
        {
            ref: 'clientPortlet',
            selector: 'clientportlet'
        },
        {
            ref: 'contractWindow',
            selector: 'contractwindow'
        },
        {
            ref: 'contractGrid',
            selector: 'contractgrid'
        }
    ],

    onNewContactClick: function(target) {
        this.application.fireEvent("addContact",target);
    },

    onActionColumnClick: function(grid, col, row) {
        this.application.fireEvent('clientRecordChange',grid,col,row);
    },

    onNewContractClick: function(target) {
        this.application.fireEvent("addContract",target);
    },

    init: function(application) {
        me = this;
        me.contactWindow = null;
        me.contractWindow = null;

        me.application.on({
            clientRecordChange: me.changeClientRecord,
            scope: me
        });

        me.application.on({
            addContact: me.addContact,
            scope:me
        });

        me.application.on({
            addContract: me.addContract,
            scope:me
        });

        this.control({
            "clientrecord toolbar button[itemId=newcontact]": {
                click: this.onNewContactClick
            },
            "clientgrid #actions, clientportlet #actions": {
                click: this.onActionColumnClick
            },
            "clientrecord toolbar button[itemId=newcontract]": {
                click: this.onNewContractClick
            }
        });
    },

    addContact: function() {
        if(!me.contactWindow){
            me.contactWindow = new JavisERP.view.ContactWindow();
            console.log("Need a new window!");
        }
        if(me.contactWindow.isVisible()){
            me.contactWindow.hide();
        } else {
            me.contactWindow.show();
        }
    },

    changeClientRecord: function(grid, col, row, record) {
        this.getContentCards().getLayout().setActiveItem('ClientRecord');
        var form = this.getClientRecord().getForm();
        form.loadRecord(this.getClientGrid().getStore().getAt(row));
        var contacts = this.getContactGrid().getStore().load();
        var publications = this.getPublicationGrid().getStore().load();
        var contracts = this.getContractGrid().getStore().load();
    },

    addContract: function() {
        if(!me.contractWindow){
            me.contractWindow = new JavisERP.view.ContractWindow();
            console.log("Need a new window!");
        }
        if(me.contractWindow.isVisible(true)){
            me.contractWindow.hide();
        } else {
            me.contractWindow.show();
        }
    }

});
