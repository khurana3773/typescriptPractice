function lengthOfLongestSubstring(s: string): number {
    let i = 0;
    let j = 0;
    let maxLength = 0;
    let seen = new Set();
    let allChars = Array.from(s);
    
    while(i<=j && j<allChars.length) {
        if(!seen.has(allChars[j])) {
            seen.add(allChars[j]);
            j++;
            
            maxLength = Math.max((j-i), maxLength);
            
        } else {
          seen.delete(allChars[i]);
            i++;
           
        }
    }
    
    return maxLength;
    
};

let len = lengthOfLongestSubstring('pwwkew');
console.log(len);