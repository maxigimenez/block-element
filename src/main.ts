import Vue from 'vue';
import vueCustomElement from 'vue-custom-element';

import App from './App.vue';

Vue.use(vueCustomElement);
Vue.config.productionTip = false;

/* eslint-disable @typescript-eslint/no-explicit-any */
Vue.customElement('block-element', (App as any).options);
