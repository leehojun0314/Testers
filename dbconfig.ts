require("dotenv").config();
import { config } from "mssql";
const sqlConfig: config = {
	user: process.env.DB_USER,
	password: process.env.DB_PWD,
	database: process.env.DB_NAME,
	server: process.env.DB_HOST || "",
	// pool: {
	// 	max: 10,
	// 	min: 0,
	// 	idleTimeoutMillis: 30000,
	// },
	options: {
		encrypt: false, //need to be false for no error occur
		// trustServerCertificate: false,
	},
};
export default sqlConfig;
