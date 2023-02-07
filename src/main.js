import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router/index.js";
import "bootstrap/dist/css/bootstrap.min.css";
/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import {
  faPenToSquare,
  faVolumeControlPhone,
  faHeadphones,
} from "@fortawesome/free-solid-svg-icons";

/* add icons to the library */
library.add(faVolumeControlPhone);
library.add(faPenToSquare);
library.add(faHeadphones);

const app = createApp(App);
app.use(router);
app.use(createPinia());
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
// createApp(App).use(router, createPinia()).mount("#app");
