import {FcGoogle} from "react-icons/fc";
import {Card,CardContent,CardHeader,CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button"
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

//1. Define the form schema
const formSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters long")
});

//2. Define the form type
type FormSchema = z.infer<typeof formSchema>;

const SignUpCard = () => {
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
    mode: 'onSubmit'
  });

  const onSubmit = (data: FormSchema) => {
    //clear the form
    console.log(data);
    form.reset();
  }

  return (
    <Card className="w-full h-full md:w-[478px] border-blue-500 shadow-none">
      <CardHeader className="flex items-center justify-center text-center p-7">
        <CardTitle className="text-2xl">
          Sign In
        </CardTitle>
      </CardHeader>
      <CardContent className="p-7">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="email"
                      placeholder="Enter email address"
                      className={form.formState.errors.email ? "border-red-500" : field.value ? "border-green-300" : ""}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="password"
                      placeholder="Enter password"
                      className={form.formState.errors.password ? "border-red-500" : field.value ? "border-green-300" : ""}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" size="lg" className="w-full">
              Sign In
            </Button>
            <Button type="button" variant="ghost" size="lg" className="w-full">
              <FcGoogle className="mr-2 size-5"/>
              Sign In with Google
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}

export default SignUpCard;