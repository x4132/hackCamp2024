import { Flex, Button, Title, Image } from "@mantine/core";
import IconEmail from "./assets/email-icon.svg";
import IconApple from "./assets/apple-icon.svg";
import IconGoogle from "./assets/google-icon.png";

export default function Login() {
    return (
        <Flex mih="100vh" pos="fixed" w="100vh" pt="60px" bg="white" gap="xl" direction="column">
            <Title fs="normal" size="h1" c="black" fw={500}>
                Create an account
            </Title>

            <Flex w="100vh" direction="column" align="center" gap="lg">
                <Button variant="filled" size="md" color="#f1f1f1" autoContrast leftSection={<Image src={IconEmail} w={22} h={22}/>} w={290} justify="center">Sign up with email</Button>

                <Button variant="filled" size="md" color="#f1f1f1" autoContrast leftSection={<Image src={IconGoogle} w={20} h={20}/>} w={290} justify="center">Sign up with Google</Button>

                <Button variant="filled" size="md" color="#f1f1f1" autoContrast leftSection={<Image src={IconApple} w={20} h={20}/>} w={290} justify="center">Sign up with Apple</Button>
            </Flex>

        </Flex>
    )
}
