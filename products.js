import {createApp} from 'https://cdnjs.cloudflare.com/ajax/libs/vue/3.4.5/vue.esm-browser.min.js';
const app={
    data(){
        return {
          apiUrl:'https://ec-course-api.hexschool.io/v2',
          apiPath:'pangpang',
          products:[],
          tempProduct:{}
        }
    },
    methods:{
      checkLogin(){
        let url=`${this.apiUrl}/api/user/check`;
        axios.post(url)
        .then(res=>{
            this.getProducts();
        })
        .catch(err=>{
            alert(err.data.message);
            window.location='login.html'
        });
      },
      getProducts(){
        let url=`${this.apiUrl}/api/${this.apiPath}/admin/products`;
        axios.get(url)
        .then(res=>{
            this.products=res.data.products;
        })
        .catch(err=>{
            alert(err.data.message);
        });
      },
      openProduct(item){
         this.tempProduct=item;
         console.log(this.tempProduct);
      }
    },
    mounted(){
        const token=document.cookie.replace(/(?:(?:^|.*;\s*)myToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
        axios.defaults.headers.common['Authorization']=token;
        this.checkLogin();
    }
};
createApp(app).mount('#app');
//-Nn8GlQHWX6a3xNi9YCN
