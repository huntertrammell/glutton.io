import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

var express = require("express");

var PORT = process.env.PORT || 8080;

var app = express();

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var routes = require("./routes/router");

app.use(routes);

import axios from 'axios'
Vue.use(axios)

app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});