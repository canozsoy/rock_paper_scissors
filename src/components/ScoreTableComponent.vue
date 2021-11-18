<template>
    <div class="scoreTableContainer">
        <div class="scoreTable">
            <p class="scoreTableText">{{ result }}</p>
            <button @click="resetScores">Yes!</button>
            <button @click="closeWindow">No!</button>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
    name: "ScoreTableComponent",
    computed: {
        ...mapGetters(["getPlayerScore", "getComputerScore"]),
        result() {
            return (this.getPlayerScore > this.getComputerScore ?
                "You Won!" :
                this.getPlayerScore < this.getComputerScore ?
                    "You Lost!" :
                    "It's a Tie!")
                + " Wan't to Play Again?";
        }
    },
    methods: {
        ...mapActions(["resetScores"]),
        closeWindow() {
            document.querySelector(".scoreTableContainer").style.display = "none";
        }
    }
}
</script>

<style lang="scss" scoped>
@import "@/assets/global";

.scoreTableContainer {
    position: fixed;
    width: 100%;
    height: 100%;
    display: flex;
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
            padding: 10px 20px;
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