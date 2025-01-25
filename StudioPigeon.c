#include <stdio.h>
#include <string.h>

char* encode(const char* message) {
    // Example: Map characters to simplified pigeon data (e.g., arrival time)
    char *encodingMap[26] = {"10:00", "10:15", "10:30", /* ... */}; 
    int len = strlen(message);
    char *encoded = (char*)malloc((len * 4 + 1) * sizeof(char)); // Allocate memory
    int i, j = 0;
    for (i = 0; i < len; i++) {
        int index = message[i] - 'A'; // Assuming uppercase letters
        if (index >= 0 && index < 26) {
            strcpy(&encoded[j], encodingMap[index]); 
            j += 4; // 4 characters per encoded letter
        }
    }
    encoded[j] = '\0';
    return encoded;
}

// ... (decode function similar to Java, using a lookup table)

int main() {
    char *message = "Secret Message";
    char* encoded = encode(message);
    printf("Encoded: %s\n", encoded);
    // ... (decode and print)
    free(encoded); // Free dynamically allocated memory
    return 0;
}
