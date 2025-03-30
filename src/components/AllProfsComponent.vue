<template>
 
    <div class="relative flex w-full h-full">
        <div class="z-40 absolute bg-black/60 w-full h-full" :class="value == false ?'hidden':'block'" >
            <div class="relative flex justify-center items-center w-full h-full">              
                
<div class="z-40 absolute w-full h-full flex justify-center items-center ">
    <div class="flex flex-col items-center relative bg-white dark:bg-gray-800 shadow-md mx-auto px-8 py-4 rounded-lg max-w-xl">
        <div class="absolute right-2 w-5 h-5 " @click="value=false">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-red-500 cursor-pointer font-bold">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>

        </div>
        <h1 class="mb-8 font-bold text-gray-700 dark:text-gray-200 text-xl text-center">Welcome Admin</h1>
        <form  class="flex flex-col gap-4 w-96">
          <div class="flex flex-col justify-start items-start">
            <label for="firstName" class="mr-2 text-gray-700 dark:text-gray-200 text-sm" >Nom:</label>
            <input type="text" id="firstName" name="firstName" v-model="name" class="dark:bg-gray-900 px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 w-full dark:text-gray-200">
          </div>
    
          <div class="flex flex-col justify-start items-start">
            <label for="lastName" class="mr-2 text-gray-700 dark:text-gray-200 text-sm">Prenom:</label>
            <input type="text" id="lastName" name="lastName" v-model="subname" class="dark:bg-gray-900 px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 w-full dark:text-gray-200">
          </div>
          <div class="flex flex-col justify-start items-start">
            <label for="lastName" class="mr-2 text-gray-700 dark:text-gray-200 text-sm">email:</label>
            <input type="email" id="lastName" name="lastName" v-model="email" class="dark:bg-gray-900 px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 w-full dark:text-gray-200">
          </div>
    
          <div class="flex flex-col justify-start items-start">
            <label for="username" class="mr-2 text-gray-700 dark:text-gray-200 text-sm">Filiere:</label>
            <select v-model="filiere" id="filiere" class="dark:bg-gray-900 px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 w-full dark:text-gray-200">
                      <option value="maths">Mathématiques</option>
      <option value="physique">Physique</option>
      <option value="informatique">Informatique</option>
    </select>
          </div>
    
    
         
    
          <button type="submit" class="bg-blue-500 hover:bg-blue-600 shadow-sm px-4 py-2 rounded-md font-medium text-white" @click="NewProfessor" v-if="loading==false">Register</button>
          
<div class="w-full flex justify-center" v-else>
    <div role="status" >
    <svg aria-hidden="true" class="w-10 h-10 text-gray-200 animate-spin dark:text-gray-600 fill-green-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
    <span class="sr-only">Loading...</span>
</div>
</div>

        </form>
    
        
        
      </div>
</div>

            </div>
        </div>
        <div class=" w-full h-full ">
            <div class=" flex justify-center relative items-center px-3 w-full h-[10%]">
            <div class="flex justify-between items-center w-full">
                <div class="mb-4 md:mb-0 w-full md:w-1/3">
                    <input type="text" placeholder="Search users..." @input="rechercheName" v-model="searchQuery" class="bg-white px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full">
                </div>
                
                     <button class="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md text-white transition duration-300" @click="value=true">
                    Add New
                    </button>
               
               
            </div>
        </div>
        <div class="px-4 w-full h-[90%] overflow-y-auto  ">
            <div class="bg-white shadow rounded-lg">
                <table class="w-full table-auto">
                    <thead>
                        <tr class="bg-gray-200 text-gray-600 text-sm uppercase leading-normal">
                            <th class="px-6 py-3 text-left">Noms</th>
                            <th class="px-6 py-3 text-left">Prenoms</th>
                            <th class="px-6 py-3 text-left">Email</th>
                            <th class="px-6 py-3 text-left">Filiere</th>
                            <th class="px-6 py-3 text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody class="text-gray-600 text-sm" v-if="searchQuery">
                        <tr class="hover:bg-gray-100 border-gray-200 border-b" v-for="prof in profs2" :key="prof">
                            <td class="px-6 py-3 text-left">{{prof.name}}</td>
                            <td class="px-6 py-3 text-left">{{prof.subname}}</td>
                            <td class="px-6 py-3 text-left">{{prof.email}}</td>
                            <td class="px-6 py-3 text-left">{{prof.filiere}}</td>
                            <td class="px-6 py-3 text-center">
                                <div class="flex justify-center space-x-3 item-center">
                                    <button class="mr-2 w-4 hover:text-blue-500 hover:scale-110 transform">
                                       
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>

                                    </button>
                                    <button class="mr-2 w-4 text-red-500 hover:scale-110 transform" @click="supprimer(prof)">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                        </svg>
                                    </button>
                                </div>
                            </td>
                        </tr>
                       
                    </tbody>
                    <tbody class="text-gray-600 text-sm" v-else>
                        <tr class="hover:bg-gray-100 border-gray-200 border-b" v-for="prof in profs" :key="prof">
                            <td class="px-6 py-3 text-left">{{prof.name}}</td>
                            <td class="px-6 py-3 text-left">{{prof.subname}}</td>
                            <td class="px-6 py-3 text-left">{{prof.email}}</td>
                            <td class="px-6 py-3 text-left">{{prof.filiere}}</td>
                            <td class="px-6 py-3 text-center">
                                <div class="flex justify-center space-x-3 item-center">
                                    <button class="mr-2 w-4 hover:text-blue-500 hover:scale-110 transform">
                                       
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>

                                    </button>
                                    <button class="mr-2 w-4 text-red-500 hover:scale-110 transform" @click="supprimer(prof)">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                        </svg>
                                    </button>
                                </div>
                            </td>
                        </tr>
                       
                    </tbody>
                </table>
            </div>
            
        </div>
        </div>
        
    </div>
    </template>
    <script>
    export default {
       
         data(){
            return {
                profs:[],
                profs2:[],
                value : false,
                loading:false,
                name: "",
                subname: "",
                password: "1234567890",
                 email: "",
                filiere:"",
                searchQuery:"",
            }
         },
         mounted(){
            this.axios
                   .get(this.$store.state.api + "allProfs")
                   .then(({ data }) => {
                     this.profs = data.profs  
                               
                     
                   })
                   .catch(({ err }) => {
                     console.log(err);
                     
                   });
        },
         methods:{
            rechercheName(){
            
            // Filtre les utilisateurs dont le nom contient la chaîne recherchée
            if(this.searchQuery){
                this.recherche = true
            }
         const query = this.searchQuery.toLowerCase();
            this.profs2 =  this.profs.filter((user) => 
             user.name.toLowerCase().includes(query) // Vérifie si le nom commence par la chaîne
      );
      console.log(this.profs2)
        },
            supprimer(prof){
                if(confirm("voulez vous vraiment supprimer ???")){
                    this.axios.delete(this.$store.state.api + "delete/"+prof.id)
                    .then(({ data }) => {
                    console.log(data);
                    this.axios
                   .get(this.$store.state.api + "allProfs")
                   .then(({ data }) => {
                     this.profs = data.profs  
                               
                     
                   })
                   .catch(({ err }) => {
                     console.log(err);
                     
                   });
                    })
                    .catch(({ err }) => {
                      console.log(err);
                     });
                    }
                
            },
            NewProfessor(){                
                 let datas = new FormData();   
                 if (!this.name || !this.subname || !this.password || !this.email || !this.filiere  ) {
                         
                     alert("veuiller remplir tous les champs");
                         return;
                       } 
                this.loading = true
                 datas.append("name", this.name);
                 datas.append("subname", this.subname);
                 datas.append("password", this.password);
                 datas.append("email", this.email);
                 datas.append("filiere", this.filiere);
                 datas.append("type" , 1)
                 this.axios
                   .post(this.$store.state.api + "register", datas)
                   .then(({ data }) => {
                    console.log(data)
                    this.axios
                   .get(this.$store.state.api + "allProfs")
                   .then(({ data }) => {
                     this.profs = data.profs  
                               
                     
                   })
                   .catch(({ err }) => {
                     console.log(err);
                     
                   });
                    
                     this.value  = false 
                     this.loading = false              
                     
                   })
                   .catch(({ err }) => {
                     console.log(err);
                     this.loading = false;
                   });
               },
         }
    } 
   
    </script>