import { Flex, Input } from "@mantine/core";

export default function Results() {
    return (
        <Flex mih="100vh"
            pos="fixed"
            w="100vw"
            top="0"
            bg="dark"
            style={{ zIndex: 100 }}
            direction="column">
            <Flex mih="16vh"
                bg="#2E2E2E"
                justify="center"
                align="center"
            >
                <Input size="xl"
                    radius="lg"
                    
                    placeholder="<ai summary of search>" />
            </Flex>
        </Flex>
    )
}