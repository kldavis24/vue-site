<template>
    <div>
        <headroom tolerance="5" class="pinned">
            <v-toolbar class="darkbar">
                <v-toolbar-title>
                    {{ open }} <span class="cool-blue">{{ title }}</span> {{ close }}
                </v-toolbar-title>

                <div class="flex-grow-1"></div>

                <v-toolbar-items>
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
</style>
