<template>
    <v-app dark>
        <!-- <v-app-bar fixed app>
            <v-toolbar-title> Happy New Year </v-toolbar-title>
        </v-app-bar> -->

        <v-main>
            <v-container
                :style="{
                    height: '100%',
                }"
                class="d-flex justify-center align-center"
            >
                <Nuxt />
            </v-container>
        </v-main>

        <v-footer app>
            <div
                class="grey--text ma-auto"
                :style="{
                    fontSize: '12px',
                }"
            >
                <span>
                    &copy; 2021
                    <a href="https://youngmayor.dev">Meyoron Aghogho</a>
                    All rights reserved.
                </span>
            </div>
        </v-footer>
    </v-app>
</template>

<script>
export default {
    data() {
        return {
            //
        };
    },
};
</script>
