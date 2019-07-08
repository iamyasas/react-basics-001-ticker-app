import React from 'react';
import Ticker from './Ticker';

function Home(props) {
    return (
        <>
            <h1>
                This is me starting a react app called "{props.title}"
            </h1>
            <Ticker/>
        </>
    );
}

export default Home;