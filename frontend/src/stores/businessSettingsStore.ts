import { defineStore } from "pinia";
import type { BusinessSettings } from "../models/business";

interface BusinessSettingsState {
  settings: BusinessSettings | null;
  isLoaded: boolean;
}

export const useBusinessSettingsStore = defineStore("businessSettings", {
  state: (): BusinessSettingsState => ({
    settings: null,
    isLoaded: false,
  }),

  getters: {
    productionSlotsCount: (state) => state.settings?.productionSlotsCount ?? 0,
    deliveryTime: (state) => state.settings?.deliveryTime ?? 0,
  },

  actions: {
    // This will be called after we fetch /initial-data in Phase 2
    setSettings(settings: BusinessSettings) {
      this.settings = settings;
      this.isLoaded = true;
    },
  },
});
