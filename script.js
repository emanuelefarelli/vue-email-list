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
        for(let i=0;i<10;i++){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((response) => {
                console.log('ok');
                const email = response.data;
                this.emailArray.push(email.response);
            });
        };
    }
}).mount('#app');