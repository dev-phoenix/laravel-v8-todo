<template>
    <div class="item">
        <!-- <div class="flex items-center mb-4">
            <input id="checkbox-2" type="checkbox"
                @change="updateCheck()" v-model="item.completed"
                value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
            <label for="checkbox-2" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I want</label>
        </div> -->
        <label class="inline-flex items-center --mb-5 cursor-pointer">
            <input type="checkbox"
                @change="updateCheck()" v-model="item.completed"
                value="" class="sr-only peer">
            <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4
            peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700
            peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full
            peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px]
            after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full
            after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600
            dark:peer-checked:bg-green-600"></div>
            <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300"
                :class="[item.completed ? 'completed text-gray-500' : 'text-gray-300', '']"
            >{{ item.name }}</span>
        </label>
        <!-- input type="checkbox" @change="updateCheck()" v-model="item.completed" class="" -->

            <button type="submit" class=" ml-4 text-white bg-green-700 hover:bg-green-800 focus:ring-4
            focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center
            dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            @click="removeItem()"
            ><font-awesome-icon icon="fa-solid fa-trash" /></button>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            sel: this.item.completed?true:false
        }
    },
    props: ['item'],
    methods: {
        updateCheck() {
            console.log('item', this.item.completed)
            axios.put('api/item/' + this.item.id, {
                item: this.item
            })
            .then( response => {
                console.log('response', response)
                console.log('item 2', this.item)
                if( response.status == 200) {
                    this.$emit('itemchanged');
                }
            })
            .catch( error => { console.log(error); })
        },
        removeItem() {
            axios.delete('api/item/' + this.item.id, {
                item: this.item
            })
            .then( response => {
                if( response.status == 200) {
                    this.$emit('itemchanged');
                }
            })
            .catch( error => { console.log(error); })
        }
    }
    // ,
    // created() {
    //     console.log('created item', this.item.completed)
    //     console.log('created item 2', this.item)
    // }
}
</script>
<style>
.completed{
    text-decoration: line-through;
}
</style>
