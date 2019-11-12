import React from 'react';
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            option:[],
            album :[]
        }
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/albums')
            .then(res => res.json())
            .then(option => {
                this.setState( {option});
                console.log(option)
            })

    }

    gallery (e){
        fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${e.target.value}`)
            .then(res => res.json())
            .then((album) => {
                this.setState({album});
                console.log(album);
            })

    }

    render() {
        const optionChoose = this.state.option.title;
    return (
        <div className="App">
          <h1>Select an album:</h1>
            <hr/>

            <select onChange={this.gallery.bind(this)} name="" id="">
                <option value="">Choose your Gallery</option>
                {this.state.option.map((option) =>{
                    return <option label={optionChoose} value={option.id} key={option.id} >{option.title}</option>

                })}
            </select>

            <hr />


            <div>
                {this.state.album.map((album) =>{
                    return <img src={album.thumbnailUrl} key={album.id}  alt=""/>
                })}

            </div>


        </div>
    );
  }

}

export default App;
