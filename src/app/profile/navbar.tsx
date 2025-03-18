"use client";

import Link from 'next/link'
import './profile.css'
import {useEffect} from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { useImageType } from './imagetypecontext'


const Navbar = () => {

  useEffect(() => {
    const handleScroll = () => {
      const navbarScroll = document.querySelector(".navbar");
      if (!navbarScroll) return;
      
      if (window.scrollY > 50) {
        navbarScroll.classList.add("navbar-scrolled");
      } else {
        navbarScroll.classList.remove("navbar-scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); 

  const pathname = usePathname();
  const { imageCat, setImageCat, profileType } = useImageType();

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    setImageCat(selectedValue);
  }
  useEffect(() => {
    console.log("Updated imageCat in Navbar:", imageCat);
  }, [imageCat]); 

  return (
    <div className="navbar pos-z">
      <ul className="flex flex-row p-5 justify-between">
        <div className='flex flex-row gap-5'>
          <li className="title-text">
            <Link href='./home'><img src='/name.png' className='navbar-title-img'/></Link>
          </li>
          <li className="">
            <Link href="./projects">Projects</Link>
          </li>
          <li className="">
            <Link href="./skills">Skills</Link>
          </li>
          <li className="">
            <Link href="./education">Education</Link>
          </li>
          <li className="">
            <Link href="./contact">Hire Me</Link>
          </li>
          <li>
            <div className='navbar-dropdown'>
              <select className='flex flex-col navbar-dropdown-content' defaultValue={"placeholder"} onChange={handleSelectChange}>
                <option value="placeholder" disabled hidden>Genre</option>
                <option value="home">Hollywood</option>
                <option value="kdrama">K-Dramas</option>
                <option value="cdrama">C-Dramas</option>
                <option value="anime">Anime</option>

                {/* <Link href="./cdrama">Cdrama</Link>
                <Link href="./anime">Anime</Link> */}
              </select>
            </div>
          </li>
        </div>
        <div className='flex flex-row gap-5 mr-10'>
          <li>
            <Link href="../profile">
              <div className='navbar-img-container'><img src={`../netflix-icons/${profileType}.jpg`}/></div>
            </Link>
          </li>
        </div>
      </ul>
    </div>
  )
}

export default Navbar
