# Our Spots: setup

A shared map of places you and your girlfriend want to go. It runs free on GitHub Pages and uses Firebase (Google's free tier) to sync spots between your phones. Only the two Google accounts you list can see or edit anything.

Setup takes about 20 minutes, and you only do it once.

---

## 1. Put it on GitHub Pages (5 min)

1. On GitHub, create a new **public** repository named `our-spots`. (Free GitHub Pages sites need a public repo. Your spots stay private because they live in Firebase, not in the repo.)
2. Upload every file from this folder: `index.html`, `config.js`, `firestore.rules`, `manifest.json`, `icon.png`, `SETUP.md`.
3. Open **Settings → Pages**. Under *Build and deployment*, choose **Deploy from a branch**, then pick **main** and **/ (root)**, and click Save.
4. In a minute or two it's live at **https://cuyler-infosys.github.io/our-spots/**

At this point it runs in **demo mode**, with example pins and spots saved only in your browser. Try it before moving on.

## 2. Create a Firebase project (3 min)

1. Go to **https://console.firebase.google.com** and sign in with your Google account.
2. Click **Create a project** and name it something like `our-spots`. You can turn Google Analytics off.
3. Stay on the free **Spark** plan. You don't need a credit card.

## 3. Turn on Google sign-in (3 min)

1. In the left menu, open **Build → Authentication → Get started**.
2. Under **Sign-in method**, choose **Google**, switch it to **Enable**, pick a support email, and click **Save**.
3. Open the **Settings** tab, then **Authorized domains → Add domain**, and add:
   `cuyler-infosys.github.io`

## 4. Create the database and lock it down (5 min)

1. Open **Build → Firestore Database → Create database**.
2. Pick a location close to you, such as `us-west1 (Oregon)`. You can't change this later.
3. Choose **Start in production mode**.
4. Open the **Rules** tab. Replace everything there with the contents of `firestore.rules`, putting **your two Gmail addresses** where the placeholders are. Click **Publish**.

   This step is what keeps your map private. Anyone else who signs in gets turned away.

## 5. Connect the app to Firebase (3 min)

1. Click the gear icon, then **Project settings**. Under *Your apps*, click the web icon **`</>`**.
2. Enter an app nickname (you can skip Hosting) and click **Register app**.
3. Firebase shows a `firebaseConfig = { ... }` block. Copy those values into `config.js` on GitHub (open the file, click the pencil icon to edit, paste, then **Commit changes**).

   These values are safe to put in a public repo. They only identify your project, and the rules from step 4 control who can get in.

4. Give it a minute to redeploy, then reload the site. You'll see **Sign in with Google**, and after that your map starts out empty and ready for spots.

## 6. Put it on both phones

Open the link on each phone and sign in.
- **iPhone (Safari):** tap Share, then **Add to Home Screen**.
- **Android (Chrome):** tap ⋮, then **Add to Home screen**.

It opens like an app, and anything either of you adds shows up on the other phone right away.

---

## Using it

- **Add spot:** search for a place by name or address, drop a pin on the map, or paste a Google Maps link from a computer (the long kind with `@47.6,-122.3` in it).
- **Tap a pin** to get directions, open the place in Google Maps, mark it as been, edit it, or delete it.
- **Filters:** switch between *Want to go* and *Been*, and tap categories to narrow the list.
- **Link field:** paste the TikTok or Instagram post where you found the place, so you can find it again.

## Good to know

- Place search uses OpenStreetMap, which is free but doesn't list every small business. If a place doesn't show up, add the city to your search ("Stumptown Portland") or drop a pin.
- Short share links from the Google Maps app (`maps.app.goo.gl/...`) don't include coordinates, so search by name for those.
- Firebase's free tier allows 50,000 reads and 20,000 writes a day. Two people won't get anywhere near that.
- To change the name at the top, edit `appTitle` in `config.js`.
