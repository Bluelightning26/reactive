'use client'

import Image from "next/image";
import { useState } from "react";
import styles from "./home.module.css";

export default function Home() {

  const [count, setCount] = useState(0);


  return (
    <div>

<h1 className={styles.big}> Heyo, I am Dhyan! A high school sophomore from Massachusetts </h1>

<h2>{count}</h2>
<button onClick ={() =>{
setCount(count + 1);
}}>Click me!</button>



<p><b>Here is a nice trinket I recently worked on: </b></p>
<Image src="/penguinpenguin.png" alt="A screenshot of my trinket" width="500" height="500" />
<p>Features:</p>

<ol>
<li>Uses Transistors</li>
<li>Fun flashing leds</li>
<li>Looks like a penguin :)</li>
</ol>




    </div>
  );
}