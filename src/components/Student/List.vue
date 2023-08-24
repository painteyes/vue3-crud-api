<script setup>
import {
  EyeIcon,
  PencilIcon,
  TrashIcon,
  UserPlusIcon
} from "@heroicons/vue/24/solid"

const deleteStudent = async (id) => {
  if (!window.confirm("Are you sure ?")) {
    return;
  }
  console.log("Deleted");
};

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
    <h1 class="text-3xl font-bold underline my-4"
    >
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
    <table 
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
        <tr 
          class="bg-white 
          border-b 
          dark:bg-gray-800 
          dark:border-gray-700"
          >
            <th 
              scope="row" 
              class="px-6 
              py-4 
              font-medium 
              text-gray-900 
              whitespace-nowrap 
              dark:text-white"
            >
              1
            </th>
            <td class="px-6 py-4">Mario Sanna</td>
            <td class="px-6 py-4">mariosanna@test.it</td>
            <td class="px-6 py-4">
              <router-link :to="{name: 'view-student', params: {id:1}}">
                <EyeIcon class="text-blue-500 h6 w-6 inline mx-2" />
              </router-link>
              <router-link :to="{name: 'edit-student', params: {id:1}}">
                <PencilIcon class="text-emerald-500 h6 w-6 inline mx-2" />
              </router-link>
              <TrashIcon @click="deleteStudent(1)" class="text-red-500 h6 w-6 inline mx-2" />
            </td>
          </tr>
      </tbody>
    </table>
  </div>
</template>
