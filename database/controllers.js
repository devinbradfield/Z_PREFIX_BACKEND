const knex = require("./dbConnection");

module.exports = {
  //Posts
  getAllPosts: () => {
    return knex.select("*").from("posts");
  },
  getPostByUserid: (param) => {
    return knex.select("*").from("posts").where({ userid: param });
  },
  getPostByTitle: (param) => {
    return knex.select("*").from("posts").where({ id: param });
  },
  postPost: (body) => {
    return knex.insert(body).from("posts");
  },
  updatePost: (param, body) => {
    return knex.select("*").from("posts").where({ id: param }).update(body);
  },
  removePost: (param) => {
    return knex.select("*").from("posts").where({ id: param }).del();
  },
   // Users

  getAllUsers: () => {
    return knex.select("*").from("users");
  },
  updateUser: (param, body) => {
    return knex.select("*").from("users").where({ ID: param }).update(body);
  },
  postUser: (body) => {
    return knex.insert(body).from("users");
  },
  removeuser: (param) => {
    return knex.select("*").from("users").where({ id: param }).del();
  },
  getUserById: (param) => {
    return knex.select("*").from("users").where({ id: param });
  },
  getUserQueries: (query) => {
    return knex.select('*').from('users').where(query);
  },

  // User Account Methods
  createUser: (firstname, lastname, username, passwordhashed) => {
    return knex("users").insert({ firstname, lastname, username, passwordhashed });
  },
  getPasswordHashForUser: (username) => {
    return knex("users")
      .where({ username })
      .select("passwordhashed")
      .then((data) => data[0].passwordhashed);
  },

  getIdForUser: (username) => {
    return knex("users")
      .where({ username })
      .select("id")
      .then((data) => data)
      .catch((err) => console.log(err));
  },
};
