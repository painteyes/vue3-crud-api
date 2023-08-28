<script setup>
import { onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import useStudent from "../../composables/studentApi";

const route = useRoute();
const studentId = route.params.id
const router = useRouter()

const { studentData, error, getSingleStudent, updateStudent } = useStudent();

const handleUpdateStudentForm = async () => {
  await updateStudent(studentId, studentData.value)
  router.push({
    name: 'view-student',
    params: {id: studentId}
  })
}

onMounted(() => {
  getSingleStudent(studentId);
});

</script>

<template>
  <div 
    class="w-full 
    max-w-screen-xl 
    mx-auto 
    flex 
    flex-col 
    justify-center 
    flex-[0_0_50%]"
  > 
    <div class="w-1/2 mx-auto flex justify-between items-center">
      <h1 class="text-2xl font-bold underline my-4">
        Edit student
      </h1>
      <router-link :to="{name: 'students'}">
        <button 
          type="submit" 
          class="text-white 
          bg-green-700 
          hover:bg-green-800 
          focus:outline-none 
          font-medium 
          rounded-full 
          text-sm w-full 
          sm:w-auto 
          px-5 
          py-2.5 
          text-center 
          dark:bg-green-600 
          dark:hover:bg-green-700"
        >
          Back to home
        </button>
      </router-link>
    </div>

    <div
      class="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg font-medium"
      role="alert"
      v-if="error"
    >
      Oops! Error encountered: {{ error.message }}
    </div>

    <form v-if="studentData.id"
      @submit.prevent='handleUpdateStudentForm' 
      class="w-1/2 mx-auto my-4"
    >
      <div class="relative z-0  mb-6 group">
        <label 
          for="id" 
          class="peer-focus:font-medium 
          absolute 
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
          ID
        </label>
        <input 
          type="text"
          name="id" 
          id="id" 
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
          focus:ring-0
          focus:border-blue-600
          peer"   
          readonly
          disabled
          v-model.trim="studentData.id"
        />
      </div>
      <div class="relative z-0  mb-6 group">
        <label 
          for="name" 
          class="peer-focus:font-medium
          absolute
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
          v-model.trim="studentData.name"
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
          focus:ring-0
          focus:border-blue-600
          peer"
          placeholder=" " 
          required 
        />
      </div>
      <div class="relative z-0 w-full mb-6 group">
        <label 
          for="email" 
          class="peer-focus:font-medium
          absolute
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
          v-model.trim="studentData.email"
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
          focus:ring-0
          focus:border-blue-600
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
        Save
      </button>
    </form>
  </div>
</template>