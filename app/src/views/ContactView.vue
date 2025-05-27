<!-- ****************** Script ****************** -->
<script setup lang="ts">
import { ref } from "vue";

const form = ref({
	firstName: "",
	lastName: "",
	email: "",
	company: "",
	message: "",
	scheduleDemo: false,
});

const success = ref(false);
const error = ref(false);

// Note: this is NOT considered sensitive! This is considered public.
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xwpozrky";

async function submitForm() {
	try {
		const response = await fetch(FORMSPREE_ENDPOINT, {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				firstName: form.value.firstName,
				lastName: form.value.lastName,
				email: form.value.email,
				company: form.value.company,
				message: form.value.message,
				scheduleDemo: form.value.scheduleDemo,
			}),
		});

		if (response.ok) {
			success.value = true;
			error.value = false;
			form.value = {
				firstName: "",
				lastName: "",
				email: "",
				company: "",
				message: "",
				scheduleDemo: false,
			};
		} else {
			throw new Error("Submission failed");
		}
	} catch (err) {
		console.error(err);
		success.value = false;
		error.value = true;
	}
}
</script>

<!-- ****************** Template **************** -->
<template>
	<div class="mx-8">
		<v-container class="py-16" max-width="1200" style="height: 100vh">
			<v-row
				class="fill-height"
				justify="space-between"
				style="gap: 48px; margin-top: clamp(60px, 10%, 10%)"
			>
				<!-- Left Text -->
				<v-col cols="12" md="5" class="d-flex flex-column align-start">
					<h1 class="text-h4 font-weight-bold mb-6">Contact</h1>
					<p class="text-subtitle-1">
						Have questions or want to learn more about how Badger can help your event? Please fill
						out the contact form and one of our team members will get back to you soon.
						Alternatively, you can reach us at
						<a href="mailto:contact@gobadger.me">contact@gobadger.me</a>.
					</p>
					<p class="text-subtitle-1 mt-8">
						Our team is based out of California. We are available from 7 AM to 11 PM every day,
						including weekends.
					</p>
					<p class="text-subtitle-1 mt-8">
						At this time, we are unfortunately unable to provide support for events outside of the
						United States.
					</p>
				</v-col>

				<!-- Right Form -->
				<v-col cols="12" md="6">
					<v-form @submit.prevent="submitForm">
						<v-row dense>
							<v-col cols="12" sm="6">
								<v-text-field v-model="form.firstName" label="First Name" required />
							</v-col>
							<v-col cols="12" sm="6">
								<v-text-field v-model="form.lastName" label="Last Name" required />
							</v-col>
						</v-row>
						<v-text-field v-model="form.email" label="Email Address" type="email" required />
						<v-text-field v-model="form.company" label="Company" />
						<v-textarea v-model="form.message" label="Message" rows="5" required />
						<v-checkbox v-model="form.scheduleDemo" label="I want to schedule a demo." />
						<v-btn color="primary" type="submit" class="mt-4" large>Submit</v-btn>

						<v-alert v-if="success" type="success" class="mt-8">
							Thanks! Your message has been sent.
						</v-alert>
						<v-alert v-if="error" type="error" class="mt-8">
							Oops! Something went wrong. Please try again later.
						</v-alert>
					</v-form>
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>

<!-- ****************** Style ******************* -->
<style scoped lang="scss"></style>
