import React from 'react';
import { Container } from './styles';
import Button from '../Button';
import variables from '../../variables';
//import Header from '../Header';
import {Card} from 'react-bootstrap';
import './neostyle.css';
import ProfileCard from '../ProfileCard';





const facebookLogo = require('../../images/facebook.svg');
const githubLogo = require('../../images/github.svg');
const youtubeLogo = require('../../images/youtube.svg');
const instagramLogo = require('../../images/instagram.svg');
const linkedinLogo = require('../../images/linkedin-in.svg');
const reactLogo = require('../../images/react.svg');
const twitterLogo = require('../../images/twitter.svg');
const whatsappLogo = require('../../images/whatsapp.svg');
const profilepic = require('../../images/profile.jpeg');

export default function LinkTree() {
  return (

	<div>

	<Container>
	<Card>
	<Card>
         {/* <Header picture={profilepic} title='Vishwesh Thonte' subtitle='A Software Engineer' />*/}
          	<ProfileCard/>
      <Button link={variables.sitelink} icon={reactLogo} name='Site Oficial' backgroundColor={variables.opt2Color} />
      {/*<Button link={variables.fblink} icon={facebookLogo} name='Facebook' backgroundColor={variables.facebookColor} />*/}
      <Button link={variables.p1link} icon={githubLogo} name='Url Shortner - Backend Project' backgroundColor={variables.instagramColor} />
      {/*<Button link={variables.youtubelink} icon={youtubeLogo} name='Youtube' backgroundColor={variables.youtubeColor} />*/}
      <Button link={variables.p2link} icon={githubLogo} name='Time Microservice - Backend Project' backgroundColor={variables.githubColor} />
      {/*<Button link={variables.whatsapplink} icon={whatsappLogo} name='Whatsapp' backgroundColor={variables.whatsappColor} />*/}

      <Button link={variables.p3link} icon={reactLogo} name='Web3.0 NFT Marketplace - Open Source Contribution' backgroundColor={variables.linkedinColor} />
      {/*<Button link={variables.twitterlink} icon={twitterLogo} name='Twitter' backgroundColor={variables.twitterColor} />*/}
      </Card>
      </Card>
	</Container>
	
	</div>


  )
}
