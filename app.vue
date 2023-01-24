<template>
  <div class="wrapper" >
    <header class="header"><h1 class="header__title"> What are we doing today?</h1></header>
    <main class="main">
      <section class="todos-list">
      
        <div v-for="item in todoStore.items" :key="item._id">{{ item.title }}</div>
      </section>

      <form class="form" @submit.prevent>
        <input class="input" type="text" v-model="newTodo" @save="saveNewTodo" :error="error"/>
        <button class="submit" @click="saveNewTodo">ADD TODO</button>

      </form>
    </main>
  </div>
</template>


<script lang="ts" setup>
import { useTodoStore } from './store/todo';

const todoStore = useTodoStore()


const newTodo = ref("")
const error = ref(false)
console.log(newTodo);

const saveNewTodo = () => {
  if(newTodo.value.length <= 0){
    error.value = true
    return;
  }
  todoStore.add({
    title: newTodo.value
  })
  console.log(newTodo.value);
  
  newTodo.value = ""
}




</script>





<style>
  
  body{
    transition: all 0.5 ease-in-out 0.5;
    @apply bg-slate-700;
  }
  .wrapper{
    @apply  w-screen h-screen flex items-center px-1 py-3 flex-col;
  }
  .header{
    
  }
  .main{
    @apply flex flex-col;
    min-height: calc(100% - 50px);
  }
  .header__title{
    @apply text-4xl text-white;
    text-shadow: 1px 1px 2px black;
  }
  .form{
    @apply flex w-full gap-2 ;
  }
  .input{
    @apply p-2 rounded-md;
    box-shadow: 8px 8px 16px 0px rgba(0, 0, 0, 0.2);
  }
  .submit{
    @apply p-2 bg-green-400 rounded-md hover:opacity-90 active:shadow-none;
    transition: all 0.1s ease-in-out 0s ;
    box-shadow: 8px 8px 16px 0px rgba(0, 0, 0, 0.2);

  }
  
  

  .todos-list{
    @apply flex-auto;
  }
</style>