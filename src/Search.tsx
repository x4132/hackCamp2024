import { Button, Flex, Group, TextInput, Title, Text } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Search() {
    const [input, setInput] = useState("");
    const navigate = useNavigate();

    function searchIt(query: string) {
        let params = new URLSearchParams();
        params.set("query", query);
        navigate("/results?" + params.toString());
    }

    return (
        <>
            <Flex direction="column" align="center" justify="center" pos="fixed" mt="-60px" w="100vw" h="100vh" gap="sm" px="sm">
                <Title order={1}>
                    What are you looking to do today?
                </Title>

                <Group w="100%" justify="center" align="center" gap="xs">
                    <TextInput w={{ sm: "75%", md: "50%" }} placeholder="I'm looking to do..." radius="xl" variant="filled" value={input} onChange={(evt) => (setInput(evt.target.value))} />
                    <Button radius="xl" m="0" px="xs" onClick={() => searchIt(input)} >
                        <IconSearch />
                        <Text display={{ sm: "none", md: "block" }}></Text>
                    </Button>
                </Group>

                <Group w={{ sm: "100%", md: "50%" }} justify="center" align="center" >
                    <Button variant="light" radius="xl" onClick={(evt) => searchIt(evt.currentTarget.innerText)}>Landscaping</Button>
                    <Button variant="light" color="grape" radius="xl" onClick={(evt) => searchIt(evt.currentTarget.innerText)}>Interior Design</Button>
                    <Button variant="light" color="yellow" radius="xl" onClick={(evt) => searchIt(evt.currentTarget.innerText)}>Hire a Photographer</Button>
                </Group>
            </Flex>
        </>
    )
}
