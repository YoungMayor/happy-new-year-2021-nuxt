<template>
    <v-card class="wish-card black">
        <div id="wish-shot" class="black">
            <v-card-title class="pa-1">
                <v-img
                    contain
                    src="/happy-new-year-2022-with-golden-waves-golden-sparkles-black-background.jpg"
                ></v-img>
            </v-card-title>

            <v-card-text
                class="text-body-1 grey--text"
                xxxstyle="{
                    color: '#b68733 !important',
                }"
            >
                <template v-if="wish.name && wish.name.length">
                    Dear {{ wish.name }},
                </template>

                <v-divider class="my-2"></v-divider>

                <div class="text-center">
                    {{ wish.text }}
                </div>

                <v-divider class="my-2"></v-divider>

                <div class="text-right text-caption">
                    <v-icon left small>mdi-heart</v-icon>
                    Mayor
                </div>
            </v-card-text>
        </div>

        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn icon class="" @click="copyText">
                <v-icon class="gold-text"> mdi-content-copy </v-icon>
            </v-btn>
            <v-btn icon class="" @click="downloadCard">
                <v-icon class="gold-text"> mdi-download </v-icon>
            </v-btn>
            <v-btn icon class="" @click="shareCard">
                <v-icon class="gold-text"> mdi-share-variant-outline </v-icon>
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
import copy from "copy-to-clipboard";
import webshot from "@youngmayor/webshot";

export default {
    name: "WishCard",

    props: {
        wish: {
            required: true,
            type: Object,
        },
    },

    data() {
        return {
            appURL: window.location.origin,
        };
    },

    methods: {
        __getWishText() {
            return `Dear ${this.wish.name}, \n\n${this.wish.text}\n\n\nLove - Mayor`;
        },

        copyText() {
            const content = this.__getWishText();

            copy(content, {
                debug: true,
                message: "Press #{key} to copy",
            });
        },

        downloadCard() {
            return webshot.download(
                `wish-shot`,
                `Happy New Year ${this.wish.name}.jpg`
            );
        },

        shareCard() {
            return webshot.share(`wish-shot`, `hny2022-${this.wish.name}.jpg`, {
                title: "Happy New Year",
                text: "Mayor wishes you a very happy year this 2022",
            });
        },
    },
};
</script>

<style>
/*  */
</style>
