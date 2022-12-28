<template>
  <div v-if="posts!=undefined && categories!=undefined && posts_by_categories!=undefined && posts.data.length>0 && categories.length>0 && posts_by_categories.length>0 ">
    <NavBar/>
    <marquee style="background:black; padding:2px 30px 5px 30px;" class="top-space">
        <a :href="'/noticias/'+element.slug" v-for="(element, index) in posts.data" v-bind:key="index">
          <span class="custom_chip">
              {{element.categories[0].name}}
          </span>
          <span class="custom_title">{{element.title}}</span>
      </a>
    </marquee>

    <div class="container">

      <div class="grid grid-cols-1 md:grid-cols-8 gap-4 mb-4">
        <div class="col-span-1 md:col-span-6 px-2">
          <agile autoplay :infinite="true" :autoplay-speed="4000">
            <div v-for="(post, index) in posts.data.slice(0,4)" :key="index" class="slide mb-6">
              <a :href="'/noticias/'+post.slug">
                <div :style="'background-size: cover!important; background-position:center; background-blend-mode: multiply; background-color: rgba(0,0,0,0.35); height: 54ch; width: 85.6ch; background-image: url(' + post.featured_media_path + ');'">
                  <div style="position:absolute; bottom:0px; padding:65px 50px; text-align:left; width: 100%;">
                    <p style="font-size:15px;" class="my-2 text-zinc-100 rounded-lg">{{post.date}}<span style="font-size:12px;" class="ml-4 bg-indigo-600 text-zinc-50 font-semibold mr-2 px-2 py-0.5 rounded">{{ post.categories[0].name }}</span></p>
                    <h2  class="my-2 text-zinc-50	rounded-lg letra-banner-celular" style="font-size:35px; line-height:40px;">{{post.title}}</h2>
                  </div>
                </div>
              </a>
            </div>
            <template slot="prevButton">
              <svg style="left: -20px;" class="carousel__ico next-prevButton" viewBox="0 0 24 24" role="img" arialabel="arrowLeft">
                <title>arrowLeft</title>
                <path style="filter: invert(1);" d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"></path>
              </svg>
            </template>
            <template slot="nextButton">
              <svg style="right: -20px;" class="carousel__icon next-prevButton" viewBox="0 0 24 24" role="img" arialabel="arrowRight">
                <title>arrowRight</title>
                <path style="filter: invert(1);" d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"></path></svg>
            </template>
          </agile>
        </div>
        
        <div class="col-span-1 md:col-span-2 px-2 md:mb-0 mb-5">
          <div class="grid grid-cols-2 md:grid-cols-1 gap-4">
            <a :href="'/noticias/'+post.slug" class="col-span-1 post-style" style="margin-bottom:15px!important;" v-for="(post, index) in posts.data.slice(5,7)" :key="index">
              <img :src="post.featured_media_path" />
              <span style="font-size:12px; margin:15px 15px 0px 15px;" class="bg-indigo-600 text-zinc-50 font-semibold mr-2 px-2.5 py-0.5 rounded">{{ post.categories[0].name }}</span>

              <p style="font-size:12px; padding:0px 15px;" class="mb-2 mt-1 text-gray-500 rounded-lg">{{post.date}}</p>
              <h4 style="line-height:19px; padding:0px 15px 15px 15px ; font-size:17px;">{{ post.title }}</h4>
            </a>
          </div>
        </div>
      </div>

      
      <agile v-if="banners!=undefined && banners.length>0" autoplay :infinite="true" :autoplay-speed="4000">
        <div v-for="(banner, index) in banners" :key="index" class="slide">
          <img style="cursor: pointer;" @click="clicAd(banner)" :src="banner.image_url"/>
        </div>
      </agile>

      
      <div v-for="(p_c, index) in mapPbc(posts_by_categories)" v-bind:key="index">
        <div class="flex justify-between mt-12 pt-2 pb-3" style="border-top:2px solid #d1d5db;">
          <h3 style="margin-top: -31px; height: 40px; text-transform: uppercase; font-size:24px; font-weight:500;" class="bg-indigo-600 text-zinc-50 font-semibold mr-2 px-8 py-0.5 rounded">{{categories[index].name}}</h3>
          <a :href="'/categorias/' + categories[index].name">
            <button  type="button" class="focus:ring-4 focus:outline-none rounded-lg px-4 py-1 text-center inline-flex items-center mb-2" style="font-size:12px; font-weight:700;background: rgb(79 70 229 / 10%); color: #4f46e5;">
              VER MÁS
              <svg class="w-3 h-3 ml3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </button>
          </a>
        </div>
        <div class="grid grid-cols-4 mb-12 pb-12 gap-4">
          <a class="col-span-2 md:col-span-1 post-style" v-if="p_c[0]!=undefined" :href="'/noticias/'+p_c[0].slug">
            <div class="height-160px" :style="'background-image:url(' + p_c[0].featured_media_path + '); background-repeat: no-repeat; background-size: cover;'"></div>
            <p style="font-size:12px; padding:5px 15px" class="mb-1 mt-1 text-gray-500 rounded-lg">{{p_c[0].date}}</p>
            <h4 style="font-weight:600; line-height:22px; font-size:18px; padding:0px 15px 15px 15px">{{ p_c[0].title }}</h4>
          </a>
          <a class="col-span-2 md:col-span-1 post-style" v-if="p_c[1]!=undefined" :href="'/noticias/'+p_c[1].slug">
            <div class="height-160px" :style="'background-image:url(' + p_c[1].featured_media_path + '); background-repeat: no-repeat; background-size: cover;'"></div>
            <p style="font-size:12px; padding:5px 15px" class="mb-1 mt-1 text-gray-500 rounded-lg">{{p_c[1].date}}</p>
            <h4 style="font-weight:600; line-height:22px; font-size:18px; padding:0px 15px 15px 15px">{{ p_c[1].title }}</h4>
          </a>
          <a class="col-span-2 md:col-span-1 post-style" v-if="p_c[2]!=undefined" :href="'/noticias/'+p_c[2].slug">
            <div class="height-160px" :style="'background-image:url(' + p_c[2].featured_media_path + '); background-repeat: no-repeat; background-size: cover;'"></div>
            <p style="font-size:12px; padding:5px 15px" class="mb-1 mt-1 text-gray-500 rounded-lg">{{p_c[2].date}}</p>
            <h4 style="font-weight:600; line-height:22px; font-size:18px; padding:0px 15px 15px 15px">{{ p_c[2].title }}</h4>
          </a>
          <a class="col-span-2 md:col-span-1 post-style" v-if="p_c[3]!=undefined" :href="'/noticias/'+p_c[3].slug">
            <div class="height-160px" :style="'background-image:url(' + p_c[3].featured_media_path + '); background-repeat: no-repeat; background-size: cover;'"></div>
            <p style="font-size:12px; padding:5px 15px" class="mb-1 mt-1 text-gray-500 rounded-lg">{{p_c[3].date}}</p>
            <h4 style="font-weight:600; line-height:22px; font-size:18px; padding:0px 15px 15px 15px">{{ p_c[3].title }}</h4>
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
  name: 'IndexPage',
  async asyncData() {
    function convertToJson(response){
      console.log(response.headers.get('content-type'))
      if(response.headers.get('content-type')=='application/json'){
        console.log('si')
        return response.json()
      }else{
        return []
      }
    };
    const banners = await fetch('https://gv.unocrm.mx/api/v1/display_ad?filter[is_in_time]=true&filter[is_in_hour]=true&filter[position]=Inicio&itemsPerPage=3')
    .then((response) =>
      convertToJson(response)//.json()
    );

    const banners2 = await fetch('https://gv.unocrm.mx/api/v1/display_ad?filter[is_in_time]=true&filter[is_in_hour]=true&filter[position]=Inicio&itemsPerPage=3')
    .then((response) =>
      convertToJson(response)//.json()
    );


    const posts = await fetch('https://gv.unocrm.mx/api/v1/news?filter[visibility->web]=true&itemsPerPage=7')
    .then((response) =>
      convertToJson(response)//.json()
    );

    const categories = await fetch('https://gv.unocrm.mx/api/v1/news/categories')
    .then((response) =>
      convertToJson(response)//.json()
    );

    var posts_by_categories = []
    for(var i=0; i<categories.length; i++){
      posts_by_categories[i] = await fetch('https://gv.unocrm.mx/api/v1/news?filter[Categories.id]='+categories[i].id+'&filter[visibility->web]=true')
      .then((response) =>
        convertToJson(response)//.json()
      );
    }

    return {banners, banners2, posts, categories, posts_by_categories}
  },
  methods: {
    clicAd(ad){
      fetch('https://gv.unocrm.mx/api/v1/click_ad/' + ad.id).then(response =>{
        window.open(ad.url, '_blank');
      });
    },
    column1Order(index){
      if(( ( index - 1 ) % 3 ) == 0){
        return 'px-4 md:order-1'
      }else{
        return 'px-4 md:order-4'
      }
    },
    column2Order(index){
      if(( ( index - 1 ) % 3 ) == 0){
        return 'px-4 md:order-2'
      }else{
        return 'px-4 md:order-3'
      }
    },
    column3Order(index){
      if(( ( index - 1 ) % 3 ) == 0){
        return 'px-4 md:order-3'
      }else{
        return 'px-4 md:order-1'
      }
    },
    column4Order(index){
      if(( ( index - 1 ) % 3 ) == 0){
        return 'px-4 md:order-4'
      }else{
        return 'px-4 md:order-2'
      }
    },
    mapPbc(posts_by_categories){
      var perro = []
      if(posts_by_categories!=undefined){
        perro = posts_by_categories.map(posts=>posts.data)
      }
      return perro
    },
    mapCategories(categories){
      var perro = []
      if(categories!=undefined){
        perro = categories.map(id=>{return{
          name:id.name,
          id:id.id
        }})
      }
      return perro 
    }
  }
}
</script>

<style>
.top-space{
		margin-top:126px;
	}
	@media (max-width: 800px) {
		.top-space{
			margin-top:81px;
		}
	}
.next-prevButton{
  background: #642afb;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  position: absolute;
  top: 25ch;
  border: solid 5px white; 
}
.agile--ssr .agile__slides > * {
  overflow: hidden;
  width: 0
}

.agile--ssr .agile__slides > *:first-child {
  width: 100%
}
.custom_title{
    margin-right:20px; 
    margin-left:5px; 
    color:white;
    font-size: 15px;
    font-weight: 500;
}
.custom_chip{
    padding:2px 10px; 
    background: white; 
    color: black; 
    font-weight: 600; 
    font-size: 12px; 
    border-radius:5px;
}
.container {
  margin: auto;
  padding: 1em;
  max-width: 120ch;
}
.carousel__prev, .carousel__next{
    box-shadow: 0px 0px 0px 5px white;
}
.height-160px{
  height:100px;
}
@media (min-width: 800px) {
  .height-160px{
    height:160px;
  }
}
@media (max-width: 800px){
  .letra-banner-celular{
    font-size:25px!important;
    line-height:30px!important;
  }
}
.carousel__prev, .carousel__next {
    background-color: var(--vc-nav-background-color)!important;
}
.post-style{
    background: #fbfbfb;
    box-shadow: rgb(0 0 0 / 20%) 0px 3px 1px -2px, rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px;
    margin: 0px 10px;
    padding: 0px!important;
}
</style>
