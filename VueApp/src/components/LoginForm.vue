<template>
  <form @submit.prevent="handleLogin" class="login-form">
    <div class="form-header">
      <h2>Welcome to Score Nexus</h2>
      <p>Sign in to continue to your dashboard</p>
    </div>

    <div class="input-group">
      <label>Email</label>
      <input v-model="email" type="email" required />
    </div>

    <div class="input-group password-group">
      <label>Password</label>
      <div class="password-wrapper">
        <input
          v-model="password"
          :type="showPassword ? 'text' : 'password'"
          required
        />
        <span class="toggle-password" @click="togglePasswordVisibility">
          <svg
            v-if="!showPassword"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-.884 2.727-2.942 4.93-5.542 6.111"
            />
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.542-7a9.992 9.992 0 012.42-4.248M9.88 9.88a3 3 0 104.24 4.24M15 12a3 3 0 00-3-3M3 3l18 18"
            />
          </svg>
        </span>
      </div>
      <router-link to="/forgot-password" class="forgot-password"
        >Forgot password?</router-link
      >
    </div>

    <button type="submit">Login</button>

    <p class="signup-link">
      Don't have an account?
      <router-link to="/signup">Sign up</router-link>
    </p>
  </form>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { fsmApi } from "@/api.js";

const email = ref("");
const password = ref("");
const router = useRouter();
const store = useStore();

const showPassword = ref(false);

const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value;
};

async function handleLogin() {
  try {
    const response = await fetch(
      `http://localhost:3000/users?email=${email.value}&password=${password.value}`
    );
    const users = await response.json();

    if (users.length) {
      const user = users[0];
      localStorage.setItem("currentUser", JSON.stringify(user));
      store.commit("setUser", user);
      const fsmResult = await fsmApi.sendTransition(user.id, "login", {
        userId: user.id,
        email: user.email,
      });

      console.log("FSM State:", fsmResult.state);

      //optional
      localStorage.setItem("fsmState", JSON.stringify(fsmResult));

      router.push("/dashboard");
    } else {
      alert("Invalid credentials!");
    }
  } catch (error) {
    console.error("Login error:", error);
    alert("Error during login.");
  }
}
</script>

<style scoped>
.login-form {
  background: #ffffff;
  padding: 2.5rem;
  border-radius: 16px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
}

.login-form:hover {
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.35);
  transform: translateY(-3px);
  transition: all 0.3s ease;
}

.form-header {
  text-align: center;
  margin-bottom: 1.8rem;
}

.form-header h2 {
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
  color: #2d3748;
}

.form-header p {
  color: #718096;
  font-size: 0.95rem;
}

.input-group {
  margin-bottom: 1.4rem;
}

.password-group {
  position: relative;
}

.password-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.password-wrapper input {
  width: 100%;
  padding-right: 2.5rem;
}

.toggle-password {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  color: #4caf50;
  display: flex;
  align-items: center;
  justify-content: center;
}

.input-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #4a5568;
}

.input-group input {
  width: 90%;
  padding: 0.9rem;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.2s ease;
  background: #f8fafc;
}

.input-group input:focus {
  outline: none;
  border-color: #4caf50;
  box-shadow: 0 0 0 3px rgba(76, 175, 80, 0.1);
}

.forgot-password {
  display: block;
  margin-top: 0.5rem;
  text-align: right;
  font-size: 0.85rem;
  color: #4caf50;
  text-decoration: none;
}

.forgot-password:hover {
  text-decoration: underline;
}

button {
  width: 100%;
  padding: 1rem;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
}

button[type="submit"] {
  background-color: #4caf50;
  color: white;
  margin-bottom: 1.2rem;
}

button[type="submit"]:hover {
  background-color: #3e8e41;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.signup-link {
  margin-top: 1.5rem;
  text-align: center;
  font-size: 0.95rem;
  color: #4a5568;
}

.signup-link a {
  color: #4caf50;
  text-decoration: none;
  font-weight: 600;
}

.signup-link a:hover {
  text-decoration: underline;
}
</style>
