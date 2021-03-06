import {gql} from "@apollo/client"

export const GET_ALL_POSTS = gql`
{
  posts{
    id,
    text,
    user{
      id,
      name,
      username,
      password,
      age
    }
  }
}
`

export const GET_POST_BY_ID = gql`
query Post($id: ID!){
  post(id: $id){
    id,
    text,
    user{
      id,
      name,
      username,
      password,
      age
    }
  }
}
`


export const ADD_POST = gql`
mutation AddPost($text: String!, $userid: ID!) {
  addPost(text: $text, userid: $userid) {
    id,
    text,
    user{
      id,
      name,
      username,
      password,
      age
    }
  }
}
`

export const DELETE_POST = gql`
mutation DeletePost($id: ID!) {
  deletePost(id: $id) {
    id,
    text,
    user{
      id,
      name,
      username,
      password,
      age
    }
  }
}
`