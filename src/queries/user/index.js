import {gql} from "@apollo/client"

export const GET_ALL_USERS = gql`
{
  users{
    id,
    name,
    username,
    password,
    age,
    posts{
      id,
      text
    }
  }
}
`

export const GET_USER_BY_ID = gql`
query User($id: ID!){
  user(id: $id){
    id,
    name,
    username,
    password,
    age,
    posts{
      id,
      text
    }
  }
}
`

export const ADD_USER = gql`
mutation AddUser($name: String!, $username: String!, $password: String!, $age: Int!) {
  addUser(name: $name, username: $username, password: $password, age: $age) {
    name,
    username,
    password,
    age
  }
}
`

export const DELETE_USER = gql`
mutation DeleteUser($id: ID!) {
  deleteUser(id: $id) {
    name,
    username,
    password,
    age
  }
}
`
