<template>
    <div class="scoreHeaderWrapper">
        <div id="scoreHeader">Score</div>
        <div class="score">
            <div>
                <div>You</div>
                <div id="userScore">0</div>
                <div id="userMove"></div>
            </div>
            <div>
                <div>Computer</div>
                <div id="computerScore">0</div>
                <div id="computerMove"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ScoreHeaderComponent"
}
</script>

<style lang="scss" scoped>
</style>