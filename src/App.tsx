import * as React from 'react';
import {upload} from 'apollo-uploader';

class App extends React.Component {

    handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            upload(e.target.files[0], {})
                .subscribe((value: any) => console.log(value));
        }
    };

    render(): React.ReactElement | string {
        return (
            <div>
                <input type="file" onChange={this.handleFileChange}/>
            </div>
        );
    }
}

export default App;
