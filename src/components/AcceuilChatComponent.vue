<template>
    <div class="flex justify-center items-center bg-[#2C2C2C] w-full h-screen">
<div class="flex justify-center items-center rounded-full w-24 h-24">
    <div class="flex justify-center items-center min-h-screen">
        <div class="border-[#1DAA61] border-4 border-t-transparent rounded-full w-24 h-24 animate-spin"></div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="fixed w-16 h-16 text-[#1DAA61]">
            <path fill-rule="evenodd" d="M4.848 2.771A49.144 49.144 0 0 1 12 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 0 1-3.476.383.39.39 0 0 0-.297.17l-2.755 4.133a.75.75 0 0 1-1.248 0l-2.755-4.133a.39.39 0 0 0-.297-.17 48.9 48.9 0 0 1-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97ZM6.75 8.25a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 0 1.5h-9a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5H12a.75.75 0 0 0 0-1.5H7.5Z" clip-rule="evenodd" />
          </svg>
      </div>
      

   
</div>
          
    </div>
</template>
<script>
export default {
    mounted(){
        setTimeout(() => {
     this.$router.push("/login")
}, 5000);
    }
}
</script>