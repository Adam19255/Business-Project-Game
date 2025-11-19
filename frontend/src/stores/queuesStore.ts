import { defineStore } from "pinia";

export interface Queue {
  id: string;
  name: string;
  isOpen: boolean;
  customerIds: string[];
}

interface QueuesState {
  queues: Queue[];
}

export const useQueuesStore = defineStore("queues", {
  state: (): QueuesState => ({
    queues: [],
  }),

  getters: {
    getQueueById: (state) => {
      return (id: string) => state.queues.find((q) => q.id === id) || null;
    },
  },

  actions: {
    setQueues(queues: Queue[]) {
      this.queues = queues;
    },
  },
});
