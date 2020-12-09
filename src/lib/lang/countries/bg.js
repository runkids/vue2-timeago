function formatToLongString(time, words) {

    if (time > 1) {

        return `преди ${time} ${words[1]}`;
    }

    return `преди ${time} ${words[0]}`;

}

export default {
    short: {
        now: 'сега',
        sec: 'с',
        min: 'м',
        hour: 'ч',
        day: 'д',
    },
    long: {
        now: 'сега',
        sec: time => formatToLongString(time, ['секунда', 'секунди']),
        min: time => formatToLongString(time, ['минута', 'минути']),
        hour: time => formatToLongString(time, ['час', 'часа']),
        day: time => formatToLongString(time, ['ден', 'дни']),
    }
}
