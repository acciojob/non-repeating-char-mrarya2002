// let arr = [];
function firstNonRepeatedChar(str) {
 // Write your code here
	 const charCount = new Array(256).fill(0);
        
            // First pass: count all characters using their ASCII codes
            for (let i = 0; i < str.length; i++) {
                const charCode = str.charCodeAt(i);
                charCount[charCode]++;
            }
            
            // Second pass: find the first character with count of 1
            for (let i = 0; i < str.length; i++) {
                const charCode = str.charCodeAt(i);
                if (charCount[charCode] === 1) {
                    return str[i];
                }
            }
            
            // If no non-repeating character found
            return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
