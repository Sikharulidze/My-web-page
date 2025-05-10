import { create } from "zustand";

const lightDark = create((set) => ({
  dark: false,

  switchMode: () => set((state) => ({ dark: !state.dark })),
}));

export default lightDark;
