<template>
    <span>
        # {{ content }}
    </span>
</template>

<script setup>
const $props = defineProps({
    content: {
        type: String,
        default: '기본태그'
    }
})

</script>