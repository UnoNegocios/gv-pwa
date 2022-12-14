<template>
<nav class="fixed w-full z-20 top-0 left-0 header-bg">

  <div class="px-12 flex flex-wrap justify-between items-center" style="padding-top: 0.83rem!important; padding-bottom: 0.83rem;!important">

  <div class="flex items-center space-x-4 width-130 md:order-3 md:mb-0 mb-5 hide-mobile" >
        <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0 ma-auto">
            <a target=”_blank” href="https://www.facebook.com/GAMAVISIONmx" class="text-gray-500 hover:text-blue-700 dark:hover:text-blue-700">
                <svg class="wh-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd"></path></svg>
                <span class="sr-only">Facebook</span>
            </a>
            <a target=”_blank” href="https://www.instagram.com/GAMAVISIONmx" class="text-gray-500 hover:text-blue-700 dark:hover:text-blue-700">
                <svg class="wh-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd"></path></svg>
                <span class="sr-only">Instagram</span>
            </a>
            <a target=”_blank” href="https://twitter.com/GAMAVISIONmx" class="text-gray-500 hover:text-blue-700 dark:hover:text-blue-700">
                <svg class="wh-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg>
                <span class="sr-only">Twitter</span>
            </a>
        </div>
    </div>

    <a class="flex items-center mx-auto md:order-2">
        <a href="/">
          <img src="/logo.png" class="mr-3 image-height" alt="Flowbite Logo">
        </a>
        <button v-on:click.prevent="open_menu=!open_menu" type="button" class="md:hidden inline-flex items-center p-2 ml-8 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
          <svg aria-hidden="true" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
        </button>
    </a>

    <div class="flex items-center space-x-8 md:order-1" style="width:130px;">  
      
    </div>

  </div>
  
  <div  style="background:#4d30f2;" class="flex flex-wrap justify-between items-center mx-auto md:order-3">
    <div id="mega-menu" :class="openedMenu + ' justify-between items-center w-full md:flex md:w-auto mx-auto'"  >
      <ul class="flex flex-col md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium" style="padding-top: 0.2975rem!important; padding-bottom: 0.2975rem!important;">
        <li>
          <a href="/" class="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-white md:p-0 header-text" aria-current="page">Inicio</a>
        </li>
        <li>
          <a href="/live" style="background: white; color: #4d2ff2; padding: 2px 10px; margin: -2px 0px;" class="header-text block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-white md:p-0" aria-current="page">En Vivo</a>
        </li>
        
        <li v-for="(category, index) in categories" v-bind:key="index">
          <a :href="'/categorias/'+category.name" class="block py-2 pr-4 pl-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-200 md:p-0 header-text">{{category.name}}</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
import axios from "axios"
export default {
  data(){
    return{
      open_menu:false,
      categories:[]
    }
  },
  computed:{
    openedMenu(){
      if(this.open_menu){
        return 'block'
      }else{
        return 'hidden'
      }
    },
    date(){
      // Creamos el objeto fecha instanciándolo con la clase Date
        const fecha = new Date();
        // Creamos array con los días de la semana
        const dias_semana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
        //Creamos constante para el dia de hoy
        const hoy = new Date(new Date().toLocaleString("sv-SE", {timeZone: "America/Monterrey"}).slice(0,10))
        //sacamos diferencia
        const difference = (Date.UTC(hoy.getFullYear(), hoy.getMonth(), hoy.getDate()) - Date.UTC(fecha.getFullYear(), fecha.getMonth(), fecha.getDate()))/(1000*60*60*24)
        // Creamos array con los meses del año
        const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
        // Construimos el formato de salida
        if(fecha.getUTCFullYear()!=new Date().getUTCFullYear()){
            return dias_semana[fecha.getDay()] + ', ' + fecha.getDate() + ' de ' + meses[fecha.getMonth()];
        }else{
            return dias_semana[fecha.getDay()] + ', ' + fecha.getDate() + ' de ' + meses[fecha.getMonth()] + ' de ' + fecha.getUTCFullYear();
        }
    }
  },
  created(){
    axios.get('https://gv.unocrm.mx/api/v1/news/categories').then(resp=>{
      this.categories = resp.data.sort((a, b) => a.id - b.id)
    })
  }
}
</script>
<style>
@media (min-width: 768px){
.header-text {
    font-size: 1.04125rem!important;
    line-height: 1.4875rem!important;
}
.image-height{
  height: 4.165rem!important;
}
}

.wh-5 {
  width: 1.4875rem!important;
  height: 1.4875rem!important;
}
.width-130{
    width:100%;
  }
@media (min-width: 800px) {
  .width-130{
    width:130px;
  }
}
.header-bg{
  background:white;
}
@media (max-width: 800px) {
.header-bg{
  background:#eef1f6;
}
.hide-mobile{
  display:none!important;
}
}
.ma-auto{
    margin:auto!important;
  }
</style>
