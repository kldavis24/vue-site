<template>
    <v-app>
        <v-content transition="slide-x-transition">
            <div v-if="commandLine">
                <CommandLine />
            </div>
            <div v-if="commandEnd">
                <Navigation />
                <Hero />
                <Background />
                <Skills />
                <Work />
                <Contact />
            </div>
        </v-content>
    </v-app>
</template>

<script>
    import Work from './components/Work'
    import Hero from './components/Hero'
    import Skills from './components/Skills'
    import Contact from './components/Contact'
    import Navigation from './components/Navigation'
    import Background from './components/Background'
    import CommandLine from './components/CommandLine'

    export default {
        name: 'app',

        mounted() {
            this.checkForCookie()
        },

        components: {
            Hero,
            Skills,
            Navigation,
            Work,
            Contact,
            Background,
            CommandLine
        },

        data() {
            return {
                commandLine: true,
                commandEnd: false
            };
        },

        methods: {
            transitionTiming() {
                let self = this;

                setTimeout(function() {
                    self.commandLine = false;
                    self.commandEnd = true;
                    this.$cookies.set('commandSeen', true, 60 * 60)
                }, 14000);
            },

            checkForCookie() {
                let value = this.$cookies.get('commandSeen')

                if (value === 'true') {
                    this.commandLine = false
                    this.commandEnd = true
                } else {
                    this.transitionTiming()
                }
            }
        }
    }
</script>

<style>
    /* WIDTHS */
    .w-half {
        width: 50%;
    }
    .w-one-third {
        width: 33.333%;
    }
    .w-one-quarter {
        width: 25%;
    }
    /* END WIDTHS */

    /* COLORS */
    h1 {
        color: #fff;
    }
    .cool-blue {
        color: #39B1FF !important;
    }
    .bg-red-500 {
        background-color: #f56565;
    }
    .text-red-500 {
        color: #f56565;
    }
    .bg-red-100 {
        background-color: #fff5f5;
    }
    .border-red-400 {
        border: 1px solid #fc8181;
    }
    .bg-green-500 {
        background-color: #48bb78;
    }
    .text-green-500 {
        color: #48bb78;
    }
    .bg-green-100 {
        background-color: #f0fff4;
    }
    .border-green-400 {
        border: 1px solid #68d391;
    }
    .bg-grey {
        background-color: #7a7a7a;
    }
    .bg-black {
        background-color: #000;
    }
    .underline {
        border-bottom: 1px solid #39B1FF;
    }
    .text-white {
        color: #fff;
    }
    /* END COLORS */

    /* DISPLAY */
    .pb-4 {
        padding-bottom: 4rem;
    }
    .text-center {
        text-align: center;
    }
    .inline {
        display: inline-block;
    }
    .px-4 {
        padding-left: 1rem;
        padding-right: 1rem;
    }
    .py-2 {
        padding-top: .5rem;
        padding-bottom: .5rem;
    }
    .row {
        margin-left: 0 !important;
        margin-right: 0 !important;
    }
    .pt-0 {
        padding-top: 0;
    }
    /* END DISPLAY */

    /* BORDERS */
    .rounded-t {
        border-top-right-radius: .25rem;
        border-top-left-radius: .25rem;
    }
    .rounded-b {
        border-bottom-right-radius: .25rem;
        border-bottom-left-radius: .25rem;
    }
    .border-t-0 {
        border-top-width: 0;
    }
    /* END BORDERS */

    /* FONTS */
    .xxl {
        font-size: 70px !important;
    }
    .font-bold {
        font-weight: 800;
    }
    /* END FONTS */

    /* MEDIA QUERIES */
    @media screen and (max-width: 500px) {
        .terminal {
            margin: 0;
            top: 25%;
        }
    }
</style>
