<template>
  <div class="lg:flex bg-[#1B2026] w-full h-screen">
    <div
      class="block absolute items-center bg-black/60 p-6 w-full h-full"
      v-if="showLoading == true"
    >
      <div
        role="status"
        class="top-2/4 left-1/2 absolute -translate-x-1/2 -translate-y-1/2"
      >
        <svg
          aria-hidden="true"
          class="w-10 h-10 text-gray-200 dark:text-gray-600 animate-spin fill-blue-600"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
        <span class="sr-only">Loading...</span>
      </div>
    </div>

    <div
      class="lg:flex justify-center items-center hidden w-full lg:w-[45%] h-60 md:h-[30%] lg:h-full"
    >
      <img
        src="../../public/login-removebg-preview.png"
        alt=""
        class=" w-full lg:w-[96%] h-full lg:h-[98%] object-cover"
      />
    </div>
    <div
      class="flex justify-center items-center w-full lg:w-[55%] h-[100%] lg:h-full text-white"
    >
      <div class="space-y-9 bg-[red-400] w-[90%] lg:w-[60%] text-[16px]">
        <h1 class="font-bold text-[31px] text-center text-white lg:text-center">Hello! <br> Welcome Back</h1>
        <div class="space-y-3">
          <div class="space-y-1 w-full h-auto">
         
            <input
              type="email" v-model="email"
              class="px-4 rounded-md w-full h-12 font-semibold placeholder:font-semibold text-black placeholder:text-gray-800 focus:outline-none" placeholder="Enter Email"
            />
          </div>
          <div class="space-y-1 w-full h-auto">
          
            <div class="flex bg-white rounded-md w-full text-black focus:outline-none">
              <input
                :type="value == false ? 'password' : 'text'" v-model="password" placeholder="Enter Password"
                class="px-4 rounded-l-full w-11/12 h-12 font-semibold placeholder:font-semibold text-black placeholder:text-gray-800 focus:outline-none"
              />
              <div class="flex justify-center items-center w-1/12">
                <div @click="value = !value" class="font-semibold cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                    v-if="value == false"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                    v-else
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div class="flex justify-end space-x-3 w-full">
          
            <p class="text-left">Reset Password?</p>
          </div>
        </div>
       
       
        
        <div class="w-full h-auto">
          <div
            @click="send"
            class="flex justify-center items-center bg-white px-4 rounded-md w-full h-12 font-semibold text-black cursor-pointer"
          >
            Sign In
          </div>
        </div>
        <div class="flex w-full h-auto">
          <div class="flex justify-center items-center w-[30%]">
            <div class="bg-white w-full h-[1px]"></div>
          </div>
          <div class="flex justify-center items-center w-[40%]"> Or Continue With</div>
          <div class="flex justify-center items-center w-[30%]">
            <div class="bg-white w-full h-[1px]"></div>
          </div>
         
        </div>
        <div class="flex justify-between w-ful h-12">
         <div class="bg-white rounded-md w-[25%] h-full"></div>
         <div class="bg-white rounded-md w-[25%] h-full"></div>
         <div class="bg-white rounded-md w-[25%] h-full"></div>
        </div>
        <div class="flex space-x-2 w-full">
          <p class="font-extralight">I don't have a Account ? </p>
          <router-link to="register" class="font-semibold text-white"> Create Account!</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: false,
      password: "",

      email: "",
      showLoading: false,
    };
  },
  methods: {
    send() {
       if ( !this.password || !this.email) {
        this.showLoading = false;
        alert("veuiller remplir tous les champs");
        return;
      }
      this.showLoading = true;
      let datas = new FormData();
      datas.append("password", this.password);
      datas.append("email", this.email);
      console.log(datas[0])
      this.axios.post(this.$store.state.api + "login", datas).then(({ data }) => {
          console.log(data);
          localStorage.setItem('user', JSON.stringify(data.user));
          localStorage.setItem('jwtoken', data.access_token);
          if(data.user.type==2){
            this.$router.push('/dashboard');

          }else{
            this.$router.push('/chat');

          }
        }).catch(({ err }) => {
          console.log(err);
          this.showLoading = false;
        });
      
    },
  },
};
</script>
