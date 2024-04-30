import { create } from "zustand";

interface AppState {
  mode: "light" | "dark";
  toggleMode: () => void;
}

const useAppStore = create<AppState>()((set) => ({
  mode: "light",
  toggleMode: () =>
    set((state) => ({
      ...state,
      mode: state.mode === "dark" ? "light" : "dark",
    })),
}));

export { useAppStore };
