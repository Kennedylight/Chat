<template>
    <div class="w-full h-full  absolute z-40 block hidden  division">
        <div class="w-full h-full  relative">
            <div class="w-full h-full bg-black/40 absolute" @click="imageChangeFalse"></div>
            <div
                class="max-w-2xl absolute z-50 md:right-[25%] md:left-[25%] mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-white shadow-xl rounded-lg text-gray-900">
                <div class="rounded-t-lg h-32 overflow-hidden ">

                    <img class="object-cover object-top w-full"
                        src='https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ'
                        alt='Mountain'>
                </div>
                <div
                    class="mx-auto w-32 h-32 relative -mt-16 border-4 cursor-pointer flex items-end border-white rounded-full overflow-hidden ">
                    <input type="file" ref="fileInput" accept="image/*" class="hidden" @change="handleFileChange">
                    <div class="absolute w-full bg-black/60 h-[40%] flex justify-center items-center"
                        @click="openFileInput">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-6 h-6 text-white">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
                        </svg>

                    </div>
                    <img v-if="valueImg == true" class="object-cover  object-center w-32 h-32" :src="picture + '' + user.image"
                        alt='Woman looking front'>
                    <img v-else class="object-cover w-32 object-center h-32" :src="previewImage" alt='Woman looking front'>
                </div>
                <div class="text-center mt-2">
                    <h2 class="font-semibold">{{ user.name }} {{ user.subname }}</h2>
                    <p class="text-gray-500">Etudiant </p>
                </div>

                <div class="p-4 border-t mx-8 mt-2">
                    <button @click="uploadImg"
                        class="w-1/2 block mx-auto rounded-full bg-gray-900 hover:shadow-lg font-semibold text-white px-6 py-2">Modifier</button>
                </div>
            </div>
        </div><!-- https://gist.github.com/goodreds/5b8a4a2bf11ff67557d38c5e727ea86c -->


    </div>
    <div class="w-full h-screen bg-blue-200/50 flex p-4 space-x-4 relative">

        <div class="w-[20%]  h-full bg-white rounded-md  py-4">
           <img src="logo1.png" alt="" class=" object-cover border-none w-full h-10 ">
            <div class="w-full md:h-[90%] h-[95%]   flex md:items-end">
                <div class="w-full md:h-[90%] h-full md:space-y-4 space-y-2 overflow-auto">
                    <router-link to="/yo"
                        class="w-full md:h-14  h-12  hover:bg-gray-400/30 px-4 flex items-center cursor-pointer">
                        <div class="flex space-x-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                            </svg>

                            <p class="hidden md:block">Action</p>

                        </div>
                    </router-link>
                    <router-link to="/home"  
                        class="w-full md:h-14  h-12  hover:bg-gray-400/30 px-4 flex items-center cursor-pointer">
                        <div class="flex space-x-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                            </svg>


                            <p class="hidden md:block">Adventure</p>

                        </div>
                    </router-link>
                    <router-link  to="/cours"
                        class="w-full md:h-14  h-12  hover:bg-gray-400/30 px-4 flex items-center cursor-pointer ">
                        <div class="flex space-x-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                            </svg>



                            <p class="hidden md:block">All requests</p>

                        </div>
                    </router-link>
                    <router-link to="/dashboardUser" 
                        class="w-full md:h-14  h-12  hover:bg-gray-400/30 px-4 flex items-center cursor-pointer">
                        <div class="flex space-x-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                            </svg>



                            <p class="hidden md:block">Students</p>

                        </div>
                    </router-link>
                    <router-link to="/payment"
                        class="w-full md:h-14 hidden h-12  hover:bg-gray-400/30 px-4 flex items-center cursor-pointer">
                        <div class="flex space-x-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>



                            <p class="hidden md:block">payment</p>

                        </div>
                    </router-link>
                      <router-link to="/dashboardCour" v-if="user.type==0"
                            class="w-full md:h-14  h-12  hover:bg-gray-400/30 px-4 flex items-center cursor-pointer">
                            <div class="flex space-x-3">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>



                                <p class="hidden md:block">Add Request</p>

                            </div>
                        </router-link>
                        <router-link to="/profesor" v-if="user.type==2"
                            class="w-full md:h-14  h-12  hover:bg-gray-400/30 px-4 flex items-center cursor-pointer">
                            <div class="flex space-x-3">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>



                                <p class="hidden md:block">Add a service</p>

                            </div>
                        </router-link>
                        <router-link to="/choiceprofesor" v-if="user.type==2"
                            class="w-full md:h-14  h-12 hidden hover:bg-gray-400/30 px-4 flex items-center cursor-pointer">
                            <div class="flex space-x-3">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>



                                <p class="hidden md:block">CV des profs</p>

                            </div>
                        </router-link>
                        

                </div>

            </div>

        </div>
        <div class="md:w-[80%] w-full h-full ">
            <div class="w-full   h-[8%] flex justify-between items-center ">
                <div class="md:w-[40%] w-full h-[80%]   relative  flex">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-5 h-5 text-black absolute mt-3 right-2 cursor-pointer">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                    <input type="text" class="w-full h-full rounded-lg md:pl-10 pl-3 text-[14px] focus:outline-none"
                        placeholder="Search Cours">

                </div>
                <div class="md:w-[20%] w-[16%]   h-full  flex justify-end">


                    <div class="w-1/4 h-full md:flex hidden justify-center items-center ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-5 h-5 text-black cursor-pointer">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                        </svg>

                    </div>
                    <div class="w-1/4 h-full md:flex hidden justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-5 h-5 text-black cursor-pointer">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" />
                        </svg>

                    </div>
                    <div @click="logout" class="w-1/4 h-full md:flex hidden justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-5 h-5 text-black cursor-pointer">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
                        </svg>


                    </div>

                    <div class="md:w-1/4 w-full  h-full flex  justify-end items-center">
                        <img :src="picture + '' + user.image" alt="" @click="imageChange"
                            class="md:w-10 md:h-10 w-8 h-8 cursor-pointer rounded-full object-cover">
                    </div>
                </div>
            </div>
            <div class="w-full h-[92%] ">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>
<style>
.router-link-active {
    border-left: 2px solid rgb(8, 247, 8);
    color: rgb(8, 247, 8);
}
</style>
<script>
export default {

    data() {
        return {
            valueImg: true,
            previewImage: "yo",
            fileImage: "",
            div: '',
            name: '',
            subname: "",
            image: "",
            picture: '',
            id: 0,
            user: '',
            api: '',

        };
    },
    mounted() {
        this.div = document.querySelector(".division")
        this.picture = this.$store.state.picture;
        this.api = this.$store.state.api;
        console.log(this.picture)
        this.user = JSON.parse(localStorage.getItem("user"));
    },
    methods: {
        imageChange() {
            this.div.classList.replace("hidden", "block")

        },
        imageChangeFalse() {
            this.div.classList.replace("block", "hidden")

            this.valueImg = true;
        },
        openFileInput() {
            this.$refs.fileInput.click();
        },
        //upload image in js
        handleFileChange(e) {
            let input = this.$refs.fileInput
            let file = input.files
            this.fileName = e.target.files[0]
            if (file && file[0]) {
                let reader = new FileReader
                reader.onload = (e) => {
                    this.previewImage = e.target.result



                    console.log(this.previewImage)
                }
                console.log(this.fileName)
                console.log(this.previewImage)




                reader.readAsDataURL(file[0])
                this.valueImg = false
                console.log(this.previewImage)

            }


        },
        uploadImg() {
            let data = new FormData();

            data.append("image", this.fileName);
            data.append("_method", "PUT");
            this.axios.post(this.api + "changeImages/"+ this.user.id, data,this.$store.state.config ).then(data => {
                console.log(data)
                this.user = data.data
                localStorage.setItem("user", JSON.stringify(data.data))
                this.div.classList.replace("block", "hidden")
            }).catch(data => {
                console.log(data)
                console.log("echec")
            })


        },
        logout() {
             localStorage.setItem("token", "");
                    this.$router.push('/');
          
        }
    }
};
</script>