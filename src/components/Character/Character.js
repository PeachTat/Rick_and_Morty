import React, { Component } from 'react';
import styles from './Character.module.scss';
import DeleteButton from '../DeleteButton';

export default class Character extends Component {
    render () {
        const { url, name, onClick, id } = this.props;
        return (
            <div className={styles.person}>
                <img src={url} alt={name} onClick={() => onClick(name, url)}/>
                <DeleteButton onClick={() => this.props.onDelete(id)}/>
            </div>
        )
    }
}
