import styled from "styled-components";
import SunBTCAmountLogoImage from '../../assets/SunBTCLogo.webp';
import MinerLogoImage from '../../assets/MinerLogo.png';
import DepositIcon from '../../assets/Deposit.svg'
import BuyEnergyIcon from '../../assets/BuyEnergy.svg'

const Container = styled.div`
    width: 400px;
    height: 100%;
    flex-direction: column;
    align-items: flex-start;
    margin: 0 auto;
    @media (max-width: 480px) {
        width: 85%;
    }
    @media (max-height: 645px) {
        margin-bottom: 100px;
    }
`

const InfoContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    margin-top: 40px;
`

const InfoBlock = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
`

const InfoText = styled.a`
    font-size: 16px;
    font-weight: 500;
    color: #a7a7a7;
    display: flex;
    align-items: center;
    @media (max-width: 480px) {
        font-size: 14px;
    }
`

const AmountText = styled.a`
    font-size: 45px;
    font-weight: 500;
    color: #eee;
    display: flex;
    align-items: flex-end;
`

const QuestionBlock = styled.div`
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: #252222;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 11px;
    margin-left: 5px;
    margin-top: -2px;
    cursor: pointer;
`

const FloatText = styled.a`
    font-size: 35px;
    font-weight: 500;
    color: #eee;
`

const SunBTCAmountLogo = styled.img`
    margin-left: auto;
    width: 80px;
    height: 80px;
`

const MinerBlock = styled.div`
    width: 400px;
    height: 150px;
    display: flex;
    justify-content: space-between;
    background: #1d1c1c;
    border-radius: 25px;
    margin-top: 30px;
    align-items: center;
    @media (max-width: 480px) {
        width: 100%;
    }
`

const MinerInfoBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`

const MinerText = styled.a`
    color: #a7a7a7;
    font-size: 16px;
    font-weight: 500;
    margin-left: 30px;
    white-space: nowrap;
    @media (max-width: 480px) {
        font-size: 14px;
    }
`

const AmountNFT = styled.a`
    color: #eee;
    font-size: 30px;
    font-weight: 500;
    margin-left: 30px;
    margin-top: 10px;
`

const MinerLogo = styled.img`
    width: 120px;
    height: 120px;
    margin-right: 30px;
    @media (max-width: 480px) {
        width: 110px;
        height: 110px;
    }
`

const MinerInfoText = styled.a`
    font-size: 14px;
    font-weight: 500;
    color: #eee;
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const NavigationContainer = styled.div`
    width: 400px;
    height: 75px;
    border-radius: 20px;
    margin-top: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    background: linear-gradient(to right, #e97919, #e7290e);
    @media (max-width: 480px) {
        width: 100%;
    }
`

const NavigateBlock = styled.div`
    width: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
    cursor: pointer;
    @media (max-width: 480px) {
        width: 80px;
    }
`

const NavigateIcon = styled.img`
    width: 30px;
    height: 30px;
`

const NavigateText = styled.a`
    font-size: 14px;
    font-weight: 500;
    color: #eee;
    white-space: nowrap;
    @media (max-width: 480px) {
        font-size: 12px;
    }
`


export const MainPageOnMobile = () => {
    return (
        <Container>
            <InfoContainer>
                <InfoBlock>
                    <InfoText>Your sunBTC balance</InfoText>
                    <AmountText>0.<FloatText>00</FloatText></AmountText>
                    <InfoText>You`ve mined today: 0 <QuestionBlock>?</QuestionBlock></InfoText>
                </InfoBlock>
                <SunBTCAmountLogo src={SunBTCAmountLogoImage} />
            </InfoContainer>

            <NavigationContainer>
                <NavigateBlock>
                    <NavigateIcon src={DepositIcon} />
                    <NavigateText>Deposit Miner</NavigateText>
                </NavigateBlock>
                <NavigateBlock>
                    <NavigateIcon src={BuyEnergyIcon} />
                    <NavigateText>Buy energy</NavigateText>
                </NavigateBlock>
                <NavigateBlock>
                    <NavigateIcon src={DepositIcon} />
                    <NavigateText>Withdrawal</NavigateText>
                </NavigateBlock>
            </NavigationContainer>

            <MinerBlock>
                <MinerInfoBlock>
                    <MinerText>My Miners</MinerText>
                    <AmountNFT>0 NFT</AmountNFT>
                    <MinerText style={{ marginTop: '10px' }}>0 sunBTC per day</MinerText>
                </MinerInfoBlock>
                <MinerLogo src={MinerLogoImage} />
            </MinerBlock>
            <MinerInfoText>0 energy on balance <QuestionBlock>?</QuestionBlock></MinerInfoText>
        </Container>
    )
}   