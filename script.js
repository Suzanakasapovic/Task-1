console.log("suzana")

function factorialize(num) {
    if (num < 0)
    return -1;

    else if (num == 0)
    return 1;

    else {
        return (num * factorialize(num - 1));
    }
}


function checkPalindrome(string) {
    var len = string.length;
    for (var i = 0; i < len / 2; i++) {
        if (string[i] !== string[len - 1 - i]) {
            return 'It is not palindrome';
        }
    }
    return 'It is palindrome'
}