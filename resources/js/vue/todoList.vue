<template>
    <div class="w-full">
        <div v-for="(item, index) in items" :key="index">
            <todo-item :item="item"
            v-on:itemchanged="$emit('reloadlist')"
            class=" ml-4 mr-4 item --w-full rounded-md border border-gray-500 bg-gray-800 mt-4 p-4
            flex align-center justify-between" />
        </div>
    </div>
</template>

<script>
import todoItem from './todoItem.vue';

export default {
    props: ['items'],
    components: {
        todoItem,
    }
}
</script>
