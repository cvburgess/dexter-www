export default async function () {
  await fetch(process.env.REBUILD_URL, { method: "POST" });
  return { statusCode: 200 };
}

export const config = {
  schedule: "0 0 * * *", // Every day at midnight
};
