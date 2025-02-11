<template>
    <main>
        <div class="our-blog section pt-0">
            <div class="main-wrapper">
                <section class="page-title bg-1">
                    <div class="container">
                        <div class="block text-center">
                            <h1 class="text-capitalize mb-4 text-lg text-white" v-html="project.title"></h1>
                            <ul class="list-inline">
                                <li class="list-inline-item">
                                    <NuxtLink to="/" class="text-white">Title</NuxtLink>
                                </li>
                                <li class="list-inline-item"><span class="text-white-50">/</span></li>
                                <li class="list-inline-item">
                                    <span class="text-white-50" v-html="project.title"></span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section class="section blog-wrap bg-gray pt-5">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-8">
                                <div class="row">
                                    <div class="col-lg-12 mb-5">
                                        <div class="single-blog-item">
                                            <img class="img-fluid rounded" v-if="project.image" :src="project.image"
                                                :alt="project.title">
                                            <img class="img-fluid rounded" v-else
                                                src="/public/completedProjectImgs/1.jpg" :alt="project.title">

                                            <div class="blog-item-meta bg-gray py-1 px-2 bg-white mt-1 btn-flex">
                                                <span class="text-black text-capitalize mr-3">
                                                    <font-awesome :icon="['fas', 'clock']" />
                                                    {{ $formatDate(project.createdAt) }}
                                                    <p>{{ project.description }}</p>
                                                </span>



                                                <div class="float-right">
                                                    <!-- <nuxt-link :to="'/projects/edit/' + project.id"
                                                        class="btn btn-outline-primary btn-sm mx-2">Edit</nuxt-link>
                                                    <button type="button"
                                                        class="btn btn-outline-danger btn-sm">Delete</button> -->
                                                </div>
                                            </div>

                                            <div class="blog-item-content mt-2">


                                                <div class="tag-option mt-5 clearfix" v-if="project.tags?.length">
                                                    <h4>Tags:</h4>
                                                    <ul v-for="tag in project.tags" :key="tag"
                                                        class="float-left list-inline">
                                                        <li class="list-inline-item">
                                                            <a href="#" rel="tag">{{ tag }}</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="sidebar-wrap">
                                    <div class="sidebar-widget latest-post border-0 p-4 py-0 mb-3">
                                        <h5><b>Latest Projects</b></h5>
                                        <div class="media border-bottom py-3" v-for="project in latest5">
                                            <nuxt-link :to="'/projects/' + project.id">
                                                <img class="mr-4" v-if="project.image" :src="project.image"
                                                    :alt="project.image">
                                                <img class="mr-4" v-else src="/public/completedProjectImgs/2.jpg"
                                                    :alt="project.title">
                                            </nuxt-link>
                                            <div class="media-body ml-3">
                                                <h6 class="my-2">
                                                    <nuxt-link :to="'/projects/ + project.id'"
                                                        v-html="project.title"></nuxt-link>
                                                </h6>
                                                <span class="text-sm text-muted">
                                                    {{ $formatDate(project.createdAt) }}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="sidebar-widget bg-white rounded tags p-4 mb-3">
                                        <h5 class="mb-4">Tags</h5>
                                        <div class="d-inline-block" v-for="tag in store.tags" :key="tag">
                                            <a class="mr-1" href="#">{{ tag }}</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </main>
</template>

<script setup lang="ts">
const route = useRoute();
const { id } = route.params;

const store = useProjectStore();
const { getProject, latest5 } = store;
const project = getProject(id as string);

if (!project) {
    throw new Error("Project Not Found");
}
</script>

<style lang="scss" scoped></style>