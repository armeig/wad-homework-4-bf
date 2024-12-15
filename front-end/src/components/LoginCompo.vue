<template>
  <div class="login">
    <form @submit.prevent="handleLogin">
      <div class="form-group">
        <label for="email">Email: </label>
        <input
          id="email"
          v-model="email"
          type="email"
          @input="validateEmail"
          required
        />
      </div>
      <div class="form-group">
        <label for="password">Password: </label>
        <input
          id="password"
          v-model="password"
          type="password"
          @input="validatePassword"
          required
        />
      </div>
      <p v-if="emailError" class="error">{{ emailError }}</p>
      <button type="submit">Login</button>
      <button type="submit" @click="this.$router.push('/signup')">
        Sign Up
      </button>
      <p v-if="loginError" class="error">{{ loginError }}</p>
    </form>
  </div>
</template>

<script>
export default {
  name: "LoginCompo",
  data() {
    return {
      email: "",
      password: "",
      errorMessages: [],
      loginError: "",
    };
  },
  methods: {
    validateEmail() {
      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      this.emailError = emailRegex.test(this.email)
        ? ""
        : "Please enter a valid email address.";
    },
    validatePassword() {
      const errors = [];
      /*
    if (14 < this.password.length || this.password.length < 8) {
      errors.push(
        "Password should be at least 8 chars and less than 15 chars."
      );
    }
    if (!/[A-Z]/.test(this.password)) {
      errors.push(
        "Password must include at least one uppercase alphabet character."
      );
    }
    if ((this.password.match(/[a-z]/g) || []).length < 2) {
      errors.push(
        "Password must include at least two lowercase alphabet characters."
      );
    }
    if (!/\d/.test(this.password)) {
      errors.push("Password must include at least one numeric value.");
    }
    if (!/^[A-Z]/.test(this.password)) {
      errors.push(
        "Password must start with an uppercase alphabet character."
      );
    }
    if (!/_/.test(this.password)) {
      errors.push("Password must include the character '_'.");
    }
    */
      this.errorMessages = errors;
    },
    handleLogin() {
      var data = {
        email: this.email,
        password: this.password,
      };
      // using Fetch - post method - send an HTTP post request to the specified URI with the defined body
      fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", //  Don't forget to specify this if you need cookies
        body: JSON.stringify(data),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Invalid credentials");
          }
          return response.json();
        })
        .then((data) => {
          console.log("Login successful", data);
          //this.$router.push("/");
          location.assign("/");
        })
        .catch((e) => {
          console.error("Error:", e);
          this.loginError =
            "Login failed. Please check your email and password.";
        });
    },
  },
};
</script>

<style scoped>
.login {
  max-width: 300px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #f9f9f9;
  margin-bottom: 25vh;
  background-color: #d4c4cb;
}

.form-group {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
  width: 100%;
}
label {
  margin-bottom: 5px;
}

input {
  width: 200px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
button {
  background-color: #6a4d59;
  padding: 10px;
  border-radius: 5px;
  color: #fffbfa;
}
button:hover {
  background-color: #8a6d79;
}
.error {
  color: red;
  margin-top: 10px;
}
</style>
