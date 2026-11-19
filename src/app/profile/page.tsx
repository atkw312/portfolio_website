'use client'

import Image from 'next/image'
import Link from 'next/link'
import { profiles } from './profile_constants'
import { useProfileType } from './imagetypecontext'
import './profile.css'

export default function Page() {
  const { setProfileType } = useProfileType();

  return (
    <div className='whos-watching'>
      <h1>Who&apos;s Watching?</h1>
      <div className='profiles-row'>
        {profiles.map((profile) => (
          <div key={profile.name} className='profile-container'>
            <Link href={profile.nav} onClick={() => setProfileType(profile.name)}>
              <Image className='profile-img' src={profile.imgUrl} alt={`${profile.name} profile`} width={150} height={150} />
            </Link>
            <h3>{profile.name}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}
