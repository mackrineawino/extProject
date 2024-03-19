/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'CoolStuffExt.Application',

    name: 'CoolStuffExt',

    requires: [
        // This will automatically load all classes in the CoolStuffExt namespace
        // so that application classes do not need to require each other.
        'CoolStuffExt.*'
    ],

    // The name of the initial view to create.
    //mainView: 'CoolStuffExt.view.main.Main'
});
