// db.js
import postgres from "postgres";

const sql = postgres(
  "postgres://postgres:Verysecret!123@localhost:5432/clouddatabase"
); // will use psql environment variables

export default sql;
