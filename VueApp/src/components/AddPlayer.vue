<template>
  <div class="dashboard-layout">
    <aside class="sidebar">
      <div class="sidebar-brand">
        <img
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTIgMkM2LjQ4IDIgMiA2LjQ4IDIgMTJzNC40OCAxMCAxMCAxMCAxMC00LjQ4IDEwLTEwUzE3LjUyIDIgMTIgMnptMCAxOGMtNC40MSAwLTgtMy41OS04LThzMy41OS04IDgtOCA4IDMuNTkgOCA4LTMuNTkgOC04IDh6bS0xLTRoMlY3aC0ydjl6bTAtNGgydi0yaC0ydjJ6Ii8+PC9zdmc+"
          alt="Cricket Icon"
          class="brand-icon"
        />
        <h1>SCORE NEXUS</h1>
      </div>

      <div class="sidebar-user">
        <div class="user-avatar">
          <span>{{ userInitial }}</span>
        </div>
        <div class="user-info">
          <strong>{{ user?.Email }}</strong>
          <span>Admin</span>
        </div>
      </div>

      <nav class="sidebar-nav">
        <RouterLink to="/dashboard">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
          </svg>
          <span>Dashboard</span>
        </RouterLink>
        <RouterLink to="/add-player" class="active">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
            <circle cx="8.5" cy="7" r="4"></circle>
            <line x1="20" y1="8" x2="20" y2="14"></line>
            <line x1="23" y1="11" x2="17" y2="11"></line>
          </svg>
          <span>Add Player</span>
        </RouterLink>
        <RouterLink to="/manage-players">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
          </svg>
          <span>Manage Players</span>
        </RouterLink>
        <RouterLink to="/schedule">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
          </svg>
          <span>Schedule Match</span>
        </RouterLink>
        <RouterLink to="/about" class="sidebar-link">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="sidebar-icon"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="16" x2="12" y2="12"></line>
            <line x1="12" y1="8" x2="12.01" y2="8"></line>
          </svg>
          <span class="sidebar-label">About</span>
        </RouterLink>
      </nav>

      <div class="sidebar-footer">
        <button @click="logout" class="logout-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path
              d="M10 3H6a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h4M16 17l5-5-5-5M19.8 12H9"
            />
          </svg>
          Logout
        </button>
      </div>
    </aside>

    <main class="main-content">
      <div class="dashboard-header">
        <div class="header-left">
          <h1>Add New Player</h1>
          <p>Fill in the details to add a new player to the system</p>
        </div>
      </div>

      <div class="add-player-form">
        <form @submit.prevent="addPlayer">
          <div class="form-group">
            <label>Player Name</label>
            <input
              v-model="name"
              type="text"
              placeholder="Enter player's full name"
              required
            />
          </div>

          <div class="form-group">
            <label>Player Role</label>
            <select v-model="role" required>
              <option value="" disabled>Select player role</option>
              <option value="Batsman">Batsman</option>
              <option value="Bowler">Bowler</option>
              <option value="All-rounder">All-rounder</option>
              <option value="Wicket-keeper">Wicket-keeper</option>
            </select>
          </div>

          <div class="form-group">
            <label>Team</label>
            <input
              v-model="team"
              type="text"
              placeholder="Enter team name"
              required
            />
          </div>

          <div class="form-group">
            <label>Batting Style</label>
            <input
              v-model="battingStyle"
              type="text"
              placeholder="Right-handed, Left-handed, etc."
            />
          </div>

          <div class="form-group">
            <label>Bowling Style</label>
            <input
              v-model="bowlingStyle"
              type="text"
              placeholder="Fast, Spin, etc."
            />
          </div>

          <div class="form-group">
            <label>Date of Birth</label>
            <input v-model="dob" type="date" />
          </div>
          <p v-if="errorMessage" class="form-error">{{ errorMessage }}</p>
          <p v-if="successMessage" class="form-success">{{ successMessage }}</p>

          <button type="submit" class="submit-btn">Add Player</button>
        </form>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { fsmApi } from "@/api.js";

const errorMessage = ref("");
const successMessage = ref("");
const store = useStore();
const router = useRouter();

const user = computed(() => store.state.currentUser);

const userInitial = computed(() => {
  return user.value?.Email ? user.value.Email.charAt(0).toUpperCase() : "U";
});

const name = ref("");
const role = ref("");
const team = ref("");
const battingStyle = ref("");
const bowlingStyle = ref("");
const dob = ref("");

onMounted(async () => {
  if (!user.value) {
    alert("You must log in first!");
    router.push("/");
  } else {
    const fsmResult = await fsmApi.sendTransition(
      user.value.Email,
      "AddPlayers",
      {
        playerName: name.value,
        addedBy: user.value.Email,
      }
    );
    console.log("FSM State:", fsmResult.state);
  }
});

async function addPlayer() {
  errorMessage.value = "";
  successMessage.value = "";

  const newPlayer = {
    playerName: name.value,
    playerRole: role.value,
    Team: team.value,
    BattingStyle: battingStyle.value,
    BowlingStyle: bowlingStyle.value,
    DateofBirth: dob.value,
  };

  try {
    const response = await fetch("http://localhost:4000/players", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPlayer),
    });

    if (!response.ok) throw new Error("Failed to add player");

    const fsmResult = await fsmApi.sendTransition(
      user.value.Email,
      "AddPlayers",
      {
        playerName: name.value,
        addedBy: user.value.Email,
      }
    );

    console.log("FSM State :", fsmResult.state);

    successMessage.value = `${name.value} added successfully!`;

    // Reset form
    name.value = "";
    role.value = "";
    team.value = "";
    battingStyle.value = "";
    bowlingStyle.value = "";
    dob.value = "";
  } catch (error) {
    console.error("Error adding player:", error);
    errorMessage.value = "Error adding player. Try again.";
  }
}

async function logout() {
  if (user.value?.id) {
    try {
      const fsmResult = await fsmApi.sendTransition(
        user.value.Email,
        "logout",
        {
          userId: user.value.id,
          email: user.value.Email,
        }
      );
      console.log("FSM State:", fsmResult.state);
    } catch (err) {
      console.error("FSM logout failed:", err);
    }
  }

  store.commit("logout");
  router.push("/");
}
</script>

<style scoped>
.dashboard-layout {
  display: flex;
  min-height: 100vh;
  background-color: #f5f7fa;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

.sidebar {
  width: 260px;
  background: linear-gradient(180deg, #1e3a2a 0%, #0c2116 100%);
  color: white;
  padding: 1.5rem 0;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  z-index: 10;
}

.sidebar-brand {
  padding: 0 1.5rem 1.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  gap: 12px;
}

.sidebar-brand h1 {
  font-size: 1.4rem;
  font-weight: 700;
  margin: 0;
  background: linear-gradient(to right, #fff 0%, #4caf50 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.brand-icon {
  width: 36px;
  height: 36px;
}

.sidebar-user {
  padding: 1.5rem;
  display: flex;
  align-items: center;
  gap: 12px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.user-avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: linear-gradient(135deg, #4caf50 0%, #2e7d32 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  font-weight: bold;
}

.user-info {
  display: flex;
  flex-direction: column;
}

.user-info strong {
  font-size: 0.9rem;
  font-weight: 600;
}

.user-info span {
  font-size: 0.8rem;
  opacity: 0.8;
}

.sidebar-nav {
  flex: 1;
  padding: 1.5rem 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.sidebar-nav a {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  padding: 0.8rem 1.5rem;
  display: flex;
  align-items: center;
  gap: 12px;
  transition: all 0.3s ease;
  border-left: 4px solid transparent;
}

.sidebar-nav a:hover {
  background: rgba(255, 255, 255, 0.05);
  color: white;
}

.sidebar-nav a.active {
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border-left: 4px solid #4caf50;
}

.sidebar-footer {
  padding: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.logout-btn {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  padding: 0.6rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-weight: 500;
  transition: all 0.3s ease;
}

.logout-btn:hover {
  background: rgba(255, 255, 255, 0.2);
}

.main-content {
  flex: 1;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
}

.dashboard-header {
  margin-bottom: 2rem;
}

.dashboard-header h1 {
  font-size: 1.8rem;
  font-weight: 700;
  margin: 0 0 0.5rem 0;
  color: #2d3748;
}

.dashboard-header p {
  color: #718096;
  font-size: 1rem;
  margin: 0;
}

.add-player-form {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  max-width: 700px;
}

.add-player-form h2 {
  margin-top: 0;
  color: #2d3748;
  border-bottom: 2px solid #4caf50;
  padding-bottom: 0.5rem;
  margin-bottom: 1.5rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #2d3748;
}

.form-group input,
.form-group select {
  width: 95%;
  padding: 0.9rem;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  font-size: 1rem;
  background: #f8fafc;
  transition: all 0.2s ease;
}

.form-group input:focus,
.form-group select:focus {
  outline: none;
  border-color: #4caf50;
  box-shadow: 0 0 0 3px rgba(76, 175, 80, 0.1);
}

.avatar-preview {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: #f8fafc;
  border: 2px dashed #e2e8f0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.avatar-placeholder {
  width: 60px;
  height: 60px;
  color: #cbd5e0;
}

.upload-btn {
  position: relative;
  padding: 0.7rem 1.5rem;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  color: #4a5568;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.upload-btn:hover {
  background: #edf2f7;
}

.upload-btn input {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
}

.submit-btn {
  background: #4caf50;
  color: white;
  border: none;
  padding: 1rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  width: 100%;
  margin-top: 1rem;
}

.submit-btn:hover {
  background: #3e8e41;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
.form-error {
  color: #e53935;
  font-size: 0.95rem;
  margin-bottom: 1rem;
  text-align: center;
}

.form-success {
  color: rgb(15, 199, 24);
  font-size: 0.95rem;
  margin-bottom: 1rem;
  text-align: center;
}

@media (max-width: 992px) {
  .sidebar {
    width: 220px;
  }
}

@media (max-width: 768px) {
  .sidebar {
    width: 70px;
    padding: 1rem 0;
  }

  .sidebar-brand h1,
  .sidebar-user .user-info,
  .sidebar-nav span,
  .logout-btn span {
    display: none;
  }

  .sidebar-brand,
  .sidebar-user,
  .sidebar-nav a {
    justify-content: center;
    padding-left: 0;
    padding-right: 0;
  }

  .sidebar-nav a {
    border-left: none;
    border-right: 4px solid transparent;
  }

  .sidebar-nav a.active {
    border-left: none;
    border-right: 4px solid #4caf50;
  }
}
</style>
