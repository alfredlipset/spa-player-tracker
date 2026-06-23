const weeks = [
  {
    week: 1,
    dates: "June 15-21, 2026",
    phase: "Base Building",
    focus: "Base building: establish tempo, positions, and landing quality.",
    day1Speed: "6 x 10 yd starts + 3 x start-stop-start",
    day2Speed: "SL line hops 3 x 10s/side + lateral quickness drill 3 x 10s",
    strength: { iso: "2 x 20s/side", power: "3 x 3/side or 3 x 3", main: "3 x 8 @ tempo 4-1-1, RPE 6-7", accessory: "3 x 8 @ tempo 3-1-1", pull: "3 x 6-8", calf: "2 x 12/side", core: "2 x 20-25s or 6 reps/side", carry: "2 x 20 yd" },
    conditioning: [["Tue", "Tempo Run", "20 min comfortably hard", "Record distance covered"], ["Wed", "Recovery", "Mobility / stretch 15-20 min", "Check off only"], ["Thu", "Beep Shuttle Intro", "5 x 3 min continuous shuttles, 90s rest", "Track total sets completed"], ["Sat", "Easy Aerobic Run", "30 min easy", "Record total distance or route"], ["Sun", "Off", "Full rest", "Check off only"]]
  },
  {
    week: 2,
    dates: "June 22-28, 2026",
    phase: "Base Building",
    focus: "Base building: add volume without losing clean positions.",
    day1Speed: "6 x 10 yd starts + 4 x 5 yd decel/stick",
    day2Speed: "SL line hops 3 x 12s/side + lateral quickness drill 4 x 10s",
    strength: { iso: "2 x 25s/side", power: "3 x 4/side or 3 x 4", main: "4 x 8 @ tempo 3-1-1, RPE 6-7", accessory: "3 x 8-10 @ tempo 3-1-1", pull: "3 x 8", calf: "3 x 12/side", core: "2-3 x 25s or 6-8 reps/side", carry: "2-3 x 20 yd" },
    conditioning: [["Tue", "Tempo Run", "22 min comfortably hard", "Record distance covered"], ["Wed", "Recovery", "Mobility / stretch 15-20 min", "Check off only"], ["Thu", "Beep Shuttle Intro", "6 x 3 min shuttles, 90s rest", "Track total sets completed"], ["Sat", "Long Intervals", "4 x 800m, 2 min rest", "Record each split"], ["Sun", "Off", "Full rest", "Check off only"]]
  },
  {
    week: 3,
    dates: "June 29-July 5, 2026",
    phase: "Base Building",
    focus: "Base building: slightly faster work, same clean mechanics.",
    day1Speed: "8 x 10 yd starts + 4 x start-stop-start",
    day2Speed: "SL line hops 4 x 10s/side + lateral quickness drill 4 x 10s",
    strength: { iso: "3 x 25s/side", power: "4 x 3/side or 4 x 3", main: "4 x 6 @ tempo 3-1-1, RPE 7", accessory: "4 x 8 @ tempo 2-1-1", pull: "4 x 6-8", calf: "3 x 12-15/side", core: "3 x 25-30s or 8 reps/side", carry: "3 x 20 yd" },
    conditioning: [["Tue", "Tempo Run", "24 min comfortably hard", "Record distance covered"], ["Wed", "Recovery", "Mobility / stretch 15-20 min", "Check off only"], ["Thu", "Beep Shuttle Intro", "6 x 3 min shuttles, slightly faster, 90s rest", "Track total sets completed"], ["Sat", "Easy Aerobic Run", "35 min easy", "Record total distance or route"], ["Sun", "Off", "Full rest", "Check off only"]]
  },
  {
    week: 4,
    dates: "July 6-12, 2026",
    phase: "Build",
    focus: "Build: transition from base volume to stronger, sharper work.",
    day1Speed: "6 x 10 yd starts + 4 x 10 yd decel/re-accel",
    day2Speed: "Lateral drill 4 x 12s + reaction quickness 3 x 12s",
    strength: { iso: "3 x 30s/side", power: "4 x 3/side or 4 x 3", main: "4 x 6 @ tempo 2-1-1, RPE 7-8", accessory: "4 x 6-8 @ tempo 2-0-1", pull: "4 x 6-8", calf: "3 x 12/side", core: "3 x 30s or 8 reps/side", carry: "3 x 25 yd" },
    conditioning: [["Tue", "Ladder Intervals", "400m, 800m, 1200m, 800m, 400m; rest = work", "Record each split"], ["Wed", "Recovery", "Mobility / stretch 15-20 min", "Check off only"], ["Thu", "30-30 Drill", "2 blocks of 6 reps; 30s on / 30s off; 3 min between blocks", "Track completed reps"], ["Sat", "Fartlek Run", "25 min speed play", "Record route and feel"], ["Sun", "Off", "Full rest", "Check off only"]]
  },
  {
    week: 5,
    dates: "July 13-19, 2026",
    phase: "Build",
    focus: "Build: heavier loading with controlled volume and sharper field work.",
    day1Speed: "6 x 15 yd starts + 4 x reaction starts",
    day2Speed: "Lateral drill 4 x 12s + reaction quickness 4 x 12s",
    strength: { iso: "3 x 30s/side", power: "4 x 3/side or 4 x 3", main: "4 x 5 @ tempo 2-0-1, RPE 7-8", accessory: "4 x 6 @ controlled tempo", pull: "4 x 5-6", calf: "3 x 10-12/side", core: "3 x 25-30s or 8 reps/side", carry: "3 x 25 yd" },
    conditioning: [["Tue", "Long Intervals", "4 x 800m, 2 min rest, faster than Week 2", "Record each split"], ["Wed", "Recovery", "Mobility / stretch 15-20 min", "Check off only"], ["Thu", "30-30 Drill", "2 blocks of 8 reps; 30s on / 30s off; 3 min between blocks", "Track completed reps"], ["Sat", "Easy Aerobic Run", "35-40 min easy", "Record distance or route"], ["Sun", "Off", "Full rest", "Check off only"]]
  },
  {
    week: 6,
    dates: "July 20-26, 2026",
    phase: "Build",
    focus: "Build: keep intent high, load slightly up, avoid junk fatigue.",
    day1Speed: "8 x 15 yd starts + 4 x decel/re-accel",
    day2Speed: "Lateral drill 4 x 12s + reaction quickness 4 x 12s",
    strength: { iso: "3 x 35s/side", power: "4 x 3/side or 4 x 3", main: "4 x 5 @ controlled eccentric, RPE 8", accessory: "4 x 5-6", pull: "4 x 5-6", calf: "3 x 10-12/side", core: "3 x 30s or 8-10 reps/side", carry: "3 x 25 yd" },
    conditioning: [["Tue", "Ladder Intervals", "400m, 800m, 1200m, 800m, 400m; faster than Week 4", "Record each split"], ["Wed", "Recovery", "Mobility / stretch 15-20 min", "Check off only"], ["Thu", "30-30 Drill", "2 blocks of 8 reps; sharper turns", "Track completed reps"], ["Sat", "Fartlek Run", "30 min speed play", "Record route and feel"], ["Sun", "Off", "Full rest", "Check off only"]]
  },
  {
    week: 7,
    dates: "July 27-August 2, 2026",
    phase: "Power / Peak Tolerance",
    focus: "Power: lower volume, faster intent, practice test-quality efforts.",
    day1Speed: "6 x 10 yd competitive starts + 4 x 15 yd accelerations",
    day2Speed: "Quickness ladder or line hops 4 x 8-10s + reactive lateral drill 4 x 8-10s",
    strength: { iso: "2 x 25s/side", power: "4 x 2-3/side or 4 x 2-3", main: "4 x 4 explosive, RPE 7-8", accessory: "3 x 5-6", pull: "3 x 5-6", calf: "2-3 x 10/side", core: "2-3 x 20-25s or 6 reps/side", carry: "2-3 x 20 yd" },
    conditioning: [["Tue", "Short HIIT", "8 x 200m @ 90%, 60s rest", "Record each split"], ["Wed", "Recovery", "Mobility / stretch 15-20 min", "Check off only"], ["Thu", "Full Beep Test Simulation", "Run mock test and stop after 2 missed beeps", "Record level reached"], ["Sat", "Soccer Shuttles", "4 rounds: 5m, 10m, 15m, 20m and back; 2 min rest", "Record round times"], ["Sun", "Off", "Full rest", "Check off only"]]
  },
  {
    week: 8,
    dates: "August 3-9, 2026",
    phase: "Power / Peak Tolerance",
    focus: "Power: maintain strength, sharpen speed, stay fresh enough to perform.",
    day1Speed: "6 x 10 yd sharp starts, full recovery",
    day2Speed: "Quickness ladder or line hops 4 x 8s + reactive lateral drill 4 x 8s",
    strength: { iso: "2 x 20s/side", power: "3 x 2-3/side or 3 x 2-3", main: "3 x 3-4 explosive, RPE 7", accessory: "3 x 5", pull: "3 x 4-5", calf: "2 x 10/side", core: "2 x 20s or 5-6 reps/side", carry: "2 x 20 yd" },
    conditioning: [["Tue", "Short HIIT", "10 x 200m @ 90%, 60s rest", "Record each split"], ["Wed", "Recovery", "Mobility / stretch 15-20 min", "Check off only"], ["Thu", "Mini Beep or Full Simulation", "Stop 1 level before failure", "Record level reached"], ["Sat", "Soccer Shuttles", "5 rounds: 5m, 10m, 15m, 20m and back; 2 min rest", "Record round times"], ["Sun", "Off", "Full rest", "Check off only"]]
  },
  {
    week: 9,
    dates: "August 10-16, 2026",
    phase: "Taper",
    focus: "Taper: stay sharp, reduce fatigue, finish on Friday August 14.",
    day1Speed: "4 x 10 yd starts, crisp only, full recovery",
    day2Speed: "Quickness drill 3 x 8s each, low fatigue",
    strength: { iso: "1-2 x 20s/side", power: "2 x 2/side or 2 x 2", main: "2 x 3 easy and crisp, RPE 5-6", accessory: "2 x 5 easy and clean", pull: "2 x 4-5", calf: "1-2 x 8-10/side", core: "1-2 x 15-20s or 4-5 reps/side", carry: "1-2 x 15-20 yd" },
    conditioning: [["Tue", "Mini Beep Test", "Stop at target level; do not hit failure", "Record level reached"], ["Wed", "Off", "No training", "Check off only"], ["Thu", "Flush Run", "15 min easy + 4-5 relaxed 50m strides", "Record how legs felt"], ["Sat", "Off", "Full rest", "Check off only"], ["Sun", "Off", "Full rest; season starts Monday Aug 17", "Check off only"]]
  }
];

const storageKey = "spa-player-tracker-v1";
const fallbackFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSe4cWpH9Htqx0InTRLvjx8AGlShH8YoPYQ0O0TvAZK4nh_Qfw/viewform";
const formResponseUrl = "https://docs.google.com/forms/d/e/1FAIpQLSe4cWpH9Htqx0InTRLvjx8AGlShH8YoPYQ0O0TvAZK4nh_Qfw/formResponse";
const playerNameEntry = "entry.266055319";
const submissionJsonEntry = "entry.781875227";
const playerNameEl = document.getElementById("playerName");
const weekSelectEl = document.getElementById("weekSelect");
const playerPositionEl = document.getElementById("playerPosition");
const playerGoalEl = document.getElementById("playerGoal");
const playerNotesEl = document.getElementById("playerNotes");
const weekTitleEl = document.getElementById("weekTitle");
const weekMetaEl = document.getElementById("weekMeta");
const weekFocusEl = document.getElementById("weekFocus");
const progressFillEl = document.getElementById("progressFill");
const progressTextEl = document.getElementById("progressText");
const completedCountEl = document.getElementById("completedCount");
const remainingCountEl = document.getElementById("remainingCount");
const sessionCountEl = document.getElementById("sessionCount");
const sessionsEl = document.getElementById("sessions");
const submitStatusEl = document.getElementById("submitStatus");
const submitWeekButtonEl = document.getElementById("submitWeek");
const toastEl = document.getElementById("toast");
const submitTimeoutMs = 15000;

const state = loadState();
let isSubmitting = false;
let lastSubmissionPayload = null;

function loadState() {
  try {
    const raw = localStorage.getItem(storageKey);
    if (raw) {
      const parsed = JSON.parse(raw);
      return {
        playerName: "",
        playerPosition: "field",
        playerGoal: "",
        playerNotes: "",
        selectedWeek: 1,
        entries: {},
        submissions: {},
        ...parsed
      };
    }
  } catch (_) {}
  return { playerName: "", playerPosition: "field", playerGoal: "", playerNotes: "", selectedWeek: 1, entries: {}, submissions: {} };
}

function saveState(showToast = true) {
  localStorage.setItem(storageKey, JSON.stringify(state));
  if (showToast) flashToast("Saved");
}

function flashToast(message) {
  toastEl.textContent = message;
  toastEl.classList.add("show");
  clearTimeout(flashToast.timer);
  flashToast.timer = setTimeout(() => toastEl.classList.remove("show"), 1200);
}

function setSubmitButtonState(busy) {
  isSubmitting = busy;
  submitWeekButtonEl.disabled = busy;
  submitWeekButtonEl.textContent = busy ? "Submitting..." : "Submit Week to Coach Sheet";
}

function createSubmissionReceipt(weekNum) {
  const random = Math.random().toString(36).slice(2, 8).toUpperCase();
  return `SPA-W${weekNum}-${random}`;
}

function selectedWeek() {
  return weeks.find((item) => item.week === Number(state.selectedWeek)) || weeks[0];
}

function buildPrefilledFallbackFormUrl(payload = null) {
  const params = new URLSearchParams();
  const playerName = (state.playerName || "").trim();
  if (playerName) {
    params.set(playerNameEntry, playerName);
  }
  if (payload) {
    params.set(submissionJsonEntry, JSON.stringify(payload));
  }
  const query = params.toString();
  return query ? `${fallbackFormUrl}?usp=pp_url&${query}` : fallbackFormUrl;
}

async function createSubmitFrame() {
  const iframe = document.createElement("iframe");
  iframe.name = `submit-frame-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
  iframe.hidden = true;
  iframe.tabIndex = -1;
  iframe.setAttribute("aria-hidden", "true");

  const ready = new Promise((resolve, reject) => {
    iframe.addEventListener("load", () => resolve(iframe), { once: true });
    iframe.addEventListener("error", () => reject(new Error("Could not initialize submission frame")), { once: true });
  });

  document.body.appendChild(iframe);
  iframe.src = "about:blank";
  return ready;
}

async function submitWithHiddenForm(fields, timeoutMs = submitTimeoutMs) {
  const iframe = await createSubmitFrame();

  return new Promise((resolve, reject) => {
    const form = document.createElement("form");
    form.action = formResponseUrl;
    form.method = "POST";
    form.target = iframe.name;
    form.acceptCharset = "UTF-8";
    form.style.display = "none";

    Object.entries(fields).forEach(([name, value]) => {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = name;
      input.value = value;
      form.appendChild(input);
    });

    let settled = false;
    const timeoutId = window.setTimeout(() => {
      cleanup();
      reject(new Error("Timed out waiting for Google confirmation"));
    }, timeoutMs);

    function cleanup() {
      if (settled) return;
      settled = true;
      window.clearTimeout(timeoutId);
      iframe.removeEventListener("load", onLoad);
      iframe.removeEventListener("error", onError);
      form.remove();
      iframe.remove();
    }

    function onLoad() {
      cleanup();
      resolve();
    }

    function onError() {
      cleanup();
      reject(new Error("Google form submission failed to load"));
    }

    iframe.addEventListener("load", onLoad);
    iframe.addEventListener("error", onError);
    document.body.appendChild(form);
    form.submit();
  });
}

function day1Rows(week) {
  const s = week.strength;
  return [
    ["Acceleration / Start Stops", week.day1Speed],
    ["ISO Split Squat", s.iso],
    ["Skater Jumps", s.power],
    ["Bent-Knee Lateral Plank + SLR", s.core],
    ["Ecc Goblet Split Squat", s.main],
    ["Split Squat Jump", s.power],
    ["Inverted Row", s.pull],
    ["Ecc SA DB Bench Press", s.accessory],
    ["SS DB RDL", s.accessory],
    ["SL Calf Raise", s.calf],
    ["SA Plank", s.core]
  ];
}

function day2Rows(week) {
  const s = week.strength;
  return [
    ["Quickness / Agility Drill", week.day2Speed],
    ["Depth Drop Jump", s.power],
    ["Medball Scoop Toss", s.power],
    ["Lateral Squat", s.accessory],
    ["Goblet / Front Squat", s.main],
    ["No Countermovement Jump", s.power],
    ["1/2 Kneel OH Press", s.accessory],
    ["Chin Ups", s.pull],
    ["Goblet March + Mini Band March", s.carry],
    ["SL Reaches", s.core],
    ["Straight-Leg Adductor Plank", s.core]
  ];
}

function isGoalkeeperTrack() {
  return state.playerPosition === "goalkeeper";
}

function goalkeeperConditioningRows(week) {
  const presets = {
    1: [
      ["Tue", "Low-Impact Tempo", "15-18 min bike, pool, or elliptical at steady aerobic pace", "Record minutes and device used"],
      ["Wed", "Recovery", "Mobility / stretch 15-20 min", "Check off only"],
      ["Thu", "Bike Shuttle Intervals", "4 x 2 min moderate-hard, 90s easy spin", "Track completed reps and feel"],
      ["Sat", "Low-Impact Aerobic", "20-25 min easy bike, swim, or brisk incline walk", "Record minutes or route"],
      ["Sun", "Off", "Full rest", "Check off only"]
    ],
    2: [
      ["Tue", "Low-Impact Tempo", "18-20 min bike, pool, or elliptical at steady aerobic pace", "Record minutes and device used"],
      ["Wed", "Recovery", "Mobility / stretch 15-20 min", "Check off only"],
      ["Thu", "Bike Shuttle Intervals", "5 x 2 min moderate-hard, 90s easy spin", "Track completed reps and feel"],
      ["Sat", "Low-Impact Aerobic", "24-28 min easy bike, swim, or brisk incline walk", "Record minutes or route"],
      ["Sun", "Off", "Full rest", "Check off only"]
    ],
    3: [
      ["Tue", "Low-Impact Tempo", "20-22 min bike, pool, or elliptical at steady aerobic pace", "Record minutes and device used"],
      ["Wed", "Recovery", "Mobility / stretch 15-20 min", "Check off only"],
      ["Thu", "Bike Shuttle Intervals", "5 x 2.5 min moderate-hard, 90s easy spin", "Track completed reps and feel"],
      ["Sat", "Low-Impact Aerobic", "25-30 min easy bike, swim, or brisk incline walk", "Record minutes or route"],
      ["Sun", "Off", "Full rest", "Check off only"]
    ],
    4: [
      ["Tue", "Bike Ladder", "3 min, 4 min, 5 min, 4 min, 3 min at moderate pace; easy spin = work", "Record total time and effort"],
      ["Wed", "Recovery", "Mobility / stretch 15-20 min", "Check off only"],
      ["Thu", "Tempo Spin Intervals", "2 blocks of 5 reps; 20s fast cadence / 40s easy; 3 min between blocks", "Track completed reps"],
      ["Sat", "Low-Impact Fartlek", "20-22 min bike or elliptical with pace changes", "Record route or device"],
      ["Sun", "Off", "Full rest", "Check off only"]
    ],
    5: [
      ["Tue", "Bike Tempo Repeats", "4 x 3 min moderate-hard, 2 min easy", "Record completed reps and feel"],
      ["Wed", "Recovery", "Mobility / stretch 15-20 min", "Check off only"],
      ["Thu", "Tempo Spin Intervals", "2 blocks of 6 reps; 20s fast cadence / 40s easy; 3 min between blocks", "Track completed reps"],
      ["Sat", "Low-Impact Aerobic", "24-30 min easy bike, swim, or brisk incline walk", "Record minutes or route"],
      ["Sun", "Off", "Full rest", "Check off only"]
    ],
    6: [
      ["Tue", "Bike Ladder", "3 min, 4 min, 5 min, 4 min, 3 min a little faster than Week 4; easy spin = work", "Record total time and effort"],
      ["Wed", "Recovery", "Mobility / stretch 15-20 min", "Check off only"],
      ["Thu", "Tempo Spin Intervals", "2 blocks of 6 reps; 20s fast cadence / 40s easy; keep it crisp, not sloppy", "Track completed reps"],
      ["Sat", "Low-Impact Fartlek", "24-28 min bike or elliptical with pace changes", "Record route or device"],
      ["Sun", "Off", "Full rest", "Check off only"]
    ],
    7: [
      ["Tue", "Short Bike HIIT", "6 x 1 min high cadence, 75s easy", "Record completed reps and feel"],
      ["Wed", "Recovery", "Mobility / stretch 15-20 min", "Check off only"],
      ["Thu", "Goalkeeper Aerobic Flush", "4 x 90s moderate-hard, 90s easy; stop before legs get heavy", "Record completed reps"],
      ["Sat", "Low-Impact Aerobic", "18-22 min easy bike, swim, or incline walk", "Record minutes or route"],
      ["Sun", "Off", "Full rest", "Check off only"]
    ],
    8: [
      ["Tue", "Short Bike HIIT", "7 x 1 min high cadence, 75s easy", "Record completed reps and feel"],
      ["Wed", "Recovery", "Mobility / stretch 15-20 min", "Check off only"],
      ["Thu", "Goalkeeper Aerobic Flush", "4 x 75-90s moderate-hard, 90s easy; stay fresh", "Record completed reps"],
      ["Sat", "Low-Impact Aerobic", "18-20 min easy bike, swim, or incline walk", "Record minutes or route"],
      ["Sun", "Off", "Full rest", "Check off only"]
    ],
    9: [
      ["Tue", "Mini Aerobic Flush", "10-12 min easy bike or brisk incline walk", "Record how legs felt"],
      ["Wed", "Off", "No training", "Check off only"],
      ["Thu", "Flush Spin", "12 min easy spin + 3-4 short cadence pick-ups", "Record how legs felt"],
      ["Sat", "Off", "Full rest", "Check off only"],
      ["Sun", "Off", "Full rest; season starts Monday Aug 17", "Check off only"]
    ]
  };
  return presets[week.week] || week.conditioning;
}

function conditioningRowsForWeek(week) {
  return isGoalkeeperTrack() ? goalkeeperConditioningRows(week) : week.conditioning;
}

function getSessions(week) {
  const conditioningRows = conditioningRowsForWeek(week);
  const midweekSubtitle = isGoalkeeperTrack()
    ? "Track lower-volume low-impact conditioning plus recovery work while keeping strength the same."
    : "Track conditioning totals and whether recovery work got done cleanly.";
  const lateweekSubtitle = isGoalkeeperTrack()
    ? "Use low-impact aerobic work here so goalkeepers stay fresh while still building base fitness."
    : "Use this for the shuttle, interval, and weekend run targets in the plan.";
  return [
    {
      id: "day1",
      kicker: "Monday",
      title: "Day 1 Strength + Acceleration",
      subtitle: "Record load, reps, effort, and any form notes after the first main lift day.",
      rows: day1Rows(week).map(([name, prescribed]) => ({ name, prescribed, noteHint: "Best set, load, or time" }))
    },
    {
      id: "midweek",
      kicker: "Tuesday / Wednesday",
      title: "Midweek Conditioning + Recovery",
      subtitle: midweekSubtitle,
      rows: conditioningRows.slice(0, 2).map(([day, name, prescribed, coachNote]) => ({
        name: `${day} - ${name}`,
        prescribed,
        coachNote
      }))
    },
    {
      id: "day2",
      kicker: "Friday",
      title: "Day 2 Strength + Agility",
      subtitle: "Enter results from the second main lift day and any sharpness or fatigue notes.",
      rows: day2Rows(week).map(([name, prescribed]) => ({ name, prescribed, noteHint: "Best set, load, or jump result" }))
    },
    {
      id: "lateweek",
      kicker: "Thursday / Weekend",
      title: "Late Week Conditioning",
      subtitle: lateweekSubtitle,
      rows: conditioningRows.slice(2).map(([day, name, prescribed, coachNote]) => ({
        name: `${day} - ${name}`,
        prescribed,
        coachNote
      }))
    }
  ];
}

function entryId(weekNum, sessionId, rowName) {
  return `${weekNum}__${sessionId}__${rowName}`;
}

function getEntry(weekNum, sessionId, rowName) {
  return state.entries[entryId(weekNum, sessionId, rowName)] || { done: false, result: "", notes: "" };
}

function setEntry(weekNum, sessionId, rowName, patch) {
  const id = entryId(weekNum, sessionId, rowName);
  const current = getEntry(weekNum, sessionId, rowName);
  state.entries[id] = { ...current, ...patch };
  saveState();
  updateStats();
}

function renderWeekOptions() {
  weekSelectEl.innerHTML = weeks
    .map((week) => `<option value="${week.week}">Week ${week.week} - ${week.dates}</option>`)
    .join("");
  weekSelectEl.value = String(state.selectedWeek || 1);
}

function renderHeader(week) {
  weekTitleEl.textContent = `Week ${week.week}`;
  weekMetaEl.innerHTML = `<span>${week.dates}</span><span>${week.phase}</span><span>${isGoalkeeperTrack() ? "Goalkeeper Track" : "Field Player Track"}</span>`;
  weekFocusEl.textContent = isGoalkeeperTrack()
    ? `${week.focus} Goalkeepers keep the same strength plan but use lower-volume low-impact conditioning.`
    : week.focus;
}

function renderSessions() {
  const week = weeks.find((item) => item.week === Number(state.selectedWeek)) || weeks[0];
  const sessions = getSessions(week);
  sessionsEl.innerHTML = sessions
    .map((session) => `
      <article class="session-card">
        <div class="session-head">
          <div class="session-kicker">${session.kicker}</div>
          <h3>${session.title}</h3>
          <p>${session.subtitle}</p>
        </div>
        <div class="table-wrap">
          <table>
            <thead>
              <tr>
                <th class="done-cell">Done</th>
                <th>Workout</th>
                <th>Prescribed</th>
                <th>Result</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>
              ${session.rows.map((row) => {
                const entry = getEntry(week.week, session.id, row.name);
                return `
                  <tr>
                    <td class="done-cell">
                      <input
                        type="checkbox"
                        data-role="done"
                        data-week="${week.week}"
                        data-session="${session.id}"
                        data-row="${escapeAttr(row.name)}"
                        ${entry.done ? "checked" : ""}
                      />
                    </td>
                    <td class="title-cell">
                      <strong>${escapeHtml(row.name)}</strong>
                      ${row.coachNote ? `<span>${escapeHtml(row.coachNote)}</span>` : ""}
                    </td>
                    <td>${escapeHtml(row.prescribed)}</td>
                    <td>
                      <input
                        class="small-input"
                        type="text"
                        placeholder="Time, load, reps, distance"
                        value="${escapeAttr(entry.result)}"
                        data-role="result"
                        data-week="${week.week}"
                        data-session="${session.id}"
                        data-row="${escapeAttr(row.name)}"
                      />
                    </td>
                    <td>
                      <textarea
                        class="small-textarea"
                        placeholder="${escapeAttr(row.noteHint || "How did it feel?")}"
                        data-role="notes"
                        data-week="${week.week}"
                        data-session="${session.id}"
                        data-row="${escapeAttr(row.name)}"
                      >${escapeHtml(entry.notes)}</textarea>
                    </td>
                  </tr>
                `;
              }).join("")}
            </tbody>
          </table>
        </div>
      </article>
    `)
    .join("");
  sessionCountEl.textContent = String(sessions.length);
}

function updateStats() {
  const week = weeks.find((item) => item.week === Number(state.selectedWeek)) || weeks[0];
  const sessions = getSessions(week);
  const rows = sessions.flatMap((session) =>
    session.rows.map((row) => getEntry(week.week, session.id, row.name))
  );
  const total = rows.length;
  const completed = rows.filter((row) => row.done).length;
  const remaining = total - completed;
  const progress = total ? Math.round((completed / total) * 100) : 0;

  completedCountEl.textContent = String(completed);
  remainingCountEl.textContent = String(remaining);
  progressFillEl.style.width = `${progress}%`;
  progressTextEl.textContent = `${progress}% complete for Week ${week.week}`;
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function escapeAttr(value) {
  return escapeHtml(value).replace(/'/g, "&#39;");
}

function buildCsv() {
  const header = ["Player Name", "Position", "Week", "Dates", "Phase", "Session", "Workout", "Prescribed", "Done", "Result", "Notes"];
  const lines = [header];

  for (const week of weeks) {
    for (const session of getSessions(week)) {
      for (const row of session.rows) {
        const entry = getEntry(week.week, session.id, row.name);
        lines.push([
          state.playerName || "",
          state.playerPosition || "field",
          `Week ${week.week}`,
          week.dates,
          week.phase,
          session.title,
          row.name,
          row.prescribed,
          entry.done ? "Yes" : "No",
          entry.result || "",
          entry.notes || ""
        ]);
      }
    }
  }

  return lines
    .map((line) => line.map((cell) => `"${String(cell).replace(/"/g, '""')}"`).join(","))
    .join("\n");
}

function downloadCsv() {
  const csv = buildCsv();
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  const playerSlug = (state.playerName || "spa-player").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  link.href = url;
  link.download = `${playerSlug || "spa-player"}-tracker.csv`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function weeklySummary() {
  const week = weeks.find((item) => item.week === Number(state.selectedWeek)) || weeks[0];
  return weeklySummaryForWeek(week);
}

function weeklySummaryForWeek(week) {
  const sessions = getSessions(week);
  const completedItems = [];

  for (const session of sessions) {
    for (const row of session.rows) {
      const entry = getEntry(week.week, session.id, row.name);
      if (entry.done || entry.result || entry.notes) {
        completedItems.push(`- ${session.kicker}: ${row.name} | Result: ${entry.result || "n/a"} | Notes: ${entry.notes || "n/a"} | Done: ${entry.done ? "yes" : "no"}`);
      }
    }
  }

  return [
    `SPA Player Tracker`,
    `Player: ${state.playerName || "Unnamed player"}`,
    `Position: ${state.playerPosition === "goalkeeper" ? "Goalkeeper" : "Field Player"}`,
    `Week ${week.week}: ${week.dates}`,
    `Goal: ${state.playerGoal || "n/a"}`,
    `Notes: ${state.playerNotes || "n/a"}`,
    ``,
    completedItems.length ? completedItems.join("\n") : "- No entries yet."
  ].join("\n");
}

function buildWeekSubmission(week) {
  const sessions = getSessions(week);
  const rows = sessions.flatMap((session) =>
    session.rows.map((row) => {
      const entry = getEntry(week.week, session.id, row.name);
      return {
        sessionId: session.id,
        sessionTitle: session.title,
        sessionKicker: session.kicker,
        workout: row.name,
        prescribed: row.prescribed,
        coachNote: row.coachNote || "",
        done: entry.done,
        result: entry.result || "",
        notes: entry.notes || ""
      };
    })
  );
  const completed = rows.filter((row) => row.done).length;
  return {
    submittedAt: new Date().toISOString(),
    receiptId: createSubmissionReceipt(week.week),
    source: "spa-player-tracker",
    version: 2,
    playerName: (state.playerName || "").trim(),
    playerPosition: state.playerPosition || "field",
    playerGoal: state.playerGoal || "",
    playerNotes: state.playerNotes || "",
    week: week.week,
    dates: week.dates,
    phase: week.phase,
    focus: week.focus,
    completed,
    total: rows.length,
    progressPercent: rows.length ? Math.round((completed / rows.length) * 100) : 0,
    summary: weeklySummaryForWeek(week),
    rows
  };
}

function updateSubmitStatus() {
  const submission = state.submissions?.[String(state.selectedWeek)];
  if (submission?.submittedAt) {
    const timestamp = submission.confirmedAt || submission.submittedAt;
    const submittedAt = new Date(timestamp);
    const label = Number.isNaN(submittedAt.getTime()) ? timestamp : submittedAt.toLocaleString();
    const receipt = submission.receiptId ? ` Receipt: ${submission.receiptId}.` : "";
    submitStatusEl.textContent = `Confirmed Week ${state.selectedWeek}: ${label}.${receipt}`;
    return;
  }
  submitStatusEl.textContent = "Submit the selected week to the shared coach sheet after you update your results. The app now waits for Google confirmation before it marks a week as sent.";
}

async function submitWeek() {
  if (isSubmitting) return;

  const week = selectedWeek();
  const playerName = (state.playerName || "").trim();
  if (!playerName) {
    flashToast("Enter player name first");
    playerNameEl.focus();
    return;
  }
  if (!navigator.onLine) {
    submitStatusEl.textContent = "You appear to be offline. Reconnect, then submit again or use the backup form.";
    flashToast("Offline");
    return;
  }

  const payload = buildWeekSubmission(week);
  const fields = {
    [playerNameEntry]: playerName,
    [submissionJsonEntry]: JSON.stringify(payload)
  };
  lastSubmissionPayload = payload;

  try {
    setSubmitButtonState(true);
    submitStatusEl.textContent = `Submitting Week ${week.week} and waiting for Google confirmation...`;
    await submitWithHiddenForm(fields);
    state.submissions[String(week.week)] = {
      submittedAt: payload.submittedAt,
      confirmedAt: new Date().toISOString(),
      receiptId: payload.receiptId
    };
    saveState(false);
    updateSubmitStatus();
    flashToast("Week confirmed");
  } catch (_) {
    submitStatusEl.textContent = `No confirmation came back for Week ${week.week}. Use the backup form button to resend this week with the same data.`;
    flashToast("No confirmation");
  } finally {
    setSubmitButtonState(false);
  }
}

async function copySummary() {
  await navigator.clipboard.writeText(weeklySummary());
  flashToast("Summary copied");
}

function resetWeek() {
  const weekNum = Number(state.selectedWeek);
  Object.keys(state.entries).forEach((key) => {
    if (key.startsWith(`${weekNum}__`)) {
      delete state.entries[key];
    }
  });
  saveState(false);
  render();
  flashToast("Week reset");
}

function attachEvents() {
  playerNameEl.addEventListener("input", () => {
    state.playerName = playerNameEl.value;
    saveState(false);
  });
  playerGoalEl.addEventListener("input", () => {
    state.playerGoal = playerGoalEl.value;
    saveState(false);
  });
  playerNotesEl.addEventListener("input", () => {
    state.playerNotes = playerNotesEl.value;
    saveState(false);
  });
  weekSelectEl.addEventListener("change", () => {
    state.selectedWeek = Number(weekSelectEl.value);
    saveState(false);
    render();
  });
  playerPositionEl.addEventListener("change", () => {
    state.playerPosition = playerPositionEl.value;
    saveState(false);
    render();
  });
  document.getElementById("submitWeek").addEventListener("click", submitWeek);
  document.getElementById("downloadCsv").addEventListener("click", downloadCsv);
  document.getElementById("copySummary").addEventListener("click", copySummary);
  document.getElementById("openFallbackForm").addEventListener("click", () => {
    const week = selectedWeek();
    const payload = lastSubmissionPayload && lastSubmissionPayload.week === week.week
      ? lastSubmissionPayload
      : buildWeekSubmission(week);
    window.open(buildPrefilledFallbackFormUrl(payload), "_blank", "noopener,noreferrer");
  });
  document.getElementById("resetWeek").addEventListener("click", resetWeek);
  sessionsEl.addEventListener("input", (event) => {
    const target = event.target;
    if (!target.dataset.role) return;
    const weekNum = Number(target.dataset.week);
    const sessionId = target.dataset.session;
    const rowName = target.dataset.row;
    if (target.dataset.role === "result") {
      setEntry(weekNum, sessionId, rowName, { result: target.value });
    } else if (target.dataset.role === "notes") {
      setEntry(weekNum, sessionId, rowName, { notes: target.value });
    }
  });
  sessionsEl.addEventListener("change", (event) => {
    const target = event.target;
    if (target.dataset.role !== "done") return;
    setEntry(Number(target.dataset.week), target.dataset.session, target.dataset.row, { done: target.checked });
  });
}

function render() {
  playerNameEl.value = state.playerName || "";
  playerPositionEl.value = state.playerPosition || "field";
  playerGoalEl.value = state.playerGoal || "";
  playerNotesEl.value = state.playerNotes || "";
  renderWeekOptions();
  const week = weeks.find((item) => item.week === Number(state.selectedWeek)) || weeks[0];
  renderHeader(week);
  renderSessions();
  updateStats();
  updateSubmitStatus();
}

render();
attachEvents();
