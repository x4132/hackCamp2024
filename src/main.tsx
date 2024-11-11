import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Root from './Root.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AppShellMain from './components/AppShellMain.tsx'

import "@mantine/core/styles.css";
import { MantineProvider, createTheme } from "@mantine/core";
import Signup from './Signup.tsx'
import Results from './Results.tsx'
import Search from './Search.tsx'
import Login from './Login.tsx'
import Account from './account.tsx'

const theme = createTheme({
    fontFamily: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif',
    headings: {
        fontWeight: "400",
        fontFamily: "Inter"
    }
})


createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <MantineProvider defaultColorScheme='dark' theme={theme} >
                <AppShellMain>
                    <Routes>
                        <Route path="/" element={<Root />} />
                        <Route path="/signup" element={<Signup />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/results" element={<Results />}/>
                        <Route path="/search" element={<Search />} />
                        <Route path="/account" element={<Account />} />
                    </Routes>
                </AppShellMain>
            </MantineProvider>
        </BrowserRouter>
    </StrictMode>,
)
