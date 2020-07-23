<template>
  <div class="init container">
    <div class="card black darken-2" v-for="recipe in recipes" :key="recipe.id">
      <div class="card-content white-text">
        <h2>{{ recipe.title }}</h2>
        <ul class="ingredients">
          <li v-for="(ingredient, index) in recipe.ingredients" :key="index">
             <span class="chip">{{ ingredient }}</span>
          </li>
        </ul>
        <i class="material-icons delete" @click="deleteRecipe(recipe.id)">delete</i>
      </div>
    </div>
  </div>
</template>

<script>
import database from '@/firebase/init'

export default {
  name: 'Init',
  
  data () {
    return {
      recipes: []
    }
  },

  methods: {
    deleteRecipe (id) {
      // console.log(id);

      // deleting recipe from firestore

      database.collection('recipes').doc(id).delete()
        .then(() => {
          this.recipes = this.recipes.filter(recipe => {
            return recipe.id !== id;
          });
        })
        .catch(err => console.log(err));

      // this.recipes = this.recipes.filter(recipe => {
      //   return recipe.id !== id;
      // });
    }
  },

  created() {
    // Retrieve data from the firestore

    database.collection('recipes').get()
      .then(items => {
        items.forEach(item => {
          //  console.log(item.id, item.data());
          
          let recipe = item.data();
          recipe.id = item.id;

          this.recipes.push(recipe);
        });
      })
      .catch(err => console.log(err));
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.init {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 25px;
  margin-top: 50px;
}

.card {
  border-radius: 25px 0px;
}

.init h2 {
  font-size: 2em;
  text-align: center;
  margin-top: 0;
}

.init .ingredients {
   margin: 35px auto;
}

.init .ingredients li {
  display: inline-block;
}

.init .delete {
  position: absolute;
  bottom: 8px;
  right: 8px;
  color: #f22;
  cursor: pointer;
  font-size: 2.1em;
}

.init .delete:hover {
  transition: all .5s;
  color: #f00;
}
</style>
