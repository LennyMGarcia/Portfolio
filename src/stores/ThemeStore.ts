import { create } from "zustand";

type ThemeState = {
    themeMode: string;
    setThemeMode: (mode: string) => void;
  };

const useThemeStore = create<ThemeState>((set) => ({
    themeMode: 'dark', // fixed typo: "ligth" to "light"
    setThemeMode: (mode:string) => set({ themeMode: mode }),
  }));
  
  export default useThemeStore;
