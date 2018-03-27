<template>
    <div>
        <v-layout class="pa-4" column>

            <v-flex class="pl-4 pr-4 pt-4" xs12 md10 offset-md1 lg8 offset-lg2 xl6 offset-xl3>
                <h4 class="bolder">{{items.title}}</h4>
            </v-flex>
            <v-flex class="pl-4 pr-4 pt-5" v-for="excess in items.excesses.data" xs12 md10 offset-md1 lg8 offset-lg2 xl6
                    offset-xl3>
                <find-to-match :data="excess"></find-to-match>
            </v-flex>
            <v-flex class="pl-4 pr-4 pt-5" xs12 md10 offset-md1 lg8 offset-lg2 xl6 offset-xl3>
                <h4 class="bolder">{{items.title2}}</h4>
            </v-flex>
            <v-flex class="pa-0 pl-4 pr-4 pb-5" xs12 md10 offset-md1 lg8 offset-lg2 xl6 offset-xl3>

                <div class="font700 display-1 light-blue--text text--darken-3">
                    <p>procedure <span
                            class="font300 black--text mr-1 ml-1">TForm1.Button1Click(Sender: TObject);</span>
                        <br><span>var <span class="font300 black--text">x,y</span>:integer;</span></p>
                    <p>begin</p> <span class="font300 black--text">y:=1; x:=15;</span>
                    <br><span>Repeat</span>
                    <br><span class="font300 black--text">y:=y*x;<br>x:=x-3</span>
                    <br><span>Until</span><span class="font300 ml-2 black--text">x<5;</span>
                    <br><label class="font300 black--text">Application.ProcessMessages;
                    <br>sleep(100);
                    <br>Label1.Caption:=IntToStr(y);</label>
                    <br><br><span>end;</span></div>
                <v-layout row wrap class="mt-4">
                    <v-spacer class="hidden-md-and-down"></v-spacer>
                    <v-text-field :disabled="correctInput== answer2" :label="$lang.string.answer" v-model="answer2"
                                  class="mytextField"></v-text-field>
                    <v-fab-transition>
                        <v-btn v-if="correctInput== answer2" large icon success dark>
                            <v-icon>check</v-icon>
                        </v-btn>
                    </v-fab-transition>
                </v-layout>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
    import FindToMatch from './FindToMatch.vue'

    export default {
        props: ['items'],
        components: {
            FindToMatch
        },
        data() {
            return {
                answer2: '',
                attempt: 0,
                progress: 0,
                correctInput: '9720',
                correctExcesses: []
            }
        },
        created() {
            this.attempt = 0;
            this.progress = 0;
            this.$on('setResult', (resultKey) => {
                console.log("setResult Pair: ", resultKey);
                this.correctExcesses.push(resultKey);
                this.gameOver();
            });
            this.progress = 0;
        },
        watch: {
            answer2(val) {
                if (val == this.correctInput)
                    this.gameOver()
            }
        },
        methods: {
            getResultMatch() {
                let max = this.items.excesses.data.length;
                if (this.correctExcesses.length == max) {
                    let countCorrect = this.correctExcesses.filter((item) => {
                        return item == true
                    }).length;
                    let result = countCorrect / max * 100;
                    result = result > 100 ? 100 : result;
                    result = result < 0 ? 0 : result;
                    console.log("getResultMatch: ", result);
                    return result;
                }
                return -1;
            },
            gameOver() {
                if (this.correctInput == this.answer2 && this.getResultMatch() >= 0) {
                    let result = 40 + this.getResultMatch() * 0.6;
                    console.log("WIN", result);
                    setTimeout(() => {
                        this.$router.push({
                            name: 'res',
                            params: {result: result, resId: this.$route.params.gameId}
                        });
                    }, 1200)
                }
            }
        }
    }

</script>

<style lang="stylus">
    .mytextField
        height 100px !important;

    .mytextField input
        font-size 2em;

    .mytextField label
        font-size 2em;
</style>