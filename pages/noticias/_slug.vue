<template>
  <!--article-->  
  <div v-if="post!=undefined&&post.data!=undefined">
    <NavBar/>
    
    <SocialHead
    :title="post.data[0].title"
    :description="post.data[0].short_description"
    :image="post.data[0].featured_media_path"/>

    <div class="container">
      <h3 style="text-transform: uppercase; font-size:24px; font-weight:500;" class="font-semibold md:mt-5 height-50px">{{post.data[0].title}}</h3>
      <div class="hidden justify-between mt-0 pt-0 pb-6 md:flex" style="border-top:2px solid #d1d5db;"></div>

      <div class="grid grid-cols-2  md:grid-cols-3 mb-12 pb-12 gap-3">
          <div class="md:col-span-2 col-span-2 md:mr-12 md:pr-12">
              <img class="ion-justify-content-start mb-2" style="width:800px; height:auto;" :src="post.data[0].featured_media_path"/>
              <span style="font-size:16px;">Publicado el <strong>{{ post.data[0].date }}</strong></span> <!--por <strong>{{author}}</strong-->

              <div class="htmlcontent my-6" v-html="htmlContent(post.data[0])"></div>
              <strong style="font-size:14px;">Siguenos en Redes Sociales:</strong>
              <div class="flex mt-2 space-x-6">
                  <a target=”_blank” href="https://www.facebook.com/GAMAVISIONmx" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd"></path></svg>
                      <span class="sr-only">Facebook</span>
                  </a>
                  <a target=”_blank” href="https://www.instagram.com/GAMAVISIONmx" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd"></path></svg>
                      <span class="sr-only">Instagram</span>
                  </a>
                  <a target=”_blank” href="https://twitter.com/GAMAVISIONmx" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg>
                      <span class="sr-only">Twitter</span>
                  </a>
              </div>
          </div>
          <div class="md:col-span-1 col-span-2" v-if="posts_by_category!=undefined && posts_by_category.data!=undefined && posts_by_category.data.length>0">
              <div class="pb-6 mt-6 md:mt-0">
                  <strong >Relacionado</strong>
              </div> 
              <div v-for="(pbc, index) in posts_by_category.data" v-bind:key="index" class="mb-6 md:mb-0">
                  <a :href="'/noticias/'+pbc.slug">

                      <div class="grid grid-cols-3 md:grid-cols-2 mb-4 gap-2">
                          <div class="col-span-1 md:col-span-1">
                              
                              <div :style="'background-image:url(' + pbc.featured_media_path + '); background-repeat: no-repeat; background-size: cover; height:100px;'"></div>
                          </div>
                          <div class="col-span-2 md:col-span-1 ml-6">
                              <h4 style="font-weight:600; line-height:22px; font-size:18px;">{{ pbc.title }}</h4>
                              <p style="line-height:20px; font-size:14px; margin-top:5px;">{{ pbc.short_description }}</p>
                          </div>
                      </div>
                      
                  </a>
                  <div v-if="posts_by_category!=undefined && index<(posts_by_category.length-1)" class="hidden justify-between mt-0 pt-0 pb-6 md:flex" style="border-top:1px solid #d1d5db;"></div>
              </div>

              <agile v-if="banners!=undefined && banners.length>0" autoplay :infinite="true" :autoplay-speed="4000">
                <div v-for="(banner, index) in banners" :key="index" class="slide">
                  <img style="cursor: pointer;" @click="clicAd(banner)" :src="banner.image_url"/>
                </div>
              </agile>
              
          </div>
      </div>
    </div>

    <Footer/>
  </div>
    
  <!--/article-->
</template>
<script>
import axios from "axios"
export default {
  async asyncData({ params }) {
    function convertToJson(response){
      if(response.headers.get('content-type')=='application/json'){
        return response.json()
      }else{
        return []
      }
    };
    function mapCategories(categories){
      if(categories!=undefined){
        return categories.map(b=>b.id)
      }else{
        return []
      }
    }
    function mapJson(post_data){
      console.log(post_data)
      if(post_data!=undefined){
        if(post_data.data!=undefined){
          return post_data.data.map(a=>mapCategories(a.categories)[0])[0]
        }
      }else{
        return ''
      }
    };
    const post = await fetch(
      `https://gv.unocrm.mx/api/v1/news?filter[slug]=${params.slug}`,{ method: 'GET', headers: {'Content-Type': 'application/json'}}
    ).then((res) => convertToJson(res))//.json())

    const banners = await fetch(
      `https://gv.unocrm.mx/api/v1/display_ad?filter[is_in_time]=true&filter[is_in_hour]=true&filter[position]=Noticia&itemsPerPage=3`,{ method: 'GET', headers: {'Content-Type': 'application/json'}}
    ).then((res) => convertToJson(res))//.json())

    const category = mapJson(post)

    const posts_by_category = await axios.get(
      `https://gv.unocrm.mx/api/v1/news?filter[Categories.id]=`+ category + `&filter[visibility->web]=true&itemsPerPage=4`,{ method: 'GET', headers: {'Content-Type': 'application/json'}}
    ).then(res=>{
      console.log(res.data.data)
      return res.data
    })

    return { post, banners, posts_by_category }
  },
  methods: {
    htmlContent(post){
      return '<div class="content-style">' + post.content + '</div><style>.wp-video-shortcode{width:calc(100vw - 60px)!important; height:auto!important;} .content-style div :first-child{font-size:14px;} .content-style h4{font-size: 18px;text-align: justify;}</style>'
    },
    goBack() {
      return this.$router.go(-1)
    },
    clicAd(ad){
      fetch('https://gv.unocrm.mx/api/v1/click_ad/' + ad.id,{ method: 'GET', headers: {'Content-Type': 'application/json'}}).then(response =>{
        window.open(ad.url, '_blank');
      });
    },
  },
  head() {
    return {
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: `/posts/${this.$route.params.slug}`
        }
      ]
    }
  }
}
</script>
<style scoped>
article {
  max-width: 600px;
  margin: 0 auto;
}
img {
  height: 200px;
}
p {
  text-align: left;
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