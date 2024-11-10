import { Button, Flex } from "@radix-ui/themes";
import { createFileRoute, redirect } from "@tanstack/react-router";
import { useProviderLogin } from "~/services/auth.query";

export const Route = createFileRoute("/login")({
  beforeLoad: async ({ context }) => {
    if (context.userId) {
      throw redirect({ to: "/dashboard" });
    }
  },
  component: LoginPage,
});

function LoginPage() {
  const providerLogin = useProviderLogin();

  const handleProviderLogin = async () => {
    const { url } = await providerLogin.mutateAsync();
    window.location.href = url;
  };

  return (
    <Flex justify="center" align="center" height="100%">
      <Button variant="outline" size="3" onClick={handleProviderLogin}>
        Sign in with provider
      </Button>
    </Flex>
  );
}
