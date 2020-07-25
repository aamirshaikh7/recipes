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
                <input v-model="anotherIngredient" name="ingredient" type="text" placeholder="Add Recipe Ingredients">
                <i class="material-icons addAnotherIngredient" @click="addAnotherIngredient">add</i>
            </div>
            <div class="center custom-field">
                <p v-if="msg !== ''"><strong>{{ msg }}</strong><i class="material-icons msgRed">priority_high</i></p>
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
            msg: '',
            title: '',
            anotherIngredient: '',
            ingredients: []
        }
    },

    methods: {
        addRecipe() {
            if(this.title !== '') {
                console.log(this.title, this.ingredients);
            }
        },

        addAnotherIngredient() {
            if(this.anotherIngredient !== '') {
                this.ingredients.push(this.anotherIngredient);
                
                // console.log(this.ingredients);

                this.anotherIngredient = '';

                this.msg = '';
            } else {
                this.msg = 'You must add an Ingredient';
            }
        }
    }
}
</script>

<style scoped>
::placeholder { 
  color: #9b9393;
}

.custom-field span {
    font-size: 1.5rem;
    line-height: inherit;
    text-transform: lowercase;
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
    position: relative;
    margin: 15px auto;
}

.add-recipe .custom-field label {
    font-size: 1rem;
    color: #000;
}

.ingredient .addAnotherIngredient {
    position: absolute;
    right: 0;
    bottom: 15px;
    cursor: pointer;
    font-size: 1.3em;
    color: #2424ec;
}

.add-recipe .custom-field .msgRed {
    position: absolute;
    cursor: pointer;
    font-size: 1.3em;
    color: red;
}
</style>