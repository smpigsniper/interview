import "bootstrap/dist/css/bootstrap.css"

import { createApp } from 'vue'
import App from './App.vue'
import VueGoogleMapsPlace from '@fawmi/vue-google-maps'
import Vue3EasyDataTable from 'vue3-easy-data-table';
import 'vue3-easy-data-table/dist/style.css';

createApp(App).use(VueGoogleMapsPlace, {
    load: {
        key: 'AIzaSyBkZgUkbQZb2MbTLLZVrG6wxBXLWpei7as',
        libraries: "places"
    },
}).component('EasyDataTable', Vue3EasyDataTable).mount('#app')

import "bootstrap/dist/js/bootstrap.js"