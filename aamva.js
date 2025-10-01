
<script src="aamva.js"></script>
// AAMVA v10 field set covering all 50 states
const AAMVA_V10_FIELDS = [
  "DCA", "DCB", "DCD", "DBA", "DCS", "DCT", "DBD", "DBB", "DBC", "DAY",
  "DAU", "DAG", "DAI", "DAJ", "DAK", "DAQ", "DCF", "DCG", "DCH",
  "DAA", "DAW", "DAZ"
  // ...Add optional fields as needed
];

// Per-state unique values (override only if needed)
const STATE_OVERRIDES = {
  "TEXAS": { DCA: "C", DCG: "USA" },
  "CALIFORNIA": { DCA: "C", DCG: "USA" },
  // ...add entries for any state that truly differs from base
};

// Takes state (e.g. "TEXAS") and user data (object keyed by AAMVA field) and returns a complete map
function buildAAMVA_v10(state, userData) {
  let data = {};
  AAMVA_V10_FIELDS.forEach(code => {
    data[code] = (STATE_OVERRIDES[state] && STATE_OVERRIDES[state][code]) || userData[code] || '';
  });
  return data;
}

// Converts field object to barcode payload string per spec
function buildAAMVA_v10_payload(fields) {
  let payload = "";
  payload += "@" + "\n"; // Compliance header
  payload += "ANSI " + "636026080102DL00410270Z\n";
  Object.keys(fields).forEach(key => {
    payload += key + fields[key] + "\n";
  });
  return payload;
}

// --- Usage Example ---
// let userData = { DCS: "DOE", DCT: "JOHN", ...etc... };
// let fields = buildAAMVA_v10("TEXAS", userData);
// let payload = buildAAMVA_v10_payload(fields);
// Pass "payload" to your PDF417 JS barcode generator

<script src="aamva.js"></script>
