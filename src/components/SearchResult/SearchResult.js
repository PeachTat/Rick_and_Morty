import React, { Component } from 'react';
import styles from './SearchResult.module.scss';
import Character from '../Character';

export default class SearchResult extends Component {
    render() {
        return (
            <div className={styles.row}>
                {!this.props.characters && <div>Нет данных</div>}
                {
                    this.props.characters?.map(char => {
                        return (
                            <Character 
                                key={char.id} 
                                url={char.image} 
                                name={char.name} 
                                onClick={this.props.onClick}
                                onDelete={this.props.onDelete}
                                id={char.id}
                            />
                        )
                    })
                }
            </div>
        )
    }
}
