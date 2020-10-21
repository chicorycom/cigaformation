import Vue from 'vue'
import store from '~/store'
import router from '~/router';
import { Laue } from 'laue';
import App from './components/App'
import i18n from "./plugins/i18n";

//import io from 'socket.io-client';

import '~/plugins'
import '~/components'

Vue.use(Laue);

const createContaine = () => {
    const elem = document.createElement('div');
    elem.id = 'chicorycomContainer';
    document.body.appendChild(elem);
    return elem;
};

const el = createContaine();

//Vue.prototype.$datas = JSON.parse(document.body.dataset.page);
new Vue({
    i18n,
    store,
    router,
    ...App
}).$mount(el);



