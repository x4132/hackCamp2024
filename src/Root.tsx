import { Flex, Group, Text, Title } from "@mantine/core"

import bgVideo from "./assets/bg.mp4";

export const thingsToDo = ["Kitchen Remodel", "Landscaping", "New Computer", "Photo Edits", "Proposal", "Wedding"];

function App() {

    return (
        <>
            <Flex direction="column" p="sm" gap="xl">
                <Title order={1} fs="italic" size="96" className="logo" >Quikk</Title>

                <Flex direction="column" gap="none" lh="xs" my="xl" >
                    <Title order={2} size="48" >Any Task.<br />Any Time.</Title>
                </Flex>


                <Group gap="0" align="start">
                    <Text>
                        Get Help with your&nbsp;
                    </Text>
                    <Flex direction="column" id="thingsToDo" >
                        {thingsToDo.map(thing => (<Text>{thing}</Text>))}
                    </Flex>
                </Group>
            </Flex>

            <video autoPlay muted disablePictureInPicture disableRemotePlayback x-webkit-airplay="deny" aria-label="Video of workers using Quikk to make money" loop playsInline
                src={bgVideo} preload="auto" className="quikk-bg" >
            </video>
        </>
    )
}

export default App
