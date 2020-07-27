<template>
    <div v-if="recipe !== ''" class="container edit-recipe">
        <h4 class="center">Recipe Title : <strong class="upper">{{ recipe.title }}</strong></h4>
        <h2 class="center">Edit Recipe</h2>
    </div>
</template>

<script>
import database from '@/firebase/init'

export default {
    name: 'EditRecipe',

    data() {
        return {
            recipe: ''
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

h2 {
    margin: inherit;
}

.edit-recipe .upper {
    text-transform: uppercase;
}
</style>