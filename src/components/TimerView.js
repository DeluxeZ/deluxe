import React from 'react';
import {observer} from 'mobx-react';

@observer
export class TimerView extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.onReset.bind(this)}>
                    Seconds passed: {this.props.appState.timer}
                </button>
                <div>{this.props.timer}</div>
            </div>
        );
    }
    onReset() {
        this.props.appState.resetTimer();
    }
};
