function isPalindrome(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    console.log("Reversed:", reversed);
    
    if (str == reversed) {
        console.log("✅ It is a palindrome");
    } else {
        console.log("❌ Not a palindrome");
    }
}

isPalindrome("RaaR");
