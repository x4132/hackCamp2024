import { Button, Flex, Group, MantineTransition, Text, Title, Transition } from "@mantine/core"
import { IconBrandAppleFilled } from "@tabler/icons-react";

import bgVideo from "./assets/bg.mp4";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

let timeout: number;

function App() {
    const thingsToDo = ["Kitchen Remodel", "Landscaping", "New Computer", "Photo Edits", "Taxes", "Wedding", "Printer"];
    const navigate = useNavigate();
    const carouselTransition: MantineTransition = {
        in: {
            transformOrigin: "bottom",
            transform: "translateY(0%)",
            opacity: 1
        },
        out: {
            opacity: 0,
            transform: "translateY(100%)",
            transitionDuration: "0ms",
        },
        common: {
            transformOrigin: "bottom",
            opacity: 1
        },


        transitionProperty: "transform, opacity"
    }

    const [counter, setCounter] = useState<number>(0);
    const [transform, setTransform] = useState(false);

    useEffect(() => {
        const intervalDelay = 5000;
        setCounter(prev => (prev + 1));
        setTransform(true);
        setInterval(() => setTransform(false), intervalDelay - 25);
        timeout = setInterval(() => {
            setTransform(true);
            setCounter(prev => (prev + 1));
            setTimeout(() => {
                setTransform(false);
            }, intervalDelay - 25)
        }, intervalDelay)

        return () => {
            clearInterval(timeout);
        }
    }, [setCounter, setTransform])

    return (
        <>
            <Flex direction="column" p="sm" gap={{ sm: "xl", md: "md" }} h="100%" >
                <Title order={1} fs="italic" size="96" className="logo" >Quikk</Title>

                <Flex direction="column" gap="none" lh="xs" my="xl" >
                    <Title order={2} size="48" >Any Task.<br />Any Time.</Title>
                </Flex>


                <Group gap="0" align="start" fz={{ sm: "md", md: "xl" }} mih="64px" >
                    <Text fz={{ sm: "md", md: "xl" }}>
                        Get Help with your&nbsp;
                    </Text>
                    <Flex direction="column" id="thingsToDo" >
                        <Transition
                            mounted={transform}
                            transition={carouselTransition}
                            duration={500}
                            timingFunction="ease"
                        >
                            {(styles) => <div style={styles}>{thingsToDo[counter % thingsToDo.length]}</div>}
                        </Transition>
                        <Transition
                            mounted={transform}
                            transition={carouselTransition}
                            duration={500}
                            timingFunction="ease"
                        >
                            {(styles) => <div style={styles}>{thingsToDo[(counter + 1) % thingsToDo.length]}</div>}
                        </Transition>
                    </Flex>
                </Group>

                <Button mt={35} display={{ base: 'none', md: 'block' }} variant="white" c="dark" w={{ md: "25%" }} p="md" miw="12rem" size="32" radius="xl" mih="72px" onClick={() => navigate("/signup")}>
                    Try for Free
                </Button>
            </Flex>

            <Flex direction="column" display={{ sm: "flex", md: "none" }} pos="fixed" bottom="0" w="100%" p="sm" gap="sm" align="center" >
                <Button variant="white" c="dark" mb="0" fullWidth w={{ md: "50%", lg: "25%" }} leftSection={<IconBrandAppleFilled />} onClick={() => (location.assign("https://appleid.apple.com/auth/authorize?client_id=WIP"))} >
                    Sign in with Apple
                </Button>
                <Button variant="white" c="dark" fullWidth w={{ md: "50%", lg: "25%" }} onClick={() => navigate("/signup")} >
                    Sign Up
                </Button>
                <Button color="dark" fullWidth w={{ md: "50%", lg: "25%" }} onClick={() => navigate("/login")}>
                    Log In
                </Button>
            </Flex>

            <video autoPlay muted disablePictureInPicture disableRemotePlayback x-webkit-airplay="deny" aria-label="Video of workers using Quikk to make money" loop playsInline
                src={bgVideo} preload="auto" className="quikk-bg" >
            </video>
        </>
    )
}

export default App
