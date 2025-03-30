<template>
 
    <div class="w-full h-full">
        <div class="flex justify-center items-center px-3 w-full h-[10%]">
            <div class="flex justify-between items-center w-full">
                <div class="mb-4 md:mb-0 w-full md:w-1/3">
                    <input type="text" placeholder="Search users..." @input="rechercheName" v-model="searchQuery" class="bg-white px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full">
                </div>
               
               
            </div>
        </div>
        <div class="px-4 w-full h-[90%] overflow-y-auto">
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
    </template>
    <script>
    export default {
        data(){
            return {
                profs:[],
                profs2:[],
                searchQuery:"",
            }
        },
        mounted(){
            this.axios
                   .get(this.$store.state.api + "allEtudiants")
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
                   .get(this.$store.state.api + "allEtudiants")
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
        }
    }
    </script>