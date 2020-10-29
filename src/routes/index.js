import loadable from '@/utils/loadable';

//首页
const Index = loadable(() => import(/* webpackChunkName: 'Index' */ '@/views/index'))

//餐食中心
const EatingManage = loadable(() => import(/* webpackChunkName: 'EatingManage' */ '@/views/foodCenter/eatingManage'))
const FoodManage = loadable(() => import(/* webpackChunkName: 'FoodManage' */ '@/views/foodCenter/foodManage'))
const MenuManage = loadable(() => import(/* webpackChunkName: 'MenuManage' */ '@/views/foodCenter/menuManage'))
const PublishOrder = loadable(() => import(/* webpackChunkName: 'MenuManage' */ '@/views/foodCenter/eatingManage/publishOrder/index.js'))
//财务中心
const ConsumeRecord = loadable(() => import(/* webpackChunkName: 'ConsumeRecord' */ '@/views/financialCenter/consumeRecord'))
const ExchargeManage = loadable(() => import(/* webpackChunkName: 'ExchargeManage' */ '@/views/financialCenter/exchargeManage'))

//采购管理
const PurchaseManage = loadable(() => import(/* webpackChunkName: 'PurchaseManage' */ '@/views/purchaseCenter/manage'))
const PurchaseConfig = loadable(() => import(/* webpackChunkName: 'PurchaseConfig' */ '@/views/purchaseCenter/config'))

//系统设置
const AuthSetting = loadable(() => import(/* webpackChunkName: 'AuthSetting' */ '@/views/systemSetting/authSetting'))
const TypeSetting = loadable(() => import(/* webpackChunkName: 'TypeSetting' */ '@/views/systemSetting/typeSetting'))
const ChangeFreSetting = loadable(() => import(/* webpackChunkName: 'ChangeFreSetting' */ '@/views/systemSetting/changeFreeSetting'))
const TimesSetting = loadable(() => import(/* webpackChunkName: 'TimesSetting' */ '@/views/systemSetting/timesSetting'))
const PublicNumberSetting = loadable(() => import(/* webpackChunkName: 'PublicNumberSetting' */ '@/views/systemSetting/publicNumberSetting'))
const routes = [
    {path: '/index', exact: true, name: '首页', component: Index},
    {path: '/foodCenter/eatingManage', exact: true, name: '用餐管理', component: EatingManage},
    {path: '/foodCenter/eatingManage/publishOrder', exact: true, name: '发布预约', component: PublishOrder},
    {path: '/foodCenter/foodManage', exact: true, name: '菜品管理', component: FoodManage},
    {path: '/foodCenter/menuManage', exact: true, name: '菜单管理', component: MenuManage},
    {path: '/financialCenter/consumeRecord', exact: true, name: '消费记录', component: ConsumeRecord},
    {path: '/financialCenter/exchargeManage', exact: true, name: '充值管理', component: ExchargeManage},
    {path: '/purchaseCenter/manage', exact: true, name: '采购管理', component: PurchaseManage},
    {path: '/purchaseCenter/config', exact: true, name: '采购配置', component: PurchaseConfig},
    {path: '/systemSetting/authSetting', exact: true, name: '权限设置', component: AuthSetting},
    {path: '/systemSetting/typeSetting', exact: true, name: '类型设置', component: TypeSetting},
    {path: '/systemSetting/changeFreeSetting', exact: true, name: '扣费设置', component: ChangeFreSetting},
    {path: '/systemSetting/timesSetting', exact: true, name: '次数设置', component: TimesSetting},
    {path: '/systemSetting/publicNumberSetting', exact: true, name: '公众号设置', component: PublicNumberSetting},
]

export default routes