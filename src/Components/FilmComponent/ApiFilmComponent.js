import React, { Component } from 'react'
import FilmListComponent from './FilmListComponent';
import LoadingFilmComponent from './LoadingFilmComponent';

export default class ApiFilmComponent extends Component {
	state = {
		error: null,
		isLoaded: false,
		data: this.props.film,
		APIFilm: []
	};
	
	componentDidMount = () => {
		this.fetchApi();
	}
		
	fetchApi = () => {
		fetch(this.state.data)
		// fetch(this.state.data, {
    //   headers : { 
    //     'Content-Type': 'application/json',
    //     'Accept': 'application/json'
    //    }

    // })
		.then(response => response.json())
		.then(
			(result) => {
				this.setState({
					isLoaded: true,
					APIFilm: {
						judul: result.title,
						director: result.director,
						produser: result.producer,
						tanggal_tayang: result.release_date
					}
				});
			},
			(error) => {
				this.setState({
					isLoaded: true,
					error
				});
			}
		)
	}
		
	render() {
		const { error, isLoaded, APIFilm } = this.state;
		if (error) {
			return <div>Error: {error.message}</div>;
		} else if (!isLoaded) {
			return <LoadingFilmComponent />;
		} else {
				// console.log(APIFilm)
			return (
				<div className="col-md-3 col-sm-12 movies-list">
					<FilmListComponent judulFilm={APIFilm.judul} direktorFilm={APIFilm.director} produserFilm={APIFilm.director} rilisFilm={APIFilm.tanggal_tayang} />
				</div>
			)
		}
	}
}
