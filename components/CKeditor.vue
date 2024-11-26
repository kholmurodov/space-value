<template>
    <div class="container mx-auto max-w-4xl my-8">
        <section>
            <div v-if="editor"
                class="btn d-flex align-items-center flex-fill flex-wrap g-col-4 border border-primary p-4">
                <ckeditor :editor="editor" />
            </div>
        </section>
    </div>
</template>

<script setup>
const { $ckeditor } = useNuxtApp();

const editor = $ckeditor.classicEditor;

</script>
