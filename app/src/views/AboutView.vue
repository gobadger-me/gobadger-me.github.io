<!-- ****************** Script ****************** -->
<script setup lang="ts">
import ExpandCard from "@/components/ExpandCard.vue";
import StaffCard from "@/components/StaffCard.vue";
import aboutCarouselSlides from "@/data/aboutCarouselSlides.ts";
import staff from "@/data/staff.ts";
</script>

<!-- ****************** Template **************** -->
<template>
	<v-container class="main-section">
		<v-row justify="center">
			<v-col cols="12">
				<h1 class="text-center text-h4 font-weight-bold mb-6">About</h1>
				<p class="mb-4">
					GoBadger LLC is a tightly-knit group of passionate individuals dedicated to making event
					management simple and stress-free. Behind the scenes, we're handling everything from
					building the software to supporting customers and managing supply chains — working
					together to help you focus on what really matters: connecting with your community.
				</p>
				<p class="mb-4">
					We're not just building technology — we're crafting tools that bring people together,
					whether that's a small meetup or a large conference. Every feature we create comes from
					real experiences and conversations with clients, so you can count on solutions that
					actually work in the real world. When you partner with GoBadger, you're enlisting a team
					that cares deeply about your event's success and is always ready to roll up our sleeves
					and help.
				</p>

				<!-- Origins Section -->
				<ExpandCard title="Origins" class="mb-4">
					<p class="mb-4">
						GoBadger started as a side project called <strong>HackerPass</strong>, created by Shawn
						Duong during college to help manage HackMerced VIII, a local student-run educational
						event. Originally a simple system using tap badges and a custom scanner to track
						workshop attendance, HackerPass evolved into a full event management platform,
						streamlining everything from registration to day-of logistics; HackerPass unified the
						event experience for both organizers and attendees through a badging system coupled with
						a web platform keeping everyone on the same page.
					</p>
					<p>
						The success at HackMerced caught the attention of other universities, who wanted to use
						the platform for their own events. To meet the growing demand and share the technology
						more broadly, HackerPass rebranded as <strong>Badger</strong>. In 2025, Shawn teamed up
						with friends Derek and Amanda to officially form GoBadger LLC — a company built to help
						event organizers everywhere deliver great experiences with less hassle.
					</p>
				</ExpandCard>

				<!-- People First Section -->
				<ExpandCard title="People First" class="mb-4">
					<p class="mb-4">
						GoBadger LLC prides itself on being a people-first company. We believe that technology
						can be used to bring people together instead of driving them apart. When we see event
						organizers able to make a truly awesome and people-centric event, facilitating the
						formation of new friendships and powerful connections, we're proud to have supported
						that success.
					</p>
					<p>
						Technology, without people, is meaningless. Bits, bauds, chips, and code don't matter —
						people do. Let's make a great event together with Badger.
					</p>
				</ExpandCard>

				<!-- Carousel Placeholder -->
				<v-carousel hide-delimiters class="mb-12">
					<v-carousel-item v-for="slide in aboutCarouselSlides" :key="slide.id">
						<v-sheet
							class="fill-height d-flex flex-column align-center justify-center text-center"
							:style="{
								backgroundImage: `url(${slide.image})`,
								backgroundSize: 'cover',
								backgroundPosition: 'center',
								color: 'white',
								padding: '1rem',
							}"
						/>
					</v-carousel-item>
				</v-carousel>

				<!-- Staff Directory -->
				<h1 class="text-center text-h4 font-weight-bold mb-6">The Badger Team</h1>
				<div v-for="dept in staff" :key="dept.name" class="mb-10">
					<h2 class="text-h6 font-weight-bold mb-4">{{ dept.name }}</h2>
					<v-row>
						<v-col v-for="member in dept.staff" :key="member.id" cols="12" md="6">
							<StaffCard :name="member.name" :title="member.title" :avatar="member.avatar">
								{{ member.bio }}
							</StaffCard>
						</v-col>
					</v-row>
				</div>
			</v-col>
		</v-row>
	</v-container>
</template>

<!-- ****************** Style ******************* -->
<style scoped lang="scss"></style>
