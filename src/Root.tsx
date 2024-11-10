import { Flex, Title } from "@mantine/core"

import bgVideo from "./assets/bg.mp4";

function App() {
    return (
        <>
            <Flex direction="column" p="sm">
                <Title order={1} fs="italic" size="96" className="logo" >Quikk</Title>
            </Flex>

            <video autoPlay muted disablePictureInPicture disableRemotePlayback x-webkit-airplay="deny" aria-label="Video of workers using Quikk to make money" loop playsInline
            src={bgVideo} preload="auto" className="quikk-bg" >
            </video>
        </>
    )
}

export default App
