def encode_message(message, key):
  """
  Encodes a message using a simple substitution cipher.

  Args:
    message: The message to be encoded (string).
    key: A dictionary mapping characters to their encoded representations.

  Returns:
    The encoded message (string).
  """
  encoded_message = ""
  for char in message.upper():  # Encode uppercase characters
    encoded_message += key.get(char, char)  # Use original character if no mapping found
  return encoded_message

def decode_message(message, key):
  """
  Decodes a message using a simple substitution cipher.

  Args:
    message: The encoded message (string).
    key: A dictionary mapping characters to their encoded representations.

  Returns:
    The decoded message (string).
  """
  decoded_message = ""
  reversed_key = {v: k for k, v in key.items()}  # Reverse the key for decoding
  for char in message:
    decoded_message += reversed_key.get(char, char)
  return decoded_message

# Example usage
key = {
    'A': "10:15",
    'B': "11:00",
    'C': "12:30",
    # ... add more mappings
}
message = "SECRET MESSAGE"
encoded_msg = encode_message(message, key)
print("Encoded:", encoded_msg)

decoded_msg = decode_message(encoded_msg, key)
print("Decoded:", decoded_msg)
