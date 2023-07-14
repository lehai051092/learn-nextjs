function uniqueLetters(str) {
    str = str.trim();
    if (!str) return '';

    let newStr = '';

    str.split('').map(item => {
        if (str.indexOf(item) === str.lastIndexOf(item)) newStr += item;
    });

    return newStr;
}
