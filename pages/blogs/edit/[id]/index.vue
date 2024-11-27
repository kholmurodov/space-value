<template>
    <main>
        <div class="container our-blog section pt-0">
            <div class="bg-body-secondary ">
                <h1 class="p-5">
                    Blog Details
                </h1>
            </div>
            <div class="px-10 mt-5">
                <div class="d-flex">
                    <div class="col-lg-3">
                        <h2>Title</h2>
                    </div>
                    <div class="col-lg-9">
                        <div class="input-group input-group-lg mb-3">
                            <input type="text" class="form-control" placeholder="Please Enter a Title"
                                aria-label="Title" aria-describedby="basic-addon1" v-model="blog.title">
                        </div>
                    </div>

                </div>
                <div class="mt-3">
                    <div class="d-flex">
                        <div class="col-lg-3">
                            <h2>Image</h2>
                        </div>
                        <div class="col-lg-9">
                            <div class="input-group mb-3 input-group-lg ">
                                <input type="file" class="form-control" id="inputGroupFile02">
                                <label class="input-group-text" for="inputGroupFile02">Upload</label>
                            </div>
                        </div>

                    </div>
                    <div class="d-flex flex-row">
                        <div class="col-lg-3">
                            <h2>Description</h2>
                        </div>
                        <div class="col-lg-9">
                            <div class="">
                                <CKeditor class="ck-editor__editable ck-editor__editable_inline " />
                            </div>
                        </div>

                    </div>
                    <button type="button" class="btn btn-success float-end">{{ $t("blogs.save") }}</button>
                </div>
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



</script>
<style>
.ck-editor__editable_inline {
    min-height: 200px;
}
</style>