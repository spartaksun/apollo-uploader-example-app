import React from 'react';
import ReactDOM from 'react-dom';
import {ApolloProvider} from 'react-apollo';
import {ApolloClient} from "apollo-client";
import {createUploadLink, Uploader} from "apollo-uploader";
import {InMemoryCache} from "apollo-cache-inmemory";

import App from './App';

const apolloClient = new ApolloClient({
    link: createUploadLink('http://localhost'), // concat with your other links (i.e. http, error etc.)
    cache: new InMemoryCache({})
});
Uploader.init(apolloClient);

ReactDOM.render(
    <ApolloProvider client={apolloClient}>
        <App/>
    </ApolloProvider>, document.getElementById('root'));
