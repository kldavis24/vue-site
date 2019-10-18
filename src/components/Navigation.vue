<template>
    <div>
        <headroom tolerance="5" class="pinned">
            <v-toolbar class="darkbar">
                <v-toolbar-title>
                    {{ open }} <span class="cool-blue">{{ title }}</span> {{ close }}
                </v-toolbar-title>

                <div class="flex-grow-1"></div>

                <v-menu
                    bottom
                    origin="center center"
                    transition="scale-transition"
                >
                    <template v-slot:activator="{ on }">
                        <v-app-bar-nav-icon
                            color="white"
                            dark
                            class="hidden-md-and-up"
                            v-on="on"
                        ></v-app-bar-nav-icon>
                    </template>

                    <v-list>
                        <v-list-item>
                            <v-list-item-title v-scroll-to="'#skills'">skills</v-list-item-title>
                        </v-list-item>
                        <v-list-item>
                            <v-list-item-title v-scroll-to="'#work'">work</v-list-item-title>
                        </v-list-item>
                        <v-list-item>
                            <v-list-item-title v-scroll-to="'#contact'">contact</v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>

                <v-toolbar-items class="hidden-md-and-down">
                    <v-btn text v-scroll-to="'#skills'"><span class="darkbar">skills</span></v-btn>
                    <v-btn text v-scroll-to="'#work'"><span class="darkbar">work</span></v-btn>
                    <v-btn text v-scroll-to="'#contact'"><span class="darkbar">contact</span></v-btn>
                </v-toolbar-items>
            </v-toolbar>
        </headroom>
    </div>
</template>

<script>
    import { headroom } from 'vue-headroom'

    export default {
        name: "Navigation",

        components: {
            headroom
        },

        data: () => ({
            title: 'kevin_davis',
            open: '{{',
            close: '}}'
        })
    }
</script>

<style scoped>
    .darkbar {
        background-color: #272626 !important;
        color: #fff !important;
    }
    .theme--light.v-list-item:not(.v-list-item--active):not(.v-list-item--disabled) {
        color: #39B1FF !important;
    }
    .theme--light.v-list {
        background: #000;
        color: #39B1FF;
    }
</style>
