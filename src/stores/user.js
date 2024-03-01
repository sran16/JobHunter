
import { defineStore } from "pinia";

export const useStore = defineStore("store", {
  state: () => ({
    user: null,
  }),
    getters: {
        getUser() {
        return this.user;
        },
    },
    actions: {
        setUser(user) {
        this.user = user;
        },
    },
});
