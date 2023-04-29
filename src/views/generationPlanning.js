function generatePlanning() {

    this.planningDays = {
      lundiAm: [, , , , , , , 'fixe', , , , , , 'fixe'],
      lundiPm: [, , , , , , , 'fixe', , , , , , 'fixe'],
      mardiAm: [, , , , , , , , , 'fixe', , , , 'fixe'],
      mardiPm: [, , , , , , , , , 'fixe', , , , 'fixe'],
      mercrediAm: [, , , 'fixe', , 'fixe', 'fixe', , , , , 'fixe'],
      mercrediPm: [, , , 'fixe', , 'fixe', 'fixe', , , , , 'fixe'],
      jeudiAm: [],
      jeudiPm: [],
      vendrediAm: [, 'fixe'],
      vendrediPm: [, 'fixe']
    }

    for (let t in this.planningDays) {
      for (let u = 0; u < 14; u++) {
        document.getElementsByClassName(t)[u].innerHTML = ""
        document.getElementsByClassName(t)[u].className = t
      }
    }

    for (let i in this.taches) {
      for (let x in this.taches[i]) {
        if (x == "jour") {
          if (this.taches[i][x] == "tous") {
            if ("nbrAm" in this.taches[i]) {
              for (let y = 0; y < this.taches[i]["nbrAm"]; y++) {

                for (let z in this.planningDays) {
                  if (z.endsWith('Am')) {
                    let randomWorker = Math.floor(Math.random() * (14 - 0) + 0)
                    while (undefined != this.planningDays[z][randomWorker]) {
                      randomWorker = Math.floor(Math.random() * (14 - 0) + 0)

                    }
                    this.planningDays[z][randomWorker] = i
                  } else {
                    continue
                  }

                }
              }
            }
            if ("nbrPm" in this.taches[i]) {
              for (let y = 0; y < this.taches[i]["nbrPm"]; y++) {
                for (let z in this.planningDays) {
                  if (z.endsWith('Pm')) {
                    let randomWorker = Math.floor(Math.random() * (14 - 0) + 0)
                    while (undefined != this.planningDays[z][randomWorker]) {
                      randomWorker = Math.floor(Math.random() * (14 - 0) + 0)

                    }
                    this.planningDays[z][randomWorker] = i

                  }
                }

              }
            }
          } else {
            for (let j of this.taches[i][x]) {
              if ("nbrAm" in this.taches[i]) {
                for (let y = 0; y < this.taches[i]["nbrAm"]; y++) {

                  for (let z in this.planningDays) {
                    if (z.endsWith(j + 'Am')) {
                      let randomWorker = Math.floor(Math.random() * (14 - 0) + 0)
                      while (undefined != this.planningDays[z][randomWorker]) {
                        randomWorker = Math.floor(Math.random() * (14 - 0) + 0)

                      }
                      this.planningDays[z][randomWorker] = i
                    } else {
                      continue
                    }

                  }
                }
              }
              if ("nbrPm" in this.taches[i]) {
                for (let y = 0; y < this.taches[i]["nbrPm"]; y++) {
                  for (let z in this.planningDays) {
                    if (z.endsWith(j + 'Pm')) {
                      let randomWorker = Math.floor(Math.random() * (14 - 0) + 0)
                      while (undefined != this.planningDays[z][randomWorker]) {
                        randomWorker = Math.floor(Math.random() * (14 - 0) + 0)

                      }
                      this.planningDays[z][randomWorker] = i

                    } else {
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
        document.getElementsByClassName(t)[u].innerHTML = this.planningDays[t][u]
        document.getElementsByClassName(t)[u].className += " " + this.planningDays[t][u]
      }
    }
}


let taches = {
  "guichet": {
    jour: 'tous',
    nbrAm: 2,
    nbrPm: 2
  },
  "chimio": {
    jour: 'tous',
    nbrAm: 2
  },
  "prepMag": {
    jour: 'tous',
    nbrPm: 1
  },
  "TPNNeon": {
    jour: ['lundi', 'mardi', 'jeudi', 'vendredi'],
    nbrPm: 2
  },
  "Chariots": {
    jour: 'tous',
    nbrAm: 1
  },
  "USI": {
    jour: 'tous',
    nbrPm: 2
  },
  "Stups": {
    jour: ['mercredi'],
    nbrAm: 2
  },
  "Urgences": {
    jour: 'tous',
    nbrPm: 1
  },
  "Ophtalmo": {

  },
  "Colis": {
    jour: 'tous',
    nbrPm: 1
  },
  "QOp": {
    jour: ['lundi', 'jeudi'],
    nbrPm: 2
  },
  "satellites": {

  },
  "Encodage": {
    jour: 'tous',
    nbrAm: 1
  }
}

let test = {
  nom: variable.nom,
  jour: {
      lundi:{
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
  employes: variable.employes
}