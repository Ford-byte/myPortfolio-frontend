<template>
    <div class="p-6 md:p-12 lg:p-20">
        <div class="flex justify-center md:justify-start font-black text-4xl md:text-5xl text-shadow-lg pb-4">
            ABOUT ME
        </div>
        <div class="p-4 md:p-12 lg:p-16">
            <p class="text-center md:text-left">
                Passionate and results-driven Backend Developer with over 5 years of experience designing and
                implementing robust server-side solutions. Proficient in a range of technologies including Node.js,
                Python, and Java, with a solid understanding of RESTful APIs, microservices architecture, and database
                management (SQL and NoSQL). Adept at optimizing performance, ensuring scalability, and maintaining high
                availability for mission-critical applications. Known for strong problem-solving skills, attention to
                detail, and a commitment to writing clean, maintainable code. Proven track record of collaborating
                effectively with cross-functional teams to deliver innovative and efficient backend systems that drive
                business success.
            </p>
            <a :href="resume" download>
                <div
                    class="border-b border-solid border-black w-fit font-Roboto font-black float-right pt-8 m-2 hover:cursor-pointer hover:text-[#D98757]">
                    My RESUME
                </div>
            </a>
        </div>
    </div>
</template>

<script setup>
import resume from '@/assets/resume.pdf';
</script>

<style lang="scss" scoped></style>