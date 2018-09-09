import React, { Component } from 'react';
import './App.css';
import PersonComponent from './Components/PersonComponent/PersonComponent';
import ApiFilmComponent from './Components/FilmComponent/ApiFilmComponent';
import FilmRelatedComponent from './Components/FilmComponent/FilmRelatedComponent';
import LoadingComponent from './Components/LoadingComponent';

class App extends Component {

  state = {
    error: null,
    isLoaded: false,
    dataJSON: [],
    apiPage: 1
  };

  
  componentDidMount = () => {
    this.fetchApi();
    this.randomAktor();
  }
  
  fetchApi = () => {
    fetch('https://swapi.co/api/people/'+this.state.apiPage)
    .then(response => response.json())
    .then(
      (result) => {
        this.setState({
          isLoaded: true,
          dataJSON: {
            id: result.name,
            nama: result.name,
            tinggi: result.height,
            berat: result.mass,
            wrambut: result.hair_color,
            wkulit: result.skin_color,
            thnlahir: result.birth_year,
            kelamin: result.gender,
            film: result.films
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
    // .then(
    //   (parseJSON) => ({
    //     id: parseJSON.name,
    //     name: parseJSON.name,
    //     film: parseJSON.films
    //   })
    // )
    // .then(
    //   dataJSON => this.setState({
    //     isLoaded: true,
    //     dataJSON
    //   })
    // )
  }

  randomAktor = () => {
    
    let random = Math.floor(Math.random() * 10) + 1;
    this.setState({
      isLoaded: false,
      apiPage : random
    })
    this.fetchApi();
  }


  render() {
    const { error, isLoaded, dataJSON } = this.state;
    const style ={
      marginTop:"10px",
      padding: "10px",
      border: "1px solid transparent",
      color: "#fff",
      backgroundColor: "#007bff",
      borderColor: "#007bff",
      lineHeight: "1.5",
      borderRadius: "10px",
    }
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <LoadingComponent/>;
    } else {
      let namaBelakang = dataJSON.nama.split(' ');
      let nb = namaBelakang.length - 1;
      let newNamaBelakang = namaBelakang[nb]
      let APIFilm = (
        <div className="movies section">
          <div className="row">
            <div className="col-md-8 col-sm-12">
              <div className="movies-heading">
                <div className="row">
                  <div className="col-xs-6">
                    <h2 className="fred actor-movies">{newNamaBelakang} Movie’s</h2>
                  </div>
                  <div className="col-xs-6 text-right more-film fblue">See More</div>
                </div>
              </div>
              {
                dataJSON.film.map((listFilm, index)  => {
                  return <ApiFilmComponent
                    key = {index} 
                    film = {listFilm} 
                  />
                })
              }
            </div>
            <FilmRelatedComponent />
          </div>
        </div>
      );
      return (
        <div className="container">
        <button onClick={this.randomAktor} style={style}> shuffle aktor</button>
          <div className="profile section">
            <PersonComponent 
              name = {dataJSON.nama}
              tinggi = {dataJSON.tinggi}
              berat = {dataJSON.berat}
              wrambut = {dataJSON.wrambut}
              wkulit = {dataJSON.wkulit}
              thnlahir = {dataJSON.thnlahir}
              kelamin = {dataJSON.kelamin}
              film = {dataJSON.films}
            />
          </div>
          {APIFilm}
        </div>
      )
    }
  }
}

export default App;
