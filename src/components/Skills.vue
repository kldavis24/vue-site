<template>
    <div id="skills" class="black">
        <v-container fluid>
            <v-row no-gutters>
                <h1 class="display-2 font-weight-thin underline">things i'm good at</h1>
            </v-row>
            <v-container fluid class="py-12">
                <v-row data-aos="fade-up-left" data-aos-duration="1000" align="center" justify="space-around" class="mb-10" no-gutters>
                    <v-col class="text-center" id="php-holder">
                        <v-icon @mouseover="swapText" @mouseout="swapText" id="php" class="xxl cool-blue">mdi-language-php</v-icon>
                        <blockquote id="php-text" class="text--black overline font-weight-bold text-center title">duh</blockquote>
                    </v-col>
                    <v-col class="text-center" id="vue-holder">
                        <v-icon @mouseover="swapText" @mouseout="swapText" id="vue" class="xxl cool-blue">mdi-vuejs</v-icon>
                        <blockquote id="vue-text" class="text--black overline font-weight-bold text-center title">vue</blockquote>
                    </v-col>
                    <v-col class="text-center" id="react-holder">
                        <v-icon @mouseover="swapText" @mouseout="swapText" id="react" class="xxl cool-blue">mdi-react</v-icon>
                        <blockquote id="react-text" class="text--black overline font-weight-bold text-center title">react</blockquote>
                    </v-col>
                    <v-col class="text-center" id="laravel-holder">
                        <v-icon @mouseover="swapText" @mouseout="swapText" id="laravel" class="xxl cool-blue">mdi-laravel</v-icon>
                        <blockquote id="laravel-text" class="text--black overline font-weight-bold text-center title">laravel</blockquote>
                    </v-col>
                </v-row>
                <v-row data-aos="fade-up-right" data-aos-duration="1000" align="center" justify="space-around" class="mb-10" no-gutters>
                    <v-col class="text-center" id="drupal-holder">
                        <v-icon @mouseover="swapText" @mouseout="swapText" id="drupal" class="xxl cool-blue">mdi-drupal</v-icon>
                        <blockquote id="drupal-text" class="text--black overline font-weight-bold text-center title">drupal</blockquote>
                    </v-col>
                    <v-col class="text-center" id="js-holder">
                        <v-icon @mouseover="swapText" @mouseout="swapText" id="js" class="xxl cool-blue">mdi-language-javascript</v-icon>
                        <blockquote id="js-text" class="text--black overline font-weight-bold text-center title">common js</blockquote>
                    </v-col>
                    <v-col class="text-center" id="git-holder">
                        <v-icon @mouseover="swapText" @mouseout="swapText" id="git" class="xxl cool-blue">mdi-git</v-icon>
                        <blockquote id="git-text" class="text--black overline font-weight-bold text-center title">git</blockquote>
                    </v-col>
                    <v-col class="text-center" id="cli-holder">
                        <v-icon @mouseover="swapText" @mouseout="swapText" id="cli" class="xxl cool-blue">mdi-console</v-icon>
                        <blockquote id="cli-text" class="text--black overline font-weight-bold text-center title">cli</blockquote>
                    </v-col>
                </v-row>
                <v-row data-aos="fade-up-left" data-aos-duration="1000" align="center" justify="space-around" no-gutters>
                    <v-col class="text-center" id="html-holder">
                        <v-icon @mouseover="swapText" @mouseout="swapText" id="html" class="xxl cool-blue">mdi-language-html5</v-icon>
                        <blockquote id="html-text" class="text--black overline font-weight-bold text-center title">html</blockquote>
                    </v-col>
                    <v-col class="text-center" id="sql-holder">
                        <v-icon @mouseover="swapText" @mouseout="swapText" id="sql" class="xxl cool-blue">mdi-database</v-icon>
                        <blockquote id="sql-text" class="text--black overline font-weight-bold text-center title">sql</blockquote>
                    </v-col>
                    <v-col class="text-center" id="wp-holder">
                        <v-icon @mouseover="swapText" @mouseout="swapText" id="wp" class="xxl cool-blue">mdi-wordpress</v-icon>
                        <blockquote id="wp-text" class="text--black overline font-weight-bold text-center title">wordpress</blockquote>
                    </v-col>
                    <v-col class="text-center" id="css-holder">
                        <v-icon @mouseover="swapText" @mouseout="swapText" id="css" class="xxl cool-blue">mdi-language-css3</v-icon>
                        <blockquote id="css-text" class="text--black overline font-weight-bold text-center title">css</blockquote>
                    </v-col>
                </v-row>
            </v-container>
        </v-container>
    </div>
</template>

<script>
    export default {
        name: "Skills",

        data: () => ({
            isactive: false
        }),

        icons: {
            iconfont: 'fa',
        },

        methods: {
            swapText(event) {
                let skill = event.target.id
                let text = document.getElementById(`${skill}-text`)

                if (text.classList.contains('add-blue')) {
                    text.classList.remove('add-blue')
                    text.classList.add('add-black')
                } else {
                    text.classList.remove('add-black')
                    text.classList.add('add-blue')
                }
            }
        }
    }
</script>

<style scoped>
    .add-blue {
        color: #39B1FF;
        transition: all 500ms ease;
    }
    .add-black {
        color: #000;
        transition: all 500ms ease;
    }
</style>
