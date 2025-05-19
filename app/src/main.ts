// Styling
import "@/assets/css/main.css";

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const goBadgerLight = {
	dark: false,
	colors: {
		primary: "#5B9BD5",
		secondary: "#F5F1EA",
		accent: "#F8C471",
		background: "#F5F1EA",
		surface: "#FFFFFF",
		error: "#D32F2F",
		info: "#1976D2",
		success: "#388E3C",
		warning: "#FFA000",
		onPrimary: "#FFFFFF",
		onSecondary: "#333333",
		onBackground: "#333333",
		onSurface: "#333333",
	},
};

const goBadgerDark = {
	dark: true,
	colors: {
		primary: "#5B9BD5",
		secondary: "#F8C471",
		accent: "#F5F1EA",
		background: "#121212",
		surface: "#1E1E1E",
		error: "#EF5350",
		info: "#64B5F6",
		success: "#81C784",
		warning: "#FFD54F",
		onPrimary: "#FFFFFF",
		onSecondary: "#1E1E1E",
		onBackground: "#E0E0E0",
		onSurface: "#F5F5F5",
	},
};

const vuetify = createVuetify({
	components,
	directives,
	theme: {
		defaultTheme: "goBadgerDark",
		themes: {
			goBadgerLight,
			goBadgerDark,
		},
	},
});

// Make the app.

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.use(vuetify);
app.mount("#app");
