const { ApolloServer, gql } = require('apollo-server/dist/index');

const typeDefs = gql`    
    type UploadResult {
        id: String!
    }

    type Query {
        uploads: [UploadResult]
    }

    type Mutation {
        uploadFile(file: Upload!): UploadResult!
    }
`;

const resolvers = {

    Mutation: {
        uploadFile: (parent, args) => {
            return args.file.then(file => {

                return {
                    id: 'file_id_' + (Math.random() * 100000).toFixed().toString()
                };
            });
        },
    },
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});
