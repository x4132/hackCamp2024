/* eslint-disable @typescript-eslint/no-unused-vars */
import { AspectRatio, Button, Drawer, Flex, ScrollArea } from "@mantine/core";
import { useState } from "react";
import { useDisclosure } from '@mantine/hooks';
import DefaultPfp from "./assets/default-pfp.jpg";

export default function Profile() {
    const [visible, setVisible] = useState(true);
    const [opened, { open, close }] = useDisclosure(false);

    return (
        <>
            <Flex bg="#42464B"
                direction="column"
                align="center"
            >
                <AspectRatio ratio={1} maw={400} mx="auto" pos="fixed" pt="15px">
                    <img
                        src={DefaultPfp}
                        alt="freelancer-photo"
                    />
                    {visible}
                </AspectRatio>
                <Drawer position="bottom"
                    opened={opened}
                    onClose={close}
                    title="John Doe"
                    size="80vh"
                    overlayProps={{ backgroundOpacity: 0, blur: 0 }}
                    scrollAreaComponent={ScrollArea.Autosize}>

                    [freelancer introduction]
                </Drawer>


            </Flex>

            <Button onClick={open}>placeholder, implement draggable</Button>
        </>
    )
}