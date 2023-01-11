import knex from "knex";

// export default knex({
//   client: "mysql2",
//   connection: {
//     host: "127.0.0.1",
//     port: 3306,
//     user: "root",
//     password: "",
//     database: "academydb",
//   },
// });
export default knex({
  client: "mysql2",
  connection: {
    host: "ba2gjnbjd92cg0aabbch-mysql.services.clever-cloud.com",
    port: 3306,
    user: "uxofrgawfza3ggxo",
    password: "w2fKD8f2fYxfyFhC7FfN",
    database: "ba2gjnbjd92cg0aabbch",
  },
});
