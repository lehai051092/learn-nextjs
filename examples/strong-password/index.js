function isStrongPassword(password) {
    password = password.trim();
    if (!password || password.length < 8) return false;

    const specialCharacterList = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'];
    let isOneCharacterUppercase = false,
        isOneCharacterLowercase = false,
        isOneCharacterNumber = false,
        isOneSpecialCharacter = false;

    for (let i = 0; i < password.length; i++) {
        if (password[i] === password[i].toUpperCase()) isOneCharacterUppercase = true;
        if (password[i] === password[i].toLowerCase()) isOneCharacterLowercase = true;
        if (!isNaN(password[i])) isOneCharacterNumber = true;
        if (specialCharacterList.includes(password[i])) isOneSpecialCharacter = true;
    }

    return !(!isOneCharacterUppercase || !isOneCharacterLowercase || !isOneCharacterNumber || !isOneSpecialCharacter);
}
