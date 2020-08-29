import React, { Component } from 'react';
import styles from './SearchPanel.module.scss';


export default class SearchPanel extends Component {
    render() {
        return (
            <input 
                type="text" 
                placeholder='Введите Имя' 
                className={styles.input}
                onChange={(event) => this.props.getCharacterByName(event.target.value)}
            />
        )
    }
}
