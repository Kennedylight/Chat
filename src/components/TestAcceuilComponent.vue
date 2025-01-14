<template>
  <div class=" w-full h-screen">
    <div class="fixed z-50 flex justify-center text-white w-full h-[10%] border-b border-white/50" :class="headerClass">
      <div class="flex justify-between items-center w-[96%] h-full">
        <a href="#" class="flex items-center space-x-2">
          <img
            src="../assets/pictures/kat.jpg"
            class="h-8"
            alt="Katika Game Logo"
          />
          <span
            class="font-semibold text-2xl text-white whitespace-nowrap self-center"
            >Katika Game</span
          >
        </a>
        <ul class="space-x-10 text-white text-[17px] hidden lg:flex font-[600]">
          <li>
            <a href="#" class="" aria-current="page">Home</a>
          </li>
          <li>
            <a href="#" class="">About</a>
          </li>
          <li>
            <a href="#" class="">Services</a>
          </li>
          <li>
            <a href="#" class="">Contact</a>
          </li>
        </ul>
        <div class="flex space-x-3 h-full flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            @click="toggleMenu"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="h-6 w-6 text-black lg:hidden cursor-pointer text-white"
          >
            <path
              fill-rule="evenodd"
              d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
              clip-rule="evenodd"
            />
          </svg>

          <div class="flex space-x-3">
            <button
              type="button"
              class="py-3 px-5 text-white bg-[#DE002F] font-bold duration-700 transition-all rounded-md"
            >
              Sign In
            </button>
          </div>
        </div>
        <!-- Navigation Menu -->
      </div>
    </div>
    <div class="w-full lg:h-screen h-[65%]  bg-black/90 relative">
      <div class="w-full h-full  absolute z-20">
        <img src="../assets/casi.jpg" class="w-full h-full object-cover" alt="">
      </div>
     <div class="w-full h-full absolute z-30  bg-black/70">
      <div class="w-full h-[10%]"></div>
      <div class="w-full h-[90%]">
      
       <div class="w-full h-full  flex justify-center items-center">
        <div
        class="relative h-full px-4 flex lg:w-[60%] w-[98%] justify-center items-center text-center"
      >
        <div class="lg:w-[80%] w-full">
          <h1 class="text-3xl md:text-4xl  font-bold text-white mb-6">
            Bienvenue sur Katika <span class="text-[#DE002F]">Game</span>
          </h1>
          <p class="text-sm md:text-lg text-white mb-8">
            Misez sur la transparence, gagnez en confiance. Avec Katika Game,
            transformez vos intuitions en gains réels. Des paris simplifiés, des
            transactions sécurisées, et des résultats en temps réel. Ne laissez
            rien au hasard, faites vos jeux !
          </p>
          <button
            class="text-white px-6 py-3 rounded-lg shadow-lg hover:bg-[#DE004F] bg-[#DE002F]  duration-700 transition-all font-semibold text-lg"
          >
            Commencer maintenant
          </button>
        </div>
      </div>
      
       </div>
      </div>
     </div>

      <nav
        :class="{ hidden: !isMenuOpen }"
        class="flex flex-col md:flex-row duration-700 transition-all lg:hidden space-y-6 top-[11%] px-8 rounded-lg border-gray-900 border  z-50 right-2 py-3 md:items-center bg-gray-800 fixed text-white px-6 md:mt-0"
      >
        <a href="#home" class="font-medium hover:text-red-500">Home</a>
        <a href="#about" class="font-medium hover:text-red-500">About</a>
        <a href="#features" class="font-medium hover:text-red-500">Services</a>
        <a href="#contact" class="font-medium hover:text-red-500">Contact</a>
      </nav>
    </div>
    <div class="bg-[#111827]">
      <h4 class="text-3xl font-bold text-white text-center py-7">Fonctionnalités Clés</h4>

      <div class="w-full h-auto flex justify-center items-center">
        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 w-[96%]"
        >
          <div>
            <div
              class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            >
              <a href="#">
                <h5
                  class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
                >
                  Transparence des Transactions
                </h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Chaque transaction, dépôt, pari, ou retrait est enregistré et
                accessible dans un historique détaillé, assurant une
                transparence totale pour les utilisateurs.
              </p>
              <a
                href="#"
                class="inline-flex items-center rounded-lg px-3 py-2 text-sm font-medium text-center text-white hover:bg-[#DE004F] bg-[#DE002F]  duration-700 transition-all "
              >
                Lire plus
                <svg
                  class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div>
            <div
              class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            >
              <a href="#">
                <h5
                  class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
                >
                  Comptes Utilisateurs Sécurisés
                </h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Les utilisateurs peuvent créer et gérer leur compte de manière
                sécurisée, avec des options de vérification d'identité, de
                configuration de méthodes de paiement, et de récupération de mot
                de passe.
              </p>
              <a
                href="#"
                class="inline-flex items-center rounded-lg px-3 py-2 text-sm font-medium text-center text-white hover:bg-[#DE004F] bg-[#DE002F]  duration-700 transition-all"
              >
                Lire plus
                <svg
                  class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div>
            <div
              class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            >
              <a href="#">
                <h5
                  class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
                >
                  Notifications et Alertes Personnalisées
                </h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Les utilisateurs reçoivent des notifications en temps réel pour
                les mises à jour de leurs paris, les résultats des matchs, et
                des offres spéciales, personnalisées selon leurs préférences.
              </p>
              <a
                href="#"
                class="inline-flex items-center rounded-lg px-3 py-2 text-sm font-medium text-center text-white hover:bg-[#DE004F] bg-[#DE002F]  duration-700 transition-all"
              >
                Lire plus
                <svg
                  class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div>
            <div
              class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            >
              <a href="#">
                <h5
                  class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
                >
                  Gestion des Paris
                </h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Les utilisateurs peuvent facilement placer, suivre, et gérer
                leurs paris en temps réel, avec des options pour annuler ou
                modifier leurs paris avant le début des événements
              </p>
              <a
                href="#"
                class="inline-flex items-center rounded-lg px-3 py-2 text-sm font-medium text-center text-white hover:bg-[#DE004F] bg-[#DE002F]  duration-700 transition-all"
              >
                Lire plus
                <svg
                  class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div>
            <div
              class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            >
              <a href="#">
                <h5
                  class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
                >
                  Rapports et Statistiques
                </h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Accès à des rapports détaillés sur les performances des paris,
                avec des statistiques avancées pour aider les utilisateurs à
                prendre des décisions plus éclairées.
              </p>
              <a
                href="#"
                class="inline-flex items-center rounded-lg px-3 py-2 text-sm font-medium text-center text-white hover:bg-[#DE004F] bg-[#DE002F]  duration-700 transition-all"
              >
                Lire plus
                <svg
                  class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div>
            <div
              class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            >
              <a href="#">
                <h5
                  class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
                >
                  Pari en Direct (Live Betting)
                </h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Les utilisateurs peuvent placer des paris en direct pendant que
                les événements se déroulent, avec des cotes qui évoluent en
                temps réel en fonction du déroulement du match.
              </p>
              <a
                href="#"
                class="inline-flex items-center rounded-lg px-3 py-2 text-sm font-medium text-center text-white hover:bg-[#DE004F] bg-[#DE002F]  duration-700 transition-all"
              >
                Lire plus
                <svg
                  class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div></div>
        </div>
      </div>
     

      <section class=" bg-center h-auto py-10 w-full lg:flex items-center">
        <div class="text-center text-left lg:p-10 py-6 rounded-lg  lg:w-[60%]  w-full justify-center   block items-center md:flex ">
         <div class="space-y-10 w-[98%] md:w-[90%] lg:w-full ">
          <h2 class="lg:text-3xl text-2xl font-bold text-white capitalize">Découvrez l'interface immersive de notre application de paris en ligne !</h2>
          <p class="lg:text-[17px] text-[16px] text-gray-200 pb-8">
            longez dans une expérience utilisateur intuitive et fluide, où tout est conçu pour vous offrir des paris rapides et sécurisés. Que vous soyez débutant ou expert, notre interface moderne vous permettra de créer vos propres paris, miser en toute simplicité et suivre vos gains en temps réel.

            Regardez la vidéo et laissez-vous convaincre par la simplicité et l'efficacité de notre plateforme. Vous êtes à un clic de vos prochains gains ! 
          </p>
          <bouton class="hover:bg-[#DE004F] cursor-pointer bg-[#DE002F]  duration-700 text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-red-600 transition duration-300">
            Commencer maintenant
          </bouton>
         </div>
        </div>
        <div class="lg:w-[40%] w-fhull h-full justify-center lg:justify-start flex items-center">
          <div  class="lg:w-[85%] w-[96%] h-[80%] ">
            <div class="flex justify-center items-center h-full w-full">
              <video class="w-full h-full " controls muted autoplay>
                <source src="../assets/Shawn_Mendes_-_Stitches__Lyrics_(360p).mp4" type="video/mp4">
                Ton navigateur ne supporte pas la vidéo HTML5.
              </video>
            </div>
          </div>
        </div>
      </section>
     
      
    </div>
    <div class="w-full h-[70%] lg:h-[70%] md:h-[50%]">
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
    :navigation="true"
    :modules="modules"
    class="mySwiper w-full h-full bg-[#111827] "
  >
    <swiper-slide class=" w-full h-full relative"   v-for="i in 4" :key="i"> 
      
      <div class="bg-[#111827] w-full h-full flex   items-center space-x-4 py-6">
        <div class="w-[40%] hidden lg:flex  h-full  justify-center items-center">
          <div class="w-[60%] h-full ">          
            <img src="../assets/nezuko-removebg-preview.png" alt="Person" class="w-full h-full object-cover ">
          </div>
        </div>
      
        <!-- Deuxième div : Témoignage de la personne -->
        <div class="lg:w-[60%] w-full  text-white ">
         <div class="lg:w-[90%] w-[96%] lg:text-left lg:space-y-10 space-y-7">
          <p class="text-3xl font-bold text-white text-center capitalize">Nos clients temoignent</p>
          <div class="w-full h-16  flex justify-center lg:hidden">
            <div class="w-16 h-16 bg-red-400 rounded-full">
              <img src="../assets/nezuko-removebg-preview.png" alt="" class="w-16 h-16 rounded-full object-cover">
                    </div>
             </div>
          <p class="font-semibold">Nezuko Kamado</p>
        <p class="font-intrabold text-[16px]">
          <span class="text-[20px] font-italic text-center ">&lt;&lt;</span> Depuis que j'ai découvert cette application, mes paris n'ont jamais été aussi
           faciles à gérer. L'interface est fluide et intuitive, et j'adore pouvoir créer
            mes propres paris personnalisés. J'ai également apprécié la rapidité des paiements et le 
          suivi en temps réel des mises. Un must pour tous les parieurs ! Bravo à l'équipe.  <span class="text-[20px] font-italic">&gt;&gt;</span>
        </p>
         </div>
                </div>
      </div>
    </swiper-slide>
  
  
  </swiper>
    </div>
    <h4 class="text-3xl font-bold text-center py-7 bg-[#111827] text-white">Questions Fréquemment Posées</h4>
    <div class="p-4 w-full  mx-auto bg-[#111827] ">
      <div v-for="(item, index) in faqs" :key="index" class="border-b border-gray-200">
        <button @click="toggle(index)" class="w-full text-left py-4 px-6  text-white text-lg  flex justify-between items-center focus:outline-none">
          <span>{{ item.question }}</span>
          <svg :class="{'rotate-180': isOpen(index)}" class="w-5 h-5 transition-transform duration-100" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>
        <transition name="fade">
          <div v-if="isOpen(index)" class="px-6 py-4 text-lg text-gray-500">
            {{ item.answer }}
          </div>
        </transition>
      </div>
    </div>


<footer class="bg-white dark:bg-gray-900">
  <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
      <div class="md:flex md:justify-between">
        <div class="mb-6 md:mb-0">
            <a href="#" class="flex items-center">
                <img src="../assets/pictures/kat.jpg" class="h-8 me-3" alt="Katika Game Logo" />
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Katika Game</span>
            </a>
        </div>
        <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
                <ul class="text-gray-500 dark:text-gray-400 font-medium">
                    <li class="mb-4">
                        <a href="#" class="hover:underline">Katika Game</a>
                    </li>
                    <li>
                        <a href="https://tailwindcss.com/" class="hover:underline">Tailwind CSS</a>
                    </li>
                </ul>
            </div>
            <div>
                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
                <ul class="text-gray-500 dark:text-gray-400 font-medium">
                    <li class="mb-4">
                        <a href="#" class="hover:underline ">Github</a>
                    </li>
                    <li>
                        <a href="https://discord.gg/4eeurUVvTy" class="hover:underline">Discord</a>
                    </li>
                </ul>
            </div>
            <div>
                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                <ul class="text-gray-500 dark:text-gray-400 font-medium">
                    <li class="mb-4">
                        <a href="#" class="hover:underline">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="#" class="hover:underline">Terms &amp; Conditions</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <div class="sm:flex sm:items-center sm:justify-between">
        <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="#" class="hover:underline">Katika Game™</a>. All Rights Reserved.
        </span>
        <div class="flex mt-4 sm:justify-center sm:mt-0">
            <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                      <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd"/>
                  </svg>
                <span class="sr-only">Facebook page</span>
            </a>
            <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16">
                      <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z"/>
                  </svg>
                <span class="sr-only">Discord community</span>
            </a>
            <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                  <path fill-rule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clip-rule="evenodd"/>
              </svg>
                <span class="sr-only">Twitter page</span>
            </a>
            <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd"/>
                </svg>
                <span class="sr-only">GitHub account</span>
            </a>
            <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z" clip-rule="evenodd"/>
              </svg>
                <span class="sr-only">Dribbble account</span>
            </a>
        </div>
    </div>
  </div>
</footer>

    
  </div>
</template>
<script>
 import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';
import 'swiper/css/navigation';

 import '../swiper.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [Autoplay, Pagination, Navigation],
      };
    },
  data() {
    return {
      isMenuOpen: false,
      headerClass: 'bg-transparent',
      openIndex: null,
      faqs: [
        { question: 'What is Katika Game?', answer: 'Katika Game is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more.' },
        { question: 'How much does Katika Game cost?', answer: 'Katika Game offers several subscription plans to suit different needs. You can find the latest pricing on the Katika Game website.' },
        { question: 'How do I cancel my Katika Game subscription?', answer: 'You can cancel your Katika Game subscription through the account settings page on the Katika Game website or app.' }
      ],
    };
  },
  methods: {
    toggle(index) {
      this.openIndex = this.openIndex === index ? null : index;
    },
    isOpen(index) {
      return this.openIndex === index;
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    handleScroll() {
      if (window.scrollY > 100) {
        this.headerClass = 'bg-[#111827]'; // Changer la couleur de fond
      } else {
        this.headerClass = 'bg-transparent'; // Couleur de fond initiale
      }
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
};
</script>
<style>
.swiper-button-prev {
  /* Style pour le bouton précédent */
  background-color: #DE004F; /* Couleur de fond */
  color: #fff; /* Couleur du texte */
  width: 40px; /* Largeur du bouton */
  height: 40px; /* Hauteur du bouton */
  display: flex; /* Utilisation de flexbox */
  align-items: center; /* Alignement vertical du texte */
  justify-content: center; /* Alignement horizontal du texte */
  border-radius: 50%; /* Forme ronde */
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.4s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.rotate-180 {
  transform: rotate(180deg);
}
.swiper-button-next {
  /* Style pour le bouton suivant */
  background-color: #DE004F; /* Couleur de fond */
  color: #fff; /* Couleur du texte */
  width: 40px; /* Largeur du bouton */
  height: 40px; /* Hauteur du bouton */
  display: flex; /* Utilisation de flexbox */
  align-items: center; /* Alignement vertical du texte */
  justify-content: center; /* Alignement horizontal du texte */
  border-radius: 50%; /* Forme ronde */
  font-size:2px;
}
.swiper-button-next::after {
  font-size: 12px; /* Adjust size here */
  font-weight: bold;
}
.swiper-button-prev::after {
  font-size: 12px; /* Adjust size here */
  font-weight: bold;
}
</style>