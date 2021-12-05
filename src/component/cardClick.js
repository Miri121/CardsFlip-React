import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { actions } from '../redux/actions/createAction'
import { withRouter } from "react-router-dom";
import Card from './cards';
import './style.css';

function mapStateToProps(state) {
    return {
        arrCardClickk: state.produceCards.arrCardClick
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(function CardClick(props) {
    const { arrCardClickk } = props
    return (
        <>
           <div>
                <ul>
                    {arrCardClickk && arrCardClickk.map((item, index) => (
                        <h3  key={index} style={{ direction: "rtl" }}>
                            {item}
                            <br></br>
                            <br></br>
                        </h3>
                    ))}
                </ul>
            </div>
        </>
    );
}))
