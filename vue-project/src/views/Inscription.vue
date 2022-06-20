<script>
  import { ref } from "vue";
  import { stringify } from "postcss";
  import axios from "axios";

  const email = ref('');
  const password = ref('');
  const isSignIn = ref(false);

  const handleSubmit = async() => {
    const response = await fetch("http://localhost:5000/signup", {
          method: "POST",
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              email: email.value,
              password: password.value
          })
        })
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            this.isSignIn = true;
        }
  }
</script>
<template>
  <div class="about">
   <form @submit.prevent="handleSubmit">
        <div>
          <label>Email :</label>
          <input type="email" v-model="email" required>
        </div>

        <div>
          <label>Password :</label>  
          <input type="password" v-model="password" required>            
        </div>
        <div class="button">
            <button class="submit" type="submit">Sign up here</button>
            <p v-if="isSignIn">Votre compte a été crée</p>
        </div>
    </form>
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
