<template>
  <div class="forgot-password-container">
    <form @submit.prevent="handleSubmit" class="forgot-password-form">
      <h2>Forgot Password</h2>
      <p>Please enter your email address to reset your password.</p>

      <input
        v-model="email"
        type="email"
        placeholder="Enter your email"
        required
      />

      <button type="submit">Send Reset Link</button>

      <p class="back-to-login">
        <router-link to="/">← Back to Login</router-link>
      </p>

      <p v-if="message" class="success-message">{{ message }}</p>
      <p v-if="error" class="error-message">{{ error }}</p>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";

const email = ref("");
const message = ref("");
const error = ref("");

async function handleSubmit() {
  message.value = "";
  error.value = "";

  try {
    const res = await fetch(`http://localhost:3000/users?email=${email.value}`);
    const data = await res.json();

    if (data.length) {
      message.value = "Password reset link has been sent to your email!";
      // In real scenario: send an actual reset email here
    } else {
      error.value = "Email not found!";
    }
  } catch (err) {
    error.value = "Something went wrong. Please try again later.";
  }
}
</script>

<style scoped>
.forgot-password-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #f8fafc;
}

.forgot-password-form {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.forgot-password-form h2 {
  margin-bottom: 0.8rem;
  color: #333;
}

.forgot-password-form p {
  margin-bottom: 1rem;
  color: #666;
}

.forgot-password-form input {
  width: 100%;
  padding: 0.9rem;
  margin-bottom: 1.2rem;
  border: 1px solid #ccc;
  border-radius: 8px;
}

.forgot-password-form button {
  width: 100%;
  padding: 0.9rem;
  background: #4caf50;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
}

.forgot-password-form button:hover {
  background: #388e3c;
}

.success-message {
  margin-top: 1rem;
  color: #4caf50;
  font-weight: 600;
}

.error-message {
  margin-top: 1rem;
  color: red;
  font-weight: 600;
}

.back-to-login {
  margin-top: 1rem;
  font-size: 0.9rem;
}
</style>
