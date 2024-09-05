import styled from "styled-components";
import MinerLogo from '../../assets/MinerLogo.png'
import { MarketplaceLink } from "../CustomLinks/MarketplaceLinks";
import { useState } from "react";
import { MinersBlock } from "./Blocks/MinersBlock";
import { InstantSellBlock } from "./Blocks/InsatntsSellBlock";
import { CreateOrderBlock } from "./Blocks/CreateOrderBlock";

const Container = styled.div`
    width: 100%;
`

const TitleBlock = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 70px;
`

const Title = styled.a`
    font-size: 40px;
    font-weight: 600;
    color: #fff;
    line-height: 1.2;
`

const NFTImage = styled.img`
    width: 210px;
    height: 210px;
`

const FastInfoContainer = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
    margin-top: 40px;
`

const FastInfoBlock = styled.div`
    width: 160px;
    display: flex;
    align-items: center;
    flex-direction: column; 
    text-align: centers;
    gap: 10px;
`

const FastInfoWhiteText = styled.a`
    font-size: 20px;
    font-weight: 600;
    color: #fff;
    white-space: nowrap;
`

const FastInfoGrayText = styled.a`
    font-size: 20px;
    font-weight: 600;
    color: #888;
    white-space: nowrap;
`

const GreyLine = styled.div`
    width: 100%;
    height: 1px;
    background-color: #555;
    margin-top: 20px;
    position: absolute;
    left: 0;
`

const NavigationContainer = styled.div`
    width: 300px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
    margin: 0 auto;
    margin-top: 15px;
`

const NavigationBlock = styled.div`
    width: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const NavifationItem = styled.a`
    font-size: 21px;
    font-weight: 600;
    color: #fff;
    white-space: nowrap;
    transition: all .2s ease-in-out;
`

export const MarketplacePage = () => {

    const [block, setBlock] = useState('Miners')

    return (
        <Container>
            <TitleBlock>
                <Title>SunBTC NFT <br /> Miners marketplace</Title>
                <NFTImage src={MinerLogo} />
            </TitleBlock>

            <FastInfoContainer>
                <FastInfoBlock>
                    <FastInfoWhiteText>2000.49 TRX</FastInfoWhiteText>
                    <FastInfoGrayText>Floor price</FastInfoGrayText>
                </FastInfoBlock>
                <FastInfoBlock>
                    <FastInfoWhiteText>1914 TRX</FastInfoWhiteText>
                    <FastInfoGrayText>Instant sell price</FastInfoGrayText>
                </FastInfoBlock>
            </FastInfoContainer>

            <GreyLine />

            <NavigationContainer>
                <NavigationBlock onClick={() => setBlock('Miners')}>
                    <NavifationItem style={{ color: block === 'Miners' ? '#fff' : '#888' }}>Miners</NavifationItem>
                </NavigationBlock>
                <NavigationBlock onClick={() => setBlock('Instant Sell')}>
                    <NavifationItem style={{ color: block === 'Instant Sell' ? '#fff' : '#888' }}>Instant Sell</NavifationItem>
                </NavigationBlock>
                <NavigationBlock onClick={() => setBlock('Create Order')}>
                    <NavifationItem style={{ color: block === 'Create Order' ? '#fff' : '#888' }}>Create Order</NavifationItem>
                </NavigationBlock>
            </NavigationContainer>
            {block === 'Miners' && <MinersBlock />}
            {block === 'Instant Sell' && <InstantSellBlock />}
            {block === 'Create Order' && <CreateOrderBlock />}
        </Container>
    )
}       