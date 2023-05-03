<template lang="">
  <div>
    <table>
      <thead>
        <tr>
          <th colspan="1" >Nom & prénom</th>
          <th colspan="2">Lundi</th>
          <th colspan="2">Mardi</th>
          <th colspan="2">Mercredi</th>
          <th colspan="2">Jeudi</th>
          <th colspan="2">Vendredi</th>
        </tr>
        <tr>
          <th colspan="1"></th>
          <th colspan="1">AM</th>
          <th colspan="1">PM</th>
          <th colspan="1">AM</th>
          <th colspan="1">PM</th>
          <th colspan="1">AM</th>
          <th colspan="1">PM</th>
          <th colspan="1">AM</th>
          <th colspan="1">PM</th>
          <th colspan="1">AM</th>
          <th colspan="1">PM</th>
        </tr>
      </thead>
    <tbody>
        <tr v-for="(value, key, index) in employe">
          <td>{{ value }}</td>
          <td class="lundiAm" v-bind:id="key*10+1"></td>
          <td class="lundiPm" v-bind:id="key*10+2"></td>
          <td class="mardiAm" v-bind:id="key*10+3"></td>
          <td class="mardiPm" v-bind:id="key*10+4"></td>
          <td class="mercrediAm" v-bind:id="key*10+5"></td>
          <td class="mercrediPm" v-bind:id="key*10+6"></td>
          <td class="jeudiAm" v-bind:id="key*10+7"></td>
          <td class="jeudiPm" v-bind:id="key*10+8"></td>
          <td class="vendrediAm" v-bind:id="key*10+9"></td>
          <td class="vendrediPm" v-bind:id="key*10+10"></td>
        </tr>
      
    </tbody>
    </table>
    
    
    <div style="display:flex">
      <button @click="generatePlanning()"> généré un planning aléatoire</button>
      <button @click="deletePlanning()">supprimer le planning</button>
      <button @click="downloadsTable()">télécharger le tableau</button>
      <button @click="saveRules()">enregistrer les règles</button>
    </div>
    <div class="container">

      <div class="row">

        <div class="col">
          <rules :rulesList="addTaskRules" @deleteRule2="deleteRule"/>
      
          <button @click="displayForm()">ajouter une tâches</button>
         
        </div>
        <div class="col">
          
            <addTask @eventname="updateparent" @deleteform="displayForm" v-if="this.formActive == true" />
          
        </div>
       
      </div>
    </div>
  </div>

</template>
<script>
import addTask from "./addtask.vue"
import rules from "./rules.vue"

export default {
  name: 'HomeView',
    mounted() {
      let td = document.getElementsByTagName("td")

      for (let cell of td) {
        cell.addEventListener('click', this.testing)
      }
    },
    components: {
      addTask,
      rules
    },
    data() {
      return {
        selectOneId: "",
        selectTwoId: "",
        selectOneText: "",
        selectTwoText: "",
        selectOneStyle: "",
        selectTwoStyle: "",
        taskNbr: 4,
        formActive: false,
        addTaskRules: [],
        planningDays: {
          lundiAm: [],
          lundiPm: [],
          mardiAm: [],
          mardiPm: [],
          mercrediAm: [],
          mercrediPm: [],
          jeudiAm: [],
          jeudiPm: [],
          vendrediAm: [],
          vendrediPm: []
        },
        planningColors: {
          lundiAm: [],
          lundiPm: [],
          mardiAm: [],
          mardiPm: [],
          mercrediAm: [],
          mercrediPm: [],
          jeudiAm: [],
          jeudiPm: [],
          vendrediAm: [],
          vendrediPm: []
        },
        jour: ['lundiAm', 'lundiPm', 'mardiAm', 'mardiPm', 'mercrediAm', 'mercrediPm', 'jeudiAm', 'jeudiPm', 'vendrediAm', 'vendrediPm'],
        employe: ["nom1", "nom2", "nom3", "nom4", "nom5", "nom6", "nom7", "nom8", "nom9", "nom10", "nom11", "nom12", "nom13", "nom14"]

      }
    },
    methods: {
      generatePlanning() {

        /**

        var emptyTableCell = test.length - test.filter(String).length;

        */
        this.planningDays = {
          lundiAm: [, , , , , , , 'fixe', , , , , , 'fixe'],
          lundiPm: [, , , , , , , 'fixe', , , , , , 'fixe'],
          mardiAm: [, , , , , , , , , 'fixe', , , , 'fixe'],
          mardiPm: [, , , , , , , , , 'fixe', , , , 'fixe'],
          mercrediAm: [, , , 'fixe', , 'fixe', 'fixe', , , , , 'fixe'],
          mercrediPm: [, , , 'fixe', , 'fixe', 'fixe', , , , , 'fixe'],
          jeudiAm: [, , , , , , , , , , , , , ],
          jeudiPm: [, , , , , , , , , , , , , ],
          vendrediAm: [, 'fixe'],
          vendrediPm: [, 'fixe']
        }


        for (let t in this.planningDays) {
          for (let u = 0; u < 14; u++) {
            document.getElementsByClassName(t)[u].innerHTML = ""
            document.getElementsByClassName(t)[u].className = t
          }
        }

        for (let i in this.addTaskRules) {
          for (let j in this.addTaskRules[i].jour) {
            for (let k in this.addTaskRules[i].jour[j]) {

              if (k == "checked" && this.addTaskRules[i].jour[j][k]) {

                for (let l = 0; l < this.addTaskRules[i].jour[j]["nbrAm"]; l++) {
                  for (let z in this.planningDays) {
                    if (z == j + 'Am') {

                      if (this.addTaskRules[i]['employes'][0] == 'tous') {
                        if (Boolean(this.planningDays[z].length - this.planningDays[z].filter(String).length)) {
                          let randomWorker = Math.floor(Math.random() * (14 - 0) + 0)
                          while (undefined != this.planningDays[z][randomWorker]) {
                            randomWorker = Math.floor(Math.random() * (14 - 0) + 0)

                          }
                          this.planningDays[z][randomWorker] = this.addTaskRules[i]['nom']
                          this.planningColors[z][randomWorker] = this.addTaskRules[i]['color']
                        } else {
                          console.log('pas assez de place AM TOUS')
                          continue

                        }
                      } else {
                        let employes = []
                        let employesTask = []

                        for (let a of this.addTaskRules[i]['employes']) {
                          employes.push(this.employe.indexOf(a))
                        }

                        for (let b of employes) {
                          employesTask.push(this.planningDays[z][b])
                        }
                        if (Boolean(employesTask.length - employesTask.filter(x => x !== undefined).length)) {
                          let randomWorker = Math.floor(Math.random() * (employes.length - 0) + 0)

                          while (undefined != this.planningDays[z][employes[randomWorker]]) {
                            randomWorker = Math.floor(Math.random() * (employes.length - 0) + 0)

                          }

                          this.planningDays[z][employes[randomWorker]] = this.addTaskRules[i]['nom']
                          this.planningColors[z][employes[randomWorker]] = this.addTaskRules[i]['color']

                        } else {
                          console.log('pas assez de place AM EMPLOYE')

                          continue
                        }

                      }

                    }
                  }
                }

                for (let l = 0; l < this.addTaskRules[i].jour[j]["nbrPm"]; l++) {
                  for (let z in this.planningDays) {
                    if (z == j + 'Pm') {

                      if (this.addTaskRules[i]['employes'][0] == 'tous') {
                        if (Boolean(this.planningDays[z].length - this.planningDays[z].filter(String).length)) {
                          let randomWorker = Math.floor(Math.random() * (14 - 0) + 0)
                          while (undefined != this.planningDays[z][randomWorker]) {
                            randomWorker = Math.floor(Math.random() * (14 - 0) + 0)

                          }

                          this.planningDays[z][randomWorker] = this.addTaskRules[i]['nom']
                          this.planningColors[z][randomWorker] = this.addTaskRules[i]['color']

                        } else {
                          console.log('pas assez de place PM TOUS')
                          continue

                        }
                      } else {

                        let employesTask = []
                        let employes = []

                        for (let a of this.addTaskRules[i]['employes']) {
                          employes.push(this.employe.indexOf(a))
                        }

                        for (let b of employes) {
                          employesTask.push(this.planningDays[z][b])
                        }
                        if (Boolean(employesTask.length - employesTask.filter(x => x !== undefined).length)) {
                          let randomWorker = Math.floor(Math.random() * (employes.length - 0) + 0)

                          while (undefined != this.planningDays[z][employes[randomWorker]]) {
                            randomWorker = Math.floor(Math.random() * (employes.length - 0) + 0)

                          }

                          this.planningDays[z][employes[randomWorker]] = this.addTaskRules[i]['nom']
                          this.planningColors[z][employes[randomWorker]] = this.addTaskRules[i]['color']

                        } else {
                          console.log('pas assez de place PM EMPLOYE')
                          continue
                        }

                      }
                    }
                  }
                }



              }
            }
          }
        }

        for (let t in this.planningDays) {
          for (let u = 0; u < 14; u++) {
            if (!this.planningDays[t][u]) {

              document.getElementsByClassName(t)[u].innerHTML = ""
              document.getElementsByClassName(t)[u].style = "border:1px solid #000 !important;"
              document.getElementsByClassName(t)[u].style += "background-color: #fff;"
            } else {
              document.getElementsByClassName(t)[u].innerHTML = this.planningDays[t][u]
              document.getElementsByClassName(t)[u].style = "background-color:" + this.planningColors[t][u]

              document.getElementsByClassName(t)[u].className += " " + this.planningDays[t][u]
            }

          }
        }
      },
      deletePlanning() {
        this.planningDays = {
          lundiAm: [],
          lundiPm: [],
          mardiAm: [],
          mardiPm: [],
          mercrediAm: [],
          mercrediPm: [],
          jeudiAm: [],
          jeudiPm: [],
          vendrediAm: [],
          vendrediPm: []
        }

        for (let t in this.planningDays) {
          for (let u = 0; u < 14; u++) {
            document.getElementsByClassName(t)[u].innerHTML = ""
            document.getElementsByClassName(t)[u].className = t
            document.getElementsByClassName(t)[u].style = "border:1px solid #000 !important;"
            document.getElementsByClassName(t)[u].style += "background-color: #fff;"
          }
        }
      },
      updateparent(variable) {
        this.addTaskRules.push({
          nom: variable.nom,
          jour: {
            lundi: {
              checked: variable.jour1.lundi.checked,
              nbrAm: variable.jour1.lundi.nbrAm,
              nbrPm: variable.jour1.lundi.nbrPm
            },
            mardi: {
              checked: variable.jour1.mardi.checked,
              nbrAm: variable.jour1.mardi.nbrAm,
              nbrPm: variable.jour1.mardi.nbrPm
            },
            mercredi: {
              checked: variable.jour1.mercredi.checked,
              nbrAm: variable.jour1.mercredi.nbrAm,
              nbrPm: variable.jour1.mercredi.nbrPm
            },
            jeudi: {
              checked: variable.jour1.jeudi.checked,
              nbrAm: variable.jour1.jeudi.nbrAm,
              nbrPm: variable.jour1.jeudi.nbrPm
            },
            vendredi: {
              checked: variable.jour1.vendredi.checked,
              nbrAm: variable.jour1.vendredi.nbrAm,
              nbrPm: variable.jour1.vendredi.nbrPm
            },
          },
          employes: variable.employes,
          color: variable.color
        })
      },
      displayForm() {
        this.formActive = !this.formActive
      },
      deleteRule(name) {
        const found = this.addTaskRules.find(element => element.nom == name);
        this.addTaskRules.splice(this.addTaskRules.indexOf(found), 1)
      },
      saveRules() {

        localStorage.setItem("rules", JSON.stringify(this.addTaskRules));
        this.addTaskRules = JSON.parse(localStorage.getItem("rules"))
      },
      testing(e) {
        if (!this.selectOneId) {
          console.log('test')
          if(Boolean(e.target.innerHTML)){
            this.selectOneId = e.target.id
          this.selectOneText = e.target.innerHTML
          this.selectOneStyle = e.target.style['background-color']
          }
          

        } else {


          this.selectTwoId = e.target.id
          this.selectTwoText = e.target.innerHTML
          this.selectTwoStyle = e.target.style['background-color']

          document.getElementById(this.selectOneId).innerHTML = this.selectTwoText
          document.getElementById(this.selectTwoId).innerHTML = this.selectOneText

          document.getElementById(this.selectOneId).style['background-color'] = this.selectTwoStyle
          document.getElementById(this.selectTwoId).style['background-color'] = this.selectOneStyle

          document.getElementById(this.selectOneId).style = "border:black 1px solid !important"

          this.selectOneId = ""
          this.selectOneText = ""

          this.selectTwoId = ""
          this.selectTwoText = ""

        }

      },

    },
    computed: {

    }

}
</script>
<style lang="">

</style>