import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { actions } from '../redux/actions/createAction'
import { withRouter } from "react-router-dom";
import { useTimer } from 'react-timer-hook';
import ReactCardFlip from 'react-card-flip';

import './style.css';
import { mockComponent } from 'react-dom/test-utils';

function mapStateToProps(state) {
    return {
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        setArrCardClicks: (n) => dispatch(actions.setArrCardClick(n)),
        setArrNoShowCards: (n) => dispatch(actions.setArrNoShowCards(n)),
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(function Cards(props) {
    const { text, id, setArrCardClicks, setArrNoShowCards } = props
    const [isFlipped, setIsFlipped] = useState(false);
    let [disabled, setDisabled] = useState(false);
    let [hidden, setHidden] = useState(false);

    function handleClick() {
        setDisabled(true)
        setIsFlipped(!isFlipped)
        if (isFlipped == false) {
            setArrCardClicks(text)
        }
    }
    
    function closeComponent() {
        if (disabled == false) {
            setHidden(true)
            setArrNoShowCards(id)
        }
    }
    useEffect(function close() {
        const timeout = setTimeout(() => {
            closeComponent()
        }, 8000);
        return function cancel() {
            clearTimeout(timeout);
        }
    }, [])

    return (
        <>
            <div hidden={hidden}>
                <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
                    <div className="div1" onClick={(e) => { handleClick() }}>
                        This is the front of the card.
                        {/* <button onClick={(e) => { handleClick() }}>Click to flip</button> */}
                    </div>

                    <div className="div2" onClick={(e) => { handleClick() }} >
                        {text}
                        {/* <button  disabled={disabled} onClick={(e) => { handleClick() }}>Click to flip</button> */}
                    </div>
                </ReactCardFlip>
                <br></br>
                <br></br>
            </div>
        </>
    );
}))