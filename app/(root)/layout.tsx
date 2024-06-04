import MobilNav from "@/components/MobilNav";
import Sidebar from "@/components/Sidebar";
import Image from 'next/image'
import logoIcon from '@/public/icons/LOGO12.svg'


export default function RootLayout({

  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const loggedIn = { firstName: 'Mark', lastName: 'Sila' }
  return (
   <main className=" flex h-screen w-full font-inter">
    <Sidebar 
      user={loggedIn} />

      <div className="flex size-full flex-col">
        <div className="root-layout">
          <Image src={logoIcon} width={30} height={30} alt="logo" />
          <div>
            <MobilNav user={loggedIn}/>
          </div>
        </div>
    {children}
      </div>
   </main>
  
  );
}
