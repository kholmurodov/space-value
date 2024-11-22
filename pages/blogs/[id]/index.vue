<template>
    <main>
        <div class="our-blog section pt-0">
            <div class="main-wrapper">
                <section class="page-title bg-1">
                    <div class="container">
                        <div class="block text-center">
                            <h1 class="text-capitalize mb-4 text-lg text-white" v-html="blog.title"></h1>
                            <ul class="list-inline">
                                <li class="list-inline-item">
                                    <NuxtLink to="/" class="text-white">Home</NuxtLink>
                                </li>
                                <li class="list-inline-item"><span class="text-white-50">/</span></li>
                                <li class="list-inline-item">
                                    <span class="text-white-50" v-html="blog.title"></span>
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
                                            <img class="img-fluid rounded" v-if="blog.image" :src="blog.image"
                                                :alt="blog.title">
                                            <img class="img-fluid rounded" v-else src="/assets/images/blog.jpg"
                                                :alt="blog.title">

                                            <div class="blog-item-content bg-white p-5">
                                                <div class="blog-item-meta bg-gray py-1 px-2">
                                                    <span class="text-black text-capitalize mr-3">
                                                        <font-awesome :icon="['fas', 'clock']" /> 28th January
                                                    </span>
                                                </div>
                                                <p>{{ blog.description }}</p>

                                                <div class="tag-option mt-5 clearfix" v-if="blog.tags?.length">
                                                    <h4>Tags:</h4>
                                                    <ul v-for="tag in blog.tags" :key="tag.id"
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

                                        <div class="media border-bottom py-3">
                                            <a href="#"><img class="mr-4" src="/assets/images/blog/blog_bg.png"
                                                    alt=""></a>
                                            <div class="media-body ml-3">
                                                <h6 class="my-2">
                                                    <a href="#">Thoughtful living in los Angeles</a>
                                                </h6>
                                                <span class="text-sm text-muted">03 Mar 2018</span>
                                            </div>
                                        </div>
                                        <div class="media py-3">
                                            <a href="#"><img class="mr-4" src="/assets/images/blog/blog_bg.png"
                                                    alt=""></a>
                                            <div class="media-body ml-3">
                                                <h6 class="my-2">
                                                    <a href="#">Fusce lobortis lorem at ipsum semper sagittis</a>
                                                </h6>
                                                <span class="text-sm text-muted">03 Mar 2018</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="sidebar-widget bg-white rounded tags p-4 mb-3">
                                        <h5 class="mb-4">Tags</h5>

                                        <a class="mr-1" href="#">Web</a>
                                        <a class="mr-1" href="#">agency</a>
                                        <a class="mr-1" href="#">company</a>
                                        <a class="mr-1" href="#">creative</a>
                                        <a class="mr-1" href="#">html</a>
                                        <a class="mr-1" href="#">Marketing</a>
                                        <a class="mr-1" href="#">Social Media</a>
                                        <a class="mr-1" href="#">Branding</a>
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

<script setup>
const route = useRoute();
const { id } = route.params;

const store = useBlogStore();
const { getBlog } = store;

const blog = getBlog(id);
</script>