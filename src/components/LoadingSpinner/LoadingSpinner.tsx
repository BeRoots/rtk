import React, { useContext } from 'react';
import { CentreContext } from '../../contexts/CentreContextProvider';
import './LoadingSpinner.scss';


function LoadingSpinner() {
    const centre = useContext(CentreContext)

    return (
        <>
        {centre && centre.loading && (
            <div className="loading-spinner-overlay">
                <div className="center">
                    <div className="wave"></div>
                    <div className="wave"></div>
                    <div className="wave"></div>
                    <div className="wave"></div>
                    <div className="wave"></div>
                    <div className="wave"></div>
                    <div className="wave"></div>
                    <div className="wave"></div>
                    <div className="wave"></div>
                    <div className="wave"></div>
                </div>
            </div>
        )}
        </>
    )
}

export default LoadingSpinner;
