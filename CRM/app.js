/*
 * File: app.js
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

Ext.Loader.setConfig({
    enabled: true
});

Ext.application({
    requires: [
        'JavisERP.view.override.PortalPanel',
        'JavisERP.view.override.PortalColumn'
    ],

    models: [
        'Client',
        'Territory',
        'State',
        'Payment',
        'Contact',
        'Activity',
        'UserNote',
        'Role'
    ],
    stores: [
        'ClientStore',
        'TerritoryStore',
        'PaymentStore',
        'ContactStore',
        'ActivityStore',
        'UserNoteStore'
    ],
    views: [
        'AppViewport',
        'NavBar',
        'ContentCards',
        'Activities',
        'RecordNavigation',
        'ClientGrid',
        'TerritoryGrid',
        'ClientRecord',
        'ContentPanel',
        'Portlet',
        'PortalPanel',
        'PortalColumn',
        'ContactGrid'
    ],
    autoCreateViewport: true,
    name: 'JavisERP',
    controllers: [
        'AppController',
        'MainNavController',
        'RecordNavController',
        'ClientGridController'
    ]
});
