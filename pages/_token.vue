<template>
    <div
        :style="{
            maxWidth: '500px',
            width: '95%',
        }"
    >
        <WishCard v-bind="{ wish }" />
    </div>
</template>

<script>
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
                wish: response.data.payload,
            };
        } catch (error) {
            return {
                wish: {
                    name: null,
                    text: "I would like to wish you a very prosperous new year",
                },
            };
        }
    },
};
</script>
