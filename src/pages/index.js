import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useRef ,useState } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from 'react-hot-toast';
import TopBtn from "@/Components/Top";
export default function Home() {
  const form = useRef();

    const { systemTheme, theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
      setMounted(true);
    }, []);
  
    if (!mounted) return null;
  const currentTheme = theme === "system" ? systemTheme : theme;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "",
        "",
        form.current,
        ""
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          form.current.reset();
          toast.success('Successfully submitted form');
        },
        (error) => {
          console.log(error.text);
        }
      );
  };



  return (
    <>
      <div className=" py-4">
        <img src="./Mum.png" className="mx-auto" alt="" />


        <div className="px-4 sm:16 bg-[#F2F2F2]  relative py-24">
        <img className="absolute w-[40px] h-[40px] right-5  sm:right-[35%] top-[60px] sm:top-[90px]" src="/Vector.png" alt="" />
          <p className="text-center text-[20px] text-[#343D42] ">      
 Funeral Service Announcement</p>
          <h1 className="text-center text-[26px] sm:text-[40px] text-[#843E71] font-bold font-sofia">Mrs Keziah Akuchukwu Magulike</h1>
          <p className="text-center text-[20px] text-[#343D42]">1940 - 2024</p>
        </div>


        <div className="px-4 sm:16 py-8 relative">
          <img className="absolute sm:left-[10px] right-0 top-[20px]" src="/Vector.png" alt="" />
          <div className="">
          <h2 className="text-center text-[30px] sm:text-[40px] text-[#843E71] font-bold font-sofia">Funeral Arrangements</h2>

          <p className="text-center text-[20px] font-bold text-[#343D42]">Service of Songs: Thursday 8th February 2024</p>
          <p className="text-center text-[20px] font-bold text-[#843E71] "> Amawbia</p>
          </div>

          <div id="zom" className="py-4">
          <h2 className="text-center text-[20px]  sm:text-[30px] text-[#343D42]  font-bold font-sofia">Venue: Alfred Okeke’s Family Compound, Opposite the Police Station </h2>

          <p className="text-center text-[20px]  sm:text-[30px] font-bold font-sofia text-[#343D42]">Time: 5:00pm (Nigerian Time) </p>
          <p className="text-center text-[20px]  sm:text-[30px] font-bold text-[#843E71] ">    Leicester</p>
          </div>

          <div className="py-4">
          <h2 className="text-center text-[20px]  sm:text-[30px] text-[#343D42]  font-bold font-sofia">Venue: TBC  </h2>

          <p className="text-center text-[20px]  sm:text-[30px] font-bold font-sofia text-[#343D42]">Time: 6:00pm (UK Time) </p>
          <p className="text-center text-[20px] font-bold text-[#843E71] ">    Leicester</p>
          </div>



          <div className="py-8">
          <h2 className="text-center text-[22px] sm:text-[30px] text-[#000]  font-bold font-sofia">              Funeral: Friday 9th February 2024
                                    <br />   Service  </h2>

          <h2 className="text-center text-[20px] sm:text-[30px] text-[#343D42]  font-bold font-sofia">Venue: One Centre, 10 Frog Island, Leicester LE3 5AG </h2>

          <p className="text-center py-4 text-[20px] sm:text-[30px] font-bold font-sofia text-[#343D42]">Time: 11:00am - 12:30pm (UK Time) </p>
          <p className="text-center text-[20px] sm:text-[30px] font-bold font-sofia text-[#343D42] "> Time: 12:00pm - 1:30pm (Nigerian Time)</p>
          </div>

        </div>
        <div className="px-4 sm:16 max-w-[1500px] mx-auto">
        <img className="w-full" src="/Screenshot_23.png" alt="" />
        </div>
        
        {/* <div className="max-w-[1500px] py-10 mx-auto">
        <img className="mx-auto py-7" src="/Frame 20.png" alt="" />
        </div> */}


        <div className="px-4 sm:16 max-w-[1500px] bg-[#F2F2F2] py-10 mx-auto">

          <form id="con" className="max-w-[700px] mx-auto" ref={form} onSubmit={sendEmail} action="">
            <h2 className="text-center text-[30px] py-2 sm:text-[40px] text-[#843E71] font-bold font-sofia">Condolence Register</h2>
            <div className="pb-20">
            <label className="text-[#063255] "  htmlFor="">First & Last Name   <span className="text-[red]">*</span></label>
          <input
            type="text"
            className="placeholder:text-[#777] mt-2 mb-4 border border-[#fff] text-[#063255] placeholder:text-[16px] py-3 px-6 rounded-md  w-full bg-[#FFFFFF]"
                name="user_name"
                placeholder="Enter your full name"
                  />
                                    <label className="text-[#063255] py-4"  htmlFor="">Email Address  <span className="text-[red]">*</span></label>

          <input
            type="email"
            className="placeholder:text-[#777] mt-2 border border-[#fff] placeholder:text-[16px] text-[#063255] py-3 px-6 rounded-md  mb-4 w-full bg-[#FFFFFF]"
                name="user_email"
                placeholder="Enter your email address"
                  />
                                    <label className="text-[#063255] py-4"  htmlFor="">Phone Number <span className="text-[red]">*</span></label>

          <input
            type="text"
            className="placeholder:text-[#777] mt-2 border border-[#fff] text-[#063255] placeholder:text-[16px] py-3 mb-4 px-6 rounded-md  w-full bg-[#FFFFFF]"
                name="phone"
                placeholder="Enter phone number"
                  />
                                    <label className="text-[#063255] py-4"  htmlFor="">Message   <span className="text-[red]">*</span></label>
          <textarea
            className="w-full mt-2 px-6 border border-[#fff] placeholder:text-[#777] text-[#063255] rounded-md placeholder:text-[16px] py-6 bg-[#FFFFFF]"
            id=""
            cols="30"
                rows="4"
                placeholder="Enter your condolence message here"
          ></textarea>
          <div className="">
           <input type="submit"           className=" text-[#fff] bg-[#843E71] hover:bg-[#93377a] font-semibold text-[17px]   duration-200 delay-75 ease-linear  py-3 rounded-md px-8 my-4"
 text="send"/>
          </div>
        </div>
            </form>


        </div>
        
        <Toaster />
        <TopBtn/>


</div>

    </>
  );
}