import { Image, Card, Flex, TextInput, Text, Group, Button, Title, Badge, Center } from "@mantine/core";
import { IconMinus, IconPlus, IconSearch } from "@tabler/icons-react";
import Profile from "./assets/default-pfp.jpg";
import AlexTaylor from "./assets/ataylor.jpg";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function getCard({ dragPosition, dragOrigin, card }: { dragPosition: number, dragOrigin: string, card: number }) {
    const cards = [
        <>
            <Card.Section style={{ transform: `rotate(${dragPosition}deg)`, transformOrigin: dragOrigin }} >
                <Image src={AlexTaylor} ms="auto" me="auto" draggable={false} />
            </Card.Section>

            <Group>
                <Title order={1} mt={4} >Alex Taylor</Title>
                <Text ms="auto" size="xl">Photographer</Text>
            </Group>
            <Text ta="justify" mt="md">
                Alex Taylor is a talented photographer based in Vancouver, BC, with over a decade of experience in capturing stunning landscapes, expressive portraits, and dynamic event photography. Inspired by the natural beauty of the Pacific Northwest, Alex excels in showcasing the region's breathtaking vistas. Known for a keen eye and creative approach, Alex brings out the unique personality of each subject in portrait sessions. With a knack for capturing the essence of events, Alex provides clients with a comprehensive visual story of their special occasions.
            </Text>
        </>
        ,
        <>
            <Card.Section style={{ transform: `rotate(${dragPosition}deg)`, transformOrigin: dragOrigin }} >
                <Image src={Profile} ms="auto" me="auto" draggable={false} />
            </Card.Section>

            <Group>
                <Title order={1} mt={4} >John Doe</Title>
                <Text ms="auto" size="xl">Photographer</Text>
            </Group>
            <Group mt={8}>
                <Badge color="yellow">Top Rated</Badge>
            </Group>

            <Text ta="justify" mt="md">
                John Doe is a highly skilled photographer based in Vancouver, BC, with over a decade of experience specializing in landscape, portrait, and event photography. Inspired by the stunning natural beauty of British Columbia, John excels in capturing breathtaking landscapes and has a keen eye for creating compelling portraits that reveal the unique personalities of his subjects. His unobtrusive style and attention to detail make him a sought-after event photographer, adept at documenting weddings, corporate events, and community gatherings. John's work has been featured in various publications and exhibitions, and he remains committed to delivering high-quality images that exceed client expectations.
            </Text>
        </>,
        <>
            <Group>
                <Title order={1} mt={4} >No more results found.</Title>
            </Group>
        </>

    ]

    return cards[card];
}

export default function Results() {
    const [input, setInput] = useState("");
    const [query, setQuery] = useState("loading...");
    const [dragPosition, setDragPosition] = useState(0);
    const [mouseDown, setMouseDown] = useState(false);
    const [x, setX] = useState(0);
    const [startX, setStartX] = useState(window.innerWidth / 2);
    const [cards, setCard] = useState(0);
    const location = useLocation();
    const navigate = useNavigate();

    function mouseMoveListener(evt: MouseEvent) {
        setX(evt.x);
    }

    useEffect(() => {
        window.addEventListener("mousemove", mouseMoveListener);
        return () => {
            window.removeEventListener("mousemove", mouseMoveListener);
        }
    }, [])

    useEffect(() => {
        if (mouseDown) {
            setStartX(x);
        } else {
            if (dragPosition < -60) {
                setCard(prev => (prev + 1));
            } else if (dragPosition > 60) {
                navigate("/freelancers?freelancer=" + cards);
            }
            setDragPosition(0);
            setStartX(window.innerWidth / 2);
        }
    }, [mouseDown, setStartX])

    useEffect(() => {
        if (mouseDown) {
            setDragPosition((x - startX) / 4);
        }
    }, [x, startX, mouseDown])

    function searchIt(query: string) {
        const params = new URLSearchParams();
        params.set("query", query);
        navigate("/results?" + params.toString());
    }

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        setInput(params.get("query") || "");
        setQuery(params.get("query") || "");
        if (params.get("query") !== "Photographers") {
            setCard(2);
        }
    }, [location, setInput])

    let dragOrigin;
    if (dragPosition > 0) {
        dragOrigin = "bottom right"
    } else {
        dragOrigin = "bottom left";
    }

    return (
        <>
            <Center pos="fixed" left="0" top="0" h="100vh" bg="red" w="15%" opacity={dragPosition < -15 ? Math.abs(dragPosition) / 90 : 0} style={{ zIndex: 50, borderTopRightRadius: "100%", borderBottomRightRadius: "100%" }} >
                <IconMinus />
            </Center>

            <Center pos="fixed" right="0" top="0" h="100vh" bg="green" w="15%" opacity={dragPosition > 15 ? Math.abs(dragPosition) / 90 : 0} style={{ zIndex: 50, borderTopLeftRadius: "100%", borderBottomLeftRadius: "100%" }} >
                <IconPlus />
            </Center>


            <Flex direction="column" align="center" p="sm" gap="sm">
                <Group w="100%" justify="center" align="center" gap="xs">
                    <TextInput w={{ sm: "75%", md: "50%" }} placeholder="I'm looking to do..." radius="xl" variant="filled" value={input} onChange={(evt) => (setInput(evt.target.value))} />
                    <Button radius="xl" m="0" px="xs" onClick={() => searchIt(input)} >
                        <IconSearch />
                        <Text display={{ sm: "none", md: "block" }}></Text>
                    </Button>
                </Group>

                <Title>Results for "{query}"</Title>

                <Card ta="center" p="sm" w={{ base: "100%", md: "50%" }} onMouseDown={() => setMouseDown(true)} onMouseUp={() => setMouseDown(false)}>
                    {getCard({ dragPosition: dragPosition, dragOrigin: dragOrigin, card: cards })}
                </Card>
            </Flex >
        </>
    )
}



