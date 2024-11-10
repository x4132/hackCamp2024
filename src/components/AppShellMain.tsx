import { AppShell, Burger, Group, Title } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

export default function AppShellMain({ children }: { children: React.ReactNode }) {
    const [opened, { toggle }] = useDisclosure();

    return (
        <AppShell
            header={{ height: 60 }}
            navbar={{
                width: 300,
                collapsed: { mobile: !opened, desktop: true },
                breakpoint: "sm"
            }}
        >
            <AppShell.Header bg={"rgba(0,0,0,0.5)"}>
                <Group h="100%" px="md">

                    <Title order={1} fs="italic" className="logo" >
                        Quikk
                    </Title>

                    <Burger
                        opened={opened}
                        onClick={toggle}
                        hiddenFrom="sm"
                        size="sm"
                        ml="auto"
                    />

                </Group>
            </AppShell.Header>
            <AppShell.Navbar></AppShell.Navbar>
            <AppShell.Main>
                {children}
            </AppShell.Main>
        </AppShell>
    )
}
