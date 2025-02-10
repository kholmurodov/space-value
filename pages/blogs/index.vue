<template>
    <main>
        <div class="our-blog section">
            <div class="container">
                <div class="wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.25s">
                    <div class="section-heading">
                        <h2>Check Out What Is <em>Trending</em> In Our Latest <span>News</span></h2>
                    </div>
                </div>
                <div class="row">
                    <div class="right-list">
                        <ul>
                            <li v-for="blog in store" :key="blog.id">
                                <div class="left-content align-self-center col-lg-9 wow fadeInUp" data-wow-duration="1s"
                                    data-wow-delay="0.25s">
                                    <span><font-awesome :icon="['fas', 'calendar']" />
                                        <span class="date">{{ $formatDate() }}</span>
                                    </span>
                                    <nuxt-link :to="'/blogs/' + blog.id">
                                        <h4 v-html="blog.title"></h4>
                                    </nuxt-link>
                                    <p>{{ blog.description }}</p>
                                </div>
                                <div class="right-image col-lg-3 wow fadeInUp" data-wow-duration="1s"
                                    data-wow-delay="0.25s">
                                    <nuxt-link :to="'/blogs/' + blog.id">
                                        <img v-if="blog.image" :src="blog.image" :alt="blog.title">
                                        <img v-else src="/assets/images/blog.jpg" :alt="blog.title">
                                    </nuxt-link>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script setup lang="ts">
const store = useBlogStore();


</script>

<style lang="scss" scoped></style>
