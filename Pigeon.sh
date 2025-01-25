#!/bin/bash

encode() {
  local message="$1"
  local key="$2"

  local encoded=""
  for ((i=0; i<${#message}; i++)); do
    char="${message:$i:1}"
    encoded="${encoded}${key[$char]}" 
  done

  echo "$encoded"
}

decode() {
  local message="$1"
  local key="$2"

  local decoded=""
  while [[ -n "$message" ]]; do
    char="${message:0:4}" # Assuming 4 characters per encoded letter
    for k in "${!key[@]}"; do
      if [[ "${key[$k]}" == "$char" ]]; then
        decoded="${decoded}${k}"
        message="${message:4}"
        break
      fi
    done
  done

  echo "$decoded"
}

# Example usage
declare -A key=(
  ["A"]="10:15"
  ["B"]="11:00"
  ["C"]="12:30"
  # Add more mappings here
)

message="SECRET MESSAGE"
encoded_message=$(encode "$message" "${key[@]}")
echo "Encoded: $encoded_message"

decoded_message=$(decode "$encoded_message" "${key[@]}")
echo "Decoded: $decoded_message"
