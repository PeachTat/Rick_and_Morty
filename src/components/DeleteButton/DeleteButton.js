import React, { Component } from 'react';
import styles from './DeleteButton.module.scss';

export default class DeleteButton extends Component {
    render() {
        return (
            <div className={styles.delete} onClick={this.props.onClick}>
                <div className={styles.item}></div>
                <div className={styles.item}></div>
            </div>
        )
    }
}
