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
                            <div class="col-lg-8 mb-5">
                                <div class="single-blog-item bg-white">

                                    <div class="blog-item-meta py-1 px-2 mt-1 btn-flex">
                                        <span class="text-black text-capitalize mr-3">
                                            <p>{{ project.description }}</p>
                                        </span>
                                    </div>

                                    <div class="blog-item-meta py-2 px-2 mt-2 btn-flex">
                                        <img class="img-fluid rounded" :src="project.image" :alt="project.title">
                                    </div>

                                    <div class="blog-item-meta py-2 px-2 mt-2 btn-flex">
                                        <table class="table">
                                            <tbody>
                                                <tr>
                                                    <th scope="row">발주처</th>
                                                    <td>{{ project.client }}
                                                    </td>

                                                </tr>
                                                <tr>
                                                    <th scope="row">OS</th>
                                                    <td>{{ project.os }}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">개발기술</th>
                                                    <td colspan="2">{{ project.technology }}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">사용기술</th>
                                                    <td colspan="2">{{ project.develop }}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">기타</th>
                                                    <td rowspan="4">
                                                        <ul class="px-0">
                                                            <li>
                                                                3,000여 창고업체 정보 수집 및 DB 구축
                                                            </li>
                                                            <li>
                                                                견적, 역경매, 계약서 작성 지원
                                                            </li>
                                                            <li>
                                                                물류직거래장터 OPEN API
                                                            </li>
                                                            <li>
                                                                전자서명/결제/전자세금계산서 솔루션도입
                                                            </li>
                                                            <li>
                                                                웹앱 제작 및 DAUM MAP 적용
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