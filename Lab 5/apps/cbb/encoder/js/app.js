var app = new Vue({
    el: '#baseband-encoder',
    data: {
        bits: [],
        encodedBits: [],
        status: '',
        numberOfBits: 8,
        validateBit: validateBit
    },
    created: function () {
        this.bits = getBitstream(this.numberOfBits);
    },
    methods: {
        encode: function(){
            this.encodedBits = getManchesterLevelEncoding(this.bits);
        },
        encode_NRZ:function(){
            this.encodedBits= getNonReturnZero_M(this.bits)
        }
    }
})

console.log('🍓🥑🍏☕🏆⚽✅🚦');