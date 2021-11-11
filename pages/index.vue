<template>
    <v-row
        class="text-center"
        :style="{
            width: '100%',
            maxWidth: '425px',
        }"
    >
        <v-col cols="12" class="greeting-text">Happy New Year</v-col>

        <v-col cols="12" class="instruction-text">
            Minim fugiat esse voluptate velit laborum quis et. Nisi nulla fugiat
            proident tempor proident commodo aute aliqua voluptate ad sint
            nostrud eiusmod.
        </v-col>

        <v-col cols="12" class="token-form">
            <v-text-field
                v-model="token"
                :loading="loading"
                :disabled="loading"
                xxxautofocus
                hint="Paste the token you were given here. Token is in the format '<name>-<password>'..."
                rounded
                outlined
                label="Token here"
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

        <v-dialog
            v-model="show_wish"
            :overlay-opacity="0.9"
            overlay-color="black"
            max-width="500"
        >
            <v-card class="birthday-card">
                <div id="birthday-shot">
                    <v-card-title class="text-h5 primary-text">
                        <v-img src="/Happy_New_Year_text.png"></v-img>
                    </v-card-title>

                    <v-card-text
                        class="d-flex flex-no-wrap justify-space-between px-2"
                    >
                        <div class="grey--text">
                            Dear {{ wish.name }},

                            <v-divider class="my-2"></v-divider>

                            {{ wish.text }}

                            <v-divider class="my-2"></v-divider>

                            <div class="text-right text-caption">
                                <v-icon left small>mdi-heart</v-icon>
                                Mayor
                            </div>
                        </div>

                        <v-img src="icon.jpg" contain width="45%"></v-img>
                    </v-card-text>
                </div>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn icon class="">
                        <v-icon class="gold-text"> mdi-content-copy </v-icon>
                    </v-btn>
                    <v-btn icon class="">
                        <v-icon class="gold-text"> mdi-download </v-icon>
                    </v-btn>
                    <v-btn icon class="">
                        <v-icon class="gold-text">
                            mdi-share-variant-outline
                        </v-icon>
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-row>
</template>

<script>
export default {
    name: "IndexPage",

    data() {
        return {
            loading: false,
            token: null,
            wish: {
                name: "Lorem Ipsum",
                text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.`,
            },
            show_wish: false,
        };
    },

    methods: {
        getWish() {
            this.show_wish = false;
            // this.wish = null;
            this.loading = true;

            setTimeout(() => {
                this.loading = false;
                // this.wish = {};
                this.show_wish = true;
            }, 1000);
        },
    },
};
</script>

<style>
.birthday-card {
    background: rgb(26, 21, 23);
    background: linear-gradient(
        13deg,
        rgb(26 21 23) 0%,
        rgba(17, 13, 14, 1) 100%
    );
}
</style>
