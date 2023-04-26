<template lang="">
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <div style="display:flex;justify-content: space-between;">
                <h5 class="card-title"> {{ test2 }} </h5>
                <button type="button" class="btn btn-danger" @click="deleteTask(this.test2)"
                    style="margin-left:0px !important;margin-right:0px !important;margin-top:0px !important;">X</button>

            </div>
                <div>
                    <label>test1</label>
                    <input type="text" v-model="addTaskForm2.nom">
                </div>
                <div>
                    <input type="checkbox" id="scales" name="scales" checked v-model="addTaskForm2.jour1.lundi">
                    <label for="scales">lundi</label>
                    <input type="checkbox" id="scales" name="scales" v-model="addTaskForm2.jour1.mardi">
                    <label for="scales">mardi</label>
                    <input type="checkbox" id="scales" name="scales" v-model="addTaskForm2.jour1.mercredi">
                    <label for="scales">mercredi</label>
                    <input type="checkbox" id="scales" name="scales" v-model="addTaskForm2.jour1.jeudi">
                    <label for="scales">jeudi</label>
                    <input type="checkbox" id="scales" name="scales" v-model="addTaskForm2.jour1.vendredi">
                    <label for="scales">vendredi</label>
                </div>
                <div>
                    <label>nbr AM</label>
                    <input type="number" v-model="addTaskForm2.nbrAm">
                </div>
               
                <div>
                    <label>nbr PM</label>
                    <input type="number" v-model="addTaskForm2.nbrPm">
                </div>

                <div>
                    <label for="pet-select">Choose a pet:</label>

                    <select id="pet-select" multiple size="7" v-model="addTaskForm2.employes">
                        <option value="">--Please choose an option--</option>
                        <option value="tous">Tout le monde</option>
                        <option value="nom1">nom1</option>
                        <option value="nom2">nom2</option>
                        <option value="nom3">nom3</option>
                        <option value="nom4">nom4</option>
                        <option value="nom5">nom5</option>
                        <option value="nom6">nom6</option>
                        <option value="nom7">nom7</option>
                        <option value="nom8">nom8</option>
                        <option value="nom9">nom9</option>
                        <option value="nom10">nom10</option>
                        <option value="nom11">nom11</option>
                        <option value="nom12">nom12</option>
                        <option value="nom13">nom13</option>
                        <option value="nom14">nom14</option>
                    </select>
                </div>

        </div>
        <button v-on:click="submitTasks()">submit task</button>
    </div>
</template>
<script>
export default {
    name: 'addTask',
    props:['test2'] ,
    components: {
      
    },
    data() {
        return{
            addTaskForm2:{
            nom: "",
            jour1: {
                lundi:'',
                mardi:'',
                mercredi:'',
                jeudi:'',
                vendredi:''
            },
            nbrAm: 0,
            nbrPm: 0,
            employes: ""
        }
        }
    },
    methods: {
      
      submitTasks(){
        this.$emit('eventname', this.addTaskForm2)
      },
    }
}
</script>
<style lang="">
    
</style>