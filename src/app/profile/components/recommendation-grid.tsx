"use client";

import Image from 'next/image';
import { useImageType } from '../imagetypecontext';
import '../recommendations.css';

type Item = { name: string; imgUrl: string; link?: string; description?: string; artist?: string };
type Category = { type: string; info: Item[] };

export default function RecommendationGrid({ categories, square = false }: { categories: Category[]; square?: boolean }) {
  const { imageCat } = useImageType();
  const selected = categories.find((c) => c.type === imageCat) ?? categories[0];
  const [width, height] = square ? [200, 200] : [200, 282];

  return (
    <div className='navbar-adj'>
      <h1 className='recommend-text'>Recommendations</h1>
      <div className='recommend-grid'>
        {selected.info.map((item) => {
          const body = (
            <>
              <Image className='recommend-image' src={item.imgUrl} alt={`${item.name} cover`} width={width} height={height} />
              <h2 className='recommend-title'>{item.name}</h2>
              <h3 className='recommend-description'>{item.description ?? item.artist}</h3>
            </>
          );
          const className = `recommend-card ${square ? 'recommend-card-square' : ''}`;
          return item.link ? (
            <a key={item.name} className={className} href={item.link} target='_blank' rel='noopener noreferrer'>{body}</a>
          ) : (
            <div key={item.name} className={className}>{body}</div>
          );
        })}
      </div>
    </div>
  );
}
