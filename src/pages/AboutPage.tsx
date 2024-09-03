import { List } from "@mui/material";
import React from "react";

const AboutPage = () => {
  return(<div>
    <h1>About</h1>
    <p>Hi! I&apos;m Evan! This is my website that doesn&apos;t have too much stuff on it right now.
    </p>
    <h2>
      who is this person???
    </h2>
      <List>
        <li>🦦 recently graduated CSSE student from UWB</li>
        <li>🥕 full-stack software dev enjoyer</li>
        <li>🎵 I love playing, making, and listening to music</li>
        <li>🇹🇼 taiwanese - 臭豆腐, 大腸包小腸, 50嵐紅茶拿鐵 are all a must!</li>
        <li>🧗🏻 I love rock climbing and tennis</li>
        <li>🎹 take a look at my <a href="https://bit.ly/albumratings" target="_blank" rel="noopener noreferrer">album rating list</a></li>
        <li>🧋 take a look at my <a href="https://bit.ly/drinkratings" target="_blank" rel="noopener noreferrer">drink ratings (rated out of 7)</a></li>
      </List>
  </div>)
}

export default AboutPage;