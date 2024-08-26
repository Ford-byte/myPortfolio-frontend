<template>
    <div class="pb-4">
        <div class="flex justify-center m-4 font-black text-4xl md:text-5xl font-Roboto text-shadow-md">
            <div>
                CONTACT ME
            </div>
        </div>
        <div class="flex justify-center">
            <form @submit.prevent="sendForm" class="p-2">
                <input type="text" class="border border-solid border-black p-2 w-96 m-2 rounded-lg" placeholder="NAME:" v-model="name">
                <br>
                <input type="email" class="border border-solid border-black p-2 w-96 m-2 rounded-lg" placeholder="EMAIL ADDRESS:" v-model="email">
                <br>
                <input type="text" class="border border-solid border-black p-2 w-96 m-2 rounded-lg" placeholder="SUBJECT" v-model="subject">
                <br>
                <textarea cols="30" rows="5" class="border border-solid border-black p-2 m-2 w-96 h-auto rounded-lg" placeholder="YOUR MESSAGE..." v-model="message"></textarea>
                <br>
                <button type="submit" class="m-2 p-2 border border-solid border-black rounded-lg hover:bg-gray-400 font-semibold font-Roboto">SEND</button>
            </form>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'

const name = ref('')
const email = ref('')
const subject = ref('')
const message = ref('')

const sendForm = async () => {
    try {
        const response = await axios.post('http://localhost:3000/sendEmail', {
            name: name.value,
            email: email.value,
            subject: subject.value,
            message: message.value
        });
        console.log('Form sent successfully:', response.data);
        // Add any success handling here (e.g., clear form, show success message)
    } catch (error) {
        console.error('Error sending form:', error);
        // Add error handling here
    }
}
</script>
