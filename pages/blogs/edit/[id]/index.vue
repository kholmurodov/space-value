<template>
    <main>
        <div class="container our-blog section py-0">
            <div class="bg-body-secondary ">
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
                        <input type="text" class="form-control" placeholder="Please Enter a Title" aria-label="Title"
                            aria-describedby="basic-addon1" v-model="blog.title">
                    </div>
                </div>
            </div>
            <div class="row mt-3">
                <div class="col-lg-3">
                    <h5>Image</h5>
                </div>
                <div class="col-lg-9">
                    <div class="input-group">
                        <input type="file" class="form-control" id="inputGroupFile02">
                        <label class="input-group-text" for="inputGroupFile02">Upload</label>
                    </div>
                </div>
            </div>

            <div class="row mt-3">
                <div class="col-lg-3">
                    <h5>Description</h5>
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
const route = useRoute();
const { id } = route.params;

const store = useBlogStore();
const { getBlog } = store;
const blog = getBlog(id as string);

if (!blog) {
    throw new Error("Blog Not Found");
}

const { $ckeditor } = useNuxtApp();
const editor = $ckeditor.classicEditor;
</script>

<style lang="css">
.ck-editor__editable {
    min-height: 400px;
}
</style>