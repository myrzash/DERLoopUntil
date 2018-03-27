<template>
    <v-layout column class="pa-2 pt-4 grey lighten-3">
        <v-flex xs12 md8 offset-md2 lg6 offset-lg3 xl4 offset-xl4>
            <h5>{{items.task}}</h5>
            <item-cycle v-for="code in codes" :items="code"></item-cycle>
        </v-flex>
    </v-layout>
</template>
<script>
    import ItemCycle from './ItemCycle.vue'

    export default {
        props: ['items'],
        data() {
            return {
                correct: 0,
                progress: 0,
                codes: [
                    'i=i+1; s=s+i*i; s;',
                    '{i=i+1;s=s+i*i;} s;',
                    '{s=s+i*i;i=i+1;} s;',
                    'i=i-1; s=s+i*i; s;',
                    '{i=i-1;s=s+i*i;} s;',
                    '{s=s+i*i;i=i-1;} s;',
                ]
            }
        },
        methods: {
            generate(string, isInc) {
                let params, s = Math.floor(Math.random() * 10);
                let n, i = 0;
                if (isInc) {
                    i = Math.floor(Math.random() * 5);
                    n = Math.floor(Math.random() * 3) + i + 2;
                    params = `i=${i}; while(i<${n})`;
                } else {
                    n = Math.floor(Math.random() * 2);
                    i = Math.floor(Math.random() * 3) + n + 2;
                    params = `i=${i}; while(i>${n})`;
                }
                return `s =${s};` + params + string;
            }
        },
        created() {
            this.codes = this.codes.map((item, index) => {
                return this.generate(item, index < 3);
            });
            this.$parent.shuffle(this.codes);
            this.$on('setResult', (correct) => {
                console.log('setResult', correct);
                this.correct += correct;
                this.progress++;

                if (this.progress == this.codes.length) {
                    setTimeout(() => {
                        this.$router.push({
                            name: 'res',
                            params: {result: this.correct / this.progress * 100, resId: this.$route.params.gameId}
                        });
                    }, 2000)
                }
            });
        },
        components: {
            ItemCycle
        },

    }
</script>

<style lang="stylus">
    .textField label, .textField input
        margin: 0 20px;
        font-size: 1.5em;

    .btnPlay
        left: 50%;
        top: 50%;
        margin-left: -28px;
        margin-top: -28px;

    .btnPause
        left: 50%;
        top: 50%;
        margin-left: -28px;
        margin-top: -28px;
        opacity: 0;
</style>