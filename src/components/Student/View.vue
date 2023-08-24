<script setup>
import {
  EyeIcon,
  PencilIcon,
  TrashIcon,
  UserPlusIcon
} from "@heroicons/vue/24/solid"
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
      Student #{{ 1 }}
    </h1>
    <router-link :to="{name: 'students'}">
      <button 
        type="submit" 
        class="text-white 
        bg-green-700 
        hover:bg-green-800 
        focus:ring-4 
        focus:outline-none 
        focus:ring-green-300 
        font-medium 
        rounded-full 
        text-sm 
        w-full 
        sm:w-auto 
        px-5 
        py-2.5 
        text-center 
        dark:bg-green-600 
        dark:hover:bg-green-700 
        dark:focus:ring-green-800"
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
            <th scope="row" 
              class="px-6 
              py-4 
              font-medium 
              text-gray-900 
              whitespace-nowrap 
              dark:text-white"
            >
              1
            </th>
            <td class="px-6 py-4">
              Mario Sanna
            </td>
            <td class="px-6 py-4">
              mariosanna@test.it
            </td>
            <td class="px-6 py-4">
              <router-link :to="{name: 'view-student', params: {id:1}}">
                <EyeIcon class="text-blue-500 h6 w-6 inline mx-2" />
              </router-link>
              <router-link :to="{name: 'edit-student', params: {id:1}}">
                <PencilIcon class="text-emerald-500 h6 w-6 inline mx-2" />
              </router-link>
              <router-link :to="{name: ''}">
                <TrashIcon class="text-red-500 h6 w-6 inline mx-2" />
              </router-link>
            </td>
          </tr>
        </tbody>
    </table>
</div>
</template>