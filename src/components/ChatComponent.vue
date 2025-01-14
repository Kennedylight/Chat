<template>
    <div class="flex bg-red-400 w-full h-screen">
        <div class="border-[2C2C2C] bg-[#2C2C2C] border-r w-full lg:w-[27%] h-full" :class="Discussion==true?'hidden lg:block':'block'">
            <div class="w-full h-[15%] text-white">
                <div class="flex justify-between p-4 w-full h-[65%]">
                    <p class="text-[20px]">Discussion</p>
                    <div>

                    </div>
                </div>
                <div class="flex bg-[#2C2C2C] px-4 w-full h-[35%]">
                    <div class="flex border-[#fff] bg-[#383838] border-b w-full h-full">
                        <div class="flex justify-center items-center w-[10%] h-full">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                              </svg>
                        </div>
                        <input type="text" class="bg-[#3B3B3B] px-2 rounded-md w-[90%] h-[100%] placeholder:text-[13px] focus:outline-none" placeholder="recherche ou demarrer une discussion">
                    </div>
                </div>
            </div>
            <div class="p-2 w-full h-[85%] overflow-y-auto">
                <div class="flex justify-between hover:bg-[#515151] px-2 lg:p-4 rounded-b-md w-full h-16 text-white cursor-pointer" v-for="i in 50" :key="i" @click="Discussion=true">
                    <div class="flex items-center space-x-2 lg:space-x-4 h-full">
                        <div class="bg-white rounded-full w-10 lg:w-12 h-10 lg:h-12">
                            <img src="../../public/aqua.jpg" class="rounded-full w-full h-full object-cover" alt="">
                        </div>
                        <div class="">
                            <p class="font-bold">Kennedy Light</p>
                            <p class="font-extralight text-[12px] lg:text-[15px]">D'accord</p>
                        </div>
                    </div>
                    <div class="flex items-center h-full">
                        <div>
                            <p class="font-extralight text-[10px] lg:text-[12px]">12h20</p>
                        <div class="flex justify-end w-full">
                            <div class="flex justify-center items-center bg-[#1DAA61] rounded-full w-4 h-4 text-[10px]">
                                <p class="font-bold">99</p>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-yellow-400 w-full lg:w-[83%] h-full" :class="Discussion==false?'hidden lg:block':'block'">
            <div class="border-[2C2C2C] bg-[#2C2C2C] border-b w-full h-[10%]">
                <div class="flex justify-between p-4 rounded-b-md w-full h-16 text-white">
                    <div class="flex items-center space-x-4 h-full">
                        <div class="flex items-center lg:hidden h-full" @click="Discussion=false">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 lg:w-6 h-4 lg:h-6">
                                <path fill-rule="evenodd" d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd" />
                              </svg>
                              
                              
                              
                        </div>
                        <div class="bg-white rounded-full w-10 lg:w-12 h-10 lg:h-12">
                            <img src="../../public/boruto.jpg" class="rounded-full w-full h-full object-cover" alt="">
                        </div>
                        <div class="">
                            <p class="font-bold">Kennedy Light</p>
                            <p class="font-extralight text-[10px] lg:text-[15px]">Selectionner pour avoir plus d'infos</p>
                        </div>
                    </div>
                    <div class="flex items-center h-full">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 lg:w-6 h-4 lg:h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                          </svg>
                          
                    </div>
                </div>
            </div>
            <div class="space-y-2 bg-[#2C2C2C] p-3 lg:p-8 w-full h-[83%] overflow-y-auto">
                <div class="flex w-full h-auto text-white" v-for="i in 20" :key="i" :class="i%2==0?'justify-start':'justify-end'">
                    <div class="flex justify-between space-x-3 p-2 rounded-md max-w-[90%] lg:max-w-[60%] h-auto"  :class="i%2==0?'bg-[#363636]':'bg-[#005C4B]'">
                        <p>Bonjour a tous comment allez vous ?? .</p>
                       <div class="flex items-end h-full">
                        <p class="text-[10px]">12h20</p>
                       </div>
                    </div>
                </div>
            </div>
            <div class="flex justify-between border-[2C2C2C] bg-[#2C2C2C] px-4 border-t w-full h-[7%] text-white">
                <input  placeholder="Tapez votre message..."   class="bg-transparent w-[90%] h-full overflow-hidden focus:outline-none" />
                <div class="flex justify-end w-[10%] h-full">
                    <div class="flex justify-center items-center w-14 h-full">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 cursor-pointer">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                          </svg>
                          
                    </div>
                </div>
            </div>
           
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            Discussion:false,
        }
    }
}
</script>
