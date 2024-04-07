<template>
   
      <AddUniAufgabe v-show="zeigeAddUniAufgabe"
      @add-UniAufgabe="addUniAufgabe" />
      <!-- <UniAufgaben @lösche-uniaufgabe="löscheUniaufgabe" :uniaufgaben="uniaufgaben" />  -->
      <UniAufgaben
      @priority-umschalten="priorityUmschalten" @lösche-uniaufgabe="löscheUniaufgabe" @lösche-und-umleiten="löscheUndUmleiten" :uniaufgaben="uniaufgaben" 
       />
</template>

<script>
import UniAufgaben from '../components/UniAufgaben'
import AddUniAufgabe from '../components/AddUniAufgabe'
export default {
    name: 'AppHome',
    props: {
        zeigeAddUniAufgabe: Boolean,
    },
    components: {
        UniAufgaben,
        AddUniAufgabe,
    },

    data () {
        return {
            uniaufgaben: [],
        }
    },

        
methods: {


    async addUniAufgabe(uniaufgabe) { 
      const  res = await fetch('api/uniaufgaben', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
      
        },
        body: JSON.stringify(uniaufgabe),
      }) 

      const data = await res.json()

      this.uniaufgaben = [...this.uniaufgaben, data]

    },

    async löscheUniaufgabe (id) {
      if (confirm('Sind Sie sicher?')) {
        const res = await fetch(`api/uniaufgaben/${id}`, {
          method: 'DELETE',
        })

        res.status === 200 ? (this.uniaufgaben = this.uniaufgaben.filter((uniaufgabe) => uniaufgabe.id 
        !== id )) : alert('Fehler beim Löschen der Aufgabe')

      
      }
    },
    
    async löscheUndUmleiten(id) {
      if (confirm('Sind Sie sicher?')) {
        try {
          
          const taskToDelete = this.uniaufgaben.find(task => task.id === id);
          if (!taskToDelete) throw new Error('Aufgabe nicht gefunden');
          
          const res = await fetch(`api/uniaufgaben/${id}`, {
            method: 'DELETE',
          });
          
          if (res.status === 200) {
            
            if (taskToDelete.difficulty === 'easy') {
              window.location.href = 'https://source.unsplash.com/featured/?candy';
            } else if (taskToDelete.difficulty === 'normal') {
              window.location.href = 'https://source.unsplash.com/featured/?cookie';
            } else {
              window.location.href = 'https://source.unsplash.com/featured/?cake'
            }
          } else {
            throw new Error('Fehler beim Löschen der Aufgabe');
          }
        } catch (error) {
          console.error("Fehler beim Löschen der Aufgabe:", error);
        }
      }
    },

    async priorityUmschalten (id) {
      const aufgabeZumUmschalten = await this.fetchUniAufgabe (id)
      const updAufgabe = {...aufgabeZumUmschalten, priority: !aufgabeZumUmschalten.priority}

        const res = await fetch(`api/uniaufgaben/${id}`, {
          method: 'PUT',
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify(updAufgabe),
        })

        if (res.status === 200) {
    this.uniaufgaben = this.uniaufgaben.map((uniaufgabe) => uniaufgabe.id === id ? { ...uniaufgabe, priority: updAufgabe.priority } : uniaufgabe);
  } else {
    alert('Fehler beim Aktualisieren der Priorität');
  }
},

    async fetchUniAufgaben() {
      const res = await fetch('api/uniaufgaben')

      const data = await res.json()

      return data
    },

    async fetchUniAufgabe(id) {
      const res = await fetch(`api/uniaufgaben/${id}`)

      const data = await res.json()

      return data
    },
  

  
  },

  async created() {
    this.uniaufgaben = await this.fetchUniAufgaben()
  }

}  
</script>