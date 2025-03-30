<template>
    <section class="space-y-3 dark:bg-gray-800 mx-auto p-6 dark:text-white container">

        <h4 class="font-bold text-gray-700 dark:text-gray-300 text-xl md:text-3xl text-center capitalize">⚒️ Notes des enseignants 🛠️</h4>
        <p class="dark:text-gray-400 text-center">Ces notes ont ete donnees par des etudiants.</p>
    
        <div class="flex justify-center items-center">
            <div class="gap-8 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 my-8">
                <!-- cards -->
               
    
                <div class="w-full text-center" v-for="prof in profs" :key="prof">
                    
                        <div class="flex flex-col justify-center items-center bg-blue-100 dark:bg-gray-900 mx-auto p-4 border-4 dark:border-gray-600 border-blue-200 rounded-lg w-full h-60" >
                            <!-- Photo ronde -->
                            <div class="border-4 border-white dark:border-gray-600 rounded-full w-20 h-20 overflow-hidden">
                              <img src="/aqua.jpg" alt="Enseignant" class="w-full h-full object-cover">
                            </div>
                        
                            <!-- Informations de l'enseignant -->
                            <h5 class="mt-3 font-bold dark:text-white text-lg">Mr/Mme {{ prof.name }}</h5>
                            <span class="font-medium dark:text-gray-400 text-sm"> {{prof.filiere}} </span>
                        
                            <!-- Étoiles de notation -->
                            <div class="flex mt-2">
                              <svg v-for="star in 5" :key="star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                :class="star <= rating ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'" class="w-5 h-5">
                                <path
                                  d="M12 2l3.09 6.26 6.91 1-5 4.87 1.18 6.88L12 17.77l-6.18 3.24L7 14.13l-5-4.87 6.91-1z" />
                              </svg>
                            </div>
                          </div>
                   
                </div>
    
               
    
    
                
    
    
               
    
    
            </div>
        </div>
    </section>
    
</template>
<script>
export default {
  data(){
   return {
    profs:[],
    image: "String", 
    name: "Ndje",    // Nom et prénom
    filiere: "Mater I", // Filière enseignée
    rating: 4   // Note (1 à 5 étoiles)
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
}
</script>