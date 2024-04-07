<template>
    <button @click="onClick()" :style="{ background: farbe }"
        class="btn">
        {{ text }}
    </button>
</template>

<script>
export default {
    name: 'TaskButton',
    props: {
        text: String,
        farbe: String,
    },
    methods: {
        onClick() {
         this.$emit('knopf-druck')   
        },
    },
}
</script>