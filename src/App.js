import React, { Component } from 'react';
import Container from './components/Container';
import SearchPanel from './components/SearchPanel';
import SearchResult from './components/SearchResult';
import Party from './components/Party';
import debounce from 'debounce';

const url = 'https://rickandmortyapi.com/api/character/';

export default class App extends Component {

    state = {
        characters: [],
        rick: '',
        morty: '',
        deletedCharacters: []
    }

    onDelete = (id) => {
        const filteredCharacters = this.state.characters.filter(char => { 
            return char.id !== id
        })

        this.setState({
            deletedCharacters: this.state.deletedCharacters.concat(id),
            characters: filteredCharacters
        })
    }

    onClickCharacter = (name, url) => {
        if (name.toLowerCase().includes('morty')) {
            this.setState({
                morty: url
            })
        }

        if (name.toLowerCase().includes('rick')) {
            this.setState({
                rick: url
            })
        }
    }

    filterCharacters = (array) => {
        return array.filter((item) => {
            return this.state.deletedCharacters.indexOf(item.id) === -1
        })
    }

    getCharacterByName = async (name) => {
        try {
            if (name.length < 3) {
                if (name.length === 0) {
                    await this.getAllCharacters()
                }
                throw new Error('Больше двух символов')
            }
            const res = await fetch(`${url}?name=${name}`);
            const data = await res.json();
            const filteredData = this.filterCharacters(data.results)

            this.setState({
                characters: filteredData
            })

        } catch (error) {
            console.error(error.message)
        }
    } 

    getAllCharacters = async () => {
        try {
            const result = await fetch(url);
            const data = await result.json();
            const filteredData = this.filterCharacters(data.results)

            this.setState({
                characters: filteredData
            })

        } catch (error) {
            console.error(error.message)
        }
    }

    componentDidMount() {
        this.getAllCharacters();
    }

    render () {
        return (
            <Container>
                <SearchPanel getCharacterByName={debounce(this.getCharacterByName, 400)}/>
                <SearchResult 
                    characters={this.state.characters} 
                    onClick={this.onClickCharacter}
                    onDelete={this.onDelete}
                />
                <Party rick={this.state.rick} morty={this.state.morty} />
            </Container>
        )
    }
}
