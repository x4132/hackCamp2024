import { Card, Flex, Text, Image, Title, Group, Badge } from "@mantine/core";
import Profile from "./assets/default-pfp.jpg";

export default function Freelancers() {
    return (
        <Flex direction="column" align="center" p="sm" gap="sm">

            <Card ta="center" p="sm" w={{ base: "100%", md: "50%" }} >
                <Card.Section >
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

            </Card>
        </Flex >
    )
}
