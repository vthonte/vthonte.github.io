import React from 'react';
import { Container } from './styles';
import Button from '../Button';
import variables from '../../variables';
//import Header from '../Header';
import {Card} from 'react-bootstrap';
import '../../neostyle.css';
import ProfileCard from '../ProfileCard';




var sectionStyle={
backgroundImage: 'url('+require('./back1.jpg')+')',
backgroundSize: 'cover',
backgroundRepeat: 'repeat',
};
var backStyle={
backgroundImage: 'url('+require('./back.jpg')+')'
};

var overflowstyle={
overflow:'hidden'
}

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


	<Container className="neo_back" style={sectionStyle}>

	<div className="neo_glass neo_padding" >
	<ProfileCard/>
		<a className="neo_glass2">Projects</a>
	<div className="neo_padding">


	         {/* <Header picture={profilepic} title='Vishwesh Thonte' subtitle='A Software Engineer' />*/}
      <Button link={variables.sitelink} icon={reactLogo} name='Site Oficial' />
      {/*<Button link={variables.fblink} icon={facebookLogo} name='Facebook' backgroundColor={variables.facebookColor} />*/}
      <Button link={variables.p1link} icon={githubLogo} name='Url Shortner - Backend Project' />
      {/*<Button link={variables.youtubelink} icon={youtubeLogo} name='Youtube' backgroundColor={variables.youtubeColor} />*/}
      <Button link={variables.p2link} icon={githubLogo} name='Time Microservice - Backend Project' />
      {/*<Button link={variables.whatsapplink} icon={whatsappLogo} name='Whatsapp' backgroundColor={variables.whatsappColor} />*/}

      <Button link={variables.p3link} icon={reactLogo} name='Web3.0 NFT Marketplace - Open Source' />
      
      <Button link={variables.p4link} icon={reactLogo} name='Exercise Tracker Microservice' />
      {/*<Button link={variables.twitterlink} icon={twitterLogo} name='Twitter' backgroundColor={variables.twitterColor} />*/}

	</div>
	</div>	
	

	</Container>




  )
}
