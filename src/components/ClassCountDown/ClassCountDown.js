import React from 'react';

class ClassCountDown extends React.Component {
    state = {
        count: 5,
    };

    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState({
                count: this.state.count - 1,
            });
        }, 1000);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count && this.state.count === 0) {
            if (this.timer) {
                clearInterval(this.timer);
                this.props.handleTimesup();
            }
        }
    }

    render() {
        let { count } = this.state;

        return (
            <>
                <h1>{count}</h1>
            </>
        );
    }
}

export default ClassCountDown;
