<!-- ****************** Script ****************** -->
<script setup lang="ts">
import ProductsOverview from "@/components/ProductsOverview.vue";
import ExpandCard from "@/components/ExpandCard.vue";
import CallToAction from "@/components/CallToAction.vue";
</script>

<!-- ****************** Template **************** -->
<template>
	<div>
		<v-container class="main-section">
			<ProductsOverview />

			<div id="section-web" class="my-16">
				<h1 class="text-center text-h4 font-weight-bold mb-6">Web Services</h1>
				<p class="text-center">
					Badger provides both out-of-the-box and custom-made web solutions for your event. Pick and
					choose features with our library of extensions and plugins, shaping Badger to suit your
					event's specific needs. Let Badger worry about the technology, from the development and
					deployment to the hosting and management.
				</p>
				<ExpandCard
					id="badger-web-core"
					class="my-4"
					title="Badger Web Core"
					:initiallyExpanded="true"
					imageSrc="/promo/bwc.jpg"
				>
					<p>
						The Badger Web Core (BWC) is the central platform that powers the Badger system. It
						serves as the unified backend API that supports everything from attendee-facing web
						portals to on-site badge scanners. Built with scalability and reliability in mind, the
						Web Core acts as the data and logic layer for your entire event experience — managing
						user sessions, registration workflows, real-time badge scans, and more.
					</p>
				</ExpandCard>
				<ExpandCard
					id="event-management-interface"
					class="my-4"
					title="Event Management Interface"
					:initiallyExpanded="true"
					imageSrc="/promo/emi-browser.png"
				>
					<p>
						The Event Management Interface (EMI) is Badger's intuitive, browser-based control center
						for event staff. Designed with simplicity in mind, it provides a user-friendly
						environment for managing all aspects of your event — from registration data and badge
						assignments to check-in logistics and live updates. No technical background is required,
						making it easy for teams to get up and running quickly, even during fast-paced event
						prep.
					</p>
				</ExpandCard>
				<ExpandCard
					id="event-live-page"
					class="my-4"
					title="Event Live Page"
					:initiallyExpanded="true"
					imageSrc="/promo/elp-user.jpg"
				>
					<p>
						The Event Live Page (ELP) is the digital home base for your attendees during an event.
						It gives participants real-time access to everything they need — from live announcements
						and schedule updates to reward redemptions and personalized notifications. Whether
						they’re checking in, browsing sessions, or unlocking achievements, the Event Live Page
						keeps your audience informed, engaged, and connected throughout the entire event
						experience.
						<br /><br />
						Remix one of Badger's pre-built templates, let us create a custom page for you, or use
						the Badger Web Core to build your own from scratch. Whatever route you'd like to take,
						Badger can help you get there.
					</p>
				</ExpandCard>
				<ExpandCard
					id="managed-web-hosting"
					class="my-4"
					title="Managed Web Hosting"
					:initiallyExpanded="true"
					imageSrc="/promo/it-infrastructure.jpg"
				>
					<p>
						Badger takes care of the supporting IT infrastructure so you don't have to. We handle
						everything from deployment and hosting to performance tuning, security hardening, and
						ongoing maintenance. Whether it's the Badger Web Core, Event Management Interface, or
						Event Live Page, our team ensures your entire event platform is reliably hosted, always
						up-to-date, and secure — letting your staff focus on delivering a great event instead of
						managing servers or worrying about uptime.
					</p>
				</ExpandCard>
				<!-- TODO extensions and plugins -->
			</div>

			<div id="section-badge" class="my-16">
				<h1 class="text-center text-h4 font-weight-bold mb-6">Badge Services</h1>
				<p class="text-center">
					Badger delivers comprehensive badge and scanner solutions designed for events of any
					scale. From high-quality badge production to our custom-built scanners, we handle the
					details so that you can focus your event.
				</p>
				<ExpandCard
					id="badges"
					class="my-4"
					title="PVC, PCB, and Paper Badges"
					:initiallyExpanded="true"
					imageSrc="/promo/badges.jpg"
				>
					<p>
						Badger offers a variety of badge manufacturing options for events of all sizes, making
						sure that the cost of your badges is not a limiting factor to whether or not Badger can
						solve your event's needs. From high-quality PVC and PCB (electronic) badges to more
						economical paper badges, we can provide the right solution for your event while staying
						within budget.
						<br /><br />
						Design your own badges and send it to us for production, or let our team create a custom
						design for you.
					</p>
				</ExpandCard>
				<ExpandCard
					id="bx-scanner-rentals"
					class="my-4"
					title="Bx Scanner Rentals"
					:initiallyExpanded="true"
					imageSrc="/promo/bx-scanner.png"
				>
					<p>
						Leverage our innovative BadgerX (Bx) scanners for your event. Our custom-built scanners
						are designed and manufactured in-house and rigorously tested to ensure reliability.
						Unlike other scanners, we offer something truly unique: completely wireless,
						rechargeable, and autonomous scanners with a configurable e-ink display. Place the Bx
						scanners anywhere — on tables or walls — and skip the drilling, wiring, and cabling that
						comes with other scanners. Configure them remotely from your Event Management Interface
						in just a few clicks. <br /><br />
						We created a device that can be deployed to any chokepoint and solve it with just a tap.
					</p>
				</ExpandCard>
				<ExpandCard
					id="lanyards-and-accessories"
					class="my-4"
					title="Lanyards and Accessories"
					:initiallyExpanded="true"
					imageSrc="/promo/badger-lanyards.jpg"
				>
					<p>
						Need lanyards, badge holders, or other accessories for your badges? Let our team handle
						that for you. We'll work with you to make sure your needs are met while staying within
						your team's budget. <br /><br />
						Send us your designs and let us worry about the manufacturing, or let our team make a
						custom design for you. Alternatively, take advantage of our pre-made and
						readily-available stock at competitive rates. Have one less thing to worry about — with
						Badger, you're enlisting a team that cares as much about your event's success as you do.
					</p>
				</ExpandCard>
			</div>

			<div id="section-event" class="my-16">
				<h1 class="text-center text-h4 font-weight-bold mb-6">Event Services</h1>
				<p class="text-center">
					Badger works with you at every step of the way. All clients receive our utmost care and
					attention regardless of size or budget. We're passionate about making an awesome event,
					and we want to make sure that you have everything you need to succeed.
				</p>
				<ExpandCard
					id="engagement-support"
					class="my-4"
					title="Engagement Support"
					:initiallyExpanded="true"
					imageSrc="/promo/engagement-support.jpg"
				>
					<p>
						With every engagement, the Badger team will work with you to ensure that your Badger
						engagement is a success. We'll help you plan, design, and implement your event's Badger
						solution, and we'll be there to support you every step of the way. Whatever your needs
						are, you will have a direct line to an account manager to provide support and solve
						problems for you; when you're running an event, the last thing you need is more stress.
					</p>
				</ExpandCard>
				<ExpandCard
					id="online-support"
					class="my-4"
					title="Online Event Support"
					:initiallyExpanded="true"
					imageSrc="/promo/online-support.jpg"
				>
					<p>
						Receive dedicated online support for the entire duration of your event. Our team is on
						constant rotation to make sure that your event is fully covered. We're continuously
						monitoring for issues and ready to respond to any problems that may arise, ensuring a
						smooth experience for you and your attendees.
					</p>
				</ExpandCard>
				<ExpandCard
					id="onsite-support"
					class="my-4"
					title="On-site Event Support"
					:initiallyExpanded="true"
					imageSrc="/promo/onsite-support.jpg"
				>
					<p>
						For larger events, Badger can provide on-site support to ensure your event's absolute
						success. Our team can assist with setup, configuration, and troubleshooting of the
						Badger system, as well as providing additional hands in Badger-related tasks such as
						badge provisioning and distribution, scanner configuration and deployment, and more. Our
						team is additionally available to provide a variety of event-related gear and training
						to assist your team in streamlining communications, logistics, organization, and more.
						<br /><br />
						Let us know what you need, and we'll work with you to make sure that your event is a
						success.
					</p>
				</ExpandCard>
			</div>
		</v-container>
		<CallToAction
			header="Ready to Go Badger?"
			subtitle="Let's make your next event unforgettable. Reach out and let's talk."
			linkTo="/contact"
			buttonText="Contact Us"
		/>
	</div>
</template>

<!-- ****************** Style ******************* -->
<style scoped lang="scss"></style>
