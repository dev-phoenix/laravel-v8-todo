<template>
    <div class="w-full">
        <div class="max-w-md --mx-auto --w-full ml-8 mr-8 mx-8">
            <div class="mb-5">
                <label for="item-name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Item name</label>
                <input type="text" id="item-name" class="shadow-xs bg-gray-50 border border-gray-300
                    text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
                    dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                    dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
                    placeholder="Input item name value" required
                    name="name" v-model="item.name"/>
            </div>
            <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4
            focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center
            dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            @click="addItem()"
            >Add todo item
            <font-awesome-icon icon="fa-solid fa-plus-square"
                :class="[ item.name ? 'active' : 'inactive', 'plus']" /></button>
        </div>
        <div class="some flex items-center justify-center text-fuchsia-700">
            <font-awesome-icon icon="fa-solid fa-user-secret" class="text-fuchsia-700" />
            <font-awesome-icon icon="fa-solid fa-thumbs-up" class="text-teal-200" />
            <font-awesome-icon icon="fa-brands fa-facebook" class="text-lime-400" />
        </div>
    </div>
</template>

<script>
export default {
    data: function () {
        return {
            item: {
                name: ""
            }
        }
    },
    methods: {
        addItem() {
            if ( this.item.name == '' ) return;
            axios.post("api/item/store", {
                item: this.item
            })
            .then( response => {
                if( response.status == 201){
                    this.item.name = "";
                    this.$emit('reloadlist');
                }
            })
            .catch(error => {
                console.log(error);
            })
        }
    }
}
</script>

<style>
.active {
    color: green;
}
.inactive {
    color: #999999;
}
</style>
