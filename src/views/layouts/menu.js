const menu = [
    {
        key: '/index',
        title: '首页',
        icon: 'home',
        extra: {

        }
    },
    {
        key: '/foodCenter',
        title: '餐食中心',
        icon: 'appstore',
        extra: {
            
        },
        subs: [
            {
                key: '/foodCenter/eatingManage',
                title: '用餐管理',
                icon: '',
                extra: {

                }
            },
            {
                key: '/foodCenter/eatingManage/publishOrder',
                title: '发布预约',
                extra : {
                    fKey: '/foodCenter/eatingManage',
                    fTitle: '用餐管理',
                    hidden: true
                },
                icon: '',
                
            },
            {
                key: '/foodCenter/foodManage',
                title: '菜品管理',
                icon: '',
                extra: {

                }
            },
            {
                key: '/foodCenter/menuManage',
                title: '菜单管理',
                icon: '',
                extra: {
                    
                }
            }
        ]
    },
    {
        key: '/financialCenter',
        title: '财务中心',
        icon: 'bulb',
        extra: {
            
        },
        subs: [
            {
                key: '/financialCenter/consumeRecord',
                title: '消费记录',
                icon: '',
                extra: {
                    
                }
            },
            {
                key: '/financialCenter/exchargeManage',
                title: '充值管理',
                icon: '',
                extra: {
                    
                }
            }
        ]
    },
    {
        key: '/purchaseCenter',
        title: '采购中心',
        icon: 'form',
        extra: {
            
        },
        subs: [
            {
                key: '/purchaseCenter/manage',
                title: '采购管理',
                icon: '',
                extra: {
                    
                }
            },
            {
                key: '/purchaseCenter/config',
                title: '采购配置',
                icon: '',
                extra: {
                    
                }
            }
        ]
    },
    {
        key: '/systemSetting',
        title: '系统设置',
        icon: 'bars',
        extra: {
            
        },
        subs: [
            {
                key: '/systemSetting/authSetting',
                title: '权限设置',
                icon: '',
                extra: {
                    
                }
            },
            {
                key: '/systemSetting/typeSetting',
                title: '类型设置',
                icon: '',
                extra: {
                    
                }
            },          
            {
                key: '/systemSetting/changeFreeSetting',
                title: '扣费设置',
                icon: '',
                extra: {
                    
                }
            },              
            {
                key: '/systemSetting/timesSetting',
                title: '次数设置',
                icon: '',
                extra: {
                    
                }
            },
            {
                key: '/systemSetting/publicNumberSetting',
                title: '公众号设置',
                icon: '',
                extra: {
                    
                }
            }
        ]
    }
]

export default menu