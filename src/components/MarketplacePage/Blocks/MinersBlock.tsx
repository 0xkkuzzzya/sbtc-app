import styled from "styled-components";
import TronLogo from '../../../assets/TronLogo.png'

const Container = styled.div`
    width: 440px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-bottom: 50px;
    margin-top: 30px;
    overflow: hidden;
    @media (max-width: 480px) {
        width: 100%;
        margin-top: 10px;
        margin-bottom: 100px;
    }
`

const InfoBlock = styled.div`
    width: 90%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const InfoText = styled.a`
    font-size: 16px;
    font-weight: 500;
    color: #afadae;
`

const ScrollableContent = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: -17px;
    bottom: 0;
    overflow-y: scroll;
    overflow-x: hidden;
`

const OrderListContainer = styled.div`
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;
`

const OrderBlock = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #1b1b1b;
    border-radius: 10px;
`

const OrderText = styled.a`
    font-size: 16px;
    font-weight: 500;
    color: #fff;
    margin: 0px 20px;
    display: flex;
    align-items: center;
`

const TronIcon = styled.img`
    width: 17px;
    height: 17px;
    margin-left: 5px;
`

export const MinersBlock = () => {

    const order = [
        {
            amount: 1,
            price: 2000.49,
        },
        {
            amount: 2,
            price: 2001,
        },
        {
            amount: 3,
            price: 2001.51,
        },
        {
            amount: 4,
            price: 2002.02,
        },
        {
            amount: 5,
            price: 2002.53,
        },
        {
            amount: 6,
            price: 2003.04,
        },
        {
            amount: 7,
            price: 2003.55,
        },
    ]

    return (
        <Container>
            <InfoBlock>
                <InfoText>Sell Order</InfoText>
                <InfoText>Amount</InfoText>
            </InfoBlock>
            <OrderListContainer>
                {order.map((item, index) => (
                    <OrderBlock key={index}>
                        <OrderText>{item.price} <TronIcon src={TronLogo} /></OrderText>
                        <OrderText>{item.amount}</OrderText>
                    </OrderBlock>
                ))}
            </OrderListContainer>

        </Container>
    )
}   