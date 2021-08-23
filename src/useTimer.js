import React, { useState, useEffect } from 'react'

export default function useTimer() {
    const [progress, setProgress] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(progress => progress + 6)
        }, 1000)
        return () => {
            cleanup
        }
    }, [])
    return (
        <div>

        </div>
    )
}
