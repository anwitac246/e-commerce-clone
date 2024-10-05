import './Chat.css';
import React, { useState, useRef } from "react";
import ScrollAnimationComponent from './ScrollAnimationComponent';
import BestSellers from './BestSellers';
import { Bmarket } from './Bmarket';
import { Announcement } from './components/Announcement';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { Concerns } from './Concerns';
import { Convince } from './Convince';
import { NewLaunch } from './NewLaunch';

import { NewLaunches } from './NewLaunches';


function Chat() {
  return (
    
    <div className="main">
      
      <ScrollAnimationComponent><Announcement/></ScrollAnimationComponent>
      <ScrollAnimationComponent><Navbar/></ScrollAnimationComponent>
      <ScrollAnimationComponent><NewLaunch/></ScrollAnimationComponent>
      <ScrollAnimationComponent><Concerns/></ScrollAnimationComponent>
      <ScrollAnimationComponent><Convince/></ScrollAnimationComponent>
      <ScrollAnimationComponent><NewLaunches/></ScrollAnimationComponent>
      <ScrollAnimationComponent><BestSellers/></ScrollAnimationComponent>
      <ScrollAnimationComponent><Bmarket/></ScrollAnimationComponent>
      <ScrollAnimationComponent><Footer/></ScrollAnimationComponent>
      
    </div>
  );
}

export default Chat;
