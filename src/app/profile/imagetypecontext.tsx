"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

type ImageTypeContextProps = {
  imageCat: string;
  setImageCat: (value: string) => void;
  profileType: string;
  setProfileType: (value: string) => void;
};

const ImageTypeContext = createContext<ImageTypeContextProps | undefined>(undefined);

const STORAGE_KEY = "portfolio-preferences";

function readStored(): { imageCat?: string; profileType?: string } {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "{}");
  } catch {
    return {};
  }
}

export const ImageTypeProvider = ({ children }: { children: ReactNode }) => {
  const [imageCat, setImageCat] = useState("home");
  const [profileType, setProfileType] = useState("");
  const [loaded, setLoaded] = useState(false);

  // Restore the chosen profile and genre so a page refresh keeps them.
  useEffect(() => {
    const stored = readStored();
    /* eslint-disable react-hooks/set-state-in-effect -- localStorage is only readable after hydration */
    if (stored.imageCat) setImageCat(stored.imageCat);
    if (stored.profileType) setProfileType(stored.profileType);
    setLoaded(true);
    /* eslint-enable react-hooks/set-state-in-effect */
  }, []);

  useEffect(() => {
    if (!loaded) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ imageCat, profileType }));
    } catch {
      // Storage can be unavailable (private mode); the site still works without it.
    }
  }, [loaded, imageCat, profileType]);

  return (
    <ImageTypeContext.Provider value={{ imageCat, setImageCat, profileType, setProfileType }}>
      {children}
    </ImageTypeContext.Provider>
  );
};

export const useImageType = () => {
  const context = useContext(ImageTypeContext);
  if (!context) throw new Error("useImageType must be used within ImageTypeProvider");
  return context;
};

export const useProfileType = useImageType;
