<template>
    <main>
        <div class="container our-blog section pt-0 ">
            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Please Enter a Title" aria-label="Title"
                    aria-describedby="basic-addon1" v-model="blog.title">
            </div>

            <div class="input-group mb-3">
                <input type="file" class="form-control" id="inputGroupFile02">
                <label class="input-group-text" for="inputGroupFile02">Upload</label>
            </div>
            <CKeditor />
            <button type="button" class="btn btn-success">{{ $t("blogs.save") }}</button>
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