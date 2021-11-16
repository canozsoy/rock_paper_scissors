<template>
    <div id="app">
        <header-component />
        <content-component />
        <footer-component />
        <score-table-component />
    </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import ContentComponent from "@/components/ContentComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import ScoreTableComponent from "@/components/ScoreTableComponent.vue";

export default {
    name: 'App',
    components: {
        HeaderComponent,
        ContentComponent,
        FooterComponent,
        ScoreTableComponent
    }
}
</script>

<style lang="scss">
</style>
