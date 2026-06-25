const UPLOAD_FOLDER_ID = "PASTE_DRIVE_FOLDER_ID";
const MAX_UPLOAD_BYTES = 8 * 1024 * 1024;
const MESSAGE_SOURCE = "spa-proof-upload";

function doGet() {
  return ContentService
    .createTextOutput(JSON.stringify({
      ok: true,
      service: "spa-proof-upload",
      configured: UPLOAD_FOLDER_ID !== "PASTE_DRIVE_FOLDER_ID"
    }))
    .setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  const params = e && e.parameter ? e.parameter : {};
  const requestId = params.requestId || "";
  const targetOrigin = normalizeTargetOrigin_(params.origin);

  try {
    if (UPLOAD_FOLDER_ID === "PASTE_DRIVE_FOLDER_ID") {
      throw new Error("Upload folder is not configured yet.");
    }

    const base64Data = (params.base64Data || "").replace(/\s+/g, "");
    if (!base64Data) {
      throw new Error("No photo data received.");
    }

    const bytes = Utilities.base64Decode(base64Data);
    if (bytes.length > MAX_UPLOAD_BYTES) {
      throw new Error("Photo is too large. Use a smaller image and try again.");
    }

    const mimeType = params.mimeType || "image/jpeg";
    const fileName = buildFileName_(params.fileName, params.playerName, params.week);
    const folder = DriveApp.getFolderById(UPLOAD_FOLDER_ID);
    const blob = Utilities.newBlob(bytes, mimeType, fileName);
    const file = folder.createFile(blob);
    file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);

    return buildPostMessagePage_(targetOrigin, {
      source: MESSAGE_SOURCE,
      status: "ok",
      requestId: requestId,
      imageUrl: "https://drive.google.com/file/d/" + file.getId() + "/view",
      previewUrl: "https://drive.google.com/uc?export=view&id=" + file.getId(),
      fileId: file.getId(),
      fileName: file.getName()
    });
  } catch (error) {
    return buildPostMessagePage_(targetOrigin, {
      source: MESSAGE_SOURCE,
      status: "error",
      requestId: requestId,
      message: error.message || "Upload failed."
    });
  }
}

function buildFileName_(requestedName, playerName, week) {
  const timestamp = Utilities.formatDate(new Date(), Session.getScriptTimeZone(), "yyyyMMdd-HHmmss");
  const baseName = sanitizeFileName_(requestedName || "spa-proof.jpg");
  const playerSlug = sanitizeFileName_(playerName || "player").replace(/\.[^.]+$/, "");
  const weekLabel = sanitizeFileName_("week-" + (week || "0")).replace(/\.[^.]+$/, "");
  return playerSlug + "-" + weekLabel + "-" + timestamp + "-" + baseName;
}

function sanitizeFileName_(name) {
  const cleaned = String(name || "")
    .replace(/[^a-zA-Z0-9._-]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
  return cleaned || "spa-proof.jpg";
}

function normalizeTargetOrigin_(origin) {
  if (!origin) return "*";
  if (origin === "*") return "*";
  return /^https?:\/\/[^/]+$/i.test(origin) ? origin : "*";
}

function buildPostMessagePage_(targetOrigin, payload) {
  const safePayload = JSON.stringify(payload).replace(/<\//g, "<\\/");
  const safeOrigin = JSON.stringify(targetOrigin || "*");
  const bodyText = payload.status === "ok"
    ? "Upload complete. You can close this window."
    : "Upload failed. Return to the tracker and try again.";

  return HtmlService.createHtmlOutput(
    "<!doctype html><html><body style=\"font-family:Arial,sans-serif;padding:16px;\">" +
      "<p>" + bodyText + "</p>" +
      "<script>" +
        "const payload=" + safePayload + ";" +
        "const targetOrigin=" + safeOrigin + ";" +
        "if (window.parent && window.parent !== window) {" +
          "window.parent.postMessage(payload, targetOrigin);" +
        "}" +
      "</script>" +
    "</body></html>"
  );
}
