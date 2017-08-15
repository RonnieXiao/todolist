<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
    <div v-bind:class="dynamicId"></div>
    <button v-bind:disabled="isButtonDisabled">Button</button>
    <a v-bind:href="url">click me,open the link</a>
    <div>firstname:{{firstName}} && lastname: {{lastName}} = fullname: {{fullName}}</div>
    <div>
      <span v-for="n in 10">{{ n }} </span>
    </div>

    <div id="todo-list-example">
      <input placeholder="Add a todo" v-on:keyup.enter="addNewTodo" v-model="newTodoText"/>
      <ul>
        <li is="todo-item" v-for="(todo, index) in todos" v-bind:key="index" v-bind:title="todo">
          {{ todo }}
          <button v-on:click="todos.splice(index, 1)">X</button>
        </li>
      </ul>
    </div>

    <button v-on:click="counter += 1">add 1</button>
    <p> has been clicked {{counter}}</p>
    <button v-on:click="greet">Greet</button>
    <button v-on:click="say('hi')">Say hi</button>
    <button v-on:click="warn('Form cannot be submitted yet.', $event)">
      Submit
    </button>
    <textarea v-model.number="saysomething" placeholder="edit in there" ></textarea>
    <p style="white-space: pre-line">say: {{saysomething}}</p>
    <input type="checkbox" id="checkbox" v-model="checked"><label for="checkbox">{{checked}}</label>
    <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
    <label for="jack">Jack</label>
    <input type="checkbox" id="john" value="John" v-model="checkedNames">
    <label for="john">John</label>
    <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
    <label for="mike">Mike</label>
    <br>
    <span>Checked names: {{ checkedNames }}</span>
    <div id="demo">
      <button v-on:click="show = !show">Toggle</button>
      <transition name="slide-fade" :duration="1000">
        <p v-if="show">Hello</p>
      </transition>
    </div>
    <index :message="nm"></index>
    <router-link to="/index/hey">click me</router-link>
  </div>

</template>

<script>
  import index from './index.vue'
export default {
    components: {
      index
    },
    name: 'hello',
    data () {
      return {
        nm: 'xmm',
        msg: 'Welcome to Your Vue.js App',
        dynamicId: 'red',
        isButtonDisabled: false,
        url: '/index',
        firstName: '肖',
        lastName: '梦',
        newTodoText: '',
        todos: [
          '1111',
          '2222',
          '3333'
        ],
        counter: 0,
        saysomething: '',
        checked: false,
        checkedNames: [],
        show: true
      }
    },
    computed: {
      fullName: {
        get: function () {
          return this.firstName + ' ' + this.lastName
        },
        set: function (newValue) {
          var names = newValue.split(' ')
          this.firstName = names[0]
          this.lastName = names[names.length - 1]
        }
      }
    },
    methods: {
      addNewTodo: function () {
        this.todos.push(this.newTodoText)
        this.newTodoText = ''
      },
      greet: function () {
        alert('hello' + this.firstName + '!')
      },
      say: function (message) {
        alert(message)
      },
      warn: function (message, event) {
        // 现在我们可以访问原生事件对象
        if (event) event.preventDefault()
        alert(message)
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
  .red{
    width: 5px;
    height: 5px;
    background-color: red;
    margin-left: 100px;
  }
/*.fade-enter-active, .fade-leave-active {*/
  /*transition: opacity .5s*/
/*}*/
/*.fade-enter, .fade-leave-to !* .fade-leave-active in below version 2.1.8 *! {*/
  /*opacity: 0*/
/*}*/
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
