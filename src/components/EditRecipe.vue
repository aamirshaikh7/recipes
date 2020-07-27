<template>
    <div v-if="recipe !== ''" class="container edit-recipe">
        <h4 class="center">Recipe Title : <strong class="upper">{{ recipe.title }}</strong></h4>
        <h2 class="center">Edit Recipe</h2>

        <form @submit.prevent="editRecipe">
            <div class="title custom-field">
                <label for="title">Recipe Title :</label>
                <input v-model="recipe.title" name="title" type="text" placeholder="Add Recipe Title">
            </div>
            
            <div>
                <div class="custom-field" v-for="(ingredient, index) in recipe.ingredients" :key="index">
                    <label for="addedIngredient">Ingredient :</label>
                    <input v-model="recipe.ingredients[index]" type="text" name="addedIngredient">
                    <i class="material-icons delete" @click="deleteIngredient(ingredient)">delete_forever</i>
                </div>
            </div>

            <div class="ingredient custom-field">
                <label for="ingredient">{{ ingredientTitle }} :</label>
                <input v-model="anotherIngredient" name="ingredient" type="text" placeholder="Add Recipe Ingredients">
                <i class="material-icons addAnotherIngredient" @click="addAnotherIngredient">add</i>
            </div>

            <div class="center custom-field">
                <p v-if="msg !== ''"><strong>{{ msg }}</strong><i class="material-icons msgRed">priority_high</i></p>
                <button class="btn black">
                    <span>Update </span>
                    <i class="material-icons">update</i>
                </button>
            </div>
        </form>
    </div>
</template>

<script>
import database from '@/firebase/init'
import slugify from 'slugify'

export default {
    name: 'EditRecipe',

    data() {
        return {
            ingredientTitle: 'Ingredient',
            recipe: '',
            anotherIngredient: '',
            msg: ''
        }
    },

    methods: {
        editRecipe() {
            if(this.recipe.title !== '') {
                this.msg = '';

                this.recipe.slug = slugify(this.recipe.title, {
                    lower: true,
                    replacement: '-',
                    remove: /[$*_~.+,()'"!\-:@]/g,
                });

                database.collection('recipes').doc(this.recipe.id).update({
                    title: this.recipe.title,
                    ingredients: this.recipe.ingredients,
                    slug: this.recipe.slug
                })
                    .then(() => this.$router.push({ name: 'Init' }))
                    .catch(err => console.log(err));
            } else {
                this.msg = 'You must fill in all the fields';
            }
        },

        addAnotherIngredient() {
            if(this.anotherIngredient !== '') {
                this.ingredientTitle = 'Another Ingredient';

                this.recipe.ingredients.push(this.anotherIngredient);

                this.anotherIngredient = '';

                this.msg = '';
            } else {
                this.msg = 'You must add an Ingredient';
            }
        },

        deleteIngredient(ingredient) {
            this.recipe.ingredients = this.recipe.ingredients.filter(item => {
                return ingredient !== item;
            });
        }
    },

    created() {
        database.collection('recipes').where('slug', '==', this.$route.params.slug_param)
            .get()
            .then(items => {
                items.forEach(item => {
                    this.recipe = item.data();
                    this.recipe.id = item.id;
                });
            })
            .catch(err => console.log(err));
    }
}
</script>

<style scoped>
.edit-recipe {
    margin-top: 20px;
    padding: 15px;
    max-width: 615px;
}

.edit-recipe h2, h4 {
    font-weight: lighter;
}

.edit-recipe .upper {
    text-transform: uppercase;
}

::placeholder { 
  color: #9b9393;
}

.custom-field span {
    font-size: 1.5rem;
    line-height: inherit;
    text-transform: lowercase;
}

.edit-recipe {
    margin-top: 20px;
    padding: 15px;
    max-width: 615px;
}

.edit-recipe .custom-field {
    position: relative;
    margin: 15px auto;
}

.edit-recipe .custom-field label {
    font-size: 1rem;
    color: #000;
}

.ingredient .addAnotherIngredient {
    position: absolute;
    right: 0;
    bottom: 15px;
    cursor: pointer;
    font-size: 1.8em;
    color: #2424ec;
}

.edit-recipe .custom-field .msgRed {
    position: absolute;
    cursor: pointer;
    font-size: 1.3em;
    color: red;
}

.edit-recipe .delete {
    position: absolute;
    right: 0;
    bottom: 15px;
    cursor: pointer;
    font-size: 1.8em;
    color: rgb(185, 40, 40);
}

.edit-recipe .delete:hover {
    transition: all .5s;
    color: #f00;
}
</style>