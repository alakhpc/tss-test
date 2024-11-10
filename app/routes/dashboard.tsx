import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard")({
  beforeLoad: async ({ context }) => {
    console.log("dashboard beforeLoad userId: ", context.userId);

    if (!context.userId) {
      throw redirect({ to: "/login" });
    }

    return {
      ...context,
      userId: context.userId,
    };
  },
});
