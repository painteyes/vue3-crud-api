import axios from 'axios'
import { ref } from 'vue'

export default function useStudent() {
    const url = "http://localhost:3000/students/"
    const studentData = ref([])
    const error = ref(null)
    const statusCode = ref(null)
    const delError = ref(null)

    // Get All Students Data
    const getAllStudent = async () => {
      studentData.value = []
      error.value = null
      try {
        const res = await axios(url)
        studentData.value = res.data
      } catch (err) {
        console.error(err.message)
        error.value = err
      }
    }

    // Get Single Student Data
    const getSingleStudent = async (id) => {
      studentData.value = []
      error.value = null
      try {
        const res = await axios(url + id)
        studentData.value = res.data
      } catch (err) {
        console.error(err.message)
        error.value = err
      }
    }
  
    // Add Student
    const createStudent = async (formData) => {
      studentData.value = []
      error.value = null
      try {
        const config = {
          method: 'POST',
          url: url,
          headers: {
            'Content-Type': 'application/json'
          },
          data: JSON.stringify(formData)
        }
        const res = await axios(config)
        studentData.value = res.data
        statusCode.value = res.status
      } catch (err) {
        console.error(err.message)
        error.value = err
      }
    }
  
    // Update Student Data
    const updateStudent = async (id, data) => {
      studentData.value = []
      error.value = null
      try {
        const config = {
          method: 'PUT',
          url: url + id,
          headers: {
            'Content-Type': 'application/json'
          },
          data: JSON.stringify(data)
        }
        const res = await axios(config)
        studentData.value = res.data
        statusCode.value = res.status
      } catch (err) {
        console.error(err.message)
        error.value = err
      }
    }
  
    // Delete Student
    const destroyStudent = async (id) => {
      studentData.value = []
      error.value = null
      try {
        const config = {
          method: 'DELETE',
          url: url + id,
          headers: {
            'Content-Type': 'application/json'
          }
        }
        const res = await axios(config)
        statusCode.value = res.status
      } catch (err) {
        console.error(err.message)
        delError.value = err
      }
    }
    return {
      studentData,
      error,
      statusCode,
      delError,
      getAllStudent,
      getSingleStudent,
      createStudent,
      updateStudent,
      destroyStudent
    }
  }