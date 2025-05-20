<!-- ****************** Script ****************** -->
<script setup lang="ts">
import { ref } from "vue";

const form = ref({
	firstName: "",
	lastName: "",
	email: "",
	company: "",
	message: "",
});

function submitForm() {
	console.log("Form submitted:", form.value);
	alert("Thanks for reaching out! We'll get back to you soon.");
	form.value = { firstName: "", lastName: "", email: "", company: "", message: "" };
}
</script>

<!-- ****************** Template **************** -->
<template>
	<div class="mx-8">
		<v-container class="py-16" max-width="1200" style="height: 100vh">
			<v-row class="fill-height" align="center" justify="space-between" style="gap: 48px">
				<!-- Left Text -->
				<v-col cols="12" md="5" class="d-flex flex-column align-start">
					<h1 class="text-h4 font-weight-bold mb-6">Contact</h1>
					<p class="text-subtitle-1">
						Have questions or want to learn more about how Badger can help your event? Fill out the
						form and one of our team members will get back to you soon.
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

						<v-btn color="primary" type="submit" class="mt-4" large>Submit</v-btn>
					</v-form>
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>

<!-- ****************** Style ******************* -->
<style scoped lang="scss"></style>
