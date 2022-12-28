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
      
      <div v-if="posts!=undefined && posts.data.length>0" class="grid grid-cols-4 mt-12 mb-12 gap-4">
          <div v-for="(post, index) in posts.data" v-bind:key="index" class="text-align-center mb-4 mr-3 ml-3 md:col-span-1 col-span-2 post-style">
              <a :href="'/noticias/'+post.slug">
                  <div :style="'background-image:url(' + post.featured_media_path + '); background-repeat: no-repeat; background-size: cover; height:150px;'"></div>
                  <p style="font-size:12px; padding:5px 15px;" class="mb-1 mt-1 text-gray-500 rounded-lg">{{ post.date }}</p>
                  <h4 style="font-weight:600; line-height:22px; font-size:18px; padding:0px 15px 0px 15px">{{ post.title }}</h4>
                  <p style="line-height:20px; font-size:14px; margin-top:5px; padding:0px 15px 15px 15px">{{ post.short_description }}</p>
              </a>
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
export default {
  async asyncData({ params }) {
    function convertToJson(response){
      if(response.headers.get('content-type')=='application/json'){
        return response.json()
      }else{
        return []
      }
    };
    const banners = await fetch(
      `https://gv.unocrm.mx/api/v1/display_ad?filter[is_in_time]=true&filter[is_in_hour]=true&filter[position]=Categoría&itemsPerPage=3`
    ).then((res) => convertToJson(res))//.json())

    const banners2 = await fetch(
      `https://gv.unocrm.mx/api/v1/display_ad?filter[is_in_time]=true&filter[is_in_hour]=true&filter[position]=Categoría&itemsPerPage=3`
    ).then((res) => convertToJson(res))//.json())

    const posts = await fetch(
      `https://gv.unocrm.mx/api/v1/news?filter[Categories.name]=${params.slug}&filter[visibility->web]`
    ).then((res) => convertToJson(res))//.json())

    return { banners2, banners, posts }
  },
  methods: {
    clicAd(ad){
      fetch('https://gv.unocrm.mx/api/v1/click_ad/' + ad.id).then(response =>{
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