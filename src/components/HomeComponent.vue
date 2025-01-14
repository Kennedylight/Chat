<template>
     <div class="fixed z-50 p-4 space-y-3 font-bold text-white bg-[#EC3655] rounded-md top-24 right-3 " v-if="value==true">
            <p class="cursor-pointer hover:bg-[#EF4444]">Home</p>
            <p class="cursor-pointer">About Us</p>
            <p class="cursor-pointer">Contact</p>
        </div> 
  <div class="w-full h-screen bg-[#0E0E0E] text-white">
   
    <div
      class="w-full h-[9%] text-white bg-[#0E0E0E] fixed z-40 px-4 flex items-center justify-between"
    >
      <img src="" alt="" />
      <nav class="hidden space-x-24 font-semibold lg:flex">
        <a href="#" class="transition-all duration-700 hover:text-[#EF4444]">Home</a>
        <a href="#" class="transition-all duration-700 hover:text-[#EF4444]">About Us</a>
        <a href="#" class="transition-all duration-700 hover:text-[#EF4444]">Contact</a>
      </nav>
      <nav class="flex space-x-2 font-semibold">
      <img src="../../public/icons/menu.svg" class="cursor-pointer md:hidden h-7 w-7" @click="value = !value"  alt="">

        <router-link to="register">Register</router-link>
        <p>|</p>
        <router-link to="/login" class="text-red-500">Login</router-link>
      </nav>
    </div>
    <div class="w-full h-[9%] bg-red-500"></div>
    <div class="w-full h-[91%]">
      <div class="w-full xl:h-[90%] hidden h-[60%] relative">
       
          <swiper
    :spaceBetween="30"
    :centeredSlides="true"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: true,
    }"
    :pagination="{
      clickable: true,
    }"
    :navigation="false"
    :modules="modules"
    @autoplayTimeLeft="onAutoplayTimeLeft"
    class="mySwiper relative lg:hidden  w-full h-full"
  >
    <swiper-slide class="w-full h-full relative" >
      <div class="absolute z-10 w-full h-full">
        
          <img
            src="../../public/kaiju.jpeg"
            class="object-center object-contain "
            alt=""
          />
        </div>
               <div
          class="absolute z-20 flex items-center w-full h-full px-2 text-white lg:px-8 bg-black/60" @click="value=false"
        >
          <div class="lg:w-[40%] w-[98%] space-y-5">
            <img src="" alt="" />
            <p class="text-left">
          

Dans un monde où des créatures gigantesques appelées Kaiju surgissent régulièrement pour semer le chaos et la destruction, Kafka Hibino rêve de devenir un membre des Forces de Défense pour les combattre. </p>
            <div
              class="w-32 py-3 font-semibold text-center rounded-md cursor-pointer bg-[#EC3655]"
            >
              Watch Now
            </div>
          </div>
        </div>
    </swiper-slide>
    <swiper-slide class="w-full h-full relative" >
      <div class="absolute z-10 w-full h-full">
        
          <img
            src="../../public/mha1.jpeg"
            class="object-center object-contain "
            alt=""
          />
        </div>
               <div
          class="absolute z-20 flex items-center w-full h-full px-2 text-white lg:px-8 bg-black/60" @click="value=false"
        >
          <div class="lg:w-[40%] w-[98%] space-y-5">
            <img src="" alt="" />
            <p class="text-left">
              Dans un monde où 80 % de la population possède des super-pouvoirs appelés " Alters ", Izuku Midoriya est un jeune garçon né sans Alter. Malgré son manque de pouvoir, Izuku rêve de devenir un héros comme son idole, All Might, le héros numéro un.
            </p>
            <div
              class="w-32 py-3 font-semibold text-center rounded-md cursor-pointer bg-[#EC3655]"
            >
              Watch Now
            </div>
          </div>
        </div>
    </swiper-slide>
    <swiper-slide class="w-full h-full relative" >
      <div class="absolute z-10 w-full h-full">
        
          <img
            src="../../public/hxh.jpeg"
            class="object-center object-contain "
            alt=""
          />
        </div>
               <div
          class="absolute z-20 flex items-center w-full h-full px-2 text-white lg:px-8 bg-black/60" @click="value=false"
        >
          <div class="lg:w-[40%] w-[98%] space-y-5">
            <img src="" alt="" />
            <p class="text-left">
             Inspiré par son père, un Hunter légendaire qui a disparu il y a de nombreuses années, Gon quitte son île natale et se lance dans un voyage pour passer l'examen Hunter et suivre les traces de son père.
            </p>
            <div
              class="w-32 py-3 font-semibold text-center rounded-md cursor-pointer bg-[#EC3655]"
            >
              Watch Now
            </div>
          </div>
        </div>
    </swiper-slide>
   
    <template #container-end>
      <div class="autoplay-progress">
        <svg viewBox="0 0 48 48" ref="progressCircle" class="text-[#EC3655]">
          <circle cx="24" cy="24" r="20" ></circle>
        </svg>
        <span ref="progressContent"></span>
      </div>
    </template>
          </swiper>
 
      </div>
      <div class="w-full xl:h-[90%] h-[60%] relative">
       
          <swiper
    :spaceBetween="30"
    :centeredSlides="true"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
    :pagination="{
      clickable: true,
    }"
    :navigation="false"
    :modules="modules"
    @autoplayTimeLeft="onAutoplayTimeLeft"
    class="mySwiper relative lg:hidden  w-full h-full"
  >
   <swiper-slide  class="w-full h-full bg-red-400 relative">
   <div class="w-full h-full absolute z-10">
    <img src="../../public/ken.gif" class="w-full h-full object-contain" alt="">
   </div>
    <div class="w-full  h-full absolute z-20 flex justify-end">
      <div class="w-1/2 h-full flex justify-center items-center">
        <div class="w-[55%] rounded-[60px] transform rotate-45 h-[75%] border border-[#048DDB] flex justify-center items-center bg-transparent">
        <div class="w-[95%] rounded-[60px]  h-[95%]  flex justify-center  items-center  bg-white/20">
          <img src="../../public/kaiju.jpeg" class="w-[60%]  rounded-[60px]  h-[60%] object-cover">
        </div>

        </div>
      </div>
    </div>
    <div class="w-full  h-full absolute z-30 ">
      <div class="w-1/2 h-full  flex justify-center items-center">
        <div class="w-[85%] h-[90%]  flex justify-center p-7 items-end">
          <div class="space-y-4 text-white">
            <h1 class="text-[30px] uppercase font-bold">Kaiju N_8</h1>
            <p class="text-left text-[16px]">Dans un monde où des créatures gigantesques appelées Kaiju surgissent régulièrement pour semer le chaos et la destruction, Kafka Hibino rêve de devenir un membre des Forces de Défense pour les combattre. </p>
           <div class="w-full h-full flex justify-center items-center">
              <div class="py-2 w-[40%] bg-[#EC3655] rounded-md flex justify-center items-center">
              <p>Watch</p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   </swiper-slide>
    <swiper-slide  class="w-full h-full bg-red-400 relative">
   <div class="w-full h-full absolute z-10">
    <img src="../../public/ken.gif" class="w-full h-full object-contain" alt="">
   </div>
    <div class="w-full  h-full absolute z-20 flex justify-end">
      <div class="w-1/2 h-full flex justify-center items-center">
        <div class="w-[55%] rounded-[60px] transform rotate-45 h-[75%] border border-[#048DDB] flex justify-center items-center bg-transparent">
        <div class="w-[95%] rounded-[60px]  h-[95%]  flex justify-center  items-center  bg-white/20">
          <img src="../../public/mha1.jpeg" class="w-[60%]  rounded-[60px]  h-[60%] object-cover">
        </div>

        </div>
      </div>
    </div>
    <div class="w-full  h-full absolute z-30 ">
      <div class="w-1/2 h-full  flex justify-center items-center">
        <div class="w-[85%] h-[90%]  flex justify-center p-7 items-end">
          <div class="space-y-4 text-white">
            <h1 class="text-[30px] uppercase font-bold">My hero Academy</h1>
            <p class="text-left text-[16px]"> Dans un monde où 80 % de la population possède des super-pouvoirs appelés " Alters ", Izuku Midoriya est un jeune garçon né sans Alter. Malgré son manque de pouvoir, Izuku rêve de devenir un héros comme son idole, All Might, le héros numéro un.</p>
            <div class="w-full h-full flex justify-center items-center">
              <div class="py-2 w-[40%] bg-[#EC3655] rounded-md flex justify-center items-center">
              <p>Watch</p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   </swiper-slide>
    <swiper-slide  class="w-full h-full bg-red-400 relative">
   <div class="w-full h-full absolute z-10">
    <img src="../../public/ken.gif" class="w-full h-full object-contain" alt="">
   </div>
    <div class="w-full  h-full absolute z-20 flex justify-end">
      <div class="w-1/2 h-full flex justify-center items-center">
        <div class="w-[55%] rounded-[60px] transform rotate-45 h-[75%] border border-[#048DDB] flex justify-center items-center bg-transparent">
        <div class="w-[95%] rounded-[60px]  h-[95%]  flex justify-center  items-center  bg-white/20">
          <img src="../../public/hxh.jpeg" class="w-[60%]  rounded-[60px]  h-[60%] object-cover">
        </div>

        </div>
      </div>
    </div>
    <div class="w-full  h-full absolute z-30 ">
      <div class="w-1/2 h-full  flex justify-center items-center">
        <div class="w-[85%] h-[90%]  flex justify-center p-7 items-end">
          <div class="space-y-4 text-white">
            <h1 class="text-[30px] uppercase font-bold">Hunter X Hunter</h1>
            <p class="text-left text-[16px]">  Inspiré par son père, un Hunter légendaire qui a disparu il y a de nombreuses années, Gon quitte son île natale et se lance dans un voyage pour passer l'examen Hunter et suivre les traces de son père.
          </p>
            <div class="w-full h-full flex justify-center items-center">
              <div class="py-2 w-[40%] bg-[#EC3655] rounded-md flex justify-center items-center">
              <p>Watch</p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   </swiper-slide>
   
    <template  #container-end>
      <div class="autoplay-progress hidden">
        <svg viewBox="0 0 48 48" ref="progressCircle" class="text-[#EC3655]">
          <circle cx="24" cy="24" r="20" ></circle>
        </svg>
        <span ref="progressContent"></span>
      </div>
    </template>
          </swiper>
 
      </div>
      <div
        class="w-full lg:h-[20%] bg-[#0E0E0E] p-4 h-[10%] text-center lg:flex justify-center items-center font-bold text-[32px]"
      >
        <p class="uppercase ">QUELQUES ANIMES</p>
      </div>
      <div class="flex flex-wrap bg-[#0E0E0E] w-full h-auto gap-4 px-4 ">
        <div
          class="w-full text-white bg-[#161616] rounded-md shadow-md lg:w-[24%] h-96"
          v-for="i in 10"
          :key="i"
        >
          <div class="w-full h-[60%]">
           
            <img
              src="../../public/minato.jpg" v-if="i%2==0"
              class="object-cover w-full h-full rounded-t-md"
              alt=""
            />
             <img
              src="../../public/cid.jpg" v-else
              class="object-cover w-full h-full rounded-t-md"
              alt=""
            />
           
          </div>
          <div class="flex items-center justify-center w-full px-2 h-[40%]">
            <div class="space-y-2">
              <p class="font-bold text-center text-[18px] ">
                Boruto Uzumaki
              </p>
              <div class="flex justify-center font-extrabold ">
                <div class="flex space-x-2">
                  <img
                    src="../../public/icons/star-half-sharp.svg"
                    style="color: yellow"
                    alt=""
                    class="w-5 h-5 "
                  />
                  <p>4/5</p>
                </div>
              </div>
              <div class="flex items-center justify-center w-full">
                <div
                  class="w-32 py-3 font-semibold text-center rounded-md cursor-pointer bg-[#EC3655]"
                >
                  Watch Now
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full h-[9%] bg-[#0E0E0E]"></div>
       <div
          class="w-full lg:h-[50%] bg-[#000000] pt-3 pb-3 xl:pb-0 xl:pt-0 flex justify-center items-center"
        >
          <div class="xl:w-[60%] w-[95%] h-[65%] flex text-white">
            <div class="xl:w-1/4 w-1/3 h-full text-[11px] space-y-7">
              <p class="hover:text-[#D02F4A] cursor-pointer">L'App CANAL+</p>
              <p class="hover:text-[#D02F4A] cursor-pointer">Aide et contact</p>
              <p class="hover:text-[#D02F4A] cursor-pointer">Réabonnement</p>
              <p class="hover:text-[#D02F4A] cursor-pointer">Réclamation</p>
            </div>
            <div class="xl:w-1/4 w-1/3 h-full text-[11px] space-y-7">
              <p class="hover:text-[#D02F4A] cursor-pointer">CANAL+ BUSINESS</p>
              <p class="hover:text-[#D02F4A] cursor-pointer">Nos engagements</p>
              <p class="hover:text-[#D02F4A] cursor-pointer">Publicité</p>
              <p class="hover:text-[#D02F4A] cursor-pointer">CANAL+ Group</p>
            </div>
            <div class="xl:w-1/4 w-1/3 h-full text-[11px] space-y-7">
              <p class="hover:text-[#D02F4A] cursor-pointer">Politique cookies</p>
              <p class="hover:text-[#D02F4A] cursor-pointer">Gestions des cookies</p>
              <p class="hover:text-[#D02F4A] cursor-pointer">Mentions légales</p>
              <p class="hover:text-[#D02F4A] cursor-pointer">CGU</p>
              <p class="hover:text-[#D02F4A] cursor-pointer">Données personnelles</p>
            </div>
            <div class="hidden w-1/4 h-full xl:block">
              <div class="w-full h-[10%]">
                <img src="../../public/icons/logo-facebook.svg" class="object-cover w-10 h-10" />
              </div>
              <div class="w-full h-[90%] relative flex items-end">
                <div
                  class="absolute w-full px-2 py-3 space-y-3 overflow-y-scroll bg-[#4C7CE4] border border-white rounded-md h-72 bottom-12"
                  :class="value3 == false ? 'hidden' : ''"
                >
                  <p class="text-[14px]">Benin</p>
                  <p class="text-[14px]">Congo</p>
                  <p class="text-[14px]">Algerie</p>
                  <p class="text-[14px]">Tunisie</p>
                  <p class="text-[14px]">Mali</p>
                  <p class="text-[14px]">Nigeria</p>
                  <p class="text-[14px]">Cote d'ivoire</p>
                  <p class="text-[14px]">Rca</p>
                  <p class="text-[14px]">Tchad</p>
                </div>
                <div
                  class="w-full h-[23%] relative rounded-md flex px-4 text-white items-center border border-white bg-transparent"
                  @click="value3 = !value3"
                >
                  <div class="flex justify-between w-full">
                    <p class="text-[14px]">Cameroun</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      class="w-3 h-3 mt-1 text-white transform"
                      :class="value3 == true ? ' rotate-180' : ''"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex w-full h-24 bg-[#4C7CE4] xl:hidden">
          <div class="flex items-center justify-between w-full h-full px-2">
            <div class="w-full flex items-center h-[10%]">
              <img src="../../public/icons/logo-facebook.svg" class="object-cover w-10 h-10" />
            </div>
            <div class="w-full h-[90%] relative flex items-center">
              <div
                class="absolute w-full px-2 py-3 space-y-3 overflow-y-scroll text-white bg-[#4C7CE4] border border-white rounded-md h-72 bottom-12"
                :class="value3 == false ? 'hidden' : ''"
              >
                <p class="text-[14px]">Benin</p>
                <p class="text-[14px]">Congo</p>
                <p class="text-[14px]">Algerie</p>
                <p class="text-[14px]">Tunisie</p>
                <p class="text-[14px]">Mali</p>
                <p class="text-[14px]">Nigeria</p>
                <p class="text-[14px]">Cote d'ivoire</p>
                <p class="text-[14px]">Rca</p>
                <p class="text-[14px]">Tchad</p>
                <p class="text-[14px]">Ghana</p>
              </div>
              <div
                class="w-full h-[54%] relative rounded-md flex px-4 text-white items-center border border-white bg-[#4C7CE4]"
                @click="value3 = !value3"
              >
                <div class="flex justify-between w-full">
                  <p class="text-[14px]">Cameroun</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="w-3 h-3 mt-1 text-white transform"
                    :class="value3 == true ? ' rotate-180' : ''"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>
<script>
import { ref } from 'vue';
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';

  import 'swiper/css/pagination';
  import 'swiper/css/navigation';

  import '../../src/test.css';

  // import required modules
  import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default {
   components: {
      Swiper,
      SwiperSlide,
    },
    data(){
        return{
            value3:false,
          value: false,
          allAnimes: {
            0: {
              img:'kaiju.jpeg'
            },
             1: {
              img:'mha1.jpeg'
            },
             2: {
              img:'hxh.jpeg'
            },
            
            },
            text:{
               img:'mha1.jpeg'
            }
        }
    },
     setup() {
      const progressCircle = ref(null);
      const progressContent = ref(null);
      const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.value.style.setProperty('--progress', 1 - progress);
        progressContent.value.textContent = `${Math.ceil(time / 1000)}s`;
      };
      return {
        onAutoplayTimeLeft,
        progressCircle,
        progressContent,
        modules: [Autoplay, Pagination, Navigation],
      };
    },
}
</script>
