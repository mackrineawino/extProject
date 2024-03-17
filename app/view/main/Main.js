Ext.define('CoolStuffExt.view.main.Main', {
    extend: 'Ext.container.Container',
    xtype: 'app-main',

    requires: [
        
        'Ext.window.MessageBox',
        'CoolStuffExt.view.main.MainController',
        'CoolStuffExt.view.main.MainModel',
        
    ],

    controller: 'main',
    viewModel: 'main',
    plugins: 'viewport',

   

    layout: {
        type: 'border'
    },

    items: [{
        xtype: 'mainmenu',
        cls: 'main-menu-title',
        bind: {
            title: '{name}'
        },
        region: 'west',
        width: 250,
        split: true,
        collapsible: true, 
    },
      {
        region: 'center',
        xtype: 'mainpanel',
    },{
        region: 'south',
        xtype: 'appfooter',
    }, {
        region: 'north',
        xtype: 'appheader',
    }]
});
