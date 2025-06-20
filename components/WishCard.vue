<template>
    <v-card class="wish-card">
        <div id="wish-shot" class="">
            <v-card-title class="pa-1">
                <v-img contain src="/happy-newyear-banner.jpg"></v-img>
            </v-card-title>

            <v-card-text
                class="wish-content"
                :style="{
                    backgroundColor: '#171717',
                }"
            >
                <div
                    class="greeting-text"
                    v-if="wish.greeting && wish.greeting.length"
                >
                    {{ wish.greeting }},
                </div>

                <v-divider class="my-2"></v-divider>

                <div class="ma-n2">
                    <div
                        class="pa-0 float-right"
                        :style="{
                            width: '40%',
                        }"
                    >
                        <v-img
                            contain
                            src="/happy-new-year-happy-new-year-golden-metallic-numbers-date-2022.jpg"
                        ></v-img>
                    </div>

                    <div class="pa-4">
                        <div class="text-center">
                            {{ wish.text }}
                        </div>
                    </div>
                </div>

                <div class="hny-text text-center">
                    Happy New Year
                    <br />
                    {{ wish.name }}
                </div>

                <v-divider
                    class="my-2"
                    :style="{
                        clear: 'both',
                    }"
                ></v-divider>

                <div class="text-right text-caption">
                    With love <v-icon left right small>mdi-heart</v-icon> from
                    Mayor
                </div>
            </v-card-text>
        </div>

        <v-card-actions>
            <v-btn
                icon
                class=""
                @click="sendLove"
                v-if="!(loved || wish.loved)"
            >
                <v-icon :color="loved || wish.loved ? 'red' : 'grey'">
                    {{
                        processing
                            ? "mdi-rotate-3d-variant mdi-spin"
                            : "mdi-heart"
                    }}
                </v-icon>
            </v-btn>
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
            loved: false,
            processing: false,
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

        async sendLove() {
            this.processing = true;
            await this.$axios.post(`/api/wish/${this.wish.token}/love`);
            this.loved = true;
            this.processing = false;
        },
    },
};
</script>

<style>
.wish-content {
    font-family: "Slabo 27px" !important;
    line-height: 1.7;
    letter-spacing: 1.5px !important;
}

.hny-text {
    font-family: "Petemoss" !important;
    font-size: 42px;
    line-height: 1;
}

.greeting-text {
    font-family: "Petemoss";
    font-size: 40px;
    line-height: 1;
}
</style>
