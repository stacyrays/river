"use client";
import { create } from "zustand";

const useMenuStore = create((set) => ({
  isOpen: false,
  setIsOpen: () => set((state: any) => ({ isOpen: !state.isOpen })),
}));
  
export default useMenuStore; 