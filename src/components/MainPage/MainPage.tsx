import { useMediaQuery } from "react-responsive";
import { MainPageOnDesktop } from "./MainPageDesktop"
import { MainPageOnMobile } from "./MainPageMobile"



export const MainPage = () => {

    const isDes = useMediaQuery({
        query: "(min-device-width: 800px)",
    });
    const isMob = useMediaQuery({
        query: "(max-device-width: 800px)",
    });

    return (
        <>
            {isDes && <MainPageOnDesktop />}
            {isMob && <MainPageOnMobile />}
        </>
    )
}