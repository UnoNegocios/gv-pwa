<template>
    <div :fullscreen="true">
        <NavBar/>
        <div class="container">
            <div class="flex justify-between mt-12 pt-2 pb-3" style="border-top:2px solid #d1d5db;">
                <h3 style="margin-top: -31px; height: 40px; text-transform: uppercase; font-size:24px; font-weight:500;" class="bg-indigo-600 text-zinc-50 font-semibold mr-2 px-8 py-0.5 rounded">Video en VIVO</h3>
            </div>
        
            <div style="margin:20px;">
                <div style="padding:56.25% 0 0 0;position:relative;">
                <iframe src="https://player.restream.io/?token=cdc9d5ae5e2a444ba2099497d56671e5" allow="autoplay" allowfullscreen frameborder="0" style="position:absolute;top:0;left:0;width:100%;height:100%;"/>
                </div>
            </div>

            <div class="flex justify-between pt-2 pb-3" style="border-top:2px solid #d1d5db; margin-top:100px;">
            <h3 style="margin-top: -31px; height: 40px; text-transform: uppercase; font-size:24px; font-weight:500;" class="bg-indigo-600 text-zinc-50 font-semibold mr-2 px-8 py-0.5 rounded">Audio en VIVO</h3>
            </div>

            <div style="background:transparent; margin:50px 30px;">
                <video style="width: 100%;" class="height-55px" controls autoplay name="media"><source src="https://closeradio.tv/gamavision/player.htm" type="audio/mpeg"></video>
            </div>

            <div  v-if="banners!=undefined && banners.length>0">
                <agile autoplay :infinite="true" :autoplay-speed="4000">
                    <div v-for="(banner, index) in banners" :key="index" class="slide">
                    <img style="cursor: pointer;" @click="clicAd(banner)" :src="banner.image_url"/>
                    </div>
                </agile>
            </div>
        </div>
        <Footer/>
    </div>
</template>

<script>
export default {
    async asyncData() {
        function convertToJson(response){
            if(response!=undefined){
                return response.json()
            }else{
                return []
            }
        };
        const banners = await fetch('https://gv.unocrm.mx/api/v1/display_ad?filter[is_in_time]=true&filter[is_in_hour]=true&filter[position]=En Vivo&itemsPerPage=3').then((response) =>
            convertToJson(response)//.json()
        );
        return {banners}
    },
    methods:{
      clicAd(ad){
        fetch('https://gv.unocrm.mx/api/v1/click_ad/' + ad.id).then(response =>{
          window.open(ad.url, '_blank');
        });
      },
    }
}
</script>

<style scoped>
    .height-55px{
        height: 100px;
    }
    @media (min-width: 800px) {
    .height-55px{
        height: 55px;
    }
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