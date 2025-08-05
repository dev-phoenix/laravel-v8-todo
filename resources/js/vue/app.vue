<template>
    <div class="todo-list-container flex flex-col items-center border border-purple-700 w-full rounded-md pb-8 pt-8">
        <div class="heading flex flex-col items-center w-full">
            <h2 id="todo-title">Todo List</h2>
                <todo-form v-on:reloadlist="getList()"/>
        </div>
        <todo-list :items="items"
            v-on:reloadlist="getList()"/>
    </div>
</template>

<script>
import axios from 'axios';
import todoForm from './todoForm.vue';
import todoList from './todoList.vue';

export default {
    components: {
        todoForm,
        todoList,
    },
    data: function () {
        return {
            items: []
        }
    },
    methods: {
        getList() {
            axios.get('api/items')
            .then( response => {
                this.items = response.data
                function fixcheck(i,k,arr){ arr[k]['completed'] = Boolean(i['completed']) }
                // this.items.forEach(fixcheck)
            })
            .catch( error => { console.log(error) })
        }
    },
    created() {
        this.getList();
    }
}
</script>
