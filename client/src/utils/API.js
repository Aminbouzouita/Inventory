import axios from "axios";
import {inventory} from "./mockData";

export default {
  
  // Gets the book with the given id
  getuser: function(username) {
    return axios.get("/api/user/" + username);
  },
  getUserbyId: function(id) {
    return axios.get("/api/inventory/user/" + id)
  },
  // Deletes the user with the given id
  deleteuser: function(id) {
    return axios.delete("/api/user/" + id);
  },
  signIn: function(userInfo) {
    return axios.post("/api/user/signin", userInfo)
  },
  validateUser: function(token){
    return axios.post("/api/user/validate", {token})
  },
  // Saves a user to the database
  saveuser: function(userData) {
    console.log(userData)
    return axios.post("/api/user/signup", userData);
  },
  // Save Inventory to a user
  saveinventory: function(inventoryData) {
    return axios.post("/api/inventory", inventoryData)
  },
  
  getInventory: function(id) {
    return axios.get("/api/inventory/" + id)
  },

  deleteInventory: function(id) {
    return axios.delete("/api/inventory/delete/" + id)
  },

  updateInventory: function(id, inventoryData) {
    return axios.put("/api/inventory/update/" + id, inventoryData)
  },
  // updateUser: function(id, userId) {
  //   console.log("id", id)
  //   console.log("userid", userId)
  //   return axios.put("/api/user/update" + userId, id)
  // }
};
