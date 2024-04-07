<template>
    <header>
        <h1>{{ titel }}</h1>

        <TaskButton v-show="homePage"
        @knopf-druck="$emit('schalter-add-uniaufgabe')" 
        :text="zeigeAddUniAufgabe ? 'Ausblenden' : 'Aufgabe Hinzufügen'" 
        :farbe="zeigeAddUniAufgabe ? 'red' : 'green'"
        />
    </header>
</template>

<script>
import TaskButton from './Button'

export default {
    name: 'AppHeader',
    props: {
        titel: String,
        zeigeAddUniAufgabe: Boolean,
    },
    components: {
        TaskButton,
    },
    computed: {
        homePage() {
            if(this.$route.path === '/') {
                return true
            } else {
                return false
            }
        }
    }
}
</script>

<style scoped>
 header {
     display: flex;
     justify-content: space-between;
     align-items: center;
     margin-bottom: 18px;

 }
</style>