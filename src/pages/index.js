import Link from "next/link";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";


export default function Home() {
    const { systemTheme, theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
      setMounted(true);
    }, []);
  
    if (!mounted) return null;
    const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <>
      <div className="px-4 sm:16 py-4">
        <img src="./Mum.png" className="sm:h-[480px] mx-auto sm:w-[600px]" alt="" />

</div>

    </>
  );
}