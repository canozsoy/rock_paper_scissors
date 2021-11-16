<template>
    <div class="optionContainer">
        <div
            class="option"
            v-for="(item, index) in options"
            :key="index"
            :data-value="item.dataValue"
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
        upperCaseFirstLetter(val) {
            return val.charAt(0).toUpperCase() + val.slice(1);
        }
    }
}
</script>

<style lang="scss" scoped>
</style>