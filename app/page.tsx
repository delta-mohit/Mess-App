import { redirect } from 'next/navigation'
export default async function Home() {
  // return (
  //   <>
  //   Please go to the /login page. This is intentionally black page
    
  //   </>
  // );
   redirect('/login');
}
