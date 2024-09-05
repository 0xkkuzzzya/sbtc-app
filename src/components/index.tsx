import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { MainPage } from "./MainPage/MainPage";
import { Header } from "./Header/Header";
import { MarketplacePage } from "./MarketplacePage/Marketplace";


const Container = styled.div`
    width: 800px;
    margin: 0 auto;
    @media (max-width: 800px) {
        width: 100%;
    }
`

const routes = [
    { path: '/', name: 'MainPage', element: <MainPage /> },
    { path: '/marketplace', name: 'marketplace', element: <MarketplacePage /> },
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