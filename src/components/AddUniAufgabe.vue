<template>
    <form @submit="beimEinfügen" class="add-form">

    <!--  Dropdown-Menü für die Auswahl des Moduls  --> 

    <div class="form-control">
        <label>Modul</label>
        <select v-model="modul" name="Modul">
          <option disabled value="">Bitte wählen Sie ein Modul</option>
          <option v-for="modul in module" :key="modul.id" :value="modul.name">{{ modul.name }}</option>
        </select>
      </div>

      <div class="form-control">
        <label>Uni-Aufgabe</label>
        <input type="text"
        v-model="text" 
        name="text" 
        placeholder="Uni-Aufgabe hinzufügen" 
        />
      </div>

      <div class="form-control">
        <label>Tag und Uhrzeit der Deadline</label>
        <input
          type="text"
          v-model="tag"
          name="tag"
          placeholder="Tag und Uhrzeit hinzufügen"
        />
      </div>

   <!-- Einstellung für den Schwierigkeitsgrad der Aufgabe  -->

   <div class="difficulty-selection">
    <label>Schwierigkeitsgrad:  </label>
      <span :style="difficultyStyle('easy')" @click="setDifficulty('easy')" role="img" aria-label="easy">😊</span>
      <span :style="difficultyStyle('normal')" @click="setDifficulty('normal')" role="img" aria-label="normal">😐</span>
      <span :style="difficultyStyle('hard')" @click="setDifficulty('hard')" role="img" aria-label="hard">😠</span>
    </div>



      <div class="form-control form-control-check">
        <label>Hohe Priorität setzen</label>
        <input type="checkbox" v-model="priority" name="priority" />
      </div>
  
      <input type="submit" value="Uni-Aufgabe speichern" class="btn btn-block" />

    </form>
  </template>

  <script>
export default {
    name: 'AddUniAufgabe',
    data() {
        return {
          difficulty: 'normal', // Schwierigkeitsgrad wird auf normal gesetzt
            modul: '', // Neue data property für das ausgewählte Modul
            module: [ // Placeholder für die Module
              {id: 1, name: 'Webprogrammierung'},
              {id: 2, name: 'Skriptsprachen'},
              {id: 3, name: 'Software-Engineering'},
              {id: 4, name: 'Datenanalyse'},
              {id: 5, name: 'Programmieren in C++'},
              {id: 6, name: 'Statistik'},
              {id: 7, name: 'Optimierungsverfahren'},
              {id: 8, name: 'Sonstiges'}
            ],
            text: '', // Neue data property für die Aufgabe
            tag: '', // Neue data property für den Tag und die Uhrzeit
            priority: false, // Neue data property für den Priorität
        }
    },
    methods: {
      
      async addUniAufgabe(uniaufgabe) {
    // Emit the updated uniaufgaben array to the parent component
    this.$emit('add-UniAufgabe', uniaufgabe);
    // Reset form fields
    this.difficulty = 'normal';
    this.modul = '';
    this.text = '';
    this.tag = '';
    this.priority = false;
},

      setDifficulty(difficulty) {
      this.difficulty = difficulty;
    },
    difficultyStyle(difficulty) {
      if (this.difficulty === difficulty) {
      
        switch (difficulty) {
          case 'easy':
            return { border: '2px solid green', borderRadius: '50%' };
          case 'normal':
            return { border: '2px solid #d4ad03', borderRadius: '50%' };
          case 'hard':
            return { border: '2px solid red', borderRadius: '50%' };
        }
      }
      // Return default style for non-selected difficulties
      return { border: '2px solid transparent', borderRadius: '50%' };
    },

        beimEinfügen(e) {
          // Validierung des Inputs
            e.preventDefault()

            if(!this.text) {
                alert('Bitte geben Sie eine Aufgabe ein')
                return
            }

            if(!this.modul) {
                alert('Bitte geben Sie ein Modul ein')
                return
            }

            const neueUniAufgabe = {
                // id: Math.floor(Math.random() * 100000),// ID wird automatisch generiert
                difficulty: this.difficulty, // Auswahl der Schwierigkeit wird angewendet 
                modul: this.modul, // Modul wird ausgewählt
                text: this.text, // Aufgabe wird eingegeben
                tag: this.tag, // Tag und Uhrzeit werden eingegeben
                priority: this.priority // Priorität wird gesetzt
            }

            this.$emit('add-UniAufgabe',neueUniAufgabe)

            this.difficulty = 'normal' // Schwierigkeitsgrad wird zurückgesetzt
            this.modul = '' // Modul wird zurückgesetzt
            this.text = '' // Aufgabe wird zurückgesetzt
            this.tag = '' // Tag und Uhrzeit wird zurückgesetzt
            this.priority = false // Priorität wird zurückgesetzt
        }
    }
}

</script>

<style scoped>

difficulty-selection span {
  cursor: pointer;
  padding: 5px;
}

.difficulty-selection span:hover {
  opacity: 0.7;
}


.add-form {
  margin-bottom: 40px;
}

.form-control {
  margin: 20px 0;
}

.form-control label {
  display: block;
}

.form-control input {
  width: 100%;
  height: 40px;
  margin: 5px;
  padding: 3px 7px;
  font-size: 17px;
}

.form-control-check {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.form-control-check label {
  flex: 1;
}

.form-control-check input {
  flex: 2;
  height: 20px;
}
</style>
