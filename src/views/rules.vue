<template lang="">
  <div v-for="item in rulesList">
    <div class="card" style="width: 35rem;">
      <div class="card-body">
        <div style="display:flex;justify-content: space-between;">
          <h5 class="card-title">{{ item.nom }}</h5>
          <button type="button" class="btn btn-danger" @click=""
            style="margin-left:0px !important;margin-right:0px !important;margin-top:0px !important;">X</button>
        </div>
        <div v-for="(value, key, index) in item.jour">
          <h6 class="card-subtitle mb-2 text-muted">{{ key }} --- {{ value }}</h6>
        </div>
        <h5> les employés selectionnés</h5>
        <div v-for="(value, key, index) in item.employes">
          
          <p class="card-text"> {{ value }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    name: 'addTask',
    props:['rulesList'] ,
    components: {
      
    },
    data() {},
    methods: {
     
    }
}
</script>
<style lang="">
    
</style>