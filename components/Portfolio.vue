<template>
    <div id="portfolio" class="our-portfolio section">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 offset-lg-3">
                    <div class="section-heading  wow bounceIn" data-wow-duration="1s" data-wow-delay="0.2s">
                        <h2 class="projects-title">보유 기술 소개</h2>
                    </div>
                </div>
            </div>
            <div class="row">
                <div v-for="project in projects" :key="project.id" class="col-lg-3 col-sm-6 mb-5">
                    <nuxt-link :to="`/projects/${project.id}`">
                        <div class="item wow bounceInUp" data-wow-duration="1s" data-wow-delay="0.3s">
                            <div class="hidden-content">
                                <h4>{{ project.title }}</h4>
                            </div>
                            <div class="showed-content">
                                <img v-if="project.image" :src="project.image" :alt="project.title">
                                <img v-else src="assets/images/portfolio-image.png" :alt="project.title">
                            </div>
                        </div>
                    </nuxt-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const store = useProjectStore();
const { projects } = store;
</script>

<style lang="css" scoped>
.projects-title {
    font-size: 2.5rem;
}
</style>