// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import * as sql from "mssql";
import sqlConfig from "../../dbconfig";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<any>,
) {
	sql.connect(sqlConfig, (err) => {
		if (err) {
			console.error(err);
			res.status(500).send(err);
		} else {
			sql.query`select * from TestTable`
				.then((result) => {
					console.log("result: ", result);
					res.status(200).json(result);
				})
				.catch((err) => {
					console.log(err);
					res.status(500).send(err);
				});
		}
	});
	// sql
	// 	.connect(sqlConfig)
	// 	.then((pool) => {
	// 		console.log();
	// 		return pool.request().query("select * from TestTable");
	// 	})
	// 	.then((result) => {
	// 		console.log("result: ", result);
	// 		res.send(result);
	// 	})
	// 	.catch((err) => {
	// 		console.log("err: ", err);
	// 		res.status(500).send(err);
	// 	});
	// res.status(200).json({ name: "John Doe" });
}
