import {Card,CardContent,CardHeader,CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button"
import { Input } from "@/components/ui/input";
const SignInCard = () => {
  return (
    <Card className="w-full h-full md:w-[478px] border-blue-500 shadow-none">
      <CardHeader className="flex items-center justify-center text-center p-7">
        <CardTitle className="text-2xl">
          Welcome back!
        </CardTitle>
      </CardHeader>
      <CardContent className="p-7">
        <form className="space-y-4">
          <Input
          required
          type="email"
          value={""}
          onChange={()=>{}}
          placeholder="Enter email address"
          disabled={false}
          />
        <Input
          required
          type="password"
          value={""}
          onChange={()=>{}}
          placeholder="Enter password"
          disabled={false}
          />
          <Button disabled={false} size="lg" className="w-full">
            Login
          </Button>
          <Button disabled={false} variant="link" size="lg" className="w-full">
            Login with Google
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

export default SignInCard;