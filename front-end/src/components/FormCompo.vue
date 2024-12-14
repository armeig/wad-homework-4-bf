<template>
    <div class="form-container">
      <form @submit.prevent="handleSubmit">
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
        <p v-if="errorMessages.length > 0" class="error">
          The password is not valid:
          <span v-for="(error, index) in errorMessages" :key="index">
            {{ error }}<br />
          </span>
        </p>
        
        <div class="button-row"> 
            <button
                v-if="isSignup"
                type="submit"
                :disabled="emailError || errorMessages.length > 0"
                class="centered_btn"
            >
                Sign Up
            </button>

            <div v-if="!isSignup" class="button-group">
                <button
                    type="submit"
                    :disabled="emailError || errorMessages.length > 0"
                >
                    Log In
                </button>
                <button type="button" @click="goToSignup">Sign Up</button>
            </div>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: "FormComponent",
    props: {
      isSignup: {
        type: Boolean,
        default: false, // Default to false for login form
      },
    },
    data() {
      return {
        email: "",
        password: "",
        errorMessages: [],
        emailError: "",
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
        if (this.password.length < 8 || this.password.length > 14) {
          errors.push("Password should be at least 8 chars and less than 15 chars.");
        }
        if (!/[A-Z]/.test(this.password)) {
          errors.push("Password must include at least one uppercase alphabet character.");
        }
        if ((this.password.match(/[a-z]/g) || []).length < 2) {
          errors.push("Password must include at least two lowercase alphabet characters.");
        }
        if (!/\d/.test(this.password)) {
          errors.push("Password must include at least one numeric value.");
        }
        if (!/^[A-Z]/.test(this.password)) {
          errors.push("Password must start with an uppercase alphabet character.");
        }
        if (!/_/.test(this.password)) {
          errors.push("Password must include the character '_'.");
        }
  
        this.errorMessages = errors;
      },
      handleSubmit() {
        if (this.isSignup) {
          alert(`Welcome! Your account with email ${this.email} has been created successfully.`);
        } else {
          alert(`Welcome back! You are now logged in with email ${this.email}.`);
        }
        this.email = "";
        this.password = "";
        this.errorMessages = [];
      },
      goToSignup() {
        // Handle navigation to Signup page if needed (e.g., using Vue Router)
        this.$router.push("/signup"); // Assuming you are using Vue Router
      },
    },
  };
  </script>
  
  <style scoped>
.form-container {
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

.button-row {
  display: flex;
  justify-content: space-between;  /* Align buttons in row for Login */
  gap: 10px
}

.button-group {
  width: 48%;
}

.centered-btn {
  margin: 0 auto; /* This centers the button */
  display: block;
}

.or-text {
  font-size: 16px;
  color: #6a4d59;
}
</style>

  