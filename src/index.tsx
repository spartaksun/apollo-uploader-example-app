import React from 'react';
import ReactDOM from 'react-dom';
import {ApolloProvider} from 'react-apollo';
import {ApolloClient} from "apollo-client";
import {createUploadLink, Uploader} from "apollo-uploader";
import {InMemoryCache} from "apollo-cache-inmemory";
import gql from "graphql-tag";
import App from './App';

const mutation = gql`
    mutation uploadFile($file: Upload!, $bucket: String, $crop: CropInput ) {
        uploadFile(file: $file, bucket: $bucket, crop: $crop) {
            id
        }
    }
`;

const apolloClient = new ApolloClient({
    link: createUploadLink('http://localhost'), // concat with your other links (i.e. http, error etc.)
    cache: new InMemoryCache({})
});
Uploader.init({
    apolloClient,
    mutation
});

ReactDOM.render(
    <ApolloProvider client={apolloClient}>
        <App/>
    </ApolloProvider>, document.getElementById('root'));
