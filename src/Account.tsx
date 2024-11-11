import { Avatar, Flex, Text, Group, Title, Badge } from "@mantine/core";
import DefaultPfp from "./assets/default-pfp.jpg";

export default function Account() {
    return (
        <Flex p="sm" direction="column" align="center">
            <Title>Account</Title>
            <Group>
                <Avatar src={DefaultPfp} size="xl" ></Avatar>
                <Flex direction="column">
                    <Title>John Doe <Badge color="red" >Freelancer</Badge></Title>
                    <Text>Placeholder User</Text>
                </Flex>
            </Group>
        </Flex>
    )
}
