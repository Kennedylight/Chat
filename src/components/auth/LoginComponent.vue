<template>
    <!-- body -->
    <div class="w-screen h-screen relative">
        <div id="boxModal" class="h-0 w-0 overflow-hidden backdrop-blur absolute flex justify-center items-center">
            <div class="w-5/12 mx-auto h-96 bg-indigo-600 rounded-lg flex justify-center  items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-14 h-14 cursor-pointer text-white">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>

            </div>
        </div>
        <div class="w-screen  h-screen flex justify-center items-center bg-[#FE450C]">
            <div
                class="w-11/12 md:w-9/12 h-auto md:h-1/2 lg:h-5/6 lg:grid grid-cols-1 md:grid-cols-2 bg-white shadow-lg rounded overflow-hidden">
                <div class="h-full w-full bg-white p-3 md:p-0 flex justify-center items-center">
                    <div class="w-[90%] md:w-[68%] flex flex-col justify-center  rounded-lg space-y-9">

                        <div class="  p-2 w-full md:w-[90%] grid grid-cols-4 grid-rows-1 ">
                            <!-- w-1/3 -->
                            <div class="  pr-2 flex justify-start items-center">
                                <img class="h-16 w-16 object-cover object-center"
                                    src="../../../public/img/logo-orange-cameroon.png" alt="">
                            </div>
                            <!-- w-2/3 -->
                            <div class="col-span-3  row-span-1 h-full text-3xl font-bold ">
                                <p>Orange <br> digital center</p>
                            </div>
                        </div>

                        <form class="space-y-3">
                            <div class="space-y-1">
                                <label for="email" class="text-xl font-semibold ">Email</label>
                                <input type="email" placeholder="Example@yahoo.com"
                                    class="placeholder:text-md placeholder:font-medium w-full px-2 border h-10 rounded-md focus:outline-none ring-0 border-[#FE450C]">
                            </div>
                            <div class="space-y-1">
                                <label for="password" class="text-xl font-semibold ">password</label>
                                <input type="password" placeholder="********"
                                    class="placeholder:text-md placeholder:font-medium w-full px-2 border h-10 rounded-md focus:outline-none ring-0 border-[#FE450C]">
                            </div>
                            <div class="w-full ">
                                <button class="w-full py-2   bg-[#FE450C] text-white font-semibold rounded-md">
                                    Sign In
                                </button>
                            </div>
                        </form>

                    </div>
                </div>
                <div class=" hidden md:flex h-full w-full bg-black rounded-l-xl  justify-center items-center">
                    <div class="w-10/12 space-y-3 h-4/6 mx-auto  rounded flex flex-col justify-center items-center">
                        <div class="text-center w-full items-center flex justify-center ">
                            <p class="text-7xl text-white font-semibold">Welcome</p>
                        </div>
                        <button
                         id="btnModal"
                          class="text-white px-5 rounded py-2 bg-blue-600">
                          mot de passe oublie
                        </button>
                        <!-- <img class=" w-full object-cover object-center"
                                    src="../../../public/img/28591369_neonarrow3_converted.jpeg" alt=""> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

export default {

    mounted() {
        var btnModal = document.querySelector("#btnModal");
        var boxModal = document.querySelector("#boxModal");


        btnModal.addEventListener("click", () => {
            boxModal.classList.remove("h-0");
            boxModal.classList.remove("w-0");
            boxModal.classList.add("h-full");
            boxModal.classList.add("w-full");
        })
    },

}
</script>