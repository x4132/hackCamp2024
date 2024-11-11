import { Flex, Button, Title, Image, Divider, Text, Group } from "@mantine/core";
import IconEmail from "./assets/email-icon.svg";
import IconApple from "./assets/apple-icon.svg";
import IconGoogle from "./assets/google-icon.png";
import { Link } from "react-router-dom";

export default function Signup() {
    return (
        <Flex mih="100vh" pos="fixed" w="100vw" top="0" style={{ zIndex: 100 }} bg="white" gap="xl" direction="column" p="20px">
            <Title pt="150px" fs="normal" size="h1" c="black" fw={500}>
                Create an account
            </Title>

            <Flex direction="column" align="center" gap="md">
                <Button variant="filled" size="xl" color="#f1f1f1" autoContrast leftSection={<Image src={IconEmail} w={22} h={22} />} w={350} justify="center" onClick={() => navigate("/search")}>Sign up with email</Button>

                <Button variant="filled" size="xl" color="#f1f1f1" autoContrast leftSection={<Image src={IconGoogle} w={20} h={20} />} w={350} justify="center">Sign up with Google</Button>

                <Button variant="filled" size="xl" color="#f1f1f1" autoContrast leftSection={<Image src={IconApple} w={20} h={20} />} w={350} justify="center">Sign up with Apple</Button>
            </Flex>

            <Divider size="xs" color="#D9D9D9" label={<Text size="md">or</Text>} labelPosition="center" />

            <Group align="center" gap="0" justify="center" >
                <Text c="#535353" size="14px">
                    Already have a Quikk account?&nbsp;
                </Text>
                <Link to="/login">
                    Log in.
                </Link>
            </Group>

        </Flex>
    )
}
