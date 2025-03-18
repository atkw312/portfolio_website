'use client'

import { useRouter } from 'next/navigation'
import './intro.css'

export default function Page(){
    const router = useRouter();

    function playSound(){
        console.log("clicked!")
        const audio = new Audio("/netflixsound.mp3");
        audio.play();
    
        audio.onended = function () {
            router.push('/profile');
        }
    
    }

    return(
        <div className="intro" onClick={() => playSound()}>
            <img src='/name.png'  className='intro-text'/>
        </div>
    )
}
