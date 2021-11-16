<template>
    <div class="content">
        <div class="question">
            Choose Your Move
        </div>
        <option-component />
        <score-header-component />
    </div>
</template>

<script>
import OptionComponent from "@/components/content_components/OptionComponent.vue";
import ScoreHeaderComponent from "@/components/content_components/ScoreHeaderComponent.vue";

export default {
    name: "ContentComponent",
    components: {
        OptionComponent,
        ScoreHeaderComponent
    }
}
</script>

<style lang="scss" scoped>

</style>