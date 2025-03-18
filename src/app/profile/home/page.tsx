"use client";

import Link from 'next/link';
import './pages.css'
import { slides, videos } from './slides_constants';
import { useImageType } from '../imagetypecontext';
import {useEffect, useState} from 'react';
import { useProfileType } from '../imagetypecontext';

let count = 0

function plusDivs() {
  count += 1;
  showDivs();
}

function minusDivs() {
  count -= 1;
  showDivs();
}

function handlePlus(e){
  e.preventDefault();
  console.log('clicked')
  plusDivs()
}

function handleMinus(e){
  e.preventDefault();
  console.log('clicked')
  console.log("count: " + count)
  minusDivs()
}

// function augmentIndex(n: number, i: number){
//   if (n + i >= slides.length) {
//     return (n + i) % slides.length
//   }
//   else if (n < 0) {
//     count = slides.length - 1
//     // console.log("count2 + " + count)
//     return (count)
//   }
//   else {return n + i}
// }

// function showDivs() {
//   const carousel = document.querySelector(".img_rows");
//   if (!carousel) return;

//   let newSlidesHTML = "";
//   for (let i = 0; i < slides.length; i++) {
//     let index = augmentIndex(count, i);
//     console.log(index)
//     let isEdge = i === 0 || i === slides.length - 1;
//     let sizeClass = isEdge ? "half-img" : "large-img";
//     let opacityClass = isEdge ? "low-opacity" : "full-opacity";
//     newSlidesHTML += `
//       <div class="image_card ${opacityClass} ${sizeClass}">
//         <h2 class="image_label">${slides[index].name}</h2>
//         <img class="images" src="${slides[index].imgUrl}" />
//       </div>`;
//   }
//   carousel.innerHTML = newSlidesHTML;
// }


export default function Page() {

  const { imageCat } = useImageType();
  const [currVidPath, setCurrVidPath] = useState(videos[0].vidPath);
  const [currImageType, setCurrImageType] = useState(slides[0]);
  const { profileType } = useProfileType();

  useEffect(() => {
    const selectedVid = videos.find(video => video.type === imageCat) || videos[0];
    const selectedImageType = slides.find(image => image.type === imageCat) || slides[0]
    setCurrVidPath(selectedVid.vidPath);
    setCurrImageType(selectedImageType);
  }, [imageCat]);

  return (
    <div className='w-full h-full'>
      <div className="banner">
        <video key={currVidPath} autoPlay muted loop id="myVideo" className='banner-video'>
          <source src={currVidPath} type="video/mp4"/>
        </video>
        <div className="banner_description">
          <h1>Tony Wang - Software Developer</h1>
          <p>I am an aspiring developer currently studying in university. I enjoy learning new tools and building software with them. I am a full-stack developer with experience in both the frontend and backend. I also am interested in AI and ML tools as well as the cloud.</p>
          <div className='page-buttons'>
            <a href='' className='flex flex-row gap-2 justify-center items-center text-black bg-white'><img className='page-button-img' src='../playbutton.png'/>Resume</a>
            <a href='https://www.linkedin.com/in/tkwang312' target='_blank' className='flex flex-row gap-2 justify-center items-center info-button'><img src='../information.png' className='page-button-img '/>LinkedIn</a>
          </div>
        </div>
      </div>
      <div className="picks">
        <h2 className="row_title">Today's Top Picks For {profileType}</h2>
        <div className='relative'>
          {/* <button className="right-btn" onClick={handlePlus}>right</button>
          <button className="left-btn" onClick={handleMinus}>left</button> */}
          <div className="img_rows">
            {currImageType.info.map((slide, slideIndex) => (
              <div className="image_card" key={slideIndex}>
                <h2 className="image_label">{slide.name}</h2>
                <Link href={slide.nav} onClick={() => window.scrollTo(0, 0)}>
                  <img className="images" src={slide.imgUrl} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="picks">
        <h2 className="row_title">{currImageType.title}</h2>
        <div className="img_rows">
          {currImageType.cntwatch.map((slide, slideIndex) => (
              <div className="image_card" key={slideIndex}>
              <h2 className="image_label">{slide.name}</h2>
              <Link href={slide.nav} onClick={() => window.scrollTo(0, 0)}>
                <img className="images" src={slide.imgUrl} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// if (typeof window !== "undefined") {
//   document.addEventListener("DOMContentLoaded", function () {
//     showDivs();
//   });
// }
