<template>
    <main v-if="project">
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

                                            <div class="blog-item-meta bg-gray py-1 px-2 bg-white mt-1 btn-flex">
                                                <span class="text-black text-capitalize mr-3">
                                                    <p> &nbsp {{ project.description }}</p>
                                                </span>
                                            </div>

                                            <img class="img-fluid rounded" :src="project.image" :alt="project.title">

                                            <div class="blog-item-meta bg-gray py-1 px-2 bg-white mt-1 btn-flex">
                                                <table class="table">
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row">발주처
                                                            </th>
                                                            <td>다울지오인포
                                                            </td>

                                                        </tr>
                                                        <tr>
                                                            <th scope="row">OS</th>
                                                            <td>Window Server 2008/AIX
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">개발기술</th>
                                                            <td colspan="2">IIS/WebLogic/ORACLE
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">사용기술</th>
                                                            <td colspan="2">Struts1/JAVA/JSP
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">기타</th>
                                                            <td colspan="2">Struts1/JAVA/JSP
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="sidebar-wrap">
                                    <div class="sidebar-widget latest-post border-0 p-4 py-0 mb-3">
                                        <div class="media border-bottom pb-3" v-for="project in latest5">
                                            <nuxt-link :to="'/projects/' + project.id">
                                                <img class="mr-4" :src="project.image" :alt="project.image">
                                            </nuxt-link>
                                            <div class="media-body ml-3">
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
const { getProject, latest5 } = store;
const project = getProject(id as string);

if (!project) {
    throw new Error("Project Not Found");
}
</script>

<style lang="scss" scoped></style>