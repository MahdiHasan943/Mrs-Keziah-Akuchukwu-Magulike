import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useRef ,useState } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from 'react-hot-toast';
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
      <div className="px-4 sm:16 py-4">
        <img src="./Mum.png" className="sm:h-[480px] mx-auto sm:w-[600px]" alt="" />


        <div className="bg-[#F2F2F2] py-8">
          <p className="text-center text-[20px] text-[#343D42]">Funeral Service Announcement</p>
          <h1 className="text-center text-[40px] text-[#843E71] font-bold font-sofia">Mrs Keziah Akuchukwu Magulike</h1>
          <p className="text-center text-[20px] text-[#343D42]">1940 - 2024</p>
        </div>


        <div className="py-8 relative">
          <img className="absolute left-[10px] top-[20px]" src="/Vector.png" alt="" />
          <div className="">
          <h2 className="text-center text-[40px] text-[#843E71] font-bold font-sofia">Funeral Arrangements</h2>

          <p className="text-center text-[20px] font-bold text-[#343D42]">Service of Songs: Thursday 8th February 2024</p>
          <p className="text-center text-[20px] font-bold text-[#843E71] "> Amawbia</p>
          </div>

          <div className="py-4">
          <h2 className="text-center text-[30px] text-[#343D42]  font-bold font-sofia">Venue: Alfred Okeke’s Family Compound, Opposite the Police Station </h2>

          <p className="text-center text-[30px] font-bold font-sofia text-[#343D42]">Time: 5:00pm (Nigerian Time) </p>
          <p className="text-center text-[20px] font-bold text-[#843E71] ">    Leicester</p>
          </div>

          <div className="py-4">
          <h2 className="text-center text-[30px] text-[#343D42]  font-bold font-sofia">Venue: TBC  </h2>

          <p className="text-center text-[30px] font-bold font-sofia text-[#343D42]">Time: 6:00pm (UK Time) </p>
          <p className="text-center text-[20px] font-bold text-[#843E71] ">    Leicester</p>
          </div>



          <div className="py-8">
          <h2 className="text-center text-[30px] text-[#000]  font-bold font-sofia">              Funeral: Friday 9th February 2024
                                    <br />   Service  </h2>

          <h2 className="text-center text-[30px] text-[#343D42]  font-bold font-sofia">Venue: One Centre, 10 Frog Island, Leicester LE3 5AG </h2>

          <p className="text-center text-[30px] font-bold font-sofia text-[#343D42]">Time: 11:00am - 12:30pm (UK Time) </p>
          <p className="text-center text-[30px] font-bold font-sofia text-[#343D42] "> Time: 12:00pm - 1:30pm (Nigerian Time)</p>
          </div>

        </div>
        <div className="max-w-[1500px] mx-auto">
        <img className="w-full" src="/Screenshot_23.png" alt="" />
        </div>
        
        <div className="max-w-[1500px] py-10 mx-auto">
        <img className="mx-auto py-7" src="/Frame 20.png" alt="" />
        </div>


        <div className="max-w-[1500px] py-10 mx-auto">

        <form className="max-w-[700px] mx-auto" ref={form} onSubmit={sendEmail} action="">
              <div className="py-20">
                <input
                  type="text"
                  className="placeholder:text-[#010101] border border-[black] text-[#010101] placeholder:text-[22px] py-8 px-6 rounded-xl w-full bg-white"
                  placeholder="First & Last Name  *"
                  name="user_name"
                />
                <input
                  type="email"
                  className="placeholder:text-[#010101] border border-[black] placeholder:text-[22px] text-[#010101] py-8 px-6 rounded-xl my-10 w-full bg-white"
                  placeholder="Email Address *"
                  name="user_email"
              />
                <input
                  type="text"
                  className="placeholder:text-[#010101] border border-[black] text-[#010101] placeholder:text-[22px] py-8 mb-10 px-6 rounded-xl w-full bg-white"
                  placeholder="Phone Number"
                  name="phone"
                />
                <textarea
                  className="w-full px-6 border border-[black] placeholder:text-[#010101] text-[#010101] rounded-xl placeholder:text-[22px] py-6 bg-white"
                  placeholder="Enter your condolence message here"
                  name="message"
                  id=""
                  cols="30"
                  rows="7"
                ></textarea>
                <div className="text-center pt-10">
                  <input
                    type="submit"
                    value="Send it"
                    className="text-white rounded-xl text-[20px] font-normal leading-[30px] bg-[#843E71] py-4  sm:py-10 px-10 w-[50%] "
                  />
                </div>
              </div>
            </form>


        </div>
        
        <Toaster />
        


</div>

    </>
  );
}