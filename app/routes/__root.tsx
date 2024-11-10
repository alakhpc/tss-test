import { Box, Theme } from "@radix-ui/themes";
import radixCss from "@radix-ui/themes/styles.css?url";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import {
  Outlet,
  ScrollRestoration,
  createRootRouteWithContext,
} from "@tanstack/react-router";
import { Body, Head, Html, Meta, Scripts } from "@tanstack/start";
import type { MyRouterContext } from "~/router";
import { authQueries } from "~/services/auth.query";

export const Route = createRootRouteWithContext<MyRouterContext>()({
  meta: () => [
    {
      charSet: "utf-8",
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1",
    },
    {
      title: "TanStack Start Starter",
    },
  ],
  links: () => [
    {
      rel: "icon",
      href: "/favicon.ico",
    },
    {
      rel: "stylesheet",
      href: radixCss,
    },
  ],
  beforeLoad: async ({ context }) => {
    const userId = await context.queryClient.ensureQueryData(
      authQueries.getUserId
    );
    console.log("__root beforeLoad userId: ", userId);
    return { userId };
  },
  component: RootComponent,
});

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  );
}

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <Html>
      <Head>
        <Meta />
      </Head>
      <Body>
        <Theme appearance="dark">
          <Box height="100vh">{children}</Box>
          <Scripts />
          <ScrollRestoration />
          <ReactQueryDevtools buttonPosition="bottom-right" />
        </Theme>
      </Body>
    </Html>
  );
}
