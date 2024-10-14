import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
	faUser,
	faHome,
	faSearch,
	faEnvelope,
	faLock,
} from "@fortawesome/free-solid-svg-icons";
import {
	faGoogle,
	faFacebook,
	faApple,
} from "@fortawesome/free-brands-svg-icons";

import "@fortawesome/fontawesome-svg-core/styles.css";
import { defineNuxtPlugin } from "nuxt/app";

library.add(
	faUser,
	faHome,
	faSearch,
	faGoogle,
	faFacebook,
	faApple,
	faEnvelope,
	faLock
);

export default defineNuxtPlugin((nuxtApp) => {
	nuxtApp.vueApp.component("font-awesome-icon", FontAwesomeIcon);
});
