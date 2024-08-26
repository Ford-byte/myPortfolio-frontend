<template>
    <div>
        <div class="p-4 hidden sm:flex md:flex justify-end font-Roboto">
            <div class="mx-2 hover:underline border-black">
                <RouterLink :to="'/'" class="text-xs font-bold px-2" active-class="text-[#D98757]">HOME</RouterLink>
            </div>
            <div class="mx-2 hover:underline border-black">
                <a href="about">
                    <RouterLink :to="'/about'" class="text-xs font-bold px-2" active-class="text-[#D98757]">ABOUT
                    </RouterLink>
                </a>
            </div>
            <div class="mx-2 hover:underline border-black">
                <RouterLink :to="'/experience'" class="text-xs font-bold px-2" active-class="text-[#D98757]">EXPERIENCE
                </RouterLink>
            </div>
            <div class="mx-2 hover:underline border-black">
                <RouterLink :to="'/contact'" class="text-xs font-bold px-2" active-class="text-[#D98757]">CONTACT
                </RouterLink>
            </div>
        </div>
        <div class="flex sm:hidden md:hidden justify-end">
            <i class="fa fa-bars p-4 cursor-pointer hover:text-[#D98757]" @click="toggleMenu"></i>
            <div v-if="isMenuOpen"
                class="bg-black flex justify-center items-center absolute top-0 right-0 h-full w-full z-10">
                <div class="p-4 text-white">
                    <RouterLink :to="'/'" class="block py-2 hover:text-[#D98757]" @click="toggleMenu">HOME</RouterLink>
                    <RouterLink :to="'/about'" class="block py-2 hover:text-[#D98757]" @click="toggleMenu">ABOUT
                    </RouterLink>
                    <RouterLink :to="'/experience'" class="block py-2 hover:text-[#D98757]" @click="toggleMenu">
                        EXPERIENCE</RouterLink>
                    <RouterLink :to="'/contact'" class="block py-2 hover:text-[#D98757]" @click="toggleMenu">CONTACT
                    </RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { ref } from 'vue'

const isMenuOpen = ref(false)

function toggleMenu() {
    isMenuOpen.value = !isMenuOpen.value
}
</script>

<style scoped></style>
