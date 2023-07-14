function countWords(str) {
    str = str.trim();

    if (!str) return 0;

    let count = 0;

    str.split(' ').map(item => {
        if (item.length > 0) count++;
    });

    return count;
}
