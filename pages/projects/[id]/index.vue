<template>
    <main v-if="project">
        <div class="our-blog section pt-0">
            <div class="main-wrapper">
                <section class="page-title bg-1">
                    <div class="container">
                        <div class="block text-center">
                            <h2 class="text-capitalize mb-4 text-white">{{ project.title }}</h2>
                            <ul class="list-inline">
                                <li class="list-inline-item">
                                    <nuxt-link to="/" class="text-white">Home</nuxt-link>
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
                            <div class="col-lg-8 p-4 bg-white">
                                <div class="single-blog-item pb-4">
                                    <div class="blog-item-meta pb-2">
                                        <span class="text-black text-capitalize mr-3">
                                            <p>{{ project.description }}</p>
                                        </span>
                                    </div>

                                    <div class="blog-item-meta pb-4">
                                        <img class="img-fluid rounded" :src="`/img/projects/${project.image}`" :alt="project.title">
                                    </div>

                                    <div class="blog-item-meta px-5">
                                        <table class="table">
                                            <tbody>
                                                <tr v-for="key of Object.keys(project.about)" :key="key">
                                                    <th class="text-center text-white align-middle">
                                                        {{ key }}
                                                    </th>
                                                    <td v-if="typeof project.about[key] === 'string'">
                                                        {{ project.about[key] }}

                                                    </td>
                                                    <td v-else>
                                                        <ul class="px-0 d-flex align-items-start flex-column">
                                                            <li v-for="ab of project.about[key]" :key="ab">
                                                                {{ ab }}
                                                            </li>
                                                        </ul>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="sidebar-wrap">
                                    <div class="sidebar-widget latest-post p-4 py-0">
                                        <div class="media pb-3" v-for="project in latest5" :key="project.id">
                                            <nuxt-link :to="'/projects/' + project.id">
                                                <img :src="`/img/projects/${project.image}`" :alt="project.title">
                                            </nuxt-link>
                                            <div class="media-body">
                                                <h6 class="my-2">
                                                    <nuxt-link :to="'/projects/' + project.id">
                                                        {{ project.title }}
                                                    </nuxt-link>
                                                </h6>
                                            </div>
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
const { getProject, getLatest } = store;
const project = getProject(id as string);
const latest5 = getLatest(id as string)

if (!project) {
    throw new Error("Project Not Found");
}
</script>

<style lang="scss" scoped>
th,
td {
    border: 2px solid #3faec2;
}

th {
    background: #17c6c9;
}
</style>