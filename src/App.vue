<template>
    <div id="app">
        <header-component />
        <content-component />
        <footer-component />
        <score-table-component v-if="getGameEnd" />
    </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import ContentComponent from "@/components/ContentComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import ScoreTableComponent from "@/components/ScoreTableComponent.vue";
import { mapGetters } from "vuex";

export default {
    name: 'App',
    components: {
        HeaderComponent,
        ContentComponent,
        FooterComponent,
        ScoreTableComponent
    },
    computed: {
        ...mapGetters(["getGameEnd"])
    }
}
</script>

<style lang="scss">
@import "@/assets/global";

#app {
    min-width: 100%;
    min-height: 100%;
    @include centered-column-flex;
}
</style>
