import * as React from 'react';
import logo from './logo.svg';
import './App.css';
import {upload} from 'apollo-uploader';

class App extends React.Component {

    handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            upload(e.target.files[0], {})
                .then(() => console.log('Upload success'))
                .catch((e: Error) => console.log('Error', e))
        }
    };

    render(): React.ReactElement | string {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>

                    <input type="file" onChange={this.handleFileChange}/>
                </header>
            </div>
        );
    }
}

export default App;
