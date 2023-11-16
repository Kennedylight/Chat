<template>
  <div>

      <div class="w-screen h-screen bg-green-500 items-center justify-center flex text-center">
        <div class="h-32 w-8/12 text-center font-semibold text-white text-2xl">
          <p>SCHMID</p>
        </div>
      </div>
    <div>
      <router-view name="one"></router-view>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {

  data() {
    return {
      auth: false,
    }
  },

  mounted() {
    if (localStorage.getItem("jwtToken")) {
      this.auth = true; 
      this.$store.dispatch('SETUSER');
      this.$store.commit('setcategories');
      this.$store.commit('setAllProducts');
    }


  },

  methods: {
    logout() {

      let config = {
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
        }
      }

      axios.post(this.api+'/logout', "", config)
        .then(({ data }) => {
          localStorage.removeItem("jwtToken");
          console.log(data);
          this.auth = false
        }).catch(error => console.log(error))
    }
  },
  computed: {
        api(){
            return this.$store.state.api;
        },
        user(){
          return this.$store.state.user;
        }
    },
}
</script>

