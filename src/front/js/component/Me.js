import React, {useContext, useEffect, useState} from 'react'
import { Context } from "../store/appContext";

const Me = () => {
    const { store, actions } = useContext(Context)
    useEffect(() => {
        if(store?.access_token !== null) actions.privateRoute()
    }, [])
    return (
        <h5>Cuenta</h5>
    )
}

export default Me