import { createApp } from 'vue';
import App from './App.vue';
// import router from './router';
import PrimeVue from 'primevue/config';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Password from 'primevue/password';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import 'primevue/resources/primevue.min.css';
import 'primevue/resources/themes/saga-blue/theme.css';

const app = createApp(App).
            //   use(router).
              use(PrimeVue, { 
                  ripple: true,
                  locale: {
                      weak: "Svagt",
                      medium: "Medium",
                      strong: "Starkt"
                  }
             });

app.component('InputText', InputText);
app.component('Button', Button);
app.component('Password', Password);

app.mount("#app");
