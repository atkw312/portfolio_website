'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import './intro.css'

export default function Page() {
  const router = useRouter();
  const [entering, setEntering] = useState(false);

  function enter() {
    if (entering) return;
    setEntering(true);
    const audio = new Audio("/netflixsound.mp3");
    audio.onended = () => router.push('/profile');
    // If the browser blocks audio, go straight in instead of getting stuck.
    audio.play().catch(() => router.push('/profile'));
  }

  return (
    <button type="button" className="intro" onClick={enter} aria-label="Enter Tony Wang's portfolio">
      <Image src="/name.png" alt="Tony Wang" width={354} height={79} priority />
      <span className={`intro-hint ${entering ? 'intro-hint-hidden' : ''}`} aria-hidden="true">
        Click anywhere to start
      </span>
    </button>
  )
}
