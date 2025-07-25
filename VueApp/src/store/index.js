
import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      currentUser: JSON.parse(localStorage.getItem("currentUser")) || null
    };
  },
  mutations: {
    setUser(state, user) {
      state.currentUser = user;
      localStorage.setItem("currentUser", JSON.stringify(user)); 
    },
    logout(state) {
      state.currentUser = null;
      localStorage.removeItem("currentUser");
    }
  },
  
  getters: {
    isAuthenticated(state) {
      return !!state.currentUser;
    },
    getUser(state) {
      return state.currentUser;
    }
  }
});

