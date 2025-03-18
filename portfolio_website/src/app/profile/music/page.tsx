"use client";

import '../projects/projects.css';
import { music } from './music_constants';
import { useImageType } from '../imagetypecontext';
import '../recommendations.css';

export default function Page() {
  const { imageCat } = useImageType();
  const selectedShows = music.find(song => song.type === imageCat) || music[0];


  return (
    <div className='navbar-adj'>
      <h1 className='recommend-text'>Recommendations</h1>
      <div className='flex flex-row flex-wrap gap-4 items-center justify-center'>
        { selectedShows.info.map((show, showIndex) => (
          <div className='recommend-music-card' key={showIndex}>
            <img className='recommend-music-image' src={show.imgUrl}/>
            <h2 className='recommend-title'>{show.name}</h2>
            <h3 className='recommend-description'>{show.artist}</h3>
          </div>
        )) }
      </div>
    </div>
  )
}