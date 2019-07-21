import * as React from 'react';
import {upload, Queries} from 'apollo-uploader';
import {Query} from "react-apollo";
import {FileUploadProcess} from "apollo-uploader/lib/types";
import './App.css'

class App extends React.Component {

    handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {files} = e.target;

        if (files) {
            Array.from(files).forEach(file => {
                upload(file).subscribe((process: FileUploadProcess) => console.log(process));
            });
        }
    };

    render(): React.ReactElement | string {
        return (
            <div>
                <h2>Choose file</h2>
                <input type="file" onChange={this.handleFileChange} multiple={true}/>

                <h2>Upload processes</h2>
                <table>
                    <tbody>
                    <tr>
                        <th>id</th>
                        <th>fileName</th>
                        <th>status</th>
                        <th>fileSize</th>
                        <th>loaded</th>
                        <th>total</th>
                        <th>result</th>
                        <th>error</th>
                    </tr>

                    <Query
                        query={Queries.uploading}
                    >
                        {({data}: { data: { uploading: FileUploadProcess[] } }) =>
                            data.uploading.map((process: FileUploadProcess) => {

                                return (
                                    <tr key={process.id}>
                                        <td> {process.id} </td>
                                        <td> {process.fileName} </td>
                                        <td> {process.status} </td>
                                        <td> {process.loaded} </td>
                                        <td> {process.fileSize} </td>
                                        <td> {process.total} </td>
                                        <td> {process.result && JSON.parse(process.result).id} </td>
                                        <td> {process.error} </td>
                                    </tr>
                                )
                            })
                        }
                    </Query>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default App;
