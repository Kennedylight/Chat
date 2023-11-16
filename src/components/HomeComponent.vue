<template>
    <div>
        <div style="z-index: 100;" id="nav" class="h-28  flex  fixed justify-center items-center w-full ">
            <div class="w-10/12 lg:w-11/12 h-5/6 grid grid-rows-2  grid-cols-5 ">
                <div class="row-span-1 col-span-1 ">
                    <div class="flex font-bold text-2xl text-white justify-center w-full h-full items-center">
                        <span class="text-[#94C12F]">S</span><span id="last" class="text-white">CHMID</span>
                    </div>
                </div>
                <div class="row-span-1 col-start-5 col-span-1 ">
                    <div class="flex text-white justify-center w-full h-full items-center">
                        <button
                            class="px-5 text-md items-center flex justify-end text-center h-10 rounded-full border hover:border-none hover:bg-[#94C12F] duration-500 hover:text-white text-[#94C12F] border-[#94C12F]">
                            connexion
                        </button>
                    </div>
                </div>
                <div class="row-span-1 col-start-1 col-span-5 ">
                    <div id="items" class="w-11/12 text-white items-center hidden lg:flex justify-around mx-auto h-full ">
                        <div>
                            <a href="#"
                                class="text-md font-semibold  capitalize duration-500 hover:text-[#94C12F]">Acceuil</a>
                        </div>
                        <div>
                            <a href="#" class="text-md   font-semibold capitalize duration-500 hover:text-[#94C12F]">Concept
                                du cursus</a>
                        </div>
                        <div>
                            <a href="#" class="text-md  font-semibold capitalize duration-500 hover:text-[#94C12F]">Annonces
                                publiees
                            </a>
                        </div>
                        <div>
                            <a href="#" class="text-md  font-semibold capitalize duration-500 hover:text-[#94C12F]">Je
                                demenage</a>
                        </div>
                        <div>
                            <a href="#" class="text-md   font-semibold capitalize duration-500 hover:text-[#94C12F]">Je
                                propose mon aide</a>
                        </div>
                        <div>
                            <a href="#" class="text-md   font-semibold capitalize duration-500 hover:text-[#94C12F]">SCHMID
                                vous conseille</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-screen h-[75vh] lg:h-[95vh] flex flex-col bg-green-700 relative">
            <div class="w-screen h-full z-50 bg-opacity-40  bg-black absolute"></div>
            <div class="w-screen h-full absolute" style="z-index: 40;">
                <div class="h-full  w-full">
                    <swiper style="--swiper-pagination-color: #94C12F;" :spaceBetween="0" :centeredSlides="true" :autoplay="{
                        delay: 2500,
                        disableOnInteraction: false,
                    }" :pagination="{
    clickable: true,
}" :navigation="false" :modules="modules" class="mySwiper w-full h-full">
                        <swiper-slide class="h-screen   w-screen flex justify-start items-end">
                            <!-- <div style="z-index: 80;" class="w-10/12 h-5/6 mx-auto flex  justify-start items-end">
                                <div class=" space-y-4  rounded">
                                    <div class="text-5xl  text-white italic font-bold">
                                        <p>Controler votre depart</p>
                                    </div>
                                    <div class="text-white text-lg font-medium">
                                        <p>Sachez ou et comment va se derouler votre deplacement</p>
                                    </div>
                                    <div>
                                        <button style="z-index: 110;"
                                            class="bg-[#94C12F] cursor-pointer text-lg rounded px-16 py-3 capitalize font-semibold text-white">
                                            debuter votre demarche
                                        </button>
                                    </div>
                                </div>
                            </div> -->

                            <img class="object-cover object-center w-full h-full" src="/img/images/banner-8.jpg" alt="">
                        </swiper-slide>

                        <swiper-slide class="h-screen w-screen">
                            <img class="object-cover object-center w-full h-full" src="/img/images/banner-8.jpg" alt="">
                        </swiper-slide>

                        <swiper-slide class="h-screen w-screen">
                            <img class="object-cover object-center w-full h-full" src="/img/images/banner-9.jpg" alt="">
                        </swiper-slide>

                    </swiper>
                </div>
            </div>
            <div style="z-index:70;" class="w-11/12  h-full  mx-auto lg:mx-0 flex justify-center lg:justify-end  items-end">

                <div class="w-10/12 lg:w-4/12 space-y-2 h-[50%] lg:h-[65%] bg-white p-4 bg-opacity-50 rounded-t-md">
                    <div class="h-1/2 w-full border border-white rounded flex justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-28 text-white h-28">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                        </svg>
                    </div>
                    <div
                        class="h-1/2 w-full border space-y-4 border-white rounded flex flex-col justify-center items-center">
                        <div class="w-[95%] mx-auto gap-1  h-10 lg:h-14 px-3 rounded ">
                            <div
                                class="text-[#94C12F] w-full text-2xl font-semibold bg-white flex justify-center items-center h-full rounded">
                                <vue3-autocounter ref='counter' :startAmount='0' :endAmount='1096' :duration='3'
                                    separator=',' decimalSeparator='.' :decimals='0' :autoinit='true' />
                            </div>
                        </div>
                        <div class="w-[95%] mx-auto  text-sx lg:text-2xl font-semibold  px-3">
                            <p>demenagements deja realises grace a vous</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div style="z-index: 100;" class="h-[80vh] w-full bg-white flex justify-center items-center">
            <div class="w-10/12 h-96 grid gap-4 grid-cols-2 ">
                <div class="w-full h-full bg-black">
                    q
                </div>
                <div class="w-full h-full bg-white">
                    <div class="capitalize h-[20%] w-full  text-2xl font-semibold">
                        <p>SCHMID, Un demenagement simplifie et eco - responsable</p>
                    </div>
                    <div class="capitalize border-l-8 h-[80%] border-[#94C12F] text-md font-semibold p-4">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus voluptate, eaque blanditiis
                            ipsum eligendi suscipit totam perspiciatis dolor minus nulla provident ullam explicabo hic,
                            fugiat asperiores reprehenderit omnis similique mollitia. </p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus voluptate, eaque blanditiis
                            ipsum eligendi suscipit totam perspiciatis dolor minus nulla provident ullam explicabo hic,
                            fugiat asperiores reprehenderit omnis similique mollitia. </p>
                    </div>
                </div>
            </div>
        </div>

        <div class="h-32 w-full bg-white flex justify-center ">
            <div class="w-7/12 h-full bg-white space-y-3 flex flex-col justify-center items-center">
                <div class="text-center text-2xl font-semibold text-black">
                    Nos Collaborateurs les plus fideles
                </div>
                <div class="w-3/12 h-1 rounded bg-[#94C12F]"></div>
            </div>
        </div>
        <div class="w-full flex justify-center items-center">

            <div class="h-[60vh] bg-white w-10/12  mx-auto">
                <swiper :autoplay="{
                    delay: 3000,
                    disableOnInteraction: true,
                }" style="--swiper-navigation-color: #94C12F;" :navigation="true" :modules="modules"
                    class="w-full h-full">
                    <swiper-slide class="">
                        <div class="bg-white shadow w-[45rem] h-5/6 rounded-xl flex flex-col justify-center items-center">
                            <div class="w-4/6 h-44">
                                <img class="object-cover object-center" src="/img/images/guenstige-umzugsunternehmen.png"
                                    alt="">
                            </div>
                            <span class="text-xl font-medium"> Umzugsunternehmen Angebote | Günstige
                                Umzugsunternehmen</span>
                        </div>
                    </swiper-slide>

                    <swiper-slide class="">
                        <div class="bg-white shadow w-[45rem] h-5/6 rounded-xl flex flex-col justify-center items-center">
                            <div class="w-4/6 h-44">
                                <img class="object-cover object-center" src="/img/images/myhammer-umzugsunternehmen.png"
                                    alt="">
                            </div>
                            <span class="text-xl font-medium">Anfrage über myhammer stellen</span>
                        </div>
                    </swiper-slide>
                    <swiper-slide class="">
                        <div class="bg-white shadow w-[45rem] h-5/6 rounded-xl flex flex-col justify-center items-center">
                            <div class="w-4/6 h-44">
                                <img class="object-cover object-center" src="/img/images/Schmid-Berlin-Logo-150x150-1.jpg"
                                    alt="">
                            </div>
                            <span class="text-xl font-medium">anfrage über Meinumzug stellen</span>
                        </div>
                    </swiper-slide>
                </swiper>
            </div>

        </div>

        <div class="h-[80vh]  w-full flex flex-col justify-center items-center relative">
            <div class="w-[38%]  mx-auto h-5/6 rounded absolute backdrop-blur-2xl">
                <div class="h-1/2  relative">
                    <div class="w-full h-full absolute bg-gradient-to-br from-black bg-opacity-40 p-4 grid grid-cols-2">
                        <div class="text-4xl text-white  font-semibold">
                            <p>Comment Optimiser l'espace d'un <br> <span>30 m2 </span></p>
                        </div>
                    </div>
                    <div class="w-full h-full">
                        <img class="w-full h-full object-cover object-top" src="/img/images/banner-1.jpeg" alt="">
                    </div>


                </div>
                <div class="w-full h-1/2 absolute bg-slate-400 p-6 grid grid-cols-2">
                    <div class=" text-white text-left leading-6  text-sm font-semibold">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor voluptates consequatur veniam
                            earum eaque minus corporis optio beatae. Illum delectus accusantium quam dolor qui, maiores
                            aliquid eligendi officiis aut expedita.</p>
                    </div>
                    <div class=" text-white text-right leading-6 text-sm font-semibold">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor voluptates consequatur veniam
                            earum eaque minus corporis optio beatae. Illum delectus accusantium quam dolor qui, maiores
                            aliquid eligendi officiis aut expedita.</p>
                    </div>
                </div>
            </div>
            <div class="w-11/12 mx-auto h-4/6 border bg-slate-400 border-[#94C12F] rounded-lg">

            </div>

        </div>
        <div class="w-11/12 mx-auto flex flex-col justify-center items-center ">
            <div class="">
                <button id="btnModal"
                    class="text-[#94C12F] px-5 rounded text-md font-semibold py-2 border border-[#94C12F]">
                    Voir Nos Conseils
                </button>
            </div>
        </div>

        <div class="h-24 w-full bg-[#94C12F] my-4 flex justify-center items-center">
            <div class="w-8/12 h-full  grid grid-cols-5">
                <div
                    class="col-span-2 font-semibold text-xl flex items-center justify-center text-white text-center">
                    Abonnez Vous a notre newsletter !
                </div>
                <div class="col-span-3  flex items-center justify-center">
                    <div class="w-10/12  rounded-md overflow-hidden  flex h-12">
                        <div class="w-[70%] h-full bg-white">
                            <input type="email" name="" class="w-full h-full px-3 py-1 focus:outline-none"
                                placeholder="example@gmail.com*" id="">
                        </div>
                        <div class="w-[30%] h-full bg-white border-l border-[#94C12F]">
                            <button id="btnModal"
                                class="bg-white h-full w-full  text-md font-semibold text-[#94C12F]">
                                Validez
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Vue3autocounter from 'vue3-autocounter';

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.querySelector("#nav").classList.add("bg-white")
        document.querySelector("#nav").classList.add("shadow")
        document.querySelector("#nav").classList.add("duration-500")
        document.querySelector("#last").classList.replace("text-white", "text-black")
        document.querySelector("#items").classList.replace("text-white", "text-black");
    } else {
        document.querySelector("#nav").classList.remove("bg-white")
        document.querySelector("#nav").classList.remove("shadow")
        document.querySelector("#last").classList.replace("text-black", "text-white")
        document.querySelector("#nav").classList.remove("duration-500")
        document.querySelector("#items").classList.replace("text-black", "text-white");
    }
}
export default {
    components: {
        Swiper,
        SwiperSlide,
        'vue3-autocounter': Vue3autocounter,
    },

    setup() {
        return {
            modules: [Autoplay, Pagination, Navigation],
        };
    },

}
</script>
<style scoped>
.swiper-slide {
    text-align: center;
    font-size: 18px;
    height: 100%;
    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
}

.swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>