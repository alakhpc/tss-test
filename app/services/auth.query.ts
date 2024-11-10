import {
  queryOptions,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { useRouter } from "@tanstack/react-router";
import { $getUserId, $logout } from "./auth.api";

export const authQueries = {
  getUserId: queryOptions({
    queryKey: ["auth", "getUserId"],
    queryFn: async () => await $getUserId(),
  }),
};

export function useProviderLogin() {
  return useMutation({
    mutationFn: async () => {
      return { url: "/api/auth/callbacks/provider" };
    },
  });
}

export function useLogout() {
  const router = useRouter();
  const qc = useQueryClient();

  return useMutation({
    mutationFn: async () => await $logout(),
    onSuccess: async () => {
      console.log("Removing auth query data");
      qc.removeQueries({ queryKey: ["auth", "getUserId"] });
      console.log("Invalidating router");
      await router.invalidate();
    },
  });
}
