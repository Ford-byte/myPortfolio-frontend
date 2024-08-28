<template>
    <div class="relative">
      <!-- Mobile and Small Screens -->
      <div class="flex md:hidden pt-8 justify-center">
        <img src="@/assets/images/me.jpg" class="w-60 h-60 rounded-full" alt="Profile Image">
      </div>
  
      <!-- Medium and Larger Screens -->
      <div class="hidden md:flex fixed right-0 h-screen mr-44 items-center z-10">
        <img src="@/assets/images/me.jpg" class="w-60 h-60 rounded-full" alt="Profile Image">
      </div>
  
      <!-- Title Section -->
      <div class="flex justify-center items-center md:block pt-12 md:px-56 md:pt-48">
        <h1 class="text-5xl font-extrabold font-sans text-shadow-lg">
          My <span class="tracking-widest">PORTFOLIO</span>
        </h1>
      </div>
  
      <!-- Introduction Section -->
      <div class="tracking-wide p-12 text-center md:text-left">
        Hi, I'm Clifford - A highly focused backend developer who makes complex tasks simple and obvious.
      </div>
    </div>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  /* Add any custom styles here */
  </style>
  