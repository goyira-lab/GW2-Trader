GW2 Trader PWA - GitHub Pages

Upload these files to the root of a GitHub repository:
- index.html
- manifest.json
- service-worker.js
- icons/

Then:
1. GitHub repository -> Settings -> Pages
2. Build and deployment: Deploy from a branch
3. Branch: main / root
4. Save
5. Open the published github.io URL on Android
6. Chrome menu -> Add to Home screen / Install app

The app shell is cached for offline opening, but live Trading Post data requires internet.

New in v2:
- Auto-refresh every 5, 10 or 15 minutes
- Countdown to next refresh
- Optional sound alert
- Browser notification alerts
Note: automatic refresh and sound/browser alerts work while the site/PWA is open.
True background push notifications when the app is fully closed require an external push backend/service.
