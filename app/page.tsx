import Navbar from "@/components/Navbar"
export default async function Home() {
  // if(typeof window !== "undefined"){
  //   window.location.href="/login"
  //   //but ye galat hai, mein chahta hu ki banda direct today's menu wale pe jaaye agar log in hai already, if not then usko login page pe redirect kar do and vo fir login kar lega
  // }

  return (
    <>
    <Navbar details={{name:"", message:"Hi there"}}></Navbar>
    </>
  );
}
