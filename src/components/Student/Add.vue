<script setup>
import { reactive } from "vue";
const formData = {
  name: "",
  email: ""
};
const handleAddStudentForm = async () => {
  console.log("Form Submitted", formData)
}
</script>

<template>
  <div 
    class="w-full 
    max-w-screen-xl 
    mx-auto 
    flex flex-col 
    justify-center 
    flex-[0_0_50%]"
  > 
    <div class="w-1/2 mx-auto flex justify-between items-center">
      <h1 class="text-2xl font-bold underline my-4">
        New student
      </h1>
      <router-link :to="{name: 'students'}">
        <button 
          type="submit" 
          class="w-full
          text-white 
          bg-green-700 
          hover:bg-green-800 
          focus:outline-none 
          font-medium 
          rounded-full 
          text-sm 
          sm:w-auto 
          px-5 
          py-2.5 
          text-center 
          dark:bg-green-600 
          dark:hover:bg-green-700 
          dark:focus:ring-green-800"
        >Back to home</button>
      </router-link>
    </div>
    <form @submit.prevent='handleAddStudentForm' class="w-1/2 mx-auto my-4">
      <div class="relative z-0  mb-6 group">
        <label 
          for="name" 
          class="absolute
          peer-focus:font-medium 
          text-sm 
          text-gray-500 
          dark:text-gray-400 
          duration-300 
          transform 
          -translate-y-6 
          scale-75 
          top-3 
          origin-[0] 
          peer-focus:left-0 
          peer-focus:text-blue-600 
          peer-focus:dark:text-blue-500 
          peer-placeholder-shown:scale-100
          peer-placeholder-shown:translate-y-0 
          peer-focus:scale-75 
          peer-focus:-translate-y-6"
        >
          Name
        </label>
        <input 
          type="text"
          name="name" 
          id="name" 
          v-model.trim="formData.name"
          class="block 
          py-2.5 
          px-0 
          w-full 
          text-sm 
          text-gray-900 
          bg-transparent 
          border-0 
          border-b-2 
          border-gray-300 
          appearance-none 
          dark:text-white 
          dark:border-gray-600 
          dark:focus:border-blue-500 
          focus:outline-none 
          focus:border-blue-600 
          peer"          
          placeholder=" " 
          required 
        />
      </div>
      <div class="relative z-0 w-full mb-6 group">
        <label 
          for="email" 
          class="absolute
          peer-focus:font-medium 
          text-sm 
          text-gray-500 
          dark:text-gray-400 
          duration-300 
          transform 
          -translate-y-6 
          scale-75 
          top-3 
          origin-[0] 
          peer-focus:left-0 
          peer-focus:text-blue-600 
          peer-focus:dark:text-blue-500 
          peer-placeholder-shown:scale-100 
          peer-placeholder-shown:translate-y-0 
          peer-focus:scale-75 
          peer-focus:-translate-y-6"
        >
          Email address
        </label>
        <input 
          type="email" 
          name="email" 
          id="email" 
          v-model.trim="formData.email"
          class="block 
          py-2.5 
          px-0 
          w-full 
          text-sm 
          text-gray-900 
          bg-transparent 
          border-0 
          border-b-2 
          border-gray-300 
          appearance-none 
          dark:text-white 
          dark:border-gray-600 
          dark:focus:border-blue-500 
          focus:outline-none 
          peer"          
          placeholder=" " 
          required 
        />
      </div>
      <button 
        type="submit" 
        class="my-4 
        text-white 
        bg-blue-700 
        hover:bg-blue-800 
        focus:outline-none 
        font-medium 
        rounded-full 
        text-sm 
        w-full 
        sm:w-auto 
        px-5 
        py-2.5 
        text-center 
        dark:bg-blue-600 
        dark:hover:bg-blue-700"
      >
        Add student
      </button>    
  </form>
  </div>
</template>

<style scoped>
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
  /* transition: background-color 5000s ease-in-out 0s; */
  -webkit-background-clip: text;
}
</style>