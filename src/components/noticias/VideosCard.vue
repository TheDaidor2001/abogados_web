<script setup lang="ts">
defineProps<{
    imgSrc: string;
    title: string;
    fecha: string;
    link: string;
}>()
</script>


<template>
    <article class="flex flex-col gap-3 max-h-[448px]">
        <img class="rounded-lg w-full max-h-60 object-cover" :src="imgSrc" alt="">

        <h3 class="font-heebo text-lg font-semibold text-pretty">{{ title }}</h3>
        <div class="flex items-center gap-x-3 mt-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-5">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z"></path>
                <path d="M16 3v4"></path>
                <path d="M8 3v4"></path>
                <path d="M4 11h16"></path>
                <path d="M7 14h.013"></path>
                <path d="M10.01 14h.005"></path>
                <path d="M13.01 14h.005"></path>
                <path d="M16.015 14h.005"></path>
                <path d="M13.015 17h.005"></path>
                <path d="M7.01 17h.005"></path>
                <path d="M10.01 17h.005"></path>
            </svg>
            <p class="text-md font-semibold mt-1 text-gray-700">
                {{ fecha }}
            </p>
        </div>
        <a :href="link"
            class="flex justify-center items-center gap-x-3 mt-3 bg-blue-500 py-2 text-center text-white rounded-md hover:scale-105 transition-transform">

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="size-7">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z" />
            </svg>

            <span class="font-heebo">Ver video</span>

        </a>
    </article>
</template>
