/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('CoolStuffExt.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',


    onLogout: function () {
        localStorage.removeItem('MyAppAuthToken');
        this.getView().destroy();
        Ext.widget('loginwindow');
        Ext.util.History.add('login');
    },

    routes: {
        'home': 'onHomeRoute',
    },

    onHomeRoute: function () {
        let mainPanel = this.getMainPanel();
        if (mainPanel) {
            mainPanel.setActiveTab(0)
        }
    },

    getMainPanel: function () {
        return Ext.ComponentQuery.query('mainpanel')[0];
    },
});
