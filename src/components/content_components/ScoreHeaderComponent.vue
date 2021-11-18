<template>
    <div class="scoreHeaderWrapper">
        <div id="scoreHeader">{{ getScoreMessage }}</div>
        <div class="score">
            <div>
                <div>You</div>
                <div id="userScore">{{ getPlayerScore }}</div>
                <div id="userMove">
                    <img
                        v-if="getPlayerMove"
                        :src="playerImage"
                        :alt="getPlayerMove"
                    />
                </div>
            </div>
            <div>
                <div>Computer</div>
                <div id="computerScore">{{ getComputerScore }}</div>
                <div id="computerMove">
                    <img
                        v-if="getComputerMove"
                        :src="computerImage"
                        :alt="getComputerMove"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    name: "ScoreHeaderComponent",
    computed: {
        ...mapGetters(["getPlayerScore", "getPlayerMove", "getComputerScore", "getComputerMove", "getScoreMessage"]),
        playerImage() {
            return require("@/assets/" + this.getPlayerMove + ".svg");
        },
        computerImage() {
            return require("@/assets/" + this.getComputerMove + ".svg");
        }
    }
}
</script>

<style lang="scss" scoped>
@import "@/assets/global";
#scoreHeader {
    font-size: 2.5rem;
}

.score {
    @include centered-flex;
    flex-wrap: wrap;
    gap: 100px;
    font-size: 2rem;
    div {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    #userMove,
    #computerMove {
        width: 100px;
        height: 100px;
        @media (max-width: $sm-media) {
            width: 40px;
            height: 40px;
        }
        img {
            object-fit: cover;
            width: 100px;
            height: 100px;
            @media (max-width: $sm-media) {
                width: 40px;
                height: 40px;
            }
        }
    }
    @media (max-width: $sm-media) {
        gap: 50px;
    }
}
</style>