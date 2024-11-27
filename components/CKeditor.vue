<template>
    <div class="container max-w-4xl mb-5 p-0">
        <section>
            <ckeditor :editor="editor" />
        </section>
    </div>
</template>

<script setup>
const { $ckeditor } = useNuxtApp();

const editor = $ckeditor.classicEditor;

</script>
