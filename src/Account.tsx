import { Avatar, Flex, Text, Group, Title, Badge, Button } from "@mantine/core";
import DefaultPfp from "./assets/default-pfp.jpg";
import { IconStarFilled, IconStarHalfFilled } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";

export default function Account() {
    const navigate = useNavigate();

    function logout() {
        sessionStorage.setItem("loggedIn", "false");
        navigate("/");
    }

    return (
        <Flex p="sm" direction="column" align="center" gap="sm">
            <Title>Account</Title>
            <Group>
                <Avatar src={DefaultPfp} size="xl" ></Avatar>
                <Flex direction="column">
                    <Title>John Doe</Title>
                    <Text>Placeholder User</Text>
                </Flex>
            </Group>
            <Group gap="xs">
                <Badge color="red" >Freelancer</Badge><Badge color="yellow" >Top Rated</Badge>
            </Group>
            <Group gap="xs">
                <Text>Star Rating:</Text>
                <IconStarFilled />
                <IconStarFilled />
                <IconStarFilled />
                <IconStarFilled />
                <IconStarHalfFilled />
            </Group>

            <Button color="red" onClick={logout} >Log Out</Button>
        </Flex>
    )
}
