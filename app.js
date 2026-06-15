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
const playerNameEl = document.getElementById("playerName");
const weekSelectEl = document.getElementById("weekSelect");
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
const toastEl = document.getElementById("toast");

const state = loadState();

function loadState() {
  try {
    const raw = localStorage.getItem(storageKey);
    if (raw) {
      return JSON.parse(raw);
    }
  } catch (_) {}
  return { playerName: "", playerGoal: "", playerNotes: "", selectedWeek: 1, entries: {} };
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

function getSessions(week) {
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
      subtitle: "Track conditioning totals and whether recovery work got done cleanly.",
      rows: week.conditioning.slice(0, 2).map(([day, name, prescribed, coachNote]) => ({
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
      subtitle: "Use this for the shuttle, interval, and weekend run targets in the plan.",
      rows: week.conditioning.slice(2).map(([day, name, prescribed, coachNote]) => ({
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
  weekMetaEl.innerHTML = `<span>${week.dates}</span><span>${week.phase}</span>`;
  weekFocusEl.textContent = week.focus;
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
  const header = ["Player Name", "Week", "Dates", "Phase", "Session", "Workout", "Prescribed", "Done", "Result", "Notes"];
  const lines = [header];

  for (const week of weeks) {
    for (const session of getSessions(week)) {
      for (const row of session.rows) {
        const entry = getEntry(week.week, session.id, row.name);
        lines.push([
          state.playerName || "",
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
    `Week ${week.week}: ${week.dates}`,
    `Goal: ${state.playerGoal || "n/a"}`,
    `Notes: ${state.playerNotes || "n/a"}`,
    ``,
    completedItems.length ? completedItems.join("\n") : "- No entries yet."
  ].join("\n");
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
  document.getElementById("downloadCsv").addEventListener("click", downloadCsv);
  document.getElementById("copySummary").addEventListener("click", copySummary);
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
  playerGoalEl.value = state.playerGoal || "";
  playerNotesEl.value = state.playerNotes || "";
  renderWeekOptions();
  const week = weeks.find((item) => item.week === Number(state.selectedWeek)) || weeks[0];
  renderHeader(week);
  renderSessions();
  updateStats();
}

render();
attachEvents();
