import { Flex, Input } from "@mantine/core";

export default function Results() {
    return (
        <Flex mih="100vh"
            pos="fixed"
            w="100vw"
            top="0"
            bg="black"
            style={{ zIndex: 100 }}
            direction="column">
            <Flex mih="16vh"
                bg="#2E2E2E"
                justify="center"
                align="center"
            >
                <Input size="xl"
                    radius="lg"
                    variant="filled"
                    c="white"
                    placeholder="<ai summary of search>" />
            </Flex>
            <Card></Card>
            
        </Flex>
    )
}

const Card = () => {
    return (
    <Flex direction="column"
          justify="center"
          align="center">
        card
    </Flex>)
}