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

const filter = function(text, length, clamp){
    clamp = clamp || '...';
    const node = document.createElement('div');
    node.innerHTML = text;
    const content = node.textContent;
    return content.length > length ? content.slice(0, length) + clamp : content;
};

Vue.filter('truncate', filter);

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



