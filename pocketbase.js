import PocketBase from "pocketbase";

export const pb = new PocketBase(`${import.meta.env.VITE_API_URL}`);

export const logout = () => {
  pb.authStore.clear();
  if (!pb.authStore.isValid) {
    window.location.replace("/register/login.html");
  }
};


