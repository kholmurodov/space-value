<template>
    <header class="header-area header-sticky wow slideInDown" data-wow-duration="0.75s" data-wow-delay="0s">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <nav class="main-nav">
                        <nuxt-link to="/" class="logo">
                            <img class="logo-img" src="assets/images/logo.jpg" alt="logo">
                        </nuxt-link>

                        <ul class="nav">
                            <li class="scroll-to-section"><a href="#top" class="active">{{ $t("navbar.home") }}</a></li>
                            <li class="scroll-to-section"><a href="#about">{{ $t("navbar.aboutUs") }}</a></li>
                            <li class="scroll-to-section"><a href="#services">{{ $t("navbar.services") }}</a></li>
                            <li class="scroll-to-section"><a href="#portfolio">{{ $t("navbar.portfolio") }}</a></li>
                            <li class="scroll-to-section"><a href="#blog">{{ $t("navbar.blog") }}</a></li>
                            <li>
                                <a v-if="localeProperties.code == 'kr'" href="#multilang"
                                    @click.prevent="setLocale('en')">Eng</a>
                                <a v-else href="#multilang" @click.prevent="setLocale('kr')">한국어</a>
                            </li>
                            <li class="scroll-to-section">
                                <div class="main-red-button"><a href="#contact">{{ $t("navbar.contactUs") }}</a></div>
                            </li>
                        </ul>
                        <a class='menu-trigger'>
                            <span>{{ $t("menu") }}</span>
                        </a>
                    </nav>
                </div>
            </div>
        </div>
    </header>
</template>

<script setup lang="ts">
const { setLocale, localeProperties } = useI18n();
</script>

<style scoped></style>
