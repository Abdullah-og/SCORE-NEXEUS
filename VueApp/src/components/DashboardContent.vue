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
        <RouterLink to="/dashboard" class="active">
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
          <h1>Welcome, <span>Admin</span></h1>
          <p>Your cricket management dashboard</p>
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

      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-content">
            <div
              class="stat-icon"
              style="background-color: rgba(76, 175, 80, 0.2)"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#4CAF50"
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
            <div class="stat-info">
              <h3>{{ topPlayers.length }}</h3>
              <p>Players has been Added Recently</p>
            </div>
          </div>
          <div class="stat-trend">
            <span>↑ Players</span>
          </div>
        </div>

        <div class="stat-card">
          <div class="stat-content">
            <div
              class="stat-icon"
              style="background-color: rgba(33, 150, 243, 0.2)"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#2196F3"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
            </div>
            <div class="stat-info">
              <h3>{{ upcomingMatches.length }}</h3>
              <p>Upcoming Matches</p>
            </div>
          </div>
          <div class="stat-trend">
            <span v-if="upcomingMatches.length"
              >Next: {{ upcomingMatches[0].Date }}</span
            >
            <span v-else>No matches</span>
          </div>
        </div>

        <div class="stat-card">
          <div class="stat-content">
            <div
              class="stat-icon"
              style="background-color: rgba(255, 152, 0, 0.2)"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#FF9800"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
            </div>
            <div class="stat-info">
              <h3>{{ recentActivities.length }}</h3>
              <p>Recent Activities</p>
            </div>
          </div>
          <div class="stat-trend">
            <span>{{ recentActivities.length }} updates today</span>
          </div>
        </div>

        <div class="stat-card">
          <div class="stat-content">
            <div
              class="stat-icon"
              style="background-color: rgba(156, 39, 176, 0.2)"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#9C27B0"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
                <path d="M22 12A10 10 0 0 0 12 2v10z"></path>
              </svg>
            </div>
            <div class="stat-info">
              <h3>94%</h3>
              <p>System Performance</p>
            </div>
          </div>
          <div class="stat-trend">
            <span>Optimal</span>
          </div>
        </div>
      </div>

      <div class="content-grid">
        <div class="content-card">
          <div class="card-header">
            <h2>Upcoming Matches</h2>
          </div>
          <div class="matches-list">
            <div
              class="match-item"
              v-for="match in upcomingMatches"
              :key="match.id"
            >
              <div class="match-teams">
                <div class="team">
                  <div
                    class="team-logo"
                    :style="{ backgroundColor: match.Team1.color }"
                  ></div>
                  <span>{{ match.Team1.name }}</span>
                </div>
                <div class="vs">VS</div>
                <div class="team">
                  <div
                    class="team-logo"
                    :style="{ backgroundColor: match.Team2.color }"
                  ></div>
                  <span>{{ match.Team2.name }}</span>
                </div>
              </div>
              <div class="match-info">
                <div class="match-date">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#666"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  <span>{{ match.Date }}</span>
                </div>
                <div class="match-location">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#666"
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
            </div>
          </div>
        </div>

        <div class="content-card">
          <div class="card-header">
            <h2>Recent Activities</h2>
          </div>
          <div class="activities-list">
            <div
              class="activity-item"
              v-for="activity in recentActivities"
              :key="activity.id"
            >
              <div
                class="activity-icon"
                :style="{ backgroundColor: activity.color }"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#fff"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <div class="activity-details">
                <h3>{{ activity.title }}</h3>
                <p>{{ activity.description }}</p>
                <span>{{ activity.Time }}</span>
              </div>
            </div>
          </div>
        </div>

        <div class="content-card">
          <div class="card-header">
            <h2>Recent Added Players</h2>
          </div>
          <div class="players-list">
            <div
              class="player-item"
              v-for="player in topPlayers"
              :key="player.id"
            >
              <div class="player-rank">{{ player.rank }}</div>
              <div class="player-avatar">
                <img :src="player.avatar" alt="Player Avatar" />
              </div>
              <div class="player-info">
                <h3>{{ player.playerName }}</h3>
                <p>{{ player.playerRole }}</p>
              </div>
              <div class="player-stats">
                <div class="stat">
                  <span>Runs</span>
                  <strong>{{ player.runs }}</strong>
                </div>
                <div class="stat">
                  <span>Avg</span>
                  <strong>{{ player.avg }}</strong>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="content-card quick-actions">
          <div class="card-header">
            <h2>Quick Actions</h2>
          </div>
          <div class="actions-grid">
            <RouterLink to="/add-player" class="action-btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#4CAF50"
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
            <RouterLink to="/schedule" class="action-btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#2196F3"
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

            <RouterLink to="/about" class="action-btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#FF9800"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
              <span>Add Match</span>
            </RouterLink>
            <RouterLink to="/about" class="action-btn">
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
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
<script setup>
import { computed, ref, onMounted } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { fsmApi } from "@/api.js";

const store = useStore();
const router = useRouter();

const user = computed(() => store.state.currentUser);

const userInitial = computed(() => {
  return user.value?.email ? user.value.email.charAt(0).toUpperCase() : "U";
});

const currentDate = ref("");
const upcomingMatches = ref([]);
const recentActivities = ref([]);
const topPlayers = ref([]);

function formatCurrentDate() {
  return new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function getCurrentTime() {
  return new Date().toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
}

function getTeamColor(teamName) {
  const colors = [
    "#FF5722",
    "#2196F3",
    "#9C27B0",
    "#4CAF50",
    "#F44336",
    "#FFC107",
  ];

  if (!teamName || typeof teamName !== "string") {
    return "#9E9E9E";
  }

  const index = teamName.charCodeAt(0) % colors.length;
  return colors[index];
}

function formatDate(dateString) {
  const dateObj = new Date(dateString);
  return dateObj.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  role;
}

onMounted(async () => {
  if (!user.value) {
    alert("You must log in first!");
    router.push("/");
    return;
  }

  currentDate.value = formatCurrentDate();

  try {
    const playerRes = await fetch("http://localhost:4000/players");
    const players = await playerRes.json();

    const sorted = players.slice(0, 4);

    topPlayers.value = sorted.map((p, i) => ({
      id: p.id,
      playerName: p.playerName,
      playerRole: p.playerRole,
      runs: 0,
      avg: 0,
      rank: i + 1,
      avatar:
        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTAiLz48cGF0aCBkPSJNMTYgMTJjMCAxLjY1Ny0xLjc5IDMtNCAzczQtMS4zNDMgNC0zIi8+PC9zdmc+",
    }));

    const latestPlayer = players[players.length - 1];

    const baseActivities = [];

    if (latestPlayer) {
      baseActivities.push({
        id: 1,
        title: "Player Added",
        description: `${latestPlayer.playerName} added to the team`,
        Time: getCurrentTime(),
        color: "#4CAF50",
      });
    }

    const matchRes = await fetch("http://localhost:4000/matches");
    const matchData = await matchRes.json();

    const now = new Date();

    const upcoming = matchData
      .map((match) => {
        const matchDateTime = new Date(`${match.Date}T${match.Time}`);
        return {
          id: match.id,
          Team1: { name: match.Team1, color: getTeamColor(match.Team1) },
          Team2: { name: match.Team2, color: getTeamColor(match.Team2) },
          dateTime: matchDateTime,
          Date: `${formatDate(match.Date)}, ${match.Time}`,
          Venue: match.Venue,
        };
      })
      .filter((match) => match.dateTime > now)
      .sort((a, b) => a.dateTime - b.dateTime);

    upcomingMatches.value = upcoming;

    const latestMatch = matchData[matchData.length - 1];

    if (latestMatch) {
      baseActivities.push({
        id: 2,
        title: "Match Scheduled",
        description: `${latestMatch.Team1} vs ${latestMatch.Team2} scheduled`,
        time: getCurrentTime(),
        color: "#2196F3",
      });
    }

    baseActivities.push({
      id: 3,
      title: "Stats Updated",
      description: "Player statistics updated",
      time: getCurrentTime(),
      color: "#FF9800",
    });

    recentActivities.value = baseActivities;
  } catch (err) {
    console.error("Dashboard data fetch failed:", err);
    alert("Failed to load dashboard data.");
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.header-left h1 {
  font-size: 1.8rem;
  font-weight: 700;
  margin: 0 0 0.5rem 0;
  color: #2d3748;
}

.header-left h1 span {
  color: #4caf50;
}

.header-left p {
  color: #718096;
  font-size: 1rem;
  margin: 0;
}

.header-right {
  display: flex;
  align-items: center;
  gap: 20px;
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

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.stat-card {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border-left: 4px solid #4caf50;
}

.stat-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
}

.stat-content {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.stat-icon {
  width: 50px;
  height: 50px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
}

.stat-info h3 {
  font-size: 1.8rem;
  font-weight: 700;
  margin: 0;
  color: #2d3748;
}

.stat-info p {
  margin: 0;
  color: #718096;
  font-size: 0.9rem;
}

.stat-trend {
  padding-top: 0.5rem;
  border-top: 1px solid #edf2f7;
  font-size: 0.85rem;
  color: #4caf50;
  font-weight: 500;
}

.content-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 1.5rem;
}

.content-card {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.content-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.card-header h2 {
  font-size: 1.3rem;
  margin: 0;
  color: #2d3748;
}

.card-header button {
  background: transparent;
  border: none;
  color: #4caf50;
  font-weight: 600;
  cursor: pointer;
  padding: 0.5rem 0.8rem;
  border-radius: 6px;
}

.card-header button:hover {
  background: rgba(76, 175, 80, 0.1);
}

.matches-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.match-item {
  padding: 1rem;
  border-radius: 8px;
  background: #f8fafc;
  border: 1px solid #edf2f7;
}

.match-teams {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.8rem;
}

.team {
  display: flex;
  align-items: center;
  gap: 10px;
  flex: 1;
}

.team:first-child {
  justify-content: flex-end;
}

.team:last-child {
  justify-content: flex-start;
}

.team-logo {
  width: 30px;
  height: 30px;
  border-radius: 50%;
}

.vs {
  font-weight: 700;
  color: #718096;
  padding: 0 1rem;
}

.match-info {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  font-size: 0.9rem;
  color: #718096;
}

.match-date,
.match-location {
  display: flex;
  align-items: center;
  gap: 6px;
}

.activities-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.activity-item {
  display: flex;
  gap: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #edf2f7;
}

.activity-item:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

.activity-icon {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.activity-details h3 {
  font-size: 1rem;
  margin: 0 0 0.2rem 0;
  color: #2d3748;
}

.activity-details p {
  margin: 0 0 0.3rem 0;
  color: #718096;
  font-size: 0.9rem;
}

.activity-details span {
  font-size: 0.8rem;
  color: #a0aec0;
}

.players-list {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.player-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.8rem;
  border-radius: 8px;
  background: #f8fafc;
}

.player-rank {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #4caf50;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  flex-shrink: 0;
}

.player-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  background: #2d3748;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  flex-shrink: 0;
}

.player-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.player-info {
  flex: 1;
}

.player-info h3 {
  font-size: 1rem;
  margin: 0 0 0.1rem 0;
}

.player-info p {
  margin: 0;
  font-size: 0.85rem;
  color: #718096;
}

.player-stats {
  display: flex;
  gap: 1rem;
}

.player-stats .stat {
  text-align: center;
}

.player-stats .stat span {
  display: block;
  font-size: 0.75rem;
  color: #a0aec0;
}

.player-stats .stat strong {
  font-size: 1rem;
  color: #2d3748;
}

.quick-actions .actions-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.action-btn {
  background: #f8fafc;
  border: 1px solid #edf2f7;
  border-radius: 10px;
  padding: 1.5rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
}

.action-btn:hover {
  background: white;
  transform: translateY(-3px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
  border-color: #e2e8f0;
}

.action-btn span {
  font-weight: 500;
  color: #2d3748;
}

@media (max-width: 992px) {
  .sidebar {
    width: 220px;
  }

  .content-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .dashboard-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }

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
