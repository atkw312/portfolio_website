'use client'

import {profiles} from './profile_constants'
import Link from 'next/link'
import './profile_constants'
import './profile.css'
import { useProfileType } from './imagetypecontext'


export default function Page() {
    const {setProfileType} = useProfileType();

    function handleProfileSelect(p: string) {
        setProfileType(p);
    }

    return(
        <div className='whos-watching'>
            <h1>Who's Watching?</h1>
            <div className='profiles-row'>
                {profiles.map((profile, profileIndex) => (
                    <div key={profileIndex} className='profile-container'>
                        <Link href={profile.nav} onClick={() => handleProfileSelect(profile.name)}>
                            <img className='profile-img' src={profile.imgUrl}/>
                        </Link>
                        <h3>{profile.name}</h3>
                    </div>
                ))}
            </div>
        </div>
    )

}