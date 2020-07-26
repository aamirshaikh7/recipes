<template>
    <div class="container edit-recipe">
        <h2 class="center">Edit Recipe</h2>
        <h4 class="center">Recipe Title : <strong>{{ this.$route.params.slug_param }}</strong></h4>
    </div>
</template>

<script>
export default {
    name: 'EditRecipe',

    data() {
        return {
            
        }
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
</style>