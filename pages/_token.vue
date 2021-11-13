<template>
    <div
        :style="{
            maxWidth: '500px',
            width: '95%',
        }"
    >
        <canvas id="confetti-canvas"></canvas>

        <WishCard v-bind="{ wish }" />
    </div>
</template>

<script>
import ConfettiGenerator from "confetti-js";

export default {
    name: "WishPage",

    head() {
        return {
            title: this.wish.name,
        };
    },

    data: function () {
        return {
            wish: null,
        };
    },

    async asyncData(context) {
        try {
            let response = await context.$axios.get(
                `/api/wish/${context.params.token}`
            );
            return {
                wish: response.data.data,
            };
        } catch (error) {
            context.$toast.global.invalidToken();

            return {
                wish: {
                    name: null,
                    text: "I would like to wish you a very prosperous new year",
                },
            };
        }
    },

    mounted() {
        var confettiSettings = {
            target: "confetti-canvas",
            // start_from_edge: false,
            clock: 15,
            rotate: true,
        };
        var confetti = new ConfettiGenerator(confettiSettings);
        confetti.render();
    },
};
</script>

<style>
#confetti-canvas {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    /* z-index: 1; */
}
</style>
