<template >
  <div id="sidebar">
    <div>
      <form action="" role="search" id="search-form">
        <input id="q" aria-label="Search contacts" placeholder="Search" type="search" name="q" defaultValue="q"
          :class="{ loading: searching }" />
        <div v-show="searching" id="search-spinner" aria-hidden />
        <div class="sr-only" aria-live="polite"></div>
      </form>
      <form @submit.prevent="addContact"><button type="submit">New</button></form>
    </div>
    <nav>
      <template v-if="contacts.length">
        <ul>
          <li v-for="(contact, index) in contacts" :key="contact?.id">
            <RouterLink :to="{ path: `/contacts/${contact.id}` }">
              <template v-if="contact.first">
                {{ contact.first }}{{ contact.last }}
              </template>
              <i v-else>No Name</i>
            </RouterLink>
          </li>
        </ul>
      </template>
      <p v-else>
        <i>No contacts</i>
      </p>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { createContact, getContacts } from "@/contacts.js";
import { onMounted, onUpdated, ref } from "vue";
import { useRouter } from "vue-router";

export interface TContact {
  first?: string;
  last?: string;
  avatar?: string;
  twitter?: string;
  notes?: string;
  favorite?: boolean;
}

const contacts = ref<any>([]);
const searching = ref(false);
const router = useRouter()
async function addContact(e: Event) {
  const contact = await createContact()
  contacts.value = await getContacts()
  router.push({ path: `/contacts/${contact.id}` })

}

onMounted(async () => {

  contacts.value = await getContacts()
})
</script>

<style scoped>

</style>
