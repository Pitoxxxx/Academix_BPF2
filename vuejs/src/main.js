//import createApp from Vue
import { createApp } from 'vue';

//import component App
import App from './App.vue';

//import config router
import router from './router'

//create App Vue
const app = createApp(App);

// import css
import '../src/assets/assets/css/styles.min.css'

// import image
import '../src/assets/assets/images/logos/dark-logo.svg';

// import chart
import '../src/assets/assets/libs/apexcharts/dist/apexcharts.min.js';

// import js
import '../src/assets/assets/libs/jquery/dist/jquery.min.js';

//gunakan "router" di Vue dengan plugin "use"
app.use(router);

app.mount('#app');