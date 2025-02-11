<template>
    <main>
        <div class="our-blog section">
            <div class="container">
                <div class="wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.25s">
                    <div class="section-heading">
                        <h2>개발 상세</h2>
                    </div>
                </div>
                <div class="row">
                    <div class="right-list">
                        <ul>
                            <li v-for="project in projects" :key="project.id">
                                <div class="left-content align-self-center col-lg-9 wow fadeInUp" data-wow-duration="1s"
                                    data-wow-delay="0.25s">
                                    <span><font-awesome :icon="['fas', 'calendar']" />
                                        <span class="date">{{ $formatDate(project.createdAt) }}</span>
                                    </span>
                                    <nuxt-link :to="'/projects/' + project.id">
                                        <h4 v-html="project.title"></h4>
                                    </nuxt-link>
                                    <p>{{ project.description }}</p>
                                </div>
                                <div class="right-image col-lg-3 wow fadeInUp" data-wow-duration="1s"
                                    data-wow-delay="0.25s">
                                    <nuxt-link :to="'/projects/' + project.id">
                                        <img v-if="project.image" :src="project.image" :alt="project.title">
                                        <img v-else src="/assets/images/blog.jpg" :alt="project.title">
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
const store = useProjectStore();
const { projects } = store;
</script>

<style lang="scss" scoped></style>
