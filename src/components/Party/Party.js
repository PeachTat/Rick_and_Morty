import React, { Component } from 'react';
import styles from './Party.module.scss';

export default class Party extends Component {
    render() {
        return (
            <div>
                <h1>Party</h1>
                <div className={styles.wrap}>
                    <div>
                        <h2>Rick</h2>
                        <div className={styles.back}>
                            <img src={this.props.rick} alt=""/>
                        </div>
                    </div>
                    <div>
                        <h2>Morty</h2>
                        <div className={styles.back}>
                            <img src={this.props.morty} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
