<template>
    <div class="navbar"> 
        <nav class="nav-extended">
            <div class="nav-content">
                <router-link :to="{ name: 'Index' }">
                    <span class="nav-title">Recipes</span>
                </router-link>
                <a href="" class="btn-floating halfway-fab black">
                    <router-link :to="{ name: 'AddRecipe' }">
                        <i class="material-icons">add</i>
                    </router-link>
                </a>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'Navbar',

    data () {
        return {

        }
    }
}
</script>

<style scoped>
.navbar nav {
    padding: 0 15px;
}

.navbar nav i {
    line-height: 40px;
}
</style>