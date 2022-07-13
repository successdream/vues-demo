const myMixIn = {
    data() {
        return {
            myMixInCount: 230
        }
    },
    mounted() {
        // console.log('我是myMinxIn的mounted')
        // console.log(this.count, this.listRef , 'myMinIn-mounted')
    },

    watch:{
        listRef(val) {
            // console.log(val, 'myMinIn-watch')
        }
    }


}

export default myMixIn;