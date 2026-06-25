SPA tracker direct photo upload uses a Google Apps Script web app plus a Google Drive folder.

Setup:
1. Create a Google Drive folder for workout proof photos.
2. Open Apps Script and create a new standalone project.
3. Paste in `Code.gs` and replace `PASTE_DRIVE_FOLDER_ID` with the Drive folder ID.
4. Set the manifest to match `appsscript.json`.
5. Deploy as a web app:
   - Execute as: `Me`
   - Who has access: `Anyone`
6. Copy the deployed web app URL into `upload-config.js` as `uploadUrl`.
7. Publish the tracker again.

Behavior:
- Players can take a photo directly from their phone camera or pick one from their camera roll.
- The page compresses the image client-side, posts it to Apps Script through a hidden iframe, and stores the public Drive link in the weekly payload.
- If the upload endpoint is unavailable, players can still paste an iCloud or Drive share link manually.
