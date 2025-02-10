<template>
    <main>
        <div class="container our-blog section py-0">
            <div class="bg-body-secondary">
                <h3 class="p-2 text-center">
                    Edit Blog
                </h3>
            </div>
            <div class="row mt-3">
                <div class="col-lg-3">
                    <h5>Title</h5>
                </div>
                <div class="col-lg-9">
                    <div class="input-group">
                        <input type="text" class="form-control" placeholder="Please Enter a Title"
                            v-model="BlogService.getBlog">
                    </div>
                </div>
            </div>
            <div class="row mt-3">
                <div class="col-lg-3">
                    <h5>Description</h5>
                </div>
                <div class="col-lg-9">
                    <div class="input-group">
                        <input type="text" class="form-control" placeholder="Please Enter a Description" v-model="blog">
                    </div>
                </div>
            </div>
            <div class="row mt-3">
                <div class="col-lg-3">
                    <h5>Image</h5>
                </div>
                <div class="col-lg-9">
                    <div class="input-group">
                        <input type="file" class="form-control" id="blog-file">
                        <label class="input-group-text" for="blog-file">Upload</label>
                    </div>
                </div>
            </div>
            <div class="row mt-3">
                <div class="col-lg-3">
                    <h5>Content</h5>
                </div>
                <div class="col-lg-9">
                    <div class="container max-w-4xl mb-5 p-0">
                        <ckeditor v-model="blog.blog" :editor="editor" />
                    </div>
                </div>
            </div>
            <div class="float-end">
                <button type="button" class="btn btn-danger mx-3">{{ $t("blogs.cancel") }}</button>
                <button type="button" class="btn btn-success">{{ $t("blogs.save") }}</button>
            </div>
        </div>
    </main>
</template>

<script setup lang="ts">
import BlogService from '~/services/blog-service';
const route = useRoute();
const { id } = route.params;


const blog = new BlogService();



const { $ckeditor } = useNuxtApp();
const editor = $ckeditor.classicEditor;
</script>

<style lang="css">
.ck-editor__editable {
    min-height: 400px;
}
</style>