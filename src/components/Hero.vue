<template>
    <div>
        <v-parallax dark height="500" src="frontiers-background-full.jpg">
            <v-row v-show="show" :transition="fade" no-gutters justify="center" id="quote" align="center">
                <h1 class="display-2 font-weight-thin mb-4">"{{ selected.text }}"</h1>
                <h4 class="subheading"> - {{ selected.author }}</h4>
            </v-row>
        </v-parallax>
    </div>
</template>

<script>
    export default {
        name: "Hero",

        mounted() {
            this.selectQuote()
            this.transitionQuote()
        },

        data: () => ({
            quotes: [
                { text: 'life is too short to run proprietary software.', author: 'bdale garbee' },
                { text: 'if the code and the comments do not match, possibly both are incorrect.', author: 'norm schryer' },
                { text: 'simplicity, carried to the extreme, becomes elegance.', author: 'jon franklin' }
            ],
            selected: [],
            show: true,
            fade: 'fade'
        }),

        methods: {
            selectQuote() {
                let selector = Math.floor(Math.random() * 3)
                let quotes = this.quotes

                this.selected = quotes[selector]
            },
            transitionQuote() {
                let self = this
                setInterval(function() {
                    self.show = false
                    self.selectQuote()
                    self.show = true
                }, 10000)
            }
        }
    }
</script>

<style scoped>
    .bounce-transition {
        display: inline-block; /* otherwise scale animation won't work */
    }
    .bounce-enter {
        animation: bounce-in .5s;
    }
    .bounce-leave {
        animation: bounce-out .5s;
    }
    @keyframes bounce-in {
        0% {
            transform: scale(0);
        }
        50% {
            transform: scale(1.5);
        }
        100% {
            transform: scale(1);
        }
    }
    @keyframes bounce-out {
        0% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.5);
        }
        100% {
            transform: scale(0);
        }
    }
</style>
