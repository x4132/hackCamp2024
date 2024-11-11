import { Image, Card, Flex, Space, TextInput, Text } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import Icon from "./assets/person-circle.svg";
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

            <Card style={{ alignSelf: "center" }} w={"80%"} bg={"#42464B"}>
                <Image radius="md" src={Icon} />
                <Flex direction="row">
                    <Flex w={"50%"} direction={"column"}>
                        <Text fz={"xl"}>Eileen</Text>
                        <Text>Digital Artist</Text>
                    </Flex>
                    <Text w={"50%"} style={{ textAlign: "right" }}>
                        Vancouver
                    </Text>
                </Flex>
                <Space h={"xl"}></Space>
            </Card>
        </Flex>
    )
}



