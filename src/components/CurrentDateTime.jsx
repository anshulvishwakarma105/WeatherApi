import React, { useEffect, useState } from 'react'

export default function CurrentDateTime() {
    const [now, setNow] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setNow(new Date())
        }, 1000);
        return () => clearInterval(interval)
    }, []);


    const date = now.toLocaleDateString("en-US", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
    });

    const time = now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true, // change to true if you want AM/PM
    });
    return (
        <div className="clockCard">
            <h3 className="clockDate">{date}</h3>
            <p className="clockTime">{time}</p>
        </div>
    )
}
