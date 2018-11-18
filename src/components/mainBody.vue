<template>
<div class="container">
  <div class="row">
    <div class="col">
      <div class="card">
        <div class="card-header bg-primary">
          <h1 class="text-white">Ingested</h1>
          <ul class="list-group">
            <li class="list-group-item" v-for="foods in results" :key="foods">
            <h4 class="float-left text-center">{{ foods }}</h4>
            <button class="btn btn-sm btn-primary float-right"
                    @click="digest"
                    :value="foods.id"
                    >
              <i class="fas fa-toilet-paper"></i>
            </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="col">
      <img class="w-75" src="../assets/adventuretime.gif" alt="">
      <form action="" class="mt-4">
        <div class="form-group">
          <input class="w-100" type="text" placeholder="Type what you want to eat">
        </div>
        <button class="btn btn-primary">Consume</button>
      </form>
    </div>
    <div class="col">
      <div class="card">
        <div class="card-header bg-primary">
          <h1 class="text-white">Digested</h1>
          <ul class="list-group">
            <li class="list-group-item bg-secondary text-light">mango</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data: {
    results: [],
  },
  methods: {
    digest: function() {
      var id = this.val();
      var newState = {
        eaten: !eaten
      }
      axios.put("/api/food/" + id, {
      data: newState
      })
    },
    getInfo: function(){
      axios.get('/api/food', function(response){
      }).then(response => this.results.push(response.data.results))
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  margin-top: 60px;
}
</style>
