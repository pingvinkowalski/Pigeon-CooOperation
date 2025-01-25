import java.util.HashMap;
import java.util.Map;

public class PigeonCode {

    private static final Map<Character, String> encodingMap = new HashMap<>(); 
    // Example: Map characters to simplified pigeon data (e.g., arrival time)
    static {
        encodingMap.put('A', "10:00");
        encodingMap.put('B', "10:15"); 
        // ... populate with more mappings
    }

    public static String encode(String message) {
        StringBuilder encoded = new StringBuilder();
        for (char c : message.toCharArray()) {
            encoded.append(encodingMap.getOrDefault(c, "")); 
        }
        return encoded.toString();
    }

    public static String decode(String encodedMessage) {
        StringBuilder decoded = new StringBuilder();
        for (int i = 0; i < encodedMessage.length(); i += 4) { // Assuming 4 characters per encoded letter 
            String code = encodedMessage.substring(i, i + 4); 
            for (Map.Entry<Character, String> entry : encodingMap.entrySet()) {
                if (entry.getValue().equals(code)) {
                    decoded.append(entry.getKey());
                    break;
                }
            }
        }
        return decoded.toString();
    }

    public static void main(String[] args) {
        String message = "Secret Message";
        String encoded = encode(message);
        System.out.println("Encoded: " + encoded); 
        String decoded = decode(encoded);
        System.out.println("Decoded: " + decoded);
    }
}
