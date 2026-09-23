// ─────────────────────────────────────────────────────────────
//  Our Spots — settings
//  Paste your Firebase web config below (see SETUP.md, step 4).
//  While apiKey is empty, the app runs in demo mode: spots are
//  saved only in this browser and are not shared.
// ─────────────────────────────────────────────────────────────
 
export const firebaseConfig = {
  apiKey: "AIzaSyC3hsG_ee-ul0zVtR1qlNtxbu8UrQC84gg",
  authDomain: "our-spots-ae262.firebaseapp.com",
  projectId: "our-spots-ae262",
  storageBucket: "our-spots-ae262.firebasestorage.app",
  messagingSenderId: "963503833549",
  appId: "1:963503833549:web:7b3677f9cb22a755ef8484"
};
 
// Name shown at the top of the app.
export const appTitle = "Our Spots";
 
// Where the map opens before any spots exist: [latitude, longitude], zoom.
// This view covers Seattle down to Portland.
export const homeView = { center: [46.55, -122.45], zoom: 7 };
 
