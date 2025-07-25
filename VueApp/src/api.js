import axios from "axios";

const API_URL = "http://localhost:4000/fsm/machine";

export const fsmApi = {
  async sendTransition(key, transition, data = {}) {
    try {
      const response = await axios.post(API_URL, {
        key,        
        transition,  
        data        
      });
      return response.data;
    } catch (error) {
      if (error.response) {
        console.error("Error in FSM transition:", error.response.data);
      } else {
        console.error("Error in FSM transition:", error.message);
      }
      throw error;
    }
  }
};
