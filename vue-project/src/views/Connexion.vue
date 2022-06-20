<script>
  import { ref } from "vue";
  import { stringify } from "postcss";
  import axios from "axios";

  const email = ref('');
  const password = ref('');
  const isConnected = ref(false);

  const handleSubmit = async() => {
    const response = await fetch("http://localhost:5000/signin", {
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
      const tokenJwt = response.headers.get("x-auth-token");
      localStorage.user = JSON.stringify(tokenJwt);
      this.isConnected = true;
    }
  }
</script>
<template>
  <div class="about">
    <form @submit.prevent="handleSubmit">
        <div>
          <label>Email :</label>
          <input type="email" v-model="Aemail" required>
        </div>

        <div>
          <label>Password :</label>  
          <input type="password" v-model="Apassword" required>            
        </div>

        <div class="button">
            <button class="submit" type="submit">Sign in here</button>
            <p v-if="isConnected">Vous êtes connecter</p>
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
