const key = {
  'A': "10:15",
  'B': "11:00",
  'C': "12:30",
  // ... add more mappings
};

function encode() {
  const message = document.getElementById('message').value.toUpperCase();
  let encoded = "";
  for (const char of message) {
    encoded += key[char] || char; 
  }
  document.getElementById('result').value = encoded;
}

function decode() {
  const message = document.getElementById('message').value;
  const reversedKey = Object.fromEntries(Object.entries(key).map(([k, v]) => [v, k]));
  let decoded = "";
  for (const char of message) {
    decoded += reversedKey[char] || char;
  }
  document.getElementById('result').value = decoded;
}
