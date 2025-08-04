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
        <RouterLink to="/add-player">
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
        <RouterLink to="/about" active-class="active">
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
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="16" x2="12" y2="12"></line>
            <line x1="12" y1="8" x2="12.01" y2="8"></line>
          </svg>
          <span>About</span>
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
          <h1>About Score Nexus</h1>
          <p>Learn more about the purpose and features of this application</p>
        </div>
      </div>

      <div class="about-content">
        <section class="about-section">
          <div class="about-card">
            <div class="about-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#4caf50"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                <line x1="12" y1="17" x2="12.01" y2="17"></line>
              </svg>
            </div>
            <div class="about-text">
              <h2>What is Score Nexus?</h2>
              <p>
                <strong>Score Nexus</strong> is a Cricket Management System
                designed to simplify and streamline the process of organizing
                players, managing matches, and tracking statistics. Whether
                you're managing a local league or a school team, Score Nexus
                offers an efficient, digital-first approach to cricket
                operations.
              </p>
            </div>
          </div>

          <div class="about-card">
            <div class="about-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#4caf50"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path
                  d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"
                ></path>
                <line x1="12" y1="11" x2="12" y2="17"></line>
                <line x1="9" y1="14" x2="15" y2="14"></line>
              </svg>
            </div>
            <div class="about-text">
              <h2>Core Features</h2>
              <ul>
                <li>
                  <strong>Player Management:</strong> Add and manage player
                  profiles and details.
                </li>
                <li>
                  <strong>Match Scheduling:</strong> Plan matches with precise
                  date, time, and teams.
                </li>
                <li>
                  <strong>Statistics Tracking:</strong> Analyze team and player
                  performance in real time.
                </li>
                <li>
                  <strong>Admin Controls:</strong> Secure access and easy
                  management for organizers.
                </li>
              </ul>
            </div>
          </div>

          <div class="about-card">
            <div class="about-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#4caf50"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <div class="about-text">
              <h2>Our Mission</h2>
              <p>
                To digitize and simplify cricket management while improving
                accuracy and accessibility for players, coaches, and tournament
                organizers.
              </p>
            </div>
          </div>

          <div class="about-card">
            <div class="about-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#4caf50"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <div class="about-text">
              <h2>Who Should Use It?</h2>
              <p>
                This tool is perfect for schools, clubs, coaches, and cricket
                administrators looking to efficiently manage their teams and
                competitions.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { fsmApi } from "@/api.js";

const store = useStore();
const router = useRouter();

const user = computed(() => store.state.currentUser);

const userInitial = computed(() => {
  return user.value?.email ? user.value.email.charAt(0).toUpperCase() : "U";
});

onMounted(() => {
  if (!user.value) {
    alert("You must log in first!");
    router.push("/");
  }
});

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

.about-content {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.about-section {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.about-card {
  display: flex;
  gap: 1.5rem;
  align-items: flex-start;
  padding-bottom: 2rem;
  border-bottom: 1px solid #e2e8f0;
}

.about-card:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

.about-icon {
  flex-shrink: 0;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f0fdf4;
  border-radius: 12px;
}

.about-text h2 {
  margin-top: 0;
  margin-bottom: 1rem;
  color: #1a202c;
}

.about-text p {
  color: #4a5568;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.about-text ul {
  padding-left: 1.5rem;
  color: #4a5568;
  line-height: 1.6;
}

.about-text li {
  margin-bottom: 0.5rem;
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

  .about-card {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .about-icon {
    margin-bottom: 1rem;
  }

  .about-text ul {
    padding-left: 0;
    list-style-position: inside;
  }
}
</style>
