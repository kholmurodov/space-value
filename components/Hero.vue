<template>
    <div class="main-banner wow fadeIn" id="top" data-wow-duration="1s" data-wow-delay="0.5s">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="row">
                        <div class="col-lg-6 align-self-center">
                            <div class="left-content header-text wow fadeInLeft" data-wow-duration="1s"
                                data-wow-delay="1s">
                                <h6>{{ $t("hero.intro") }} <span>{{ $t("hero.company") }}</span></h6>
                                <h2>We Make <em>Digital Ideas</em> &amp; <span>SEO</span> Marketing</h2>
                                <p>공간과가치 is specializes in creating, designing, and maintaining websites and web
                                    applications tailored to meet client needs, whether for businesses, organizations,
                                    or individuals.
                                </p>
                                <form id="search" action="#" method="GET">
                                    <fieldset>
                                        <input type="address" name="address" class="email"
                                            placeholder="Your website URL..." autocomplete="on" required>
                                    </fieldset>
                                    <fieldset>
                                        <button type="submit" class="main-button">Analyze Site</button>
                                    </fieldset>
                                </form>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="right-image wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.5s">
                                <img src="assets/images/banner-right-image.png" alt="team meeting">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>

</script>

<style></style>