<template>
    <div class="scoreTableContainer">
        <div class="scoreTable">
            <p class="scoreTableText"></p>
            <button data-play="y">Yes!</button>
            <button data-play="n">No!</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "ScoreTableComponent"
}
</script>

<style lang="scss" scoped>
@import "@/assets/global";

.scoreTableContainer {
    display: none;
    position: fixed;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    background-color: rgba($color: #000000, $alpha: 0.4);
    .scoreTable {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 10px;
        width: 300px;
        height: 200px;
        padding: 20px;
        font-size: 20px;
        background-color: $body-color;
        color: #000;
        border-radius: 10px;
        p {
            color: $background-color;
        }
        button {
            color: $body-color;
            background-color: $background-color;
            outline: none;
            border: none;
            padding: 2px 20px;
            font-size: 16px;
            border-radius: 10px;
            &:hover {
                cursor: pointer;
                background-color: darkolivegreen;
            }
        }
    }
}
</style>