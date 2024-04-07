<template>
<div :style="hintergrundFarbe" @dblclick="$emit('priority-umschalten', uniaufgabe.id)" :class="[uniaufgabe.priority ? 'priority' :
'', 'uniaufgabe']">
    <h3>
    {{ uniaufgabe.text }}
    <i @click="$emit('lösche-uniaufgabe', uniaufgabe.id)" class="fas fa-times" ></i>
    
    <i @click="$emit('lösche-und-umleiten', uniaufgabe.id)" class="fas fa-check" style="color: green;"></i>
    </h3>
    <p>{{ uniaufgabe.tag }}</p> <!--  Tag und Uhrzeit anzeigen -->
    <p>{{ uniaufgabe.modul }}</p> <!--  Modul anzeigen -->
</div>
</template>

<script>

export default {
    name: 'UniAufgabe',
    props: {
        uniaufgabe: Object,
    },
    computed: {
        hintergrundFarbe() {
            switch (this.uniaufgabe.difficulty) {
                case 'easy':
                    return { backgroundColor: '#d4edda' }; 
                case 'normal':
                    return { backgroundColor: '#fff3cd' }; 
                case 'hard':
                    return { backgroundColor: '#f8d7da' };
                default:
                    return {};
            }
        },
    },

}
</script>

<style scoped>
.fas {
    color: red;
}

.uniaufgabe {
  background: #f4f4f4;
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;
}

.uniaufgabe.priority {
  border-left: 5px solid green;
}

.uniaufgabe h3 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

</style>