<template lang="">
    <div class="card" style="width: 35rem;">
        <div class="card-body">
            <div style="display:flex;justify-content: space-between;">
                <h5 class="card-title"> créer une tâches </h5>
                <button type="button" class="btn btn-danger" @click="deleteForm()"
                    style="margin-left:0px !important;margin-right:0px !important;margin-top:0px !important;">X</button>

            </div>
            <div>
                <label>nom de la tâche</label>
                <input type="text" v-model="addTaskForm2.nom">
            </div>
            <div class="row">
                <div class="col">
                    <div style="display:block;">
                        <input type="checkbox" id="scales" name="scales" checked
                            v-model="addTaskForm2.jour1.lundi.checked">
                        <label for="scales">lundi</label>
                        <div v-if="addTaskForm2.jour1.lundi.checked == true">
                            <div>
                                <label> lundi nombre AM </label>
                                <input type="number" v-model="addTaskForm2.jour1.lundi.nbrAm">
                            </div>

                            <div>
                                <label> lundi nombre PM </label>
                                <input type="number" v-model="addTaskForm2.jour1.lundi.nbrPm">
                            </div>
                        </div>
                    </div>
                    <div style="display:block;">
                        <input type="checkbox" id="scales" name="scales" v-model="addTaskForm2.jour1.mardi.checked">
                        <label for="scales">mardi</label>
                        <div v-if="addTaskForm2.jour1.mardi.checked == true">
                            <div>
                                <label>mardi nombre AM </label>
                                <input type="number" v-model="addTaskForm2.jour1.mardi.nbrAm">
                            </div>

                            <div>
                                <label>mardi nombre PM </label>
                                <input type="number" v-model="addTaskForm2.jour1.mardi.nbrPm">
                            </div>
                        </div>
                    </div>
                    <div style="display:block;">
                        <input type="checkbox" id="scales" name="scales" v-model="addTaskForm2.jour1.mercredi.checked">
                        <label for="scales">mercredi</label>
                        <div v-if="addTaskForm2.jour1.mercredi.checked == true">
                            <div>
                                <label>mercredi nombre AM </label>
                                <input type="number" v-model="addTaskForm2.jour1.mercredi.nbrAm">
                            </div>

                            <div>
                                <label>mercredi nombre PM </label>
                                <input type="number" v-model="addTaskForm2.jour1.mercredi.nbrPm">
                            </div>
                        </div>
                    </div>
                    <div style="display:block;">
                        <input type="checkbox" id="scales" name="scales" v-model="addTaskForm2.jour1.jeudi.checked">
                        <label for="scales">jeudi</label>
                        <div v-if="addTaskForm2.jour1.jeudi.checked == true">
                            <div>
                                <label>jeudi nombre AM </label>
                                <input type="number" v-model="addTaskForm2.jour1.jeudi.nbrAm">
                            </div>

                            <div>
                                <label>jeudi nombre PM </label>
                                <input type="number" v-model="addTaskForm2.jour1.jeudi.nbrPm">
                            </div>
                        </div>
                    </div>
                    <div style="display:block;">
                        <input type="checkbox" id="scales" name="scales" v-model="addTaskForm2.jour1.vendredi.checked">
                        <label for="scales">vendredi</label>
                        <div v-if="addTaskForm2.jour1.vendredi.checked == true">
                            <div>
                                <label>vendredi nombre AM </label>
                                <input type="number" v-model="addTaskForm2.jour1.vendredi.nbrAm">
                            </div>

                            <div>
                                <label>vendredi nombre PM </label>
                                <input type="number" v-model="addTaskForm2.jour1.vendredi.nbrPm">
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col">
                    <label for="pet-select">Sélectionné les employés à assigné à la taches :</label>

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
            <div>
                <label>couleur :  </label>
                <input type="color" v-model="addTaskForm2.color">
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
        return {
            addTaskForm2: {
                nom: "",
                jour1: {
                    lundi: {
                        checked: '',
                        nbrAm: 0,
                        nbrPm: 0
                    },
                    mardi: {
                        checked: '',
                        nbrAm: 0,
                        nbrPm: 0
                    },
                    mercredi: {
                        checked: '',
                        nbrAm: 0,
                        nbrPm: 0
                    },
                    jeudi: {
                        checked: '',
                        nbrAm: 0,
                        nbrPm: 0
                    },
                    vendredi: {
                        checked: '',
                        nbrAm: 0,
                        nbrPm: 0
                    },
                },
                employes: "",
                color: ""
            }
        }
    },
    methods: {
      submitTasks(){
        this.$emit('eventname', this.addTaskForm2)
      },
      deleteForm(){
        this.$emit('deleteform')
      },
    }
}
</script>
<style lang="">
    
</style>