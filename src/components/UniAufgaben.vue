<template>
    <div :key="uniaufgabe.id" v-for="uniaufgabe in sortedUniAufgaben">
         <UniAufgabe 
             @priority-umschalten="$emit('priority-umschalten', uniaufgabe.id)" 
             @lösche-uniaufgabe="$emit('lösche-uniaufgabe', uniaufgabe.id)" 
             @lösche-und-umleiten="$emit('lösche-und-umleiten', uniaufgabe.id)" 
             :uniaufgabe="uniaufgabe" 
         />
     </div>
 </template>
 
 <script>
 import UniAufgabe from './UniAufgabe'
 
 export default {
     name: 'UniAufgaben',
     props: {
         uniaufgaben: Array,
     },
     computed: {
    // Computed property to sort tasks by difficulty
    sortedUniAufgaben() {
      return this.uniaufgaben.slice().sort((a, b) => {
        const difficultyOrder = { easy: 1, normal: 2, hard: 3 };
        return difficultyOrder[b.difficulty] - difficultyOrder[a.difficulty];
      });
    },
},
     components: {
         UniAufgabe,
     },
     emits: ['lösche-uniaufgabe', 'priority-umschalten', 'lösche-und-umleiten'],
 
}
 </script>