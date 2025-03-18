"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type ImageTypeContextProps = {
  imageCat: string;
  setImageCat: (value: string) => void;
  profileType: string;
  setProfileType: (value: string) => void;
};

const ImageTypeContext = createContext<ImageTypeContextProps | undefined>(undefined);

export const ImageTypeProvider = ({ children }: { children: ReactNode }) => {
  const [imageCat, setImageCat] = useState("home");
  const [profileType, setProfileType] = useState("");

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

export const useProfileType = () => {
  const context = useContext(ImageTypeContext);
  if (!context) throw new Error("no profileType");
  return context;
}