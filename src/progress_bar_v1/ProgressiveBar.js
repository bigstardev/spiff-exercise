import React from 'react'

export default function ProgressiveBar({ requestCompletionRate }) {

    return (
        <div>

            <div className={"skill-bar " + `${requestCompletionRate == 100 ? "fade-out" : ""}`}>
                <span className={"progress-bar "}>
                    <span className="shade" style={{ width: `${requestCompletionRate}%` }} ></span>
                </span>
            </div>
        </div>

    )
}
