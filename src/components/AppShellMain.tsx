import { AppShell, Burger, Avatar, Group, Title, Button } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconUser } from "@tabler/icons-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function AppShellMain({ children }: { children: React.ReactNode }) {
    const [opened, { toggle }] = useDisclosure();
    const location = useLocation();
    const navigate = useNavigate();

    return (
        <AppShell
            header={{ height: 60 }}
            navbar={{
                width: 300,
                collapsed: { mobile: !opened, desktop: true },
                breakpoint: "sm"
            }}
        >
            <AppShell.Header bg={`rgba(0,0,0,${location.pathname === "/" ? 0 : 0.5})`}>
                <Group h="100%" px="md">

                    <Link to="/" style={{ textDecoration: "none", color: "white" }} >
                        <Title order={1} fs="italic" className="logo" display={location.pathname === "/" ? "none" : "inline"} >
                            Quikk
                        </Title>
                    </Link>

                    {sessionStorage.getItem("loggedIn") === "true" ?
                        <Avatar component="button" style={{ cursor: "pointer" }} ml="auto" variant="subtle" size="md" radius="xl" px="xs" onClick={() => navigate("/account")}>
                            <IconUser />
                        </Avatar>
                        : <>
                            <Button variant="subtle" ms="auto" onClick={() => (navigate("/login"))}>Log In</Button>
                            <Button onClick={() => (navigate("/signup"))}>Sign Up</Button>
                        </>}


                    <Burger
                        opened={opened}
                        onClick={toggle}
                        hiddenFrom="sm"
                        size="sm"
                    />

                </Group>
            </AppShell.Header>
            <AppShell.Navbar></AppShell.Navbar>
            <AppShell.Main h="100%" >
                {children}
            </AppShell.Main>
        </AppShell>
    )
}
