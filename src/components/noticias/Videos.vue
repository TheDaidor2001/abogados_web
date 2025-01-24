<script setup lang="ts">
import VideosCard from './VideosCard.vue';
</script>


<template>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-5 xl:px-0">
        <VideosCard fecha="20/01/2025" img-src="/img/prueba.webp" link="#"
            title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, ipsum?" />
        <VideosCard fecha="20/01/2025" img-src="/img/prueba.webp" link="#"
            title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, ipsum?" />
        <VideosCard fecha="20/01/2025" img-src="/img/prueba.webp" link="#"
            title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, ipsum?" />
        <VideosCard fecha="20/01/2025" img-src="/img/prueba.webp" link="#"
            title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, ipsum?" />
    </div>
    <button
        class="mt-16 block mx-auto border border-blue-500 px-10 py-3 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition-colors">Cargar
        más videos</button>
</template>
