<template>
  <div class="w-full h-screen">
    <div
      class="absolute z-10 flex w-full h-full bg-gradient-to-tl via-[#232A34] from-black to-[#1A2026]"
    >
      <div class="w-1/2 h-full hidden lg:flex"></div>
      <div class="flex items-start justify-start w-full lg:w-1/2 h-full">
        <div class="w-full h-[65%]">
          <img
            :src="'../../public/../' + img.image"
            class="object-cover lg:w-[97%] w-full h-full"
            alt=""
          />
        </div>
      </div>
    </div>
    <div class="absolute z-20 w-full h-full">
      <div class="relative w-full h-full">
        <div
          class="w-full h-[10%] fixed z-50 bg-black/10 flex items-center justify-between px-8"
        >
          <div class="flex space-x-4 text-[16px] justify-center items-center">
            <img
              src="../../public/logo-removebg-preview.png"
              class="h-[80%] w-[70%] object-cover"
              alt=""
            />
          </div>
          <div class="flex space-x-4 text-[16px]">
            <router-link to="login" class="py-2 px-6 cursor-pointer  rounded-full bg-[#FF2931] text-white">
              <p>Sign In</p>
            </router-link>
            <div class="px-4 py-2 text-white cursor-pointer rounded-full bg-black/90">
              <p>Search</p>
            </div>
          </div>
        </div>
        <div class="w-full h-full bg-black/70 lg:bg-transparent">
          <div class="w-full h-[65%]">
            <div
              class="lg:w-[40%]  w-full px-8 h-full flex transition-none duration-700 justify-center items-center"
            >
              <div class="space-y-6 text-white">
                <div class="space-y-2">
                  <p class="text-[22px] font-bold">{{ img.title }}</p>
                  <div class="flex space-x-3">
                    <div class="flex">
                      <svg
                        v-for="i in img.etoile"
                        :key="i"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="w-3 h-3 text-yellow-400"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <svg
                        v-for="i in 5 - img.etoile"
                        :key="i"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="w-3 h-3 text-white"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                    <p class="text-white text-[10px]">2009 a japon</p>
                  </div>
                </div>
                <div class="flex items-center w-full h-12 space-x-2 font-semibold">
                  <div
                    class="lg:w-[25%] w-[30%] rounded-md justify-center items-center flex h-10 bg-[#FF2931]"
                  >
                    <p>Voir plus</p>
                  </div>
                  <div
                    class="lg:w-[15%] w-[20%] rounded-md justify-center items-center flex h-10 bg-black"
                  >
                    <p>test</p>
                  </div>
                  <div
                    class="lg:w-[10%] w-[15%] rounded-md justify-center items-center flex h-10 bg-[#75B943]"
                  >
                    <p>plus</p>
                  </div>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt eum
                  ipsum vel similique in quo distinctio! Lorem ipsum dolor sit amet
                  consectetur, adipisicing elit. Ipsa perferendis nesciunt eaque.
                  Repudiandae numquam esse minus?
                </p>
              </div>
            </div>
          </div>
          <div class="w-full h-[35%]">
            <p class="font-semibold capitalize text-[24px] text-white px-8">
              recents animes
            </p>
            <div class="w-full h-[81%] flex items-end px-8 ">
              <div class="w-full h-[90%] flex space-x-5">
                <div
                  class="flex items-center justify-center h-full transition-all duration-300 rounded-lg w-44 hover:w-48"
                  v-for="data in datas"
                  :key="data"
                  :class="data.id == img.id ? 'border-2 border-[#FF2931]' : ''"
                  @click="look(data)"
                >
                  <img
                    :src="'../../public/../' + data.image"
                    class="object-cover w-[99%] h-[99%] rounded-lg cursor-pointer"
                    alt=""
                  />

                  <p></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full h-screen bg-[#1B2026]">
        <div class="w-full lg:h-[25%] flex justify-center items-end">
          <div class="w-[90%] h-[80%] flex flex-wrap lg:flex-1 lg:space-x-5 space-y-2 lg:space-y-0 mt-3 lg:mt-0">
            <div
              class="lg:w-[32%] w-full h-full rounded-md bg-[#222933] flex"
              v-for="i in 3"
              :key="i"
            >
              <div class="w-[40%] h-full flex justify-center items-center">
                <div class="w-[90%] h-[90%] rounded-lg">
                  <img
                    src="../../public/hori.jpeg"
                    alt=""
                    class="w-full h-full rounded-lg object-cover"
                  />
                </div>
              </div>
              <div class="w-[60%] h-full space-y-4">
                <p class="text-center text-white font-bold mt-3 uppercase">
                  anime le plus populaire
                </p>
                <p class="text-center text-white capitalize">Sword art online</p>
                <p class="text-center text-white/80 text-[20px] capitalize font-semibold">
                  1400 vues
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full h-[45%] bg-[#1B2026] flex justify-center items-center">
          <div class="w-[90%] h-full">
            <div class="w-full h-[27%] flex justify-between items-center">
              <div class="space-x-5 flex">
                <p class="text-white font-bold text-[20px]">Action</p>
                <div
                  class="px-4 py-2 rounded-sm flex justify-center bg-[#222933] items-center"
                >
                  <p class="capitalize text-white font-semibold">go to category</p>
                </div>
              </div>
            </div>
            <div class="w-full h-[73%]  flex  space-x-14">
              <div class="hidden">
                <swiper
                
                :slidesPerView="5"
                :centeredSlides="false"
                
                :navigation="true"
                :modules="modules"
                class="mySwiper w-full hidden h-24 bg-red-400  space-x-14"
              >
               
                  <swiper-slide class="w-full h-24 bg-green-500">Slide 1</swiper-slide>
               
              </swiper>
              </div>
              <div
                class="h-full w-1/5 rounded-lg relative "
                v-for="act in action"
                :key="act"
              >
                <div class="absolute z-10 w-full h-full">
                  <img
                    :src="path + '../' + act.image"
                    class="w-full h-full object-cover rounded-lg"
                    alt=""
                  />
                </div>
                <div
                  class="absolute z-20 w-full rounded-lg h-full flex items-end hover:bg-black/40 justify-center cursor-pointer"
                >
                  <div class="bg-[#000000] py-4 w-full space-y-2 rounded-b-lg">
                    <p class="text-white text-center font-bold uppercase">
                      {{ act.name }}
                    </p>
                    <div class="w-full flex justify-center">
                      <div class="flex">
                        <svg
                          v-for="i in act.etoile"
                          :key="i"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          class="w-3 h-3 text-yellow-400"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        <svg
                          v-for="i in 5 - act.etoile"
                          :key="i"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          class="w-3 h-3 text-white"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
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
        </div>
        <div class="w-full h-[45%] pb-5 flex bg-[#1B2026] justify-center items-center">
          <div class="w-[90%] h-full">
            <div class="w-full h-[27%] flex justify-between items-center">
              <div class="space-x-5 flex">
                <p class="text-white font-bold text-[20px]">Providers</p>
              </div>
              <div
                class="px-4 py-2 rounded-sm flex justify-center bg-[#222933] items-center"
              >
                <p class="capitalize text-white font-semibold">All category</p>
              </div>
            </div>
            <div class="w-full h-[73%] flex space-x-14">
              <div
                class="h-full w-1/5 rounded-lg relative"
                v-for="cat in category"
                :key="cat"
              >
                <div class="absolute z-10 w-full bg-[#232A34] rounded-lg h-full">
                  <div class="w-full h-[70%] flex justify-center items-center">
                    <div class="w-[80%] bg-[#1B2026] h-[80%]">
                      <img
                        :src="path + '../' + cat.image"
                        class="w-full h-full rounded-lg object-cover"
                        alt=""
                      />
                    </div>
                  </div>
                  <div class="w-full h-[30%] flex justify-center items-center">
                    <div>
                      <p class="text-[18px] uppercase text-white">{{ cat.name }}</p>
                    </div>
                  </div>
                </div>
                <div
                  class="absolute z-20 w-full rounded-lg h-full flex items-end justify-center cursor-pointer"
                >
                  <div
                    class="px-4 py-2 rounded-sm flex border-2 border-[#1B2026] justify-center transform translate-y-1/2 bg-[#222933] items-center"
                  >
                    <p class="capitalize text-white font-semibold">Go to category</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full h-[45%] bg-[#1B2026] flex justify-center items-center">
          <div class="w-[90%] h-full">
            <div class="w-full h-[27%] flex justify-between items-center">
              <div class="space-x-5 flex">
                <p class="text-white font-bold text-[20px]">Adventure</p>
                <div
                  class="px-4 py-2 rounded-sm flex justify-center bg-[#222933] items-center"
                >
                  <p class="capitalize text-white font-semibold">go to category</p>
                </div>
              </div>
            </div>
            <div class="w-full h-[73%] flex space-x-14">
              <div
                class="h-full w-1/5 rounded-lg relative"
                v-for="ad in adventure"
                :key="ad"
              >
                <div class="absolute z-10 w-full h-full">
                  <img
                    :src="path + '../' + ad.image"
                    class="w-full h-full object-cover rounded-lg"
                    alt=""
                  />
                </div>
                <div
                  class="absolute z-20 w-full rounded-lg h-full flex items-end hover:bg-black/40 justify-center cursor-pointer"
                >
                  <div class="bg-[#000000] py-4 w-full space-y-2 rounded-b-lg">
                    <p class="text-white text-center font-bold uppercase">
                      {{ ad.name }}
                    </p>
                    <div class="w-full flex justify-center">
                      <div class="flex">
                        <svg
                          v-for="i in ad.etoile"
                          :key="i"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          class="w-3 h-3 text-yellow-400"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        <svg
                          v-for="i in 5 - ad.etoile"
                          :key="i"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          class="w-3 h-3 text-white"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
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
        </div>
        <div class="w-full h-[50%] bg-[#1B2026] pb-16 flex justify-center items-center">
          <div
            class="w-[90%] h-[80%] bg-[#212832] flex justify-center items-center rounded-lg"
          >
            <div
              class="w-[98%] h-[90%] relative border-2 border-white rounded-lg flex items-end"
            >
              <div class="w-full h-full bg-red-400 absolute">
                <img
                  src="../../public/lieu1.jpeg"
                  class="w-full h-full object-cover"
                  alt=""
                />
              </div>
              <div
                class="w-full h-[60%] translate-y-[40%] absolute z-20 flex justify-center items-start"
              >
                <div class="flex space-x-6">
                  <div
                    class="lg:w-24 w-16 h-24 bg-[#1F2428] translate-y-[30%] rounded-lg flex justify-center items-center"
                  >
                    <div
                      class="w-[90%] h-[90%] border border-white rounded-lg flex justify-center"
                    >
                      <div class="w-full">
                        <div class="w-full flex justify-center -translate-y-1/2">
                          <img
                            src="../../public/aqua.jpg"
                            class="w-7 h-7 object-cover rounded-full"
                            alt=""
                          />
                        </div>
                        <div class="w-full flex items-start justify-center">
                          <div
                            class="w-4 h-4 rounded-full bg-[#FFC229] flex justify-center items-center"
                          >
                            <p class="font-bold text-[9px]">2</p>
                          </div>
                        </div>
                        <p class="text-center text-white text-[10px] font-semibold">
                          Winner
                        </p>
                        <p
                          class="text-center text-white text-[10px] capitalize font-semibold"
                        >
                          kirito
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    class="lg:w-40 w-36 h-40 bg-[#0DB6A3] rounded-lg flex justify-center items-center"
                  >
                    <div
                      class="w-[90%] h-[90%] border border-white rounded-lg flex justify-center"
                    >
                      <div class="w-full">
                        <div class="w-full flex justify-center -translate-y-1/2">
                          <img
                            src="../../public/nezuko.jpg"
                            class="w-12 h-12 object-cover rounded-full"
                            alt=""
                          />
                        </div>
                        <div class="w-full flex items-start justify-center">
                          <div
                            class="w-6 h-6 rounded-full bg-[#FFC229] flex justify-center items-center"
                          >
                            <p class="font-semibold">1</p>
                          </div>
                        </div>
                        <p class="text-center text-white text-[15px] font-semibold">
                          Winner
                        </p>
                        <p
                          class="text-center text-white text-[15px] capitalize font-semibold"
                        >
                          harver specter
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    class="lg:w-24 w-16 h-24 bg-[#232A34] translate-y-[30%] rounded-lg flex justify-center items-center"
                  >
                    <div
                      class="w-[90%] h-[90%] border border-white rounded-lg flex justify-center"
                    >
                      <div class="w-full">
                        <div class="w-full flex justify-center -translate-y-1/2">
                          <img
                            src="../../public/cid.jpg"
                            class="w-7 h-7 object-cover rounded-full"
                            alt=""
                          />
                        </div>
                        <div class="w-full flex items-start justify-center">
                          <div
                            class="w-4 h-4 rounded-full bg-[#FFC229] flex justify-center items-center"
                          >
                            <p class="font-bold text-[9px]">3</p>
                          </div>
                        </div>
                        <p class="text-center text-white text-[10px] font-semibold">
                          Winner
                        </p>
                        <p
                          class="text-center text-white text-[10px] capitalize font-semibold"
                        >
                          Nicolas Tesla
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full h-[45%] bg-[#1B2026] flex justify-center items-center">
          <div class="w-[90%] h-full">
            <div class="w-full h-[27%] flex justify-between items-center">
              <div class="space-x-5 flex">
                <p class="text-white font-bold text-[20px]">Amour</p>
                <div
                  class="px-4 py-2 rounded-sm flex justify-center bg-[#222933] items-center"
                >
                  <p class="capitalize text-white font-semibold">go to category</p>
                </div>
              </div>
            </div>
            <div class="w-full h-[73%] flex space-x-14">
              <div class="h-full w-1/5 rounded-lg relative" v-for="am in amour" :key="am">
                <div class="absolute z-10 w-full h-full">
                  <img
                    :src="path + '../' + am.image"
                    class="w-full h-full object-cover rounded-lg"
                    alt=""
                  />
                </div>
                <div
                  class="absolute z-20 w-full rounded-lg h-full flex items-end hover:bg-black/40 justify-center cursor-pointer"
                >
                  <div class="bg-[#000000] py-4 w-full space-y-2 rounded-b-lg">
                    <p class="text-white text-center font-bold uppercase">
                      {{ am.name }}
                    </p>
                    <div class="w-full flex justify-center">
                      <div class="flex">
                        <svg
                          v-for="i in am.etoile"
                          :key="i"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          class="w-3 h-3 text-yellow-400"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        <svg
                          v-for="i in 5 - am.etoile"
                          :key="i"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          class="w-3 h-3 text-white"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
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
        </div>
        <div class="w-full h-[45%] bg-[#1B2026] flex justify-center items-center">
          <div class="w-[80%] h-[80%] text-white flex">
            <div class="w-1/2 h-full flex justify-center items-center">
              <div>
                <div>
                  <p class="lg:text-[80px] text-[32px] font-bold">Why use</p>
                  <p class="lg:text-[32px] text-[17px] font-semibold">
                    best <span class="text-[#FD303F]">betting</span> company
                  </p>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                  Ipsum, omnis unde. Lorem, ipsum dolor.
                </p>
              </div>
            </div>
            <div class="w-1/2 h-full flex lg:justify-start justify-end lg:items-center">
              <img
                src="../../public/ania-removebg-preview.png"
                class="object-contain w-[80%] h-full"
                alt=""
              />
            </div>
          </div>
        </div>
        <div class="w-full h-[45%] bg-[#1B2026] flex justify-center items-center">
          <div class="lg:w-[90%] w-full lg: h-[80%] bg-[#242B35] rounded-lg text-white flex">
            <div class="w-1/2 h-full flex lg:justify-end justify-center items-center">
              <img
                src="../../public/nezuko-removebg-preview.png"
                class="object-contain w-[80%] h-full"
                alt=""
              />
            </div>
            <div class="w-1/2 h-full flex justify-center items-center">
              <div>
                <div>
                  <p class="lg:text-[40px] text-[28px] capitalize font-bold">join use</p>
                  <p class="lg:text-[32px] text-[20px] font-semibold capitalize">
                    <span class="text-[#FD303F]">souscribes</span> to our news
                  </p>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                  Ipsum, omnis unde. Lorem, ipsum dolor.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full lg:h-[45%] h-auto  bg-[#232A34] flex justify-center items-center">
          <div class="xl:w-[90%] w-[95%] h-[75%] space-x-4 flex  gap-2 lg:gap-0 text-white text-[11px]">
            <div class="lg:w-1/5 w-[30%]  h-full space-y-7">
              <img
                src="../../public/logo-removebg-preview.png"
                class="w-[60%] object-cover"
                alt=""
              />
              <p class="hover:text-[#D02F4A] text-left cursor-pointer">
                Lorem, ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet,
                consectetur adipisicing. adipisicing elit. Quasi suscipit asperiores
                blanditiis nulla necessitatibus similique tempore, iusto obcaecati harum
                fugit!
              </p>
            </div>
            <div class="lg:w-1/5 w-[30%] h-full space-y-7">
              <p class="hover:text-[#D02F4A] cursor-pointer">L'App CANAL+</p>
              <p class="hover:text-[#D02F4A] cursor-pointer">Aide et contact</p>
              <p class="hover:text-[#D02F4A] cursor-pointer">Réabonnement</p>
              <p class="hover:text-[#D02F4A] cursor-pointer">Réclamation</p>
            </div>
            <div class="lg:w-1/5 w-[30%] h-full space-y-7">
              <p class="hover:text-[#D02F4A] cursor-pointer">CANAL+ BUSINESS</p>
              <p class="hover:text-[#D02F4A] cursor-pointer">Nos engagements</p>
              <p class="hover:text-[#D02F4A] cursor-pointer">Publicité</p>
              <p class="hover:text-[#D02F4A] cursor-pointer">CANAL+ Group</p>
            </div>
            <div class="lg:w-1/5 w-[30%] h-full space-y-7">
              <p class="hover:text-[#D02F4A] cursor-pointer">CANAL+ BUSINESS</p>
              <p class="hover:text-[#D02F4A] cursor-pointer">Nos engagements</p>
              <p class="hover:text-[#D02F4A] cursor-pointer">Publicité</p>
              <p class="hover:text-[#D02F4A] cursor-pointer">CANAL+ Group</p>
            </div>
            <div class="lg:w-1/5 w-[30%] h-full space-y-7">
              <p class="hover:text-[#D02F4A] cursor-pointer">Politique cookies</p>
              <p class="hover:text-[#D02F4A] cursor-pointer">Gestions des cookies</p>
              <p class="hover:text-[#D02F4A] cursor-pointer">Mentions légales</p>
              <p class="hover:text-[#D02F4A] cursor-pointer">CGU</p>
              <p class="hover:text-[#D02F4A] cursor-pointer">Données personnelles</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";

import "../../src/text.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination, Navigation],
    };
  },
  data() {
    return {
      datas: [
        {
          title: "Kaiju N_8",
          etoile: 4,
          image: "kaiju.jpeg",
          image1: "kaiju2.jpeg",
          id: 1,
        },
        {
          title: "My Hero Academia",
          etoile: 3,
          image: "mha.png",
          image1: "mha1.jpeg",
          id: 2,
        },
        {
          title: "Attaque Des Titans",
          etoile: 2,
          image: "snk.jpeg",
          image1: "snk1.jpeg",
          id: 3,
        },
        {
          title: "Horimiya",
          etoile: 4,
          image: "hori1.jpeg",
          image1: "hori.jpeg",
          id: 4,
        },
        {
          title: "Spy Family",
          etoile: 4,
          image: "spy.jpeg",
          image1: "spy1.jpeg",
          id: 5,
        },
        {
          title: "Wind Beaker",
          etoile: 5,
          image: "wind1.jpeg",
          image1: "wind.jpeg",
          id: 6,
        },
      ],
      path: "../../public/",
      img: {
        id: 1,
        title: "Kaiju N_8",
        etoile: 4,
        image: "kaiju2.jpeg",
      },
      action: [
        {
          name: "Hunter X Hunter",
          image: "hxh.jpeg",
          etoile: 4,
        },
        {
          name: "Dragon Ball Z",
          image: "dbz.jpeg",
          etoile: 5,
        },
        {
          name: "the seven deadly sins",
          image: "sins.jpeg",
          etoile: 2,
        },
        {
          name: "Demon slayer",
          image: "demon.jpeg",
          etoile: 5,
        },
        {
          name: "one piece",
          image: "piece.jpeg",
          etoile: 3,
        },
      ],
      adventure: [
        {
          name: "Mushuku tensei",
          image: "mushuku.jpeg",
          etoile: 2,
        },
        {
          name: "Rezero",
          image: "rezero.jpeg",
          etoile: 5,
        },
        {
          name: "one piece",
          image: "piece.jpeg",
          etoile: 3,
        },
        {
          name: "Sword Aart online",
          image: "sao.jpeg",
          etoile: 4,
        },
        {
          name: "shangri la frontiere",
          image: "shangri.jpeg",
          etoile: 5,
        },
      ],
      amour: [
        {
          name: " Condition call Love",
          image: "condition.jpeg",
          etoile: 4,
        },
        {
          name: "horimiya",
          image: "hori.jpeg",
          etoile: 5,
        },
        {
          name: "eat your pancreas",
          image: "pancreas.jpeg",
          etoile: 2,
        },
        {
          name: "your name",
          image: "yourname.jpeg",
          etoile: 4,
        },
        {
          name: "les enfants du temps",
          image: "temp.jpeg",
          etoile: 3,
        },
      ],
      category: [
        {
          name: " Isekai",
          image: "isekai.jpeg",
          etoile: 4,
        },
        {
          name: "shoyo",
          image: "shoyo.jpeg",
          etoile: 5,
        },
        {
          name: "shonen",
          image: "shonen.jpeg",
          etoile: 2,
        },
        {
          name: "fantastique",
          image: "fantastique.jpeg",
          etoile: 4,
        },
        {
          name: "sport",
          image: "sport.jpeg",
          etoile: 3,
        },
      ],
    };
  },
  methods: {
    look(data) {
      this.img.id = data.id;
      this.img.title = data.title;
      this.img.image = data.image1;
      this.img.etoile = data.etoile;
    },
  },
};
</script>
