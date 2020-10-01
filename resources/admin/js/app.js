window.Vue = require('vue');
import { Laue } from 'laue';
import App from './App.vue';
import router from './router';
//import io from 'socket.io-client';


Vue.use(Laue);

const createContaine = () => {
    const elem = document.createElement('div');
    elem.id = 'chicorycomContainer';
    document.body.appendChild(elem);
};

createContaine();

//Vue.prototype.$datas = JSON.parse(document.body.dataset.page);
new Vue({
    router,
    render: h => h(App)
}).$mount('#chicorycomContainer');



