import { Flex, Button, Title, Image, Divider, Text } from "@mantine/core";
import IconEmail from "./assets/email-icon.svg";
import IconApple from "./assets/apple-icon.svg";
import IconGoogle from "./assets/google-icon.png";

export default function Login() {
    return (
        <Flex mih="100vh" pos="fixed" w="100vw" top="0" style={{ zIndex: 100 }} bg="white" gap="xl" direction="column" p="20px">
            <Title pt="150px" pl="20px" fs="normal" size="h1" c="black" fw={500}>
                Create an account
            </Title>

            <Flex direction="column" align="center" gap="md">
                <Button variant="filled" size="xl" color="#f1f1f1" autoContrast leftSection={<Image src={IconEmail} w={22} h={22} />} w={350} justify="center">Sign up with email</Button>

                <Button variant="filled" size="xl" color="#f1f1f1" autoContrast leftSection={<Image src={IconGoogle} w={20} h={20} />} w={350} justify="center">Sign up with Google</Button>

                <Button variant="filled" size="xl" color="#f1f1f1" autoContrast leftSection={<Image src={IconApple} w={20} h={20} />} w={350} justify="center">Sign up with Apple</Button>
            </Flex>

            <Divider size="xs" color="#D9D9D9" label={<Text size="md">or</Text>} labelPosition="center" />

            <Flex direction="row" justify="center">
                <Text c="#535353" size="14px">
                    Already have a Quikk account?&nbsp;
                </Text>
                <Text c="#0289FF" size="14px">
                    Log in.
                </Text>
            </Flex>

        </Flex>
    )
}
