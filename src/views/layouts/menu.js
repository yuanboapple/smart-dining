const menu = [
    {
        key: '/index',
        title: '首页',
        icon: 'home'
    },
    {
        key: '/foodCenter',
        title: '餐食中心',
        icon: 'appstore',
        subs: [
            {
                key: '/foodCenter/eatingManage',
                title: '用餐管理',
                icon: ''
            },
            {
                key: '/foodCenter/foodManage',
                title: '菜品管理',
                icon: ''
            },
            {
                key: '/foodCenter/menuManage',
                title: '菜单管理',
                icon: ''
            }
        ]
    },
    {
        key: '/financialCenter',
        title: '财务中心',
        icon: 'bulb',
        subs: [
            {
                key: '/financialCenter/consumeRecord',
                title: '消费记录',
                icon: ''
            },
            {
                key: '/financialCenter/exchargeManage',
                title: '充值管理',
                icon: ''
            }
        ]
    },
    {
        key: '/purchaseCenter',
        title: '采购中心',
        icon: 'form',
        subs: [
            {
                key: '/purchaseCenter/manage',
                title: '采购管理',
                icon: ''
            },
            {
                key: '/purchaseCenter/config',
                title: '采购配置',
                icon: ''
            }
        ]
    },
    {
        key: '/systemSetting',
        title: '系统设置',
        icon: 'bars',
        subs: [
            {
                key: '/systemSetting/authSetting',
                title: '权限设置',
                icon: ''
            },
            {
                key: '/systemSetting/typeSetting',
                title: '类型设置',
                icon: ''
            },          
            {
                key: '/systemSetting/changeFreeSetting',
                title: '扣费设置',
                icon: ''
            },              
            {
                key: '/systemSetting/timesSetting',
                title: '次数设置',
                icon: ''
            },
            {
                key: '/systemSetting/publicNumberSetting',
                title: '公众号设置',
                icon: ''
            }
        ]
    }
]

export default menu