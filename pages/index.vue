<template>
    <v-row
        class="text-center"
        :style="{
            width: '100%',
            maxWidth: '425px',
        }"
    >
        <v-col cols="12" class="greeting-text">
            <v-img src="/Happy_New_Year_text.png" contain></v-img>
        </v-col>

        <v-col cols="12" class="instruction-text">
            Hey there, I have a very special "Happy New Year" message for you.
            Input your token below to see it...
        </v-col>

        <v-col cols="12" class="token-form">
            <v-text-field
                v-model="token"
                :loading="loading"
                :disabled="loading"
                hint="Paste the token you were given here..."
                persistent-hint
                rounded
                outlined
                label="Enter token: <name>-<pin>"
                :append-icon="
                    (() => {
                        return loading
                            ? 'mdi-rotate-3d-variant mdi-spin'
                            : 'mdi-account-search';
                    })()
                "
                @click:append="getWish"
                @keypress.enter="getWish"
            ></v-text-field>
        </v-col>
    </v-row>
</template>

<script>
export default {
    name: "IndexPage",

    data() {
        return {
            loading: false,
            token: null,
        };
    },

    methods: {
        getWish() {
            if (this.token.length < 3) {
                // this.$swalToast.fire("Search String too short");
                return false;
            }
            let token = this.token.replace(/\s+/g, " ").trim();

            if (token.length < 3) {
                // this.$swalToast.fire("Search String too short");
                return false;
            }
            this.loading = true;
            return this.$router.push(`${token}`);
        },
    },
};
</script>
