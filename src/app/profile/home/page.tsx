"use client";

import Image from 'next/image';
import Link from 'next/link';
import { slides, videos } from './slides_constants';
import { useImageType } from '../imagetypecontext';
import './pages.css'

type Tile = { name: string; imgUrl: string; nav: string };

function TileRow({ title, tiles }: { title: string; tiles: Tile[] }) {
  return (
    <section className="picks">
      <h2 className="row_title">{title}</h2>
      <div className="img_rows">
        {tiles.map((tile) => (
          <Link href={tile.nav} className="image_card" key={tile.name}>
            <Image className="images" src={tile.imgUrl} alt="" fill sizes="250px" />
            <span className="image_label">{tile.name}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default function Page() {
  const { imageCat, profileType } = useImageType();
  const video = videos.find((v) => v.type === imageCat) ?? videos[0];
  const slide = slides.find((s) => s.type === imageCat) ?? slides[0];

  return (
    <div className='w-full h-full'>
      <div className="banner">
        <video key={video.vidPath} autoPlay muted loop playsInline preload="metadata" className='banner-video' aria-hidden="true">
          <source src={video.vidPath} type="video/mp4"/>
        </video>
        <div className="banner_description">
          <h1>Tony Wang - Software Developer</h1>
          <p>I am an aspiring developer currently studying in university. I enjoy learning new tools and building software with them. I am a full-stack developer with experience in both the frontend and backend. I also am interested in AI and ML tools as well as the cloud.</p>
          <div className='page-buttons'>
            <a href='/Tony_Wang_Resume.pdf' target='_blank' rel='noopener noreferrer' className='flex flex-row gap-2 justify-center items-center text-black bg-white'>
              <Image className='page-button-img' src='/playbutton.png' alt='' width={16} height={16} />Resume
            </a>
            <a href='https://www.linkedin.com/in/tkwang312' target='_blank' rel='noopener noreferrer' className='flex flex-row gap-2 justify-center items-center info-button'>
              <Image src='/information.png' className='page-button-img' alt='' width={18} height={18} />LinkedIn
            </a>
          </div>
        </div>
      </div>
      <TileRow title={`Today's Top Picks For ${profileType || 'You'}`} tiles={slide.info} />
      <TileRow title={slide.title} tiles={slide.cntwatch} />
    </div>
  );
}
