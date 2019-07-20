import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {ApolloClient} from "apollo-client";
import {createUploadLink, Uploader} from "apollo-uploader";
import {InMemoryCache} from "apollo-cache-inmemory";

const apolloClient =  new ApolloClient({
    link: createUploadLink('http://localhost'), // concat with your other links (i.e. http, error etc.)
    cache: new InMemoryCache({})
});
Uploader.init(apolloClient);

ReactDOM.render(<App />, document.getElementById('root'));
