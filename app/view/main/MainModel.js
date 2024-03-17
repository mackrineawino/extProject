/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('CoolStuffExt.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',

    data: {
        name: 'MySQL',

        footer: '&copy Awino '+new Date().getFullYear(),
    }

});
