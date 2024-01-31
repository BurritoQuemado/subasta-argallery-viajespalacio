import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Wallet } from "../components"

function WalletPage() {

    const StoredUserId = window.localStorage.getItem('user_id')
    const [userName, setUserName] = useState("");
    const [userBalance, setUserBalance] = useState(0);


    useEffect(() => {

        const config = {
            method: 'get',
            url: "https://subastas-stand-licon-a5fc970ae98d.herokuapp.com/getTransactions/"+StoredUserId,
            headers: { 
              'Content-Type': 'application/json',
              "Access-Control-Allow-Origin": "*"
            },
        };

        axios.request(config)
        .then(res => {
            setUserName(res.data.name)
            setUserBalance(parseInt(res.data.balance))
        })

    },[])


    return (
        <Wallet name={userName} balance={userBalance} user_id={StoredUserId} />
    );
}

export default WalletPage;