<template>
  <div class="index container">
    <div class="card black darken-2" v-for="recipe in recipes" :key="recipe.id">
      <div class="card-content white-text">
        <h2>{{ recipe.title }}</h2>
        <ul class="ingredients">
          <li v-for="(ingredient, index) in recipe.ingredients" :key="index">
             <span class="chip">{{ ingredient }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  
  data () {
    return {
      recipes: [
        { title: 'Noodle pie', slug: 'noodle-pie', ingredients: ['noodle', 'soup', 'pie'], id: '1' },
        { title: 'Mango pie', slug: 'mango-pie', ingredients: ['mango', 'soup', 'creme'], id: '2' }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.index {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 25px;
  margin-top: 50px;
}

.card {
  border-radius: 25px;
}

.index h2 {
  font-size: 2em;
  text-align: center;
  margin-top: 0;
}

.index .ingredients {
   margin: 35px auto;
}

.index .ingredients li {
  display: inline-block;
}
</style>
