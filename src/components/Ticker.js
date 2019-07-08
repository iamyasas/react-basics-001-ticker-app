import React from 'react';

class Ticker extends React.Component {

    constructor(props){
        super(props);
        this.state = { time : 0};
    }

    componentDidMount(){
        setInterval(() => {
            this.setState(state => (
                { time : state.time + 1 }
            ));
        }, 1000);
    }

    render() {
        return(
            <h2>User is online for {this.state.time} seconds.</h2>
        );
    }
}

export default Ticker;