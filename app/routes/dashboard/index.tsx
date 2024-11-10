import { Button, Card, Flex, Heading, Text } from "@radix-ui/themes";
import { createFileRoute } from "@tanstack/react-router";
import { useLogout } from "~/services/auth.query";

export const Route = createFileRoute("/dashboard/")({
  component: RouteComponent,
});

function RouteComponent() {
  const logout = useLogout();
  const { userId } = Route.useRouteContext();

  const handleLogout = async () => {
    await logout.mutateAsync();
  };

  return (
    <Flex justify="center" align="center" height="100%">
      <Card size="3">
        <Flex direction="column" align="center" gap="3" p="4">
          <Heading size="6">Welcome to your Dashboard</Heading>
          <Text color="gray">You are logged in as user ID: {userId}</Text>
          <Button variant="soft" color="gray" onClick={handleLogout}>
            Sign out
          </Button>
        </Flex>
      </Card>
    </Flex>
  );
}
