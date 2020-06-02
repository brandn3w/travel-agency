

export const formatTime = seconds => {

    if (seconds == null || isNaN(seconds) || seconds < 0) {

        return null;
    } else {
        let date = new Date(null);
        date.setSeconds(seconds);
        const timeString = date.toISOString().substr(11, 8);
        return timeString;
    }
};

