import { createServerFn } from "@tanstack/start";
import { deleteCookie, getCookie } from "vinxi/http";

export const $getUserId = createServerFn("GET", async () => {
  return getCookie("session") ?? null;
});

export const $logout = createServerFn("POST", async () => {
  deleteCookie("session");
});
