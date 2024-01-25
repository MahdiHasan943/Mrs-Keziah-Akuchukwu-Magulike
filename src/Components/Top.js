import React, { useEffect, useState } from 'react'
const TopBtn = () => {
    const [isVisible, setIsVisible] = useState(false);

    const goToBtn = () => {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    };
  
    const listenToScroll = () => {
      let heightToHidden = 20;
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
  
      if (winScroll > heightToHidden) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
  
    useEffect(() => {
      window.addEventListener("scroll", listenToScroll);
      return () => window.removeEventListener("scroll", listenToScroll);
    }, []);
  
    return (
    <>
        {isVisible && (
        //  top-[96%] 
             <div 
           className="flex  justify-end overflow-hidden fixed  top-[90%] px-3   transition  delay-500  z-[99999!important]  right-0 " onClick={goToBtn}>
            <div  className="border border-[#843E71] bg-[#843E71] ml-auto  top-btn  py-3 px-3 rounded-md ">
                <img src={'/topbtn.png'} alt='arrow' />         

               </div>
          </div>
         
        )}
     </>
    );
  };

export default TopBtn