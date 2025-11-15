import { create } from "zustand"

export const useSidebarStore = create((set) => ({
    isOpen: true,
    setIsOpen: (value) => set({ isOpen: value }),
    toggleIsOpen: () => set((state) => ({ isOpen: !state.isOpen }))
}))