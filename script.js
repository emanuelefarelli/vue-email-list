const { createApp } = Vue;

createApp({
    data() {
        return {
            emailArray: [],
        }
    },

    methods:{


    },

    created(){
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then( (response) => {
            console.log('ok');
        });
    }
}).mount('#app');