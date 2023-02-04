import { json, type RequestHandler } from "@sveltejs/kit";
import { github } from "../../../api/github";

export const GET: RequestHandler = async ({ url }) => {
  const per_page = url.searchParams.get("per_page") ?? "5";

  try {
    const resp = await github.repos.listForUser({
      username: "tsivinsky",
      per_page: +per_page,
      sort: "updated",
    });

    return json(resp.data, { status: 200 });
  } catch (err) {
    return json({ error: err }, { status: 500 });
  }
};
