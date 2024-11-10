import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Root from './Root.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AppShellMain from './components/AppShellMain.tsx'

import "@mantine/core/styles.css";
import { MantineProvider, createTheme } from "@mantine/core";
import Login from './Login.tsx'
import Swipe from './Swipe.tsx'

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
                        <Route path="/login" element={<Login />} />
                        <Route path="/swipe" element={<Swipe />}/>
                    </Routes>
                </AppShellMain>
            </MantineProvider>
        </BrowserRouter>
    </StrictMode>,
)
