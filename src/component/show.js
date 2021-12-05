import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { actions } from '../redux/actions/createAction'
import { withRouter } from "react-router-dom";
import Card from './cards';
import CardClick from './cardClick'

import './style.css';

function mapStateToProps(state) {
    return {
        arrCardss: state.produceCards.arrCards,
        arrNoShowCardss:state.produceCards.arrNoShowCards,
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        getCards: () => dispatch({ type: 'GET_CARDS' }),
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(function Show(props) {
    const { getCards, arrCardss ,arrNoShowCardss} = props

    useEffect(function go() {
        const timer = setInterval(getCards, 5000);
        return function cancel() {
            clearInterval(timer);
        }
    }, [])
    return (
        <>
            <div>
                <ul>
                    {arrCardss && arrCardss.map((item, index) => (
                        <div>
                    {/* <li> */}
                          {/* <Card text={item.joke} id={item.id}/> */}
                         {arrNoShowCardss[item.id] ? alert("nooo"):<Card text={item.joke} id={item.id}/>}
                         </div>
                    //   </li> 
                    ))}
                </ul>
            </div>
            <CardClick/>
        </>
    );
}))