const key = {
  'A': "10:15",
  'B': "11:00",
  'C': "12:30",
  'D': "13:00",
  'E': "14:00",
  'F': "15:00",
  'G': "16:00",
  'H': "17:00",
  'I': "18:00",
  'J': "19:00",
  'K': "20:00",
  'L': "21:00",
  'M': "22:00",
  'N': "23:00",
  'O': "00:00",
  'P': "01:00",
  'Q': "02:00",
  'R': "03:00",
  'S': "04:00",
  'T': "05:00",
  'U': "06:00",
  'V': "07:00",
  'W': "08:00",
  'X': "09:00",
  'Y': "10:00",
  'Z': "11:15"
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
