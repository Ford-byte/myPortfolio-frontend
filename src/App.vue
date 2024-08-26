<script setup>
import { RouterLink, RouterView } from 'vue-router'
import LoaderComponent from '@/components/LoaderComponent.vue'
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
</script>

<template>
  <LoaderComponent/>
  <HeaderComponent/>
  <RouterView />
  <FooterComponent/>
</template>
