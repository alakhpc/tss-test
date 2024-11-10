import { Button, Card, Flex, Heading, Text } from "@radix-ui/themes";
import { Link, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <Flex justify="center" align="center" height="100%">
      <Card size="3">
        <Flex direction="column" align="center" gap="3" p="4">
          <Heading size="6">Welcome</Heading>
          <Text color="gray">Please sign in to access your dashboard</Text>
          <Link to="/login">
            <Button variant="soft">Sign in</Button>
          </Link>
        </Flex>
      </Card>
    </Flex>
  );
}
