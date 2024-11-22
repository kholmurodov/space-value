<template>
    <main>
        <div class="our-blog section pt-0">
            <div class="main-wrapper">
                <section class="page-title bg-1">
                    <div class="container">
                        <div class="block text-center">
                            <h1 class="text-capitalize mb-4 text-lg text-white" v-html="blog?.title"></h1>
                            <ul class="list-inline">
                                <li class="list-inline-item">
                                    <NuxtLink to="/" class="text-white">Home</NuxtLink>
                                </li>
                                <li class="list-inline-item"><span class="text-white-50">/</span></li>
                                <li class="list-inline-item">
                                    <span class="text-white-50" v-html="blog?.title"></span>
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
                                            <img class="img-fluid rounded" v-if="blog?.image" :src="blog?.image"
                                                :alt="blog?.title">
                                            <img class="img-fluid rounded" v-else src="/assets/images/blog.jpg"
                                                :alt="blog?.title">

                                            <div class="blog-item-content bg-white p-5">
                                                <div class="blog-item-meta bg-gray py-1 px-2">
                                                    <span class="text-black text-capitalize mr-3">
                                                        <font-awesome :icon="['fas', 'clock']" /> 28th January
                                                    </span>
                                                </div>
                                                <p>{{ blog?.description }}</p>

                                                <div class="tag-option mt-5 clearfix" v-if="blog?.tags?.length">
                                                    <h4>Tags:</h4>
                                                    <ul v-for="tag in blog?.tags" :key="tag"
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
                                    <div class="sidebar-widget latest-post card border-0 p-4 mb-3">
                                        <h5>Latest Posts</h5>


                                        <div class="media border-bottom py-3" v-for="blog in latest5">
                                            <a href="#">
                                                <img class="mr-4" v-if="blog?.image" :src="blog?.image"
                                                    :alt="blog?.image">
                                                <img class="mr-4" v-else src="/assets/images/blog.jpg"
                                                    :alt="blog?.title"></a>
                                            <div class="media-body ml-3">
                                                <h6 class="my-2">
                                                    <a href="#" v-html="blog?.title"></a>
                                                </h6>
                                                <span class="text-sm text-muted">
                                                    {{ $formatDate(blog?.createdAt) }}
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

const store = useBlogStore();
const { getBlog, latest5 } = store;
const blog = getBlog(id as string);
</script>