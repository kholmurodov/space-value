<template>
    <div id="portfolio" class="our-portfolio section">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 offset-lg-3">
                    <div class="section-heading  wow bounceIn" data-wow-duration="1s" data-wow-delay="0.2s">
                        <h2>See What Our Agency <em>Offers</em> &amp; What We <span>Provide</span></h2>
                    </div>
                </div>
            </div>
            <div class="row">
                <div v-for="offer in offers" :key="offer.title" class="col-lg-3 col-sm-6 mb-5">
                    <a href="#">
                        <div class="item wow bounceInUp" data-wow-duration="1s" data-wow-delay="0.3s">
                            <div class="hidden-content">
                                <h4>{{ offer.title }}</h4>
                                <!-- <p>{{ offer.description }}</p> -->
                            </div>
                            <div class="showed-content">
                                <img v-if="offer.image" :src="offer.image" :alt="offer.title">
                                <img v-else src="assets/images/portfolio-image.png" :alt="offer.title">


                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const store = useOfferStore();
const { offers } = store;

</script>