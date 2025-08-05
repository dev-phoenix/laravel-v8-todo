require('./bootstrap');

// import Vue from 'vue';
import { createApp } from 'vue';

import App from './vue/app.vue';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import icons and add them to the Library */
import { faUserSecret, faThumbsUp, faPlusSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'

library.add(faUserSecret, faThumbsUp, faPlusSquare, faTrash, faFacebook)

// const app = new Vue({
//     el: '#app',
//     components: { App }
// });


const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app');
