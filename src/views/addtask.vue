<template lang="">
    <form>
        <div class="card" style="width: 35rem; margin-right: auto;margin-left: auto;">
            <div class="card-body">
                <div style="display:flex;justify-content: space-between;">
                    <h5 class="card-title"> créer une tâches </h5>
                    <button type="button" class="btn btn-danger" @click="deleteForm()"
                        style="margin-left:0px !important;margin-right:0px !important;margin-top:0px !important;">X</button>

                </div>
                <div>
                    <label>nom de la tâche : </label>
                    <input type="text" minlength="0" maxlength="20" placeholder=" nom de la tâche "
                        v-model="addTaskForm.nom" >
                        <div v-if="this.errorNameTask" style="color:red">
                            vous n'avez pas rentré de nom
                        </div>
                </div>
                <div class="row">
                    <div class="col">
                        <div style="display:block;">
                            <input type="checkbox" id="scales" name="scales" checked
                                v-model="addTaskForm.jour1.lundi.checked">
                            <label for="scales">lundi</label>
                            <div v-if="addTaskForm.jour1.lundi.checked == true">
                                <div>
                                    <label> lundi nombre AM </label>
                                    <input min=0 type="number" v-model="addTaskForm.jour1.lundi.nbrAm">
                                </div>

                                <div>
                                    <label> lundi nombre PM </label>
                                    <input min=0 type="number" v-model="addTaskForm.jour1.lundi.nbrPm">
                                </div>
                            </div>
                        </div>
                        <div style="display:block;">
                            <input type="checkbox" id="scales" name="scales" v-model="addTaskForm.jour1.mardi.checked">
                            <label for="scales">mardi</label>
                            <div v-if="addTaskForm.jour1.mardi.checked  ">
                                <div>
                                    <label>mardi nombre AM </label>
                                    <input min=0 type="number" v-model="addTaskForm.jour1.mardi.nbrAm">
                                </div>

                                <div>
                                    <label>mardi nombre PM </label>
                                    <input min=0 type="number" v-model="addTaskForm.jour1.mardi.nbrPm">
                                </div>
                            </div>
                        </div>
                        <div style="display:block;">
                            <input type="checkbox" id="scales" name="scales"
                                v-model="addTaskForm.jour1.mercredi.checked">
                            <label for="scales">mercredi</label>
                            <div v-if="addTaskForm.jour1.mercredi.checked  ">
                                <div>
                                    <label>mercredi nombre AM </label>
                                    <input min=0 type="number" v-model="addTaskForm.jour1.mercredi.nbrAm">
                                </div>

                                <div>
                                    <label>mercredi nombre PM </label>
                                    <input min=0 type="number" v-model="addTaskForm.jour1.mercredi.nbrPm">
                                </div>
                            </div>
                        </div>
                        <div style="display:block;">
                            <input type="checkbox" id="scales" name="scales" v-model="addTaskForm.jour1.jeudi.checked">
                            <label for="scales">jeudi</label>
                            <div v-if="addTaskForm.jour1.jeudi.checked  ">
                                <div>
                                    <label>jeudi nombre AM </label>
                                    <input min=0 type="number" v-model="addTaskForm.jour1.jeudi.nbrAm">
                                </div>

                                <div>
                                    <label>jeudi nombre PM </label>
                                    <input min=0 type="number" v-model="addTaskForm.jour1.jeudi.nbrPm">
                                </div>
                            </div>
                        </div>
                        <div style="display:block;">
                            <input type="checkbox" id="scales" name="scales"
                                v-model="addTaskForm.jour1.vendredi.checked">
                            <label for="scales">vendredi</label>
                            <div v-if="addTaskForm.jour1.vendredi.checked  ">
                                <div>
                                    <label>vendredi nombre AM </label>
                                    <input min=0 type="number" v-model="addTaskForm.jour1.vendredi.nbrAm">
                                </div>

                                <div>
                                    <label>vendredi nombre PM </label>
                                    <input min=0 type="number" v-model="addTaskForm.jour1.vendredi.nbrPm">
                                </div>
                            </div>
                        </div>
                        <div v-if="this.errorEmptyNbr" style="color:red">
                            l'un des selecteurs est vide 
                        </div>
                        <div v-if="this.errorNbrtaskAllZero" style="color:red">
                            vous n'avez pas selectioné de nombre de tâche
                        </div>
                    </div>

                    <div class="col">
                        <label for="pet-select">Sélectionné les employés à assigné à la taches :</label>

                        <select id="pet-select"  multiple size="7" v-model="addTaskForm.employes">
                            <option value="tous" >Tous</option>
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
                        <div v-if="this.errorNoEmploye" style="color:red">
                            vous n'avez selectioné d'employé
                        </div>
                    </div>
                </div>
                <div>
                    <label>couleur : </label>
                    <input type="color"  v-model="addTaskForm.color">
                    <div v-if="!Boolean(this.addTaskForm.color)" style="color:red">
                            vous n'avez pas selectioné de couleur
                        </div>
                </div>
            </div>
            <button type="button" v-on:click="submitTasks()">submit task</button>
        </div>
    </form>
</template>
<script>

export default {
    name: 'addTask',
    props:['test2'] ,
    emits: ["eventname","deleteform"],
    components: {
      
    },
    data() {
        return {
            errorNameTask:false,
            errorEmptyNbr:false,
            errorNbrTask:false,
            errorNoEmploye:false,
            errorNbrtaskAllZero:false,
            addTaskForm: {
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
      submitTasks() {
              if (this.addTaskForm.nom) {
                  this.errorNameTask = false
              } else {
                  this.errorNameTask = true
              }

              for (let i in this.addTaskForm.jour1) {
                  if (Boolean(this.addTaskForm.jour1[i]['nbrAm'] || this.addTaskForm.jour1[i]['nbrPm'])) {
                      this.errorNbrtaskAllZero = false
                      break
                  } else {
                      this.errorNbrtaskAllZero = true

                  }

              }

              for (let i in this.addTaskForm.jour1) {
                  if (this.addTaskForm.jour1[i]['nbrAm'] > this.addTaskForm.employes.length || this.addTaskForm.jour1[i]['nbrPm'] > this.addTaskForm.employes.length) {
                      this.errorNbrTask = true
                  } else {
                      this.errorNbrTask = false
                      break
                  }
              }
              for (let i in this.addTaskForm.jour1) {
               
                  if (!(Boolean(this.addTaskForm.jour1[i]['nbrAm']) && Boolean(this.addTaskForm.jour1[i]['nbrPm']))) {
                      this.errorEmptyNbr = true
                  } else {
                      this.errorEmptyNbr = false
                      break
                  }
              }

              if (this.addTaskForm.employes.length) {
                  this.errorNoEmploye = false
              } else {
                  this.errorNoEmploye = true
              }

                if (!(this.errorNbrTask || this.errorEmptyNbr || this.errorNameTask || this.errorNoEmploye || !Boolean(this.addTaskForm.color)) ) {
                  this.$emit('eventname', this.addTaskForm)
              }

          },
          deleteForm() {
              this.$emit('deleteform')
          },
      }
}
</script>
<style lang="">
    
</style>