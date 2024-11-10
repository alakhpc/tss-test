import { QueryClient } from "@tanstack/react-query";
import { createRouter as createTanStackRouter } from "@tanstack/react-router";
import { routerWithQueryClient } from "@tanstack/react-router-with-query";
import { routeTree } from "./routeTree.gen";

export interface MyRouterContext {
  queryClient: QueryClient;
}

export function createRouter() {
  const queryClient = new QueryClient();

  const router = createTanStackRouter({
    routeTree,
    context: { queryClient },
    defaultNotFoundComponent: () => <div>Not found</div>,
  });

  return routerWithQueryClient(router, queryClient);
}

declare module "@tanstack/react-router" {
  interface Register {
    router: ReturnType<typeof createRouter>;
  }
}
