import Image from "next/image"
import { Button } from "@/components/ui/button"
interface AuthLayoutProps {
    children : React.ReactNode;
};
const AuthLayout : React.FC<AuthLayoutProps> = ({children})=>{
    return (
        <main className="bg-neutral-50 min-h-screen">
        <div className=" mx-auto max-w-screen-2xl p-2">
            <nav className="bg-red-400 flex justify-between items-center p-2">
              <Image src="/logo.svg" width={50} height={50} alt="logo"/> 
              <Button variant="secondary">SignUp</Button> 
            </nav>
            <div className="flex flex-col items-center justify-center pt-5 md:pt-10">
            {children}
            </div>
        </div>
        </main>
    )
}
export default AuthLayout ;