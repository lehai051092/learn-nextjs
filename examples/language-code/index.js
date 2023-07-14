const CODE_DEFAULT = 'en';
const SUPPORTED_LANGUAGE_LIST = ['en', 'vi', 'cn'];

function getLanguageCodeFromURL(url) {
    let validUrl = url.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);

    if (!validUrl || !url) return CODE_DEFAULT;

    for (let i = 0; i < SUPPORTED_LANGUAGE_LIST.length; i++) {
        if (url.split('/').indexOf(SUPPORTED_LANGUAGE_LIST[i]) > -1) {
            return SUPPORTED_LANGUAGE_LIST[i];
        }
    }

    return CODE_DEFAULT;
}
