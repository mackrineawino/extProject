Ext.define('CoolStuffExt.view.login.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',

    init: function () {
        let me = this,
            view = me.getView(),
            vm = me.getViewModel(),
            refs = me.getReferences(),
            button = refs['lng-btn'];

        var lang = localStorage ? (localStorage.getItem('user-lang') ||
            'en') : 'en';
        button.setIconCls(lang);
        if (lang == 'en') {
            button.setText('English');
        } else if (lang == 'es') {
            button.setText('Español');
        } else {
            button.setText('Português');
        }
    },
     onLoginClick: function () {
        var form = this.lookupReference('form').getForm();
        var loginButton = this.lookupReference('loginButton');
        if (form.isValid()) {
            var token = 'dhggggggggggggggggggggggggggggggggggggggggggg';

            localStorage.setItem('MyAppAuthToken', token);
            this.getView().destroy();
            Ext.widget('app-main');
            Ext.util.History.add('home')

        } else {
            Ext.util.History.add('login');
            Ext.Msg.alert('Login Failed', 'Invalid username or password');
        }
    

},
    
onMenuItemClick: function (item, e, options) {
    var menu = this.getView();
    localStorage.setItem("user-lang", item.iconCls);
    window.location.reload();
}
});

