<template>
    <div class="flex w-full h-screen">
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
                        <input type="text" @input="rechercheName" v-model="searchQuery" class="bg-[#3B3B3B] px-2 rounded-md w-[90%] h-[100%] placeholder:text-[13px] focus:outline-none" placeholder="recherche ou demarrer une discussion">
                    </div>
                </div>
            </div>
            <div class="space-y-4 p-2 w-full h-[85%] overflow-y-auto" v-if="recherche == false">
              <div class="space-y-4 w-full h-full" v-if="users.length ==0">
                <div class="flex justify-between bg-black hover:bg-[#515151] px-2 lg:p-4 rounded-b-md w-full h-16 text-white animate-pulse cursor-pointer" v-for="i in 5" :key="i"  >
                    <div class="flex items-center space-x-2 lg:space-x-4 bg-black h-full">
                        <div class="bg-white rounded-full w-10 lg:w-12 h-10 lg:h-12 animate-pulse">
                            
                        </div>
                        <div class="space-y-2">
                            <p class="bg-white rounded-full font-bold text-white animate-pulse">kennedy light yagami </p>
                            <p class="bg-white rounded-full font-extralight text-[12px] text-white lg:text-[15px] animate-pulse">D'accord</p>
                        </div>
                    </div>
                    
                </div>
              </div>
                 <div class="flex justify-between hover:bg-[#515151] px-2 lg:p-4 rounded-b-md w-full h-16 text-white cursor-pointer" v-for="user in users" :key="user" @click="lookMessage(user)" >
                    <div class="flex items-center space-x-2 lg:space-x-4 h-full">
                        <div class="bg-white rounded-full w-10 lg:w-12 h-10 lg:h-12">
                            <img src="../../public/img/profil.png" class="rounded-full w-full h-full object-cover" alt="">
                        </div>
                        <div class="">
                            <p class="font-bold">{{ user.name }} </p>
                           
                        </div>
                    </div>
                   
                </div> 
               
            </div>
            <div class="p-2 w-full h-[85%] overflow-y-auto" v-else>
                
                <div class="flex justify-between hover:bg-[#515151] px-2 lg:p-4 rounded-b-md w-full h-16 text-white cursor-pointer" v-for="user in users2" :key="user" @click="lookMessage(user)" >
                    <div class="flex items-center space-x-2 lg:space-x-4 h-full">
                        <div class="bg-white rounded-full w-10 lg:w-12 h-10 lg:h-12">
                            <img src="../../public/img/profil.png" class="rounded-full w-full h-full object-cover" alt="">
                        </div>
                        <div class="">
                            <p class="font-bold">{{ user.name }} </p>
                            
                        </div>
                    </div>
                   
                </div>
               
            </div>
        </div>
        <div class="lg:flex justify-center items-center hidden bg-[#2C2C2C] w-full lg:w-[83%] h-full"  v-if="openConversation==true && profil==false">
            <p class="text-[16px] text-white">Aucune conversation selectionner</p>
        </div>
        <div class="W-full h-full lg:w-[83%] flex justify-center items-center bg-black/60" v-else-if="profil==true">
            <div class="flex items-center justify-center w-[40%] min-h-screen p-2 ">
  <div class="max-w-md w-full bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl">
    <!-- Cover Image -->
    <div class="h-32 bg-gradient-to-r from-purple-500 to-indigo-600 relative">
      <div class="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
        <img class="h-24 w-24 rounded-full border-4 border-white object-cover" src="../../public/img/profil.png" alt="Profile picture">
      </div>
    </div>
    
    <!-- Profile Info -->
    <div class="pt-16 pb-8 px-6 text-center space-y-3">
        <div class="w-full flex justify-center">
            <div class="flex space-x-4 mt-4">
       <div v-for="i in resultat" :key="i">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 text-yellow-400">
         <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
        </svg>
       </div>
       <div v-for="i in 5 - resultat" :key="i">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 text-black">
         <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
        </svg>
       </div>
      

      </div>
        </div>
      <h3 class="text-xl font-bold text-gray-800">{{user.name}} {{user.subname}}</h3>
      <p class="text-indigo-600 font-medium">Professeur de {{ user.filiere }}</p>
    
    <div class="w-full flex justify-center">
        <div class="flex items-center space-x-3 my-6">
  <input 
    id="validerNote" 
    type="checkbox" 
    v-model="checkbox"
    class="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
  />
  <label for="validerNote" class=" font-medium  dark:text-gray-200">
    Je veux noter ce professeur
  </label>
</div>
    </div>

      
      <div class="py-3" :class="checkbox==false?'hidden ':'block'">
     
      <div class="max-w-sm mx-auto mt-6">
  <label for="note" class="block  font-medium  dark:text-gray-200">
    Entrez une note entre 1 et 5 :
  </label>
  <input 
    id="note"
    type="number"
    min="1"
    max="5"
    v-model="note"
    class="mt-2 block w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-900 dark:text-white"
  />
</div>

      
    </div>
      
      <!-- Contact Buttons -->
      <div class="mt-8 flex justify-center space-x-3">
        <button class="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg transition duration-150 ease-in-out" @click="notation">
          Enregister
        </button>
        <button class="flex-1 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium py-2 px-4 rounded-lg transition duration-150 ease-in-out" @click="profil = false">
          Annuler
        </button>
      </div>
      
    
    </div>
    
    <!-- Skills -->
   
  </div>
</div>
        </div>
        <div class="w-full lg:w-[83%] h-full" :class="Discussion==false?'hidden lg:block':'block'" v-else>
            <div class="border-[2C2C2C] bg-[#2C2C2C] border-b w-full h-[10%]">
                <div class="flex justify-between p-4 rounded-b-md w-full h-16 text-white">
                    <div class="flex items-center space-x-4 h-full">
                        <div class="flex items-center lg:hidden h-full" @click="Discussion=false">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 lg:w-6 h-4 lg:h-6">
                                <path fill-rule="evenodd" d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd" />
                              </svg>
                              
                              
                              
                        </div>
                        <div class="bg-white rounded-full w-10 lg:w-12 h-10 lg:h-12">
                            <img src="../../public/img/profil.png" class="rounded-full w-full h-full object-cover" alt="">
                        </div>
                        <div class="">
                            <p class="font-bold" v-if="user.id==principalUser.id">Vous()</p>
                            <p class="font-bold" v-else>{{ user.name }} {{ user.subname }}</p>
                            <p class="font-extralight text-[10px] lg:text-[15px]">Selectionner pour avoir plus d'infos</p>
                        </div>
                    </div>
                          <div class="flex items-center h-full space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 lg:w-6 h-4 lg:h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
                          <div @click="profil = true" class="cursor-pointer" v-if="principalUser.type!=2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 lg:w-6 h-4 lg:h-6">
                                 <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                            </svg>

                          </div>
                          <div v-if="principalUser.type==2">
                            <router-link to="/dashboard">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 lg:w-6 h-4 lg:h-6">
                                 <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
                            </svg>
                            </router-link>                          

                          </div>
                          <div v-else>
                            <router-link to="/login">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 lg:w-6 h-4 lg:h-6">
                                 <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
                            </svg>
                            </router-link>                          

                          </div>
                          
                    </div>
                </div>
            </div>
            <div class="space-y-2 bg-[#2C2C2C] p-3 lg:p-8 w-full h-[83%] overflow-y-auto">
                <div class="flex w-full h-auto text-white" v-for="message in messages" :key="message?.id" :class="message.id_emetteur!=principalUser.id?'justify-start':'justify-end'">
                    <div class="flex justify-between space-x-3 p-2 rounded-md max-w-[90%] lg:max-w-[60%] h-auto"  :class="message.id_emetteur!=principalUser.id?'bg-[#363636]':'bg-[#005C4B]'">
                        <p  class="text-[13px] lg:text-[15px]">{{ message.message }}</p>
                       <div class="flex items-end h-full">
                        <p class="text-[10px]">{{  formattedTime(message.created_at) }}</p>
                       </div>
                    </div>
                </div>
            </div>
            <div class="flex justify-between border-[2C2C2C] bg-[#2C2C2C] px-4 border-t w-full h-[7%] text-white">
                <input  placeholder="Tapez votre message..." v-model="message"  class="bg-transparent w-[90%] h-full overflow-hidden focus:outline-none" />
                <div class="flex justify-end w-[10%] h-full">
                    <div class="flex justify-center items-center w-14 h-full" @click="sendMessage">
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
import moment from "moment";
export default {
    data(){
        return {
            resultat:0,
            Discussion:false,
            users:[],
            users2:[],
            user:[],
            profil:false,
            openConversation:true,
            principalUser:[],
            message:'',
            note:0,
            messages:[],
            searchQuery:'',
            recherche:false,
            checkbox:false,
            lastMesssage:[],
        }
    },
    
 
    mounted(){
        this.principalUser =JSON.parse(localStorage.getItem("user" ))
        console.log("user principal" + JSON.stringify(this.principalUser))
        this.axios
        .get(this.$store.state.api + "allProfs" , this.$store.state.config
   
    )
        .then(({ data }) => {
         
         this.users = data.profs
         console.log(this.users);
        })
        .catch(({ err }) => {
          console.log(err);
          this.showLoading = false;
        });
    },
    methods:{
        formattedTime(heure) {
            return moment(heure).format("LT"); // Ex: "12:09 AM"
        },
        notation(){
            if(this.checkbox == false){
                alert("cochez la case pour noter puis enregistrer la note que vous avez donnez a votre professeur")
                return

            }
           else if(this.note <1 || this.note >5){
                alert("Entrer un notre compris entre 1 et 5")
                return
            }
            
            let datas = new FormData();      
            datas.append("id_etudiant", this.principalUser.id);
            datas.append("id_professeur", parseInt(this.user.id));
            datas.append("note", parseInt(this.note));
            this.axios.post(this.$store.state.api + "newNote" , datas ).then(({ data }) => {
            this.resultat =parseInt(data.note.note)

            console.log() 
            console.log(this.resultat)     
          
        }).catch(({ err }) => {
          console.log(err);
        
        });

        },
        rechercheName(){
            
            // Filtre les utilisateurs dont le nom contient la chaîne recherchée
            if(this.searchQuery){
                this.recherche = true
            }
         const query = this.searchQuery.toLowerCase();
            this.users2 =  this.users.filter((user) => 
             user.name.toLowerCase().includes(query) // Vérifie si le nom commence par la chaîne
      );
        },
        lookMessage(user){
            this.openConversation = false
            this.Discussion=true
            this.user = user
            this.messages = []
            let data = new FormData();      
            data.append("id_etudiant", this.principalUser.id);
            data.append("id_professeur", parseInt(this.user.id));
            data.append("note", parseInt(this.note));
            this.axios.post(this.$store.state.api + "NoteUser" , data ).then(({ data }) => {
            this.resultat =data.note;      
            console.log(this.resultat)        
          
        }).catch(({ err }) => {
          console.log(err);
        
        });
            let datas = new FormData();      
            datas.append("message", this.message);
            datas.append("id_reception", parseInt(this.user.id));
            this.axios.post(this.$store.state.api + "allMessages" , datas ,this.$store.state.config).then(({ data }) => {
            console.log(data);
            this.messages = data
          
        }).catch(({ err }) => {
          console.log(err);
        
        });
           
        },
        sendMessage(){
          let message = {
            'message' : this.message,
            'id_reception':this.user.id,
            'id_emetteur':this.principalUser.id

          }


            let datas = new FormData();      
      datas.append("message", this.message);
      datas.append("id_reception", parseInt(this.user.id));
      
            this.axios.post(this.$store.state.api + "sendMessage" , datas ,this.$store.state.config).then(({ data }) => {
          console.log(data);
          this.messages.push(message)

          console.log(this.messages)
          
          this.message = "";
        }).catch(({ err }) => {
          console.log(err);
        
        });
        }
    },
}
</script>