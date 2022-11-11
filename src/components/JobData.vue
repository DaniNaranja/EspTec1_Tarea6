<template>
    <div class="container">
      <div class="card" style="width: 18rem" v-if="job">

        <div class="card-body">
          <h5 class="card-title">{{ job.title }}</h5>
          <p class="card-text">Descripcion: {{ job.description }}</p>
          <p class="card-text">Salario: {{job.salary}}</p>
          <p class="card-text">Posicion: {{job.position}}</p>
          <p class="card-text">Remoto: 
            <span v-if="job.isRemote = false"> No</span>
            <span v-else> Si</span>
          </p>


        </div>
      </div>
    </div>
</template>
  
<script>
  export default {
    name: "JobData",
    props: {
      //job: Object,  Me daba un error no mutated props si lo hacia como object
    },
  };
</script>
  