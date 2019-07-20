import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {ApolloClient} from "apollo-client";
import {createUploadLink, Uploader} from "apollo-uploader";
import {InMemoryCache} from "apollo-cache-inmemory";

const apolloClient =  new ApolloClient({
    link: createUploadLink('http://localhost'), // concat with your other links (i.e. http, error etc.)
    cache: new InMemoryCache({}),
});

Uploader.init(apolloClient, (id: string, fileName: string): Promise<any> => {
    return new Promise((resolve: (id: string) => void) => {

        console.log(id, fileName);
        // ...do some stuff after upload is success

        resolve(id)
    });
});

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
