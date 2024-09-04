import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { MainPage } from "./MainPage/MainPage";
import { Header } from "./Header/Header";
import { MarcketplacePage } from "./Marcketplace/Marcketplace";

const Container = styled.div`
    width: 800px;
    height: calc(100vh - 100px);
    margin: 0 auto;
    @media (max-width: 800px) {
        width: 100%;
    }
`

const routes = [
    { path: '/', name: 'MainPage', element: <MainPage /> },
    { path: '/marcketplace', name: 'Marcketplace', element: <MarcketplacePage /> },
]


export const MainContainer   = () => {
    return (
        <Container>
            <Header />
            <Routes>
                {routes.map(({ path, element }) =>
                    <Route key={path} path={path} element={element} />
                )}
            </Routes>
        </Container>
    )
}