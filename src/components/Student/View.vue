<script setup>
import {
  PencilIcon,
  TrashIcon,
} from "@heroicons/vue/24/solid"

import { onMounted } from "vue";
import { useRoute } from 'vue-router';
import useStudent from "../../composables/studentApi";

const route = useRoute();

const { 
  studentData, 
  getSingleStudent, 
  destroyStudent, 
  error, 
  statusCode, 
  delError 
} = useStudent();

onMounted(() => {
  getSingleStudent(route.params.id);
});

const deleteStudent = async (id) => {
  if (!window.confirm("Are you sure ?")) {
    return;
  }
  destroyStudent(id);
};

</script>

<template>

  <div 
    class="w-full 
    max-w-screen-xl 
    mx-auto 
    flex 
    justify-between 
    items-center
    p-4 
    my-4"
  >
    <h1 class="text-2xl font-bold underline my-4">
      Student
    </h1>
    <router-link :to="{name: 'students'}">
      <button 
        type="button" 
        class="text-white 
        bg-green-700 
        hover:bg-green-800 
        focus:outline-none 
        font-medium 
        rounded-full 
        text-sm 
        w-full 
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
    class="w-full 
    max-w-screen-xl 
    relative 
    overflow-x-auto 
    mx-auto" 
  >
    <div
      class="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg font-medium"
      role="alert"
      v-if="error"
    >
      Oops! Error encountered: {{ error.message }}
    </div>

    <table v-if="studentData.id"
      class="w-full 
      text-sm 
      text-center 
      text-gray-500 
      dark:text-gray-400"
    >
      <thead 
        class="text-xs 
        text-gray-700 
        uppercase 
        bg-gray-50 
        dark:bg-gray-700 
        dark:text-gray-400"
      >
        <tr>
          <th scope="col" class="px-6 py-3">
              ID
          </th>
          <th scope="col" class="px-6 py-3">
              Name
          </th>
          <th scope="col" class="px-6 py-3">
              Email
          </th>
          <th scope="col" class="px-6 py-3">
            Action      
          </th>
        </tr>
      </thead>
      <tbody>
        <tr 
          class="bg-white 
          border-b 
          dark:bg-gray-800 
          dark:border-gray-700"
        >
          <td class="px-6 py-4">
            {{studentData.id}}
          </td>
          <td class="px-6 py-4">
            {{studentData.name}}
          </td>
          <td class="px-6 py-4">
            {{studentData.email}}
          </td>
          <td class="px-6 py-4">
            <router-link v-if="studentData.id" :to="{ name: 'edit-student', params: { id: studentData.id } }">
              <PencilIcon class="text-emerald-500 h6 w-6 inline mx-2" />
            </router-link>
            <TrashIcon @click="deleteStudent(studentData.id)" class="text-red-500 h6 w-6 inline mx-2" />
          </td>
        </tr>
      </tbody>
    </table>  
    <div
      class="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg font-medium"
      role="alert"
      v-if="delError"
    >
      Unable to Delete Student: {{ delError.message }}
    </div>
    <div
      class="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg font-medium"
      role="alert"
      v-if="statusCode === 200"
    >
      Student deleted successfully
    </div>
  </div>
</template>