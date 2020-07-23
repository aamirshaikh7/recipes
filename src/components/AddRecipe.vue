<template>
    <div class="container add-recipe">
        <h2 class="center">Add Recipe</h2>
        <form @submit.prevent="addRecipe">
            <div class="title custom-field">
                <label for="title">Recipe Title :</label>
                <input v-model="title" name="title" type="text" placeholder="Add Recipe Title">
            </div>
            <div class="ingredient custom-field">
                <label for="ingredient">Add Ingredients :</label>
                <input name="ingredient" type="text" placeholder="Add Recipe Ingredients">
            </div>
            <div class="center custom-field">
                <button class="btn black">
                    <span>Add </span>
                    <i class="material-icons">add</i>
                </button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: 'AddRecipe',

    data () {
        return {
            title: ''
        }
    },

    methods: {
        addRecipe() {
            console.log(this.title);
        }
    }
}
</script>

<style scoped>
::placeholder { 
  color: #9b9393;
}

.custom-field span {
    font-size: 1.3rem;
    line-height: inherit;
}

.add-recipe {
    margin-top: 20px;
    padding: 15px;
    max-width: 615px;
}

.add-recipe h2 {
    font-weight: lighter;
}

.add-recipe .custom-field {
    margin: 15px auto;
}

.add-recipe .custom-field label {
    font-size: 1rem;
    color: #000;
}
</style>