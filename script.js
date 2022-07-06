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

function factorializeForInput() {
    var inputNumber = document.getElementById("factorialize-number").value;
    var factorializedNum = factorialize(inputNumber);
    document.getElementById("result").innerText=factorializedNum;
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


function palindromeForInput() {
    var word = document.getElementById("word").value;
    var len = word.length;
    for (var i = 0; i < len / 2; i++) {
        if (word[i] !== word[len - 1 - i]) {
            window.alert('It is not palindrome');
        } else {
    window.alert('It is palindrome');
        }
    }
}