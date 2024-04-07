<template>
    <footer>
        <p>Copyright &copy; 2024</p>
        <router-link to="/Info">Info </router-link>
    </footer>
</template>

<script>

export default {
  name: 'AppFooter', 
}

</script>
<style scoped>
a {
    color:#333; 

}

footer {
    margin-top: 28px;
    text-align: center;
}

</style>