<template>
  <div>
    <NavBar/>
    <div class="container">
      <div class="flex justify-between md:mt-12 mt-3 pt-2 pb-3" style="border-top:2px solid #d1d5db;">
        <h3 style="margin-top: -31px; height: 40px; text-transform: uppercase; font-size:24px; font-weight:500;" class="bg-indigo-600 text-zinc-50 font-semibold mr-2 px-8 py-0.5 rounded">{{categoryName}}</h3>
      </div>

      <agile v-if="banners!=undefined && banners.length>0" autoplay :infinite="true" :autoplay-speed="4000">
        <div v-for="(banner, index) in banners" :key="index" class="slide">
          <img style="cursor: pointer;" @click="clicAd(banner)" :src="banner.image_url"/>
        </div>
      </agile>
      
      <div v-if="posts!=undefined && posts.data!=undefined && posts.data.length>0" class="grid grid-cols-4 mt-12 mb-12 gap-4">
          <div v-for="(post, index) in posts.data" v-bind:key="index" class="text-align-center mb-4 mr-3 ml-3 md:col-span-1 col-span-2 post-style">
              <a :href="'/noticias/'+post.slug">
                  <div :style="'background-image:url(' + post.featured_media_path + '); background-repeat: no-repeat; background-size: cover; height:150px;'"></div>
                  <p style="font-size:12px; padding:5px 15px;" class="mb-1 mt-1 text-gray-500 rounded-lg">{{ post.date }}</p>
                  <h4 style="font-weight:600; line-height:22px; font-size:18px; padding:0px 15px 0px 15px">{{ post.title }}</h4>
                  <p style="line-height:20px; font-size:14px; margin-top:5px; padding:0px 15px 15px 15px">{{ post.short_description }}</p>
              </a>
          </div>
      </div>

      <div class="flex flex-col items-center">
        <!-- Help text -->
        <span class="text-sm text-gray-700">
            Página <span class="font-semibold text-gray-900">{{current_page}}</span> de <span class="font-semibold text-gray-900">{{(total_posts/15).toFixed(0)}}</span> de <span class="font-semibold text-gray-900">{{total_posts}}</span> Noticias
        </span>
        <div class="inline-flex mt-2 xs:mt-0">
          <!-- Buttons -->
          <button v-if="current_page>1" class="inline-flex items-center px-4 py-2 text-sm font-medium" @click="current_page = current_page - 1">
              <svg aria-hidden="true" class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd"></path></svg>
              Anterior
          </button>
          <button v-if="current_page<(total_posts/15).toFixed(0)" class="inline-flex items-center px-4 py-2 text-sm font-medium" @click="current_page = current_page + 1">
              Siguiente
              <svg aria-hidden="true" class="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          </button>
        </div>
      </div>

      <agile v-if="banners2!=undefined && banners2.length>0" autoplay :infinite="true" :autoplay-speed="4000">
        <div v-for="(banner, index) in banners2" :key="index" class="slide">
          <img style="cursor: pointer;" @click="clicAd(banner)" :src="banner.image_url"/>
        </div>
      </agile>
      

    </div>
    <Footer/>
  </div>
</template>
<script>
import axios from "axios"
export default {
  data(){
    return{
      posts:[],
      current_page:1
    }
  },
  watch:{
    current_page:{
      handler(){
        this.getPosts()
      }, deep:true
    },
    categoryName:{
      handler(){
        this.getPosts()
      }, deep:true
    }
  },
  async asyncData({ params }) {
    function convertToJson(response){
      if(response.headers.get('content-type')=='application/json'){
        return response.json()
      }else{
        return []
      }
    };
    const banners = await fetch(
      `https://gv.unocrm.mx/api/v1/display_ad?filter[is_in_time]=true&filter[is_in_hour]=true&filter[position]=Categoría&itemsPerPage=3`,{ method: 'GET', headers: {'Content-Type': 'application/json'}}
    ).then((res) => convertToJson(res))//.json())

    const banners2 = await fetch(
      `https://gv.unocrm.mx/api/v1/display_ad?filter[is_in_time]=true&filter[is_in_hour]=true&filter[position]=Categoría&itemsPerPage=3`,{ method: 'GET', headers: {'Content-Type': 'application/json'}}
    ).then((res) => convertToJson(res))//.json())

    
      
    /*const posts = await axios.get(
      `https://gv.unocrm.mx/api/v1/news?filter[Categories.name]=${params.slug}&filter[visibility->web]=true`,{ method: 'GET', headers: {'Content-Type': 'application/json'}}
    ).then(res=>{
      return res.data
    })*/
    

    return { banners2, banners } //posts
  },
  created(){
    this.getPosts()
  },
  methods: {
    getPosts(){
      axios.get('https://gv.unocrm.mx/api/v1/news?filter[Categories.name]=' + this.categoryName + '&filter[visibility->web]=true&page=' + this.current_page,{ method: 'GET', headers: {'Content-Type': 'application/json'}}
      ).then(res=>{
        this.posts = res.data
        this.total_posts = res.data.meta.total
      })
    },
    clicAd(ad){
      fetch('https://gv.unocrm.mx/api/v1/click_ad/').then(response =>{
        window.open(ad.url, '_blank');
      });
    },
  },
  computed:{
    categoryName(){
      return this.$route.params.slug
    }
  }
}
</script>
<style scoped>@media (max-width: 800px) {
    .text-align-center{
        text-align: center;
    }
}
.post-style{
    background: #fbfbfb;
    box-shadow: rgb(0 0 0 / 20%) 0px 3px 1px -2px, rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px;
    margin: 0px 10px;
    padding: 0px!important;
}
@media (max-width: 800px) {
      .container{
          margin-top:80px!important;
      }
  }
  .container {
      margin: auto;
      padding: 1em!important;
      max-width: 120ch!important;
      margin-top:126px;
  }
</style>