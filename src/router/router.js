import App from '../App';
import Home from '../pages/Home';
import cellDemo from '../pages/demo/cellDemo';
import tabBarDemo from '../pages/demo/tabBarDemo';
import navBarDemo from '../pages/demo/navBarDemo';
import buttonDemo from '../pages/demo/xButtonDemo';
import switchDemo from '../pages/demo/xSwitchDemo';
import radioDemo from '../pages/demo/xRadioDemo';
import checkListDemo from '../pages/demo/checkListDemo';
import toastDemo from '../pages/demo/toastDemo';

export default [
    {
        path:'/',
        component:App,  // 顶层路由，对应index.html
        children: [     // 二级路由。对应App.vue
            { path:'/',component:Home },
            { path:'/demo',component:Home },

            //demo
            { path:'/demo/cell',component:cellDemo },
            { path:'/demo/tabBar',component:tabBarDemo },
            { path:'/demo/navBar',component:navBarDemo },
            { path:'/demo/button',component:buttonDemo },
            { path:'/demo/switch',component:switchDemo },
            { path:'/demo/radio',component:radioDemo },
            { path:'/demo/checkList',component:checkListDemo },
            { path:'/demo/toast',component:toastDemo },
            
        ]
    }
]