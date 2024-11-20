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
                            <li class="scroll-to-section"><a href="#top" class="active">{{ $t("home") }}</a></li>
                            <li class="scroll-to-section"><a href="#about">{{ $t("aboutUs") }}</a></li>
                            <li class="scroll-to-section"><a href="#services">{{ $t("services") }}</a></li>
                            <li class="scroll-to-section"><a href="#portfolio">{{ $t("portfolio") }}</a></li>
                            <li class="scroll-to-section"><a href="#blog">{{ $t("blog") }}</a></li>
                            <li class="scroll-to-section">
                                <a href="#" @click.prevent="setLocale('en')">En</a>
                            </li>
                            <li class="scroll-to-section">
                                <a href="#" @click.prevent="setLocale('kr')">Kor</a>
                            </li>
                            <li class="scroll-to-section">
                                <div class="main-red-button"><a href="#contact">{{ $t("contactUs") }}</a></div>
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
const { setLocale } = useI18n()
</script>

<style scoped></style>
