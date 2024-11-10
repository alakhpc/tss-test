import { createAPIFileRoute } from "@tanstack/start/api";
import { setCookie } from "vinxi/http";

export const Route = createAPIFileRoute("/api/auth/callbacks/provider")({
  GET: async () => {
    const redirectPath = "/dashboard";

    setCookie("session", "123");

    return new Response(null, {
      status: 302,
      headers: {
        Location: redirectPath,
      },
    });
  },
});
