import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCDWRx_VD-VG-BzNkMvCfH5KH1m3eELmuM",
  authDomain: "daily-english-vibes-76cb0.firebaseapp.com",
  projectId: "daily-english-vibes-76cb0",
  appId: "1:547934225783:web:761083a83caa0870b0cd72"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);