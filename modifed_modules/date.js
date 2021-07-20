

exports.getDate = () => {

    const options = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    };
    const today = new Date;

    return today.toLocaleDateString("en-US", options);
};

exports.getDay = () => {

    const options = {
        weekday: "long",
    };
    const today = new Date;

    return today.toLocaleDateString("en-US", options);
};