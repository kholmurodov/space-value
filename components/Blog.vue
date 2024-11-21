<template>
    <div id="blog" class="our-blog section">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.25s">
                    <div class="section-heading">
                        <h2>Check Out What Is <em>Trending</em> In Our Latest <span>News</span></h2>
                    </div>
                </div>
                <div class="col-lg-6 wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.25s">
                    <div class="top-dec">
                        <img src="assets/images/blog-dec.png" alt="">
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-6 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.25s" v-if="latest">
                    <div class="left-image">
                        <a href="#">
                            <img v-if="latest.image" :src="latest.image" :alt="latest.title">
                            <img v-else src="/assets/images/big-blog-thumb.jpg" :alt="latest.title">
                        </a>
                        <div class="info">
                            <div class="inner-content">
                                <ul>
                                    <li>
                                        <span><font-awesome :icon="['fas', 'calendar']" /></span>
                                        {{ formatDate(latest.createdAt) }}
                                    </li>
                                    <li v-for="tag in latest.tags" :key="tag">
                                        <span><font-awesome :icon="['fas', 'user']" /> </span>{{ tag }}
                                    </li>
                                </ul>
                                <a href="#">
                                    <h4 v-html="latest.title"></h4>
                                </a>
                                <p>{{ latest.description }}</p>
                                <div class="main-blue-button">
                                    <a href="#">Discover More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.25s">
                    <div class="right-list">
                        <ul>
                            <li v-for="blog in blogs" :key="blog.id">
                                <div class="left-content align-self-center">
                                    <span><font-awesome :icon="['fas', 'calendar']" />
                                        <span class="date">{{ formatDate(blog.createdAt) }}</span>
                                    </span>
                                    <a href="#">
                                        <h4 v-html="blog.title"></h4>
                                    </a>
                                    <p>{{ blog.description }}</p>
                                </div>
                                <div class="right-image">
                                    <a href="#">
                                        <img v-if="blog.image" :src="blog.image" :alt="blog.title">
                                        <img v-else src="/assets/images/blog.jpg" :alt="blog.title">
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const store = useBlogStore();
const { latest, blogs } = store;

function formatDate(date: Date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;

    return [year, month, day].join('-');
}
</script>

<style lang="scss" scoped></style>