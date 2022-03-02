import React from 'react';
import { Button } from '../../GlobalStyle';
import business from '../Images/business.svg';
import follow from '../Images/follow.svg';
import transparent from '../Images/transparent.svg';
import {
    BodyContainer,
    BodyLabel,
    BodyContent, 
    BodyLabelText, 
    Img,
    BodyLowerContent,
    LowerImg, 
    BodyLowerContentText,
    BodyLowerContent2,
    LowerImg2, 
    BodyLowerContentText2,
    BodyFooter,
    BodyFooterContent,
    BodyFooterContent1,
    BodyFooterContent2,
    BodyFooterTitle,
    BrokerIcon,
    AdviserIcon} from './Body.styles';

function Body() {
  return (
    <>
    <BodyContainer>
        <BodyLabel>
            <BodyLabelText><u>We are looking for great traders</u></BodyLabelText>
        </BodyLabel><br/>
    </BodyContainer>

    <BodyContainer>
        <BodyContent>
            <h1>Copy Trades from <br/>Top Traders</h1><br/><br/>
            <p>Follow profitable traders from India's largest community of traders. Get great trades real-time on your phone. Trade with a single click.</p><br/><br/>
            <Button primary>Start Now</Button>
        </BodyContent>
        <Img src={business} alt="business"></Img>
    </BodyContainer>

    <BodyContainer>
        <BodyLowerContent>
        <LowerImg src={follow} alt="follow"></LowerImg>
        <BodyLowerContentText>
        <h2>How it works</h2><br/>
        <h4>It's as easy as</h4><br/>
        <ol><li>Follow Top Traders in our community</li><br/>
            <li>Get notified about their trades</li><br/>
            <li>Trade with a single click</li><br/>
        </ol>
        </BodyLowerContentText>
        </BodyLowerContent>
    </BodyContainer>

    <BodyContainer>
        <BodyLowerContent2>
            <LowerImg2 src={transparent} alt="transparent"></LowerImg2>
            <BodyLowerContentText2>
                <h3>A transparent system</h3><br/>
                <p>We show the P&L of every trade shared by traders transparently. So you can see who is profitable and follow them.</p>
            </BodyLowerContentText2>
        </BodyLowerContent2>
    </BodyContainer>
    
    <BodyContainer>
        <BodyFooter>
        <BodyFooterTitle><h3>We are in Your Team</h3></BodyFooterTitle><br/><br/>
        </BodyFooter>
    </BodyContainer>
    <BodyContainer>
        <BodyFooter>
        <BodyFooterContent>
        <BodyFooterContent1>
            <h4><BrokerIcon/>Not in Broker's Team</h4><br/>
            <p>We do not take money from the broker. So we do not make you trade to earn brokerage.</p>
            <br/>
            <p>This allows us to give only high-quality trades.</p>
        </BodyFooterContent1>

        <BodyFooterContent2>
            <h4><AdviserIcon/>Not in Adviser's Team</h4><br/>
            <p>We charge a monthly fee, and not per trade. So our adviser's do not earn more by making you trade.</p>
            <br/>
            <p>We show only verified trades. We don't show unverified trades or fake backtests.</p>
            </BodyFooterContent2>   
        </BodyFooterContent>
        </BodyFooter>
    </BodyContainer>
    
    </>
  )
}

export default Body