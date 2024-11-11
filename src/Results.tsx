import { Flex, TextInput } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";

export default function Results() {
    return (
        <Flex mih="100vh"
            pos="fixed"
            w="100vw"
            top="0"
            bg="#15191E"
            style={{ zIndex: 100 }}
            direction="column">
            <Flex mih="16vh"
                bg="#2E2E2E"
                justify="center"
                align="center"
            >
                <TextInput
                    leftSection={<IconSearch size={16} />}
                    w="1000vw"
                    pl="20px"
                    pr="20px"
                    placeholder="<ai summary of search>" 
                    radius="lg" 
                    variant="filled" 
                    pt="70px"
                    />

            </Flex>
        </Flex>
    )
}