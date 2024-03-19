Ext.define('CoolStuffExt.store.Menu',{
    extend:'Ext.data.TreeStore',
    alias:'store.menu',
    root: {
        text: 'Root',
        expanded: true,
        children: [
            {
                text: 'One',
                iconCls:'fa-lock',
                children:[
                    
                    {
                        text: 'Comment',
                        iconCls: 'fa fa-comment',
                        className:'commentgrid',
                        leaf: true
                    },
                    {
                        text: 'Students',
                        iconCls: 'fa fa-address-book',
                        leaf: true,
                        className: 'studentgrid'
                      
                    }, 
                    {
                        text: 'Companies',
                        iconCls: 'fa fa-building',
                        leaf: true,
                        className: 'companygrid'
                        
                    },
                    {
                        text: 'TrialBalance',
                        iconCls: 'fa fa-building',
                        leaf: true,
                        className: 'trialbalance'
                        
                    },
                   
                ]

            },
            {
                text: 'Static Data',
                iconCls:'fa fa-database fa-lg',
                children: [
                    {
                        text:'Users',
                        iconCls:'fa fa-user',
                        className:'users',
                        leaf:true
                    },
                    {
                        text: 'Posts',
                        iconCls: 'fa fa-book',
                        className:'posts',
                        leaf: true
                    },
                    {
                        text: 'Albums',
                        iconCls: 'fa fa-address-card',
                        className:'albums',
                        leaf: true
                    },
                    {
                        text: 'Todos',
                        iconCls: 'fa fa-list-ul',
                        className:'todos',
                        leaf: true
                    }
                    
                ]

            },
            {
                text: 'Review',
                iconCls:'fa fa-database fa-lg',
                children: [
                    {
                        text: 'Review Panel',
                        iconCls: 'fa fa-users',
                        className: 'reviewpanel',
                        leaf: true
                    }

                ]

            },

        ]
    }

})