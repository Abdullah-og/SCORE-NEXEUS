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
        <RouterLink to="/dashboard/add-player">
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
        <RouterLink to="/dashboard/manage-players">
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
        <RouterLink to="/dashboard/schedule" class="active">
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
          <h1>Match Scheduler</h1>
          <p>Schedule and manage upcoming cricket matches</p>
        </div>
        <div class="header-right">
          <div class="date-display">
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
            <span>{{ currentDate }}</span>
          </div>
        </div>
      </div>

      <div class="match-schedule-container">
        <div class="schedule-card">
          <div class="card-header">
            <h2>Create New Match</h2>
          </div>

          <form class="schedule-form" @submit.prevent="scheduleMatch">
            <div class="form-row">
              <div class="form-group">
                <label>Team 1</label>
                <input
                  v-model="Team1"
                  type="text"
                  required
                  placeholder="Enter Team 1"
                />
              </div>

              <div class="form-group">
                <label>Team 2</label>
                <input
                  v-model="Team2"
                  type="text"
                  required
                  placeholder="Enter Team 2"
                />
              </div>
            </div>

            <div class="form-row">
              <div class="form-group">
                <label>Date</label>
                <input v-model="DateVal" type="date" required />
              </div>

              <div class="form-group">
                <label>Time</label>
                <input v-model="Time" type="time" required />
              </div>
            </div>

            <div class="form-group">
              <label>Venue</label>
              <input
                v-model="Venue"
                type="text"
                required
                placeholder="Match Venue"
              />
            </div>

            <button type="submit" class="submit-btn">Schedule Match</button>
          </form>
        </div>

        <div class="upcoming-matches">
          <div class="card-header">
            <h2>Upcoming Matches</h2>
          </div>

          <div v-if="matches.length === 0" class="empty-state">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#718096"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
            <p>No upcoming matches scheduled</p>
            <p>Create your first match schedule</p>
          </div>

          <div v-else class="match-list">
            <div v-for="match in matches" :key="match.id" class="match-card">
              <div class="match-header">
                <div class="team">
                  <div
                    class="team-logo"
                    :style="{ backgroundColor: getTeamColor(match.Team1) }"
                  ></div>
                  <span class="team-name">{{ match.Team1 }}</span>
                </div>
                <div class="vs">VS</div>
                <div class="team">
                  <div
                    class="team-logo"
                    :style="{ backgroundColor: getTeamColor(match.Team2) }"
                  ></div>
                  <span class="team-name">{{ match.Team2 }}</span>
                </div>
              </div>

              <div class="match-details">
                <div class="detail-item">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#718096"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <rect
                      x="3"
                      y="4"
                      width="18"
                      height="18"
                      rx="2"
                      ry="2"
                    ></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                  <span>{{ formatDate(match.Date) }}</span>
                </div>

                <div class="detail-item">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#718096"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  <span>{{ match.Time }}</span>
                </div>

                <div class="detail-item">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#718096"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path
                      d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"
                    ></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <span>{{ match.Venue }}</span>
                </div>
              </div>

              <div class="match-actions">
                <button class="action-btn edit" @click="editMatch(match)">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#2196F3"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path
                      d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
                    ></path>
                    <path
                      d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"
                    ></path>
                  </svg>
                  Edit
                </button>
                <button
                  class="action-btn delete"
                  @click="deleteMatch(match.id)"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#F44336"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M3 6h18"></path>
                    <path
                      d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
                    ></path>
                  </svg>
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
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
const userInitial = computed(
  () => user.value?.email?.charAt(0).toUpperCase() || "U"
);

const currentDate = ref(
  new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })
);

const matches = ref([]);
const Team1 = ref("");
const Team2 = ref("");
const DateVal = ref("");
const Time = ref("");
const Venue = ref("");
const editingMatchId = ref(null);

onMounted(async () => {
  if (!user.value) {
    alert("You must log in first!");
    router.push("/");
  } else {
    const fsmResult = await fsmApi.sendTransition(
      user.value.id,
      "ScheduleMatch",
      {
        userId: user.value.id,
        email: user.value.Email,
      }
    );
    console.log("FSM State:", fsmResult.state);
  }

  const res = await fetch("http://localhost:4000/matches");
  matches.value = await res.json();
});

async function scheduleMatch() {
  const matchData = {
    Team1: Team1.value,
    Team2: Team2.value,
    Date: DateVal.value,
    Time: Time.value,
    Venue: Venue.value,
    user_id: user.value.id,
  };

  try {
    if (editingMatchId.value !== null) {
      const res = await fetch(
        `http://localhost:4000/matches/${editingMatchId.value}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(matchData),
        }
      );

      if (!res.ok) throw new Error("Update failed");

      const index = matches.value.findIndex(
        (m) => m.id === editingMatchId.value
      );
      if (index !== -1)
        matches.value[index] = { id: editingMatchId.value, ...matchData };

      alert("Match updated!");
      editingMatchId.value = null;

      await fsmApi.sendTransition(user.value.id, "Edit", {
        updatedMatch: matchData,
        editedBy: user.value.Email,
      });
    } else {
      const res = await fetch("http://localhost:4000/matches", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(matchData),
      });

      if (!res.ok) throw new Error("Creation failed");
      const created = await res.json();
      matches.value.push({ id: created.matchId, ...matchData });
      alert("Match scheduled!");

      await fsmApi.sendTransition(user.value.id, "ScheduleMatch", {
        createdMatch: created,
        scheduledBy: user.value.Email,
      });
    }

    Team1.value = Team2.value = DateVal.value = Time.value = Venue.value = "";
  } catch (err) {
    alert("Something went wrong.");
    console.error(err);
  }
}

function editMatch(match) {
  editingMatchId.value = match.id;
  Team1.value = match.Team1;
  Team2.value = match.Team2;
  DateVal.value = match.Date;
  Time.value = match.Time;
  Venue.value = match.Venue;

  fsmApi
    .sendTransition(user.value.id, "Edit", {
      matchId: match.id,
      editedBy: user.value.Email,
    })
    .then((fsmResult) => {
      console.log("FSM State:", fsmResult.state);
    });
}

async function deleteMatch(id) {
  if (!confirm("Are you sure you want to delete this match?")) return;

  try {
    const res = await fetch(`http://localhost:4000/matches/${id}`, {
      method: "DELETE",
    });

    if (!res.ok) throw new Error("Delete failed");
    matches.value = matches.value.filter((m) => m.id !== id);

    const fsmResult = await fsmApi.sendTransition(user.value.id, "Delete", {
      deletedMatchId: id,
      deletedBy: user.value.Email,
    });
    console.log("FSM State:", fsmResult.state);
  } catch (err) {
    console.error("Failed to delete match", err);
    alert("Error deleting match.");
  }
}

function getTeamColor(name) {
  const colors = [
    "#FF5722",
    "#2196F3",
    "#9C27B0",
    "#4CAF50",
    "#F44336",
    "#FFC107",
  ];
  return name ? colors[name.charCodeAt(0) % colors.length] : "#ccc";
}

function formatDate(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

async function logout() {
  if (user.value?.id) {
    try {
      const fsmResult = await fsmApi.sendTransition(user.value.id, "logout", {
        userId: user.value.id,
        email: user.value.Email,
      });
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

/* Main Content */
.main-content {
  flex: 1;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
}

.dashboard-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  gap: 1rem;
}

.dashboard-header h1 {
  font-size: 1.8rem;
  font-weight: 700;
  margin: 0;
  color: #2d3748;
}

.dashboard-header p {
  color: #718096;
  font-size: 1rem;
  margin: 0;
}

.date-display {
  display: flex;
  align-items: center;
  gap: 8px;
  background: white;
  padding: 0.6rem 1.2rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  font-weight: 500;
  color: #4a5568;
}

/* Match Scheduler */
.match-schedule-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

@media (max-width: 992px) {
  .match-schedule-container {
    grid-template-columns: 1fr;
  }
}

.schedule-card,
.upcoming-matches {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.card-header {
  border-bottom: 1px solid #e2e8f0;
  padding-bottom: 1rem;
  margin-bottom: 1.5rem;
}

.card-header h2 {
  font-size: 1.3rem;
  margin: 0;
  color: #2d3748;
}

.schedule-form {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-group label {
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: #4a5568;
  font-size: 0.95rem;
}

.form-group input {
  padding: 0.8rem;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  background: #f8fafc;
  font-size: 1rem;
}

.form-group input:focus {
  outline: none;
  border-color: #4caf50;
  box-shadow: 0 0 0 3px rgba(76, 175, 80, 0.1);
}

.submit-btn {
  background: #4caf50;
  color: white;
  border: none;
  padding: 0.9rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-top: 0.5rem;
}

.submit-btn:hover {
  background: #3e8e41;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* Upcoming Matches */
.match-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.match-card {
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  padding: 1.2rem;
  transition: all 0.3s ease;
}

.match-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
}

.match-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.team {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  flex: 1;
}

.team:first-child {
  justify-content: flex-end;
}

.team-logo {
  width: 30px;
  height: 30px;
  border-radius: 50%;
}

.team-name {
  font-weight: 600;
  color: #2d3748;
}

.vs {
  font-weight: 700;
  color: #718096;
  padding: 0 1rem;
}

.match-details {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-bottom: 1rem;
  padding: 0.8rem 0;
  border-top: 1px solid #f1f5f9;
  border-bottom: 1px solid #f1f5f9;
}

.detail-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: #4a5568;
}

.match-actions {
  display: flex;
  justify-content: flex-end;
  gap: 0.8rem;
}

.action-btn {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 0.4rem 0.8rem;
  border-radius: 6px;
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.2s ease;
}

.action-btn.edit {
  background: rgba(33, 150, 243, 0.1);
  border: 1px solid rgba(33, 150, 243, 0.2);
  color: #2196f3;
}

.action-btn.edit:hover {
  background: rgba(33, 150, 243, 0.2);
}

.action-btn.delete {
  background: rgba(244, 67, 54, 0.1);
  border: 1px solid rgba(244, 67, 54, 0.2);
  color: #f44336;
}

.action-btn.delete:hover {
  background: rgba(244, 67, 54, 0.2);
}

.empty-state {
  text-align: center;
  padding: 3rem 0;
  color: #a0aec0;
}

.empty-state svg {
  margin-bottom: 1rem;
}

.empty-state p {
  margin: 0.3rem 0;
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
