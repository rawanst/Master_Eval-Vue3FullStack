<script setup>
  import { ref, onMounted, computed, watch } from 'vue'

  const todos = ref([])
  const name = ref('')
  const input_name = ref('')
  const input_done = ref(null)

  const todos_asc = computed(() => todos.value.sort((a,b) =>{
    return a.createdAt - b.createdAt
  }))
  watch(name, (newVal) => {
    localStorage.setItem('name', newVal)
  })
  watch(todos, (newVal) => {
    localStorage.setItem('todos', JSON.stringify(newVal))
  }, {
    deep: true
  })
  const add = () => {
    if (input_name.value.trim() === '' || input_done.value === null) {
      return
    }
    todos.value.push({
      content: input_name.value,
      category: input_done.value,
      done: false,
      editable: false,
      createdAt: new Date().getTime()
    })
  }

  const remove = (todo) => {
    todos.value = todos.value.filter((t) => t !== todo)
  }

  onMounted(() => {
    todos.value = JSON.parse(localStorage.getItem('todos')) || []
  })
</script>

<template>
  <div class="about">
    <h1>This is an TodoList page</h1>
    <main class="app">

		<section>
			<h3>Créer un item:</h3>

			<form id="new-todo-form" @submit.prevent="add">
				<h4>Libellé</h4>
				<input 
					type="text" 
					name="content" 
					id="content" 
					v-model="input_name" />

				<h4>La tache est-elle faite ?</h4>
				<div>
					<label>
						<input 
							type="radio" 
							name="done" 
							value="Oui"
							v-model="input_done" />
						<span class="bubble done"></span>
						<div>Oui</div>
					</label>

					<label>
						<input 
							type="radio" 
							name="done" 
							value="Non"
							v-model="input_done" />
						<span class="bubble notDone"></span>
						<div>Non</div>
					</label>

				</div>

				<input type="submit" value="Ajouter" />
			</form>
		</section>

		<section>
			<h3>List :</h3>
			<div>

				<div v-for="todo in todos_asc" :class="`todo-item ${todo.done && 'done'}`">
					<label>
						<input type="checkbox" v-model="todo.done" />
						<span :class="`bubble ${
							todo.done == 'oui' 
								? 'oui' 
								: 'non'
						}`"></span>
					</label>
						<input type="text" v-model="todo.content" />
						<button @click="remove(todo)">Supprimer</button>
				</div>

			</div>
		</section>

	</main>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
