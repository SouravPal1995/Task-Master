import { createApp } from "vue";
import App from "./App.vue";
import EditForm from "./components/EditForm.vue"


let app = createApp(App);
app.component("edit-form", EditForm);
app.mount("#app");