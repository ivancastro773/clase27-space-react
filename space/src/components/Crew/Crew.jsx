import React from "react";
import '../Crew/style(Ema2).css';
import img from '../Crew/imagecrew.png';
const Crew =()=>{
   return(
    <div>
        <div class="container-crew">
        <div class="text-crew">

            <h2 class="grey">02</h2>
            <h2>MEET YOUR CREW</h2>

            <div class="text-crew2">
                <h3 class="grey">Flight Engineer</h3>
                <h1>Anousheh Ansari</h1>
                <p>Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems.
                    Ansari was the fourth self-funded space tourist, the first self-funded
                    woman to fly to the ISS, and the first Iranian in space.</p>
            </div>
            <div class="slide-crew">
                <i class="fas fa-circle"></i>
                <i class="fas fa-circle"></i>
                <i class="fas fa-circle"></i>
                <i class="fas fa-circle slide-active"></i>
            </div>
        </div>
        <div class="crew-secondbox">
            <div class="img-girl">
                <img src={img} alt=""/>
            </div>
        </div>
    </div>
    </div>
   )
}
export default Crew;