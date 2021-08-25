<template>
  <div>hello</div>
</template>

<script>
import axios from 'axios'
export default {
  name: '',
  data() {
    return {}
  },
  created() {
    axios.defaults.baseURL = 'http://localhost:8080'

    axios.get('/a').then(res => {
      console.log(res)
    })
  },
  methods: {}
}
</script>

<style scoped>
</style>