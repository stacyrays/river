"use client";
import { create } from "zustand";


interface MenuState {
  isOpen: boolean;
}

interface MenuActions {
  setIsOpen: () => void;
}

const useMenuStore = create<MenuState & MenuActions>((set) => ({
  isOpen: false,
  setIsOpen: () => set((state) => ({ isOpen: !state.isOpen })),
}));
  
export default useMenuStore; 