import { schedule } from "@netlify/functions";

const handler = async function (event, context) {
  await fetch(process.env.REBUILD_URL, { method: "POST" });
  return { statusCode: 200 };
};

module.exports.handler = schedule("@daily", handler);
