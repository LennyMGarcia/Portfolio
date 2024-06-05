import { create } from "zustand";
import { persist } from "zustand/middleware";

type ThemeState = {
  themeMode: string;
  setThemeMode: (mode: string) => void;
};

const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      themeMode: 'dark', 
      setThemeMode: (mode: string) => set({ themeMode: mode }),
    }),
    {
      name: "theme-storage",
      getStorage: () => localStorage, 
    }
  )
);

export default useThemeStore;


