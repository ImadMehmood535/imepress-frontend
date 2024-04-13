import { create } from "zustand";

const isBrowser = typeof window !== "undefined";

const useUserStore = create((set) => {
  const storedUser = isBrowser
    ? JSON.parse(localStorage.getItem("user")) || null
    : null;

  return {
    user: storedUser,

    loginUser: (user) =>
      set(() => {
        if (isBrowser) {
          localStorage.setItem("user", JSON.stringify(user));
        }
        return { user };
      }),

    logoutUser: () =>
      set(() => {
        if (isBrowser) {
          localStorage.removeItem("user");
        }
        return { user: null };
      }),
  };
});

export default useUserStore;
