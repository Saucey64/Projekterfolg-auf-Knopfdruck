<template>
  <div class="container">
    <AppHeader @schalter-add-uniaufgabe="schalterAddUniAufgabe" 
      titel="Aufgaben Tracker" 
      :zeigeAddUniAufgabe="zeigeAddUniAufgabe" 
    />
  

    <router-view :zeigeAddUniAufgabe="zeigeAddUniAufgabe" ></router-view>

    <AppFooter />
  </div>
</template>



<script>
import AppHeader from './components/Header'
import AppFooter from './components/Footer'


export default {
  name: 'App',
  components: {
   AppHeader,
   AppFooter,
 
  },
  data() {
    return {
      
      zeigeAddUniAufgabe: false,
    }
  },
  
  methods: {
    schalterAddUniAufgabe() {
      this.zeigeAddUniAufgabe = !this.zeigeAddUniAufgabe
    }

}
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Poppins', sans-serif;
}

.container {
  max-width: 500px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
}

select {
  -webkit-appearance: none; 
  -moz-appearance: none;    
  appearance: none;        
  background-color: #f0f0f0; 
  border: 2px solid #218f4b; 
  padding: 10px;
  border-radius: 5px; 
  font-size: 16px; 
  cursor: pointer;
  width: 100%; 
}

select {
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path fill="%23007bff" d="M5.5,7.5l4.5,4.5l4.5,-4.5Z"/></svg>');
  background-position: right 10px center; 
  background-repeat: no-repeat;
  background-size: 12px; 
}

.btn {
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}

.btn:focus {
  outline: none;
}

.btn:active {
  transform: scale(0.98);
}

.btn-block {
  display: block;
  width: 100%;
}
</style>