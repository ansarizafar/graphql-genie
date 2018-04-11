import { GraphQLGenie } from './GraphQLGenie';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { SchemaLink } from 'apollo-link-schema';
import gql from 'graphql-tag';

const typeDefs = `
"""
Schema metadata for use in displaying the schema
"""
directive @display(
  name: String
) on FIELD_DEFINITION | ENUM_VALUE | OBJECT

directive @relation(
  name: String
) on FIELD_DEFINITION

directive @model on OBJECT

interface Node {
  id: ID! @isUnique
}

type Post @model {
  id: ID! @isUnique
  title: String!
  author: User @relation(name: "WrittenPosts")
  likedBy: [User!]! @relation(name: "LikedPosts")
}

type User @model {
  id: ID! @isUnique
  name : String!
  address: Address @relation(name: "UserAddress")
  writtenPosts: [Post!]! @relation(name: "WrittenPosts")
  likedPosts: [Post!]! @relation(name: "LikedPosts")
}

type Address @model {
  id: ID! @isUnique
  city: String!
  user: User @relation(name: "UserAddress")
}
`;



const genie = new GraphQLGenie({ typeDefs });

const buildClient = async (genie: GraphQLGenie) => {
	const schema = await genie.getSchema();
	// const resolverMap = {
	// 	Query: {
	// 		allTestings: (_obj, { _name }, _context) => {
	// 			return state.testings;
	// 		},
	// 	},
	// 	Mutation: {
	// 		addTesting: (_, { name }, _context) => {
	// 			const testing = { name: name };
	// 			state.testings.push(testing);
	// 			return testing;
	// 		},
	// 	},
	// };
	// // for (const [name, resolve] of newQueryResolvers) {
	// // 	resolverMap.Query[name] = resolve;
	// // }
	console.log(schema);
	// const resolversMap = new Map<string, GraphQLFieldResolver<any, any>>();
	// resolversMap.set('args', (
	// 	_root: any,
	// 	_args: { [key: string]: any },
	// 	_context: any,
	// 	_info: GraphQLResolveInfo,
	// ): any => {
	// 	const selections = computeIncludes(_info.operation.selectionSet.selections[0], 'GraphQLDirective');
	// 	console.info('selections');
	// 	console.info(selections);
	// 	console.info(JSON.stringify(selections));
	// 	console.log(_root);
	// 	console.log(_args);
	// 	console.log(_context);
	// 	console.log(_info);
	// });
	// addResolvers('GraphQLDirective', resolversMap);
	const client = new ApolloClient({
		link: new SchemaLink({ schema: schema }),
		cache: new InMemoryCache(),
		connectToDevTools: true
	});
	client.initQueryManager();
	console.log(client);

	const createPost = gql`
		mutation createPost($title: String!) {
			createPost(title: $title) {
				id
			}
		}
	`;

const createUser = gql`
mutation createUser($name: String!) {
	createUser(name: $name) {
		id
	}
}
`;

const createAddress = gql`
mutation createAddress($city: String!) {
	createAddress(city: $city) {
		id
	}
}
`;
	const post = await client.mutate({
		mutation: createPost,
		variables: { title: 'bam post' }
	})
	const user = await client.mutate({
		mutation: createUser,
		variables: { name: 'Corey' }
	})
	const address = await client.mutate({
		mutation: createAddress,
		variables: { city: 'Eau Claire' }
	})
	console.log('post',post.data.createPost.id,
	'user', user.data.createUser.id, 
	'address',address.data.createAddress.id);

	// client.mutate({
	// 	mutation: gql`mutation {
	// 		setUserAddress (addressAddressId:"9gFXv_BuLNPW19q", userUserId:"M4AQV51bbQgqvD9") {
	// 			addressAddress {
	// 				id
	// 				city
	// 				user {
	// 					name
	// 				}
	// 			}
	// 			userUser {
	// 				id
	// 				name
	// 				address {
	// 					city
	// 				}
	// 			}
	// 		}
	// 	}`
	// })

	// mutation {
	// 	addToWrittenPosts(writtenPostsPostId: "rMxFhntFzZWTNU1" authorUserId: "QRX3X1pER7bPJFT") {
	// 		writtenPostsPost{
	// 			title
	// 			author {
	// 				name
	// 			}
	// 		}
	// 		authorUser {
	// 			name
	// 			writtenPosts {
	// 				title
	// 			}
	// 		}
	// 	}
	// }
	
	// mutation {
	// 	addToLikedPosts(likedPostsPostId: "AIl4McpfFIKvQ4G", likedByUserId: "QOK0khLNpq3eX0F") {
	// 		likedPostsPost {
	// 			title
	// 			likedBy {
	// 				name
	// 			}
	// 		}
	// 		likedByUser {
	// 			name
	// 			likedPosts {
	// 				title
	// 			}
	// 		}
	// 	}
	// }
	
}

buildClient(genie);