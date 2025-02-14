<template>
  <div :id="`${type}-projects`" class="our-portfolio section">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 offset-lg-3">
          <div
            class="section-heading wow bounceIn"
            data-wow-duration="1s"
            data-wow-delay="0.2s"
          >
            <h2 class="projects-title">{{ title }}</h2>
          </div>
        </div>
      </div>
      <div class="row">
        <div
          v-for="project in projects"
          :key="project.id"
          class="col-lg-3 col-sm-6 mb-5"
        >
          <nuxt-link :to="`/projects/${project.id}`">
            <div
              class="item wow bounceInUp"
              data-wow-duration="1s"
              data-wow-delay="0.3s"
            >
              <div class="hidden-content">
                <h4>{{ project.title }}</h4>
              </div>
              <div class="showed-content">
                <img
                  :src="`/img/projects/${project.image}`"
                  :alt="project.title"
                />
              </div>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import type { ProjectType } from "../stores/projectStore";

const props = defineProps({
  type: String,
  title: String,
});
const { type, title } = toRefs(props);

const store = useProjectStore();
const { getProjects } = store;

if (!type) {
  throw new Error("Type Not Found");
}

console.log(type.value);

const projects = getProjects(type.value as ProjectType);
</script>

<style lang="css" scoped>
.projects-title {
  font-size: 2.5rem;
}

img {
  max-height: 110px;
}

#qa-projects {
  padding-top: 0 !important;
}
</style>
