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
      <div v-if="successMessage" class="fixed inset-x-0 top-0 flex items-end justify-right px-4 py-6 justify-end">
        <div class="max-w-sm w-full shadow-lg rounded px-4 py-3 relative bg-green-400 border-l-4 border-green-700 text-white">
          <div class="p-2">
            <div class="flex items-start">
              <div class="ml-3 w-0 flex-1 pt-0.5">
                <p class="text-sm leading-5 font-medium">
                  Success
                </p>
                <p class="text-sm">
                  {{ successMessage }}
                </p>
              </div>
              <div class="ml-4 flex-shrink-0 flex">
                <button class="inline-flex text-white transition ease-in-out duration-50"
                  @click="clearSuccessMessage">
                  <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
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
  const successMessage = ref('')
  
  const sendForm = async () => {
    try {
      const response = await axios.post('https://myportfolio-backend-nw0q.onrender.com/sendEmail', {
        name: name.value,
        email: email.value,
        subject: subject.value,
        message: message.value
      })
      console.log('Form sent successfully:', response.data)
  
      // Show success message
      successMessage.value = 'Your message has been sent successfully!'
  
      // Clear the form
      name.value = ''
      email.value = ''
      subject.value = ''
      message.value = ''
  
    } catch (error) {
      console.error('Error sending form:', error)
    }
  }
  
  const clearSuccessMessage = () => {
    successMessage.value = ''
  }
  </script>
  