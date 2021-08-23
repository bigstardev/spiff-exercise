import React, { useState, useEffect } from 'react'
import ProgressiveBar from '../progress_bar_v1/ProgressiveBar';
export default function UseTimer() {
    const [requestCompletionRate, setRequestCompletionRate] = useState(0);
    const [requestLastState, setRequestLastState] = useState(true);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        let timer;
        if (isActive) {
            timer = setInterval(updateRequest, 1000)
        }
        return () => clearInterval(timer);
    }, [isActive, requestCompletionRate])

    const lastStep = () => {
        setIsActive(false);
        setRequestCompletionRate(100)
        setTimeout(() => {
            stopTimer();

        }, 3000);
    }
    const updateRequest = () => {
        {/*Increasing the width of progressbar component until 90%*/ }
        setRequestCompletionRate((requestCompletionRate) => requestCompletionRate + 6);
        {/* request status when 90% completed*/ }
        setRequestLastState(Math.random() >= 0.5);

        if (requestCompletionRate == 90) {
            setIsActive(false);
            {/* if request succeed, then finish the task and refresh progressive bar*/ }
            if (requestLastState) lastStep()


        }


    }

    function stopTimer() {
        {/*force to complete the request*/ }
        setIsActive(false)
        setRequestCompletionRate(0)
        setRequestLastState(true)
    }

    return (

        <>

            <ProgressiveBar requestCompletionRate={requestCompletionRate} />
            <div className="buttonGroup">
                <button disabled={true && !requestLastState} className="my-button medium green" onClick={() => setIsActive(!isActive)}>{!isActive ? "START REQUEST" : "LOADING ..."}</button>
                <button className="my-button medium red" onClick={lastStep}>FINISH REQUEST</button>
            </div>
        </>
    )


}
