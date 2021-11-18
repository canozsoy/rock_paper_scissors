<template>
    <div class="optionContainer">
        <div
            class="option"
            v-for="(item, index) in options"
            :key="index"
            :data-value="item.dataValue"
            @click="playerRound"
        >
            <div :data-value="item.dataValue">
                <img
                    :data-value="item.dataValue"
                    :src="item.source"
                    :alt="item.dataValue"
                />
            </div>
            <div :data-value="item.dataValue">
                {{ upperCaseFirstLetter(item.dataValue) }}
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
    name: "OptionComponent",
    data: function () {
        return {
            options: [
                {
                    dataValue: "rock",
                    source: require("@/assets/rock.svg"),
                },
                {
                    dataValue: "paper",
                    source: require("@/assets/paper.svg")
                },
                {
                    dataValue: "scissors",
                    source: require("@/assets/scissors.svg")
                }
            ]
        }
    },
    methods: {
        ...mapActions(["playGame"]),
        upperCaseFirstLetter(val) {
            return val.charAt(0).toUpperCase() + val.slice(1);
        },
        playerRound(event) {
            const move = event.currentTarget.getAttribute("data-value");
            this.playGame(move);
        }
    }
}
</script>

<style lang="scss" scoped>
@import "@/assets/global";

.optionContainer {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    align-items: center;
    .option {
        padding: 20px;
        border: 2px solid $body-color;
        border-radius: 10px;
        transform: scale(1);
        transition: all 0.3s linear;
        margin: 20px;
        &:hover {
            transform: scale(1.1);
            transform-origin: center;
            cursor: pointer;
            border: 2px solid yellow;
        }
        img {
            object-fit: cover;
            width: 150px;
            height: 150px;
        }
    }
}
</style>