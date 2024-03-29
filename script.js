function indexOfIgnoreCase(s1, s2) {
  // write your code here
	s1 = s1.toLowerCase(); // Convert both strings to lowercase for case-insensitive comparison
    s2 = s2.toLowerCase();
    
    for (let i = 0; i <= s1.length - s2.length; i++) {
        let found = true;
        for (let j = 0; j < s2.length; j++) {
            if (s1[i + j] !== s2[j]) {
                found = false;
                break;
            }
        }
        if (found) {
            return i; // Return the index of the first character of the substring if found
        }
    }
    return -1; // Return -1 if the substring is not found
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
