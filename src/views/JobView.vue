<template>
    <div class="about">
      <h1>Detalles</h1>
      <p>No me resultó el pasar la id por url, pero lo intenté</p>
      <job-data :job="job"> </job-data>
    </div>
  </template>
  
  <script>
  import JobData from '../components/JobData.vue';
  import axios from 'axios';
  
  export default {
    name: 'JobView',
    components: {
      JobData
    },
    data(){
      return {
        job: Object
      }
    },
    props: {
      id: String
    },
    mounted(){
     let vue = this;
     axios.get(`http://170.239.85.65:3000/jobs/${this.id}`)
      .then(function (response) {
        vue.job= response.data;
      }
      )
    }
  }
  </script>
  