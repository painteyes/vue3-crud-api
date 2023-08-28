<script setup>
import { EyeIcon, PencilIcon, TrashIcon, UserPlusIcon } from "@heroicons/vue/24/solid"
import { onMounted, watch, ref } from "vue";
import useStudent from "../../composables/studentApi";

const {
  studentData,
  error,
  statusCode,
  delError,
  getAllStudent,
  destroyStudent,
} = useStudent();

onMounted(getAllStudent);

const deleteStudent = async (id) => {
  if (!window.confirm("Are you sure ?")) {
    return;
  }
  await destroyStudent(id);
  await getAllStudent();
};

const showAlert = ref(false)

watch(statusCode, (newVal, oldVal) => {
  if (newVal === 200) {
    showAlert.value = true;
    setTimeout(() => {
      showAlert.value = false;
      statusCode.value = oldVal;
    }, 4000);
  }
});

</script>

<template>
  
  <div 
    class="w-full 
    max-w-screen-xl 
    flex 
    flex-wrap 
    items-center 
    justify-between 
    mx-auto 
    p-4 
    my-4"
  >
    <h1 class="text-3xl font-bold underline my-4">
      Students
    </h1>

    <div class="flex md:order-2 justify-end">
      <router-link :to="{name: 'add-student'}">
        <button 
          class="bg-blue-500 
          hover:bg-blue-700 
          text-white 
          font-bold 
          py-2.5 
          px-5 
          focus:outline-none
          rounded-full"
        >
          <UserPlusIcon class="h6 w-6 m-auto inline" />
          <span class="h6 w-6 inline align-middle ml-2">
            Add student
          </span> 
        </button>
      </router-link>
    </div>
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
      v-if="delError"
    >
      Unable to delete student: {{ delError.message }}
    </div>
    <div
      class="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg font-medium"
      role="alert"
      v-if="showAlert"
    >
      Student deleted successfully
    </div>

    <div
      class="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg font-medium"
      role="alert"
      v-if="error"
    >
      Oops! Error encountered: {{ error.message }}
    </div>

    <table v-if="studentData && studentData.length"
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
            #
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
        <tr v-for="({ id, name, email }, i) in studentData" :key="id"
          class="bg-white 
          border-b 
          dark:bg-gray-800 
          dark:border-gray-700"
        >
          <td class="px-6 py-4">{{ ++i }}</td>
          <td class="px-6 py-4">{{ name }}</td>
          <td class="px-6 py-4">{{ email }}</td>
          <td class="px-6 py-4">
            <router-link v-if="id" :to="{name: 'view-student', params: {id: id}}">
              <EyeIcon class="text-blue-500 h6 w-6 inline mx-2" />
            </router-link>
            <router-link v-if="id" :to="{name: 'edit-student', params: {id: id}}">
              <PencilIcon class="text-emerald-500 h6 w-6 inline mx-2" />
            </router-link>
            <TrashIcon @click="deleteStudent(id)" class="text-red-500 h6 w-6 inline mx-2" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template> 
