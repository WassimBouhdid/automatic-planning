<template lang="">
  <div v-for="item in rulesList">
    <div class="card" style="width: 35rem;margin-right: auto;margin-left: auto;">
      <div class="card-body">
        <div style="display:flex;justify-content: space-between;">
          <h5 class="card-title">{{ item.nom }}</h5>
          <button type="button" class="btn btn-danger"
            style="margin-left:0px !important;margin-right:0px !important;margin-top:0px !important;" @click="deleteRule(item.nom)">X</button>
        </div>
        <div v-for="(value, key, index) in item.jour">
          <h5 class="card-subtitle mb-2 text-muted">{{ key }}</h5>
          <div class="row">
            <div class="col">
              <h6> nbr Am :</h6>
              <p>{{ value.nbrAm }}</p>
            </div>
            <div class="col">
              <h6>nbr Pm :</h6>
              <p>{{ value.nbrPm }}</p>
            </div>
          </div>
          <hr>
        </div>
        <h5> les employés selectionnés :</h5>
        <div v-for="(value, key, index) in item.employes">

          <p class="card-text"> {{ value }}</p>
        </div>
        <h5> couleur :</h5>
        <div v-bind:style="{'background-color': item.color}">
          {{ item.color }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    name: 'addTask',
    props:['rulesList'] ,
    emits: ["deleteRule2"],
    components: {
      
    },
    data() {
      return{

      }
    },
    methods: {
      deleteRule(name){
        this.$emit('deleteRule2', name)
        
      }
    }
}
</script>
<style lang="">
    
</style>