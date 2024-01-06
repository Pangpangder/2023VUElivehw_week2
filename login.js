import {createApp} from 'https://cdnjs.cloudflare.com/ajax/libs/vue/3.4.5/vue.esm-browser.min.js';
const url='https://ec-course-api.hexschool.io/v2';
const app={
    data(){
        return{
            userData:{
                username:'',
                password:''
            }
        }
    },
    methods:{
        login(){
          axios.post(`${url}/admin/signin`,this.userData)
          .then(res=>{
            const{expired,token,message}=res.data;
            document.cookie=`myToken=${token};expires=${new Date(expired)};path=/`;
            alert(message);
            window.location='products.html';
          })
          .catch(err=>{
            alert(err.data.message);
            this.userData.username='';
            this.userData.password='';
          });
        }
    }
}
createApp(app).mount('#app');