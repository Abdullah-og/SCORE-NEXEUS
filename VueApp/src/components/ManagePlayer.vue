<template>
  <div class="dashboard-layout">
    <!-- Fixed Sidebar -->
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
          <strong>{{ user?.email }}</strong>
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
        <RouterLink to="/dashboard/manage-players" class="active">
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
          <h1>Manage Players</h1>
          <p>View, edit, and delete players in your system</p>
        </div>
        <div class="header-right">
          <div class="search-box">
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Search players..."
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#718096"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </div>
        </div>
      </div>

      <div class="player-management">
        <div class="table-header">
          <div class="total-players">
            Showing {{ filteredPlayers.length }} of {{ players.length }} players
          </div>
          <div class="table-actions">
            <button @click="refreshPlayers" class="refresh-btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#4CAF50"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38" />
              </svg>
              Refresh
            </button>
          </div>
        </div>

        <div class="players-table">
          <div class="table-row header">
            <div class="table-cell">Player</div>
            <div class="table-cell">Role</div>
            <div class="table-cell">Team</div>
            <div class="table-cell">Status</div>
            <div class="table-cell">Actions</div>
          </div>

          <div
            v-for="player in filteredPlayers"
            :key="player.id"
            class="table-row"
          >
            <div class="table-cell player-info">
              <div class="player-avatar">
                <div class="avatar-placeholder">
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
                  </svg>
                </div>
              </div>
              <div>
                <div class="player-name">{{ player.name }}</div>
                <div class="player-id">ID: {{ player.id }}</div>
              </div>
            </div>
            <div class="table-cell">
              <div class="role-badge" :class="player.role.toLowerCase()">
                {{ player.role }}
              </div>
            </div>
            <div class="table-cell team-cell">
              <div
                class="team-logo"
                :style="{ backgroundColor: getTeamColor(player.team) }"
              ></div>
              <span>{{ player.team }}</span>
            </div>
            <div class="table-cell">
              <div class="status-badge active">Active</div>
            </div>
            <div class="table-cell actions-cell">
              <button @click="editPlayer(player)" class="edit-btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
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
              <button @click="deletePlayer(player.id)" class="delete-btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
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

      <div v-if="showEditModal" class="modal-overlay">
        <div class="edit-modal">
          <div class="modal-header">
            <h2>Edit Player</h2>
            <button @click="showEditModal = false" class="close-btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#718096"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          <div class="modal-body">
            <form @submit.prevent="updatePlayer">
              <div class="form-group">
                <label>Player Name</label>
                <input v-model="editingPlayer.name" type="text" required />
              </div>

              <div class="form-group">
                <label>Player Role</label>
                <select v-model="editingPlayer.role" required>
                  <option value="Batsman">Batsman</option>
                  <option value="Bowler">Bowler</option>
                  <option value="All-rounder">All-rounder</option>
                  <option value="Wicket-keeper">Wicket-keeper</option>
                </select>
              </div>

              <div class="form-group">
                <label>Team</label>
                <input v-model="editingPlayer.team" type="text" required />
              </div>

              <div class="form-actions">
                <button type="button" @click="cancelEdit" class="cancel-btn">
                  Cancel
                </button>
                <button type="submit" class="save-btn">Save Changes</button>
              </div>
            </form>
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
import axios from "axios";
import { fsmApi } from "@/api.js";

const store = useStore();
const router = useRouter();

const API_URL = "http://localhost:4000/players";

const user = computed(() => store.state.currentUser);
const userInitial = computed(() => {
  return user.value?.email ? user.value.email.charAt(0).toUpperCase() : "U";
});

const players = ref([]);
const searchQuery = ref("");
const showEditModal = ref(false);

editingPlayer: ref({
  playerName: "",
  playerRole: "",
  Team: "",
  BattingStyle: "",
  BowlingStyle: "",
  DateofBirth: "",
});

onMounted(async () => {
  if (!user.value) {
    alert("You must log in first!");
    router.push("/");
  } else {
    const fsmResult = await fsmApi.sendTransition(
      user.value.id,
      "ManagePlayer",
      {
        userId: user.value.id,
        email: user.value.email,
      }
    );
    console.log("FSM State:", fsmResult.state);
  }
  refreshPlayers();
});

async function refreshPlayers() {
  try {
    const res = await axios.get(API_URL);
    players.value = res.data;
  } catch (err) {
    console.error("Error fetching players:", err);
  }
}

const filteredPlayers = computed(() => {
  if (!searchQuery.value) return players.value;
  const query = searchQuery.value.toLowerCase();
  return players.value.filter(
    (player) =>
      player.name.toLowerCase().includes(query) ||
      player.role.toLowerCase().includes(query) ||
      player.team.toLowerCase().includes(query)
  );
});

function getTeamColor(teamName) {
  const colors = [
    "#FF5722",
    "#2196F3",
    "#9C27B0",
    "#4CAF50",
    "#F44336",
    "#FFC107",
  ];
  const index = teamName.charCodeAt(0) % colors.length;
  return colors[index];
}

async function editPlayer(player) {
  editingPlayer.value = { ...player };
  showEditModal.value = true;

  try {
    const fsmResult = await fsmApi.sendTransition(user.value.id, "Edit", {
      playerId: player.id,
      editor: user.value.email,
    });
    console.log("FSM State (after Edit clicked):", fsmResult.state);
  } catch (err) {
    console.error("FSM Edit transition failed:", err);
  }
}

async function updatePlayer() {
  try {
    await axios.put(
      `${API_URL}/${editingPlayer.value.id}`,
      editingPlayer.value
    );
    alert("Player updated successfully!");
    showEditModal.value = false;
    await refreshPlayers();

    const fsmResult = await fsmApi.sendTransition(
      user.value.id,
      "Savechanges",
      {
        updatedPlayerId: editingPlayer.value.id,
        editor: user.value.email,
      }
    );
    console.log("FSM State (after Save Changes):", fsmResult.state);
  } catch (err) {
    console.error("Update failed:", err);
    alert("Failed to update player!");
  }
}
async function cancelEdit() {
  showEditModal.value = false;

  try {
    const fsmResult = await fsmApi.sendTransition(user.value.id, "Cancel", {
      cancelledBy: user.value.email,
    });
    console.log("FSM State (after Cancel):", fsmResult.state);
  } catch (err) {
    console.error("FSM Cancel transition failed:", err);
  }
}

async function deletePlayer(playerId) {
  if (confirm("Are you sure you want to delete this player?")) {
    try {
      await axios.delete(`${API_URL}/${playerId}`);
      alert("Player deleted successfully!");
      await refreshPlayers();

      await fsmApi.sendTransition(user.value.id, "Delete", {
        deletedPlayerId: playerId,
        deletedBy: user.value.email,
      });
    } catch (err) {
      console.error("Delete failed:", err);
      alert("Failed to delete player!");
    }
  }
}

async function logout() {
  if (user.value?.id) {
    try {
      const fsmResult = await fsmApi.sendTransition(user.value.id, "logout", {
        userId: user.value.id,
        email: user.value.email,
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

.search-box {
  position: relative;
  min-width: 250px;
}

.search-box input {
  width: 75%;
  padding: 0.7rem 2.5rem 0.7rem 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  background: #f8fafc;
  font-size: 0.95rem;
}

.search-box svg {
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
}

.player-management {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.table-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.total-players {
  color: #718096;
  font-size: 0.95rem;
}

.table-actions {
  display: flex;
  gap: 0.8rem;
}

.refresh-btn {
  display: flex;
  align-items: center;
  gap: 6px;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  color: #4caf50;
  cursor: pointer;
  transition: all 0.2s ease;
}

.refresh-btn:hover {
  background: #e8f5e9;
}

/* Players Table */
.players-table {
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  overflow: hidden;
}

.table-row {
  display: grid;
  grid-template-columns: 3fr 2fr 2fr 1.5fr 2fr;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #e2e8f0;
}

.table-row.header {
  background: #f8fafc;
  font-weight: 600;
  color: #4a5568;
}

.table-cell {
  padding: 0.5rem;
}

.player-info {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.player-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #f8fafc;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.player-avatar .avatar-placeholder {
  width: 24px;
  height: 24px;
  color: #cbd5e0;
}

.player-name {
  font-weight: 600;
  color: #2d3748;
}

.player-id {
  font-size: 0.8rem;
  color: #718096;
}

.role-badge {
  display: inline-block;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
}

.role-badge.batsman {
  background: rgba(76, 175, 80, 0.15);
  color: #2e7d32;
}

.role-badge.bowler {
  background: rgba(33, 150, 243, 0.15);
  color: #0d47a1;
}

.role-badge.all-rounder {
  background: rgba(255, 152, 0, 0.15);
  color: #e65100;
}

.role-badge.wicket-keeper {
  background: rgba(156, 39, 176, 0.15);
  color: #4a148c;
}

.team-cell {
  display: flex;
  align-items: center;
  gap: 0.8rem;
}

.team-logo {
  width: 24px;
  height: 24px;
  border-radius: 50%;
}

.status-badge {
  display: inline-block;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
}

.status-badge.active {
  background: rgba(76, 175, 80, 0.15);
  color: #2e7d32;
}

.actions-cell {
  display: flex;
  gap: 0.5rem;
}

.edit-btn,
.delete-btn {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 0.4rem 0.8rem;
  border-radius: 6px;
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.2s ease;
}

.edit-btn {
  background: rgba(33, 150, 243, 0.1);
  border: 1px solid rgba(33, 150, 243, 0.2);
  color: #2196f3;
}

.edit-btn:hover {
  background: rgba(33, 150, 243, 0.2);
}

.delete-btn {
  background: rgba(244, 67, 54, 0.1);
  border: 1px solid rgba(244, 67, 54, 0.2);
  color: #f44336;
}

.delete-btn:hover {
  background: rgba(244, 67, 54, 0.2);
}

/* Edit Modal */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
}

.edit-modal {
  background: white;
  border-radius: 12px;
  width: 100%;
  max-width: 500px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  border-bottom: 1px solid #e2e8f0;
}

.modal-header h2 {
  margin: 0;
  font-size: 1.4rem;
  color: #2d3748;
}

.close-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
}

.modal-body {
  padding: 1.5rem;
}

.form-group {
  margin-bottom: 1.2rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #4a5568;
}

.form-group input,
.form-group select {
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  font-size: 1rem;
  background: #f8fafc;
}

.form-group input:focus,
.form-group select:focus {
  outline: none;
  border-color: #4caf50;
  box-shadow: 0 0 0 3px rgba(76, 175, 80, 0.1);
}

.form-actions {
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 1.5rem;
}

.cancel-btn,
.save-btn {
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.cancel-btn {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  color: #4a5568;
}

.cancel-btn:hover {
  background: #edf2f7;
}

.save-btn {
  background: #4caf50;
  border: none;
  color: white;
}

.save-btn:hover {
  background: #3e8e41;
}

/* Responsive Design */
@media (max-width: 992px) {
  .sidebar {
    width: 220px;
  }

  .table-row {
    grid-template-columns: 2fr 1.5fr 1.5fr 1.5fr 2fr;
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

  .dashboard-header {
    flex-direction: column;
    align-items: flex-start;
  }

  .table-row {
    grid-template-columns: 1fr;
    gap: 0.5rem;
    padding: 1rem;
    position: relative;
  }

  .actions-cell {
    position: absolute;
    right: 1rem;
    top: 1rem;
  }

  .player-info {
    margin-top: 1.5rem;
  }
}
</style>
