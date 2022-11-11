<template>
  <div class="container mt-5">
    <h1>Trabajos</h1>
    <br>
    
    <ul class="list-group" v-for="job in jobs" :key="job.id">
      
      <li @click="showJobData(job.id)" class="list-group-item mb-2 hover light" style="background-color: #e3f2fd;">
        {{ job.title }}
      </li>

      <li class="list-group-item mb-3">
        Salario: {{job.salary}}
      </li>
    </ul>
    <br>
    
    
  </div>
</template>

<style>
.hover {
  cursor: pointer;
}
</style>

<script>
import axios from 'axios';
// @ is an alias to /src



export default {
  name: "HomeView",
  data() {
    return {
      jobs: []
    };
  },
  mounted() {
    let vue = this;
    axios.get('http://170.239.85.65:3000//jobs')
      .then(function (response) {
        vue.jobs= response.data;
        
      })
  },
  methods: {
    showJobData(id) {
      this.$router.push(`/jobs/${id}`);
    },
    
  },
};
</script>
