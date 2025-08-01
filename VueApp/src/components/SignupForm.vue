<template>
  <form @submit.prevent="handleSignup" class="signup-form">
    <div class="form-header">
      <h2>Welcome to Score Nexus</h2>
      <p>Create your account to unlock your dashboard</p>
    </div>

    <div class="input-group">
      <label>Email</label>
      <input v-model="email" type="email" required />
      <span class="error" v-if="emailError">{{ emailError }}</span>
    </div>

    <div class="input-group">
      <label>Password</label>
      <input v-model="password" type="password" required />
      <span class="error" v-if="passwordError">{{ passwordError }}</span>
    </div>

    <div class="input-group">
      <label>Confirm Password</label>
      <input v-model="confirmPassword" type="password" required />
      <span class="error" v-if="confirmError">{{ confirmError }}</span>
    </div>

    <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>

    <button type="submit" :disabled="!isFormValid">Register</button>

    <p class="login-link">
      Already have an account?
      <router-link to="/">Log in</router-link>
    </p>
  </form>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { fsmApi } from "@/api.js"; // Optional FSM logic

const email = ref("");
const password = ref("");
const confirmPassword = ref("");
const errorMessage = ref("");

const emailError = ref("");
const passwordError = ref("");
const confirmError = ref("");

const router = useRouter();
const store = useStore();

const isFormValid = computed(() => {
  return (
    email.value &&
    /^\S+@\S+\.\S+$/.test(email.value) &&
    password.value &&
    password.value.length >= 7 &&
    confirmPassword.value === password.value
  );
});

function validateForm() {
  emailError.value = "";
  passwordError.value = "";
  confirmError.value = "";
  errorMessage.value = "";

  let isValid = true;

  if (!email.value) {
    emailError.value = "Email is required.";
    isValid = false;
  } else if (!/^\S+@\S+\.\S+$/.test(email.value)) {
    emailError.value = "Enter a valid email.";
    isValid = false;
  }

  if (!password.value) {
    passwordError.value = "Password is required.";
    isValid = false;
  } else if (password.value.length < 7) {
    passwordError.value = "Password must be at least 7 characters.";
    isValid = false;
  }

  if (confirmPassword.value !== password.value) {
    confirmError.value = "Passwords do not match.";
    isValid = false;
  }

  return isValid;
}

async function handleSignup() {
  errorMessage.value = "";

  if (!validateForm()) return;

  const newUser = {
    Email: email.value,
    Password: password.value,
  };

  try {
    const response = await fetch("http://localhost:4000/users/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    });

    const data = await response.json();

    if (!response.ok) {
      errorMessage.value = data.message || "Signup failed.";
      return;
    }

    store.commit("setUser", { Email: data.user.Email });
    localStorage.setItem(
      "currentUser",
      JSON.stringify({ Email: data.user.Email })
    );

    // Optional FSM transition if used
    try {
      const fsmResult = await fsmApi.sendTransition(data.user.Email, "signup", {
        email: data.user.Email,
      });
      localStorage.setItem("fsmState", JSON.stringify(fsmResult));
    } catch (fsmError) {
      console.warn("FSM Error (optional):", fsmError);
    }

    router.push("/");
  } catch (error) {
    console.error("Signup error:", error);
    errorMessage.value = "Server error. Please try again.";
  }
}
</script>

<style scoped>
.signup-form {
  background: #ffffff;
  padding: 2.5rem;
  border-radius: 16px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
}
.error {
  color: red;
  font-size: 0.85rem;
  margin-top: 0.3rem;
  display: block;
}

button:disabled {
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
}

.signup-form:hover {
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
  background: #f8fafc;
  transition: border-color 0.2s ease;
}
.input-group input:focus {
  outline: none;
  border-color: #4caf50;
  box-shadow: 0 0 0 3px rgba(76, 175, 80, 0.1);
}
.error-message {
  color: red;
  font-size: 0.9rem;
  margin-bottom: 1rem;
  text-align: center;
}
button {
  width: 100%;
  padding: 1rem;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  background-color: #4caf50;
  color: white;
  margin-bottom: 1.2rem;
  transition: all 0.2s ease;
}
button:hover {
  background-color: #3e8e41;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}
.login-link {
  text-align: center;
  font-size: 0.95rem;
  color: #4a5568;
}
.login-link a {
  color: #4caf50;
  text-decoration: none;
  font-weight: 600;
}
.login-link a:hover {
  text-decoration: underline;
}
</style>
