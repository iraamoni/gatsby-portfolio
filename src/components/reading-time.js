import React from "react";

const ReadingTime = ({ readingTime }) => {
    if (!readingTime)
        return null;

    const timeInNumber = parseInt(readingTime);

    if (timeInNumber < 60) {
        return <> |  {readingTime} minutes</>;
    }

    return <> |  More than an hour</>;
};

export default ReadingTime;