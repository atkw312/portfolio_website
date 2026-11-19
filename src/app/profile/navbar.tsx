"use client";

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useImageType } from './imagetypecontext'
import './profile.css'

const links = [
  { href: '/profile/projects', label: 'Projects' },
  { href: '/profile/skills', label: 'Skills' },
  { href: '/profile/education', label: 'Education' },
  { href: '/profile/contact', label: 'Hire Me' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { imageCat, setImageCat, profileType } = useImageType();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar pos-z ${scrolled ? 'navbar-scrolled' : ''}`}>
      <ul className="navbar-list">
        <li>
          <Link href='/profile/home'>
            <Image src='/name.png' alt='Tony Wang, home' width={354} height={79} className='navbar-title-img' priority />
          </Link>
        </li>
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
        <li>
          <select
            className='navbar-dropdown-content'
            aria-label='Genre'
            value={imageCat}
            onChange={(e) => setImageCat(e.target.value)}
          >
            <option value="home">Hollywood</option>
            <option value="kdrama">K-Dramas</option>
            <option value="cdrama">C-Dramas</option>
            <option value="anime">Anime</option>
          </select>
        </li>
        {profileType && (
          <li className='navbar-avatar'>
            <Link href="/profile" aria-label="Switch profile">
              <Image src={`/netflix-icons/${profileType}.jpg`} alt={`${profileType} profile`} width={32} height={32} className='navbar-avatar-img' />
            </Link>
          </li>
        )}
      </ul>
    </nav>
  )
}

export default Navbar
