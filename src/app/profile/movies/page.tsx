"use client";

import '../projects/projects.css';
import { movies } from './movie_constants';
import { useImageType } from '../imagetypecontext';
import '../recommendations.css';

export default function Page() {
  const { imageCat } = useImageType();
  const selectedShows = movies.find(show => show.type === imageCat) || movies[0];


  return (
    <div className='navbar-adj'>
      <h1 className='recommend-text'>Recommendations</h1>
      <div className='flex flex-row flex-wrap gap-4 items-center justify-center'>
        { selectedShows.info.map((show, showIndex) => (
          <div className='recommend-card' key={showIndex}>
            <img className='recommend-image' src={show.imgUrl}/>
            <h2 className='recommend-title'>{show.name}</h2>
            <h3 className='recommend-description'>{show.description}</h3>
          </div>
        )) }
      </div>
    </div>
  )
}