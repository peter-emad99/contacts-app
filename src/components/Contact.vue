<template>
	<div id="contact">
		<div>
			<img :src="contact?.avatar || 'https://picsum.photos/150'" :alt="contact?.first" />
		</div>
		<div>
			<h1 v-if="contact?.first || contact?.last">
				{{ contact?.first }} {{ contact?.last }}
			</h1>
			<h1 v-else><i>No Name</i></h1>
			<p v-if="contact?.twitter">
				<a target="_blank" :href="`https://twitter.com/${contact?.twitter}`">{{ contact.twitter }}
				</a>
			</p>
			<p v-if="contact?.notes">
				{{ contact?.notes }}
			</p>
			<div>
				<form @submit.prevent="() => {
					router.push({
						path: `/contacts/${route.params.id}/edit`
					})
				}">
					<button type="submit">Edit</button>
				</form>
				<form action="/destroy" method="post">
					<button type="submit">Delete</button>
				</form>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { getContact } from "@/contacts";
import { ref, watchEffect } from "vue";
import { useRoute, useRouter } from "vue-router";

export interface TContact {
	first?: string;
	last?: string;
	avatar?: string;
	twitter?: string;
	notes?: string;
	favorite?: boolean;
}
const router = useRouter()
const route = useRoute()
const contact = ref<TContact>();


watchEffect(async () => {
	contact.value = await getContact(route.params.id)
	console.log(route.params.id)
})
</script>

<style scoped>

</style>
