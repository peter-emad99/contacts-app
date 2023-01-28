<template>
    <form>
        <form method='post' id='contact-form'>
            <p>
                <span>Name</span>
                <input placeholder='First' aria-label='First name' type='text' name='first'
                    :defaultValue="contact?.first" />
                <input placeholder='Last' aria-label='Last name' type='text' name='last'
                    :defaultValue="contact?.last" />
            </p>
            <label>
                <span>Twitter</span>
                <input type='text' name='twitter' placeholder='@jack' :defaultValue="contact?.twitter" />
            </label>
            <label>
                <span>Avatar URL</span>
                <input placeholder='https://example.com/avatar.jpg' aria-label='Avatar URL' type='text' name='avatar'
                    :defaultValue="contact?.avatar" />
            </label>
            <label>
                <span>Notes</span>
                <textarea name='notes' :defaultValue="contact?.notes" rows="6" />
            </label>
            <p>
                <button type='submit'>Save</button>

                <button type="button" @click="() => {
                    router.go(-1)
                }">
                    Cancel
                </button>
            </p>
        </form>
    </form>
</template>

<script setup lang="ts">import { getContact } from '@/contacts';
import { ref, watchEffect } from 'vue';
import { useRouter, useRoute } from 'vue-router';

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