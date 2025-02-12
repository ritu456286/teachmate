import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { loginSchema, LoginSchema } from "@/lib/schemas/auth-schema";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router";

export function SignupForm() {
  const form = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      role: "teacher",
    },
  });

  function onSubmit(values: LoginSchema) {
    console.log("Signup Submitted:", values);
  }
  
  return (
    <div className="w-full flex justify-center items-center min-h-screen p-4">
      <Card className="w-full max-w-lg shadow-lg rounded-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-semibold">Signup Form</CardTitle>
          <CardDescription>
            Welcome to Teachmate
          </CardDescription>
        </CardHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="p-6 md:p-8 space-y-6"
          >

            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg">Full Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="xyz"
                      {...field}
                      className="h-10"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
  

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg">Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="abc@example.com"
                      {...field}
                      className="h-10"
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
                  <FormLabel className="text-lg">Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="••••••"
                      {...field}
                      className="h-10"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
  
            <FormField
              control={form.control}
              name="role"
              render={({ field }) => (
                <FormItem className="flex items-center space-x-4">
                  <FormLabel className="text-lg space-x-5">
                    {field.value === "teacher" ? "Teacher" : "Student"}
                  </FormLabel>
                  <FormControl>
                    <Switch
                      checked={field.value === "teacher"}
                      onCheckedChange={(checked) =>
                        field.onChange(checked ? "teacher" : "student")
                      }
                      className="border-gray-300"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
  
            <Button
              type="submit"
              className="w-full  py-2 rounded-md transition hover:cursor-pointer"
            >
              Submit
            </Button>
          </form>
        </Form>
        <CardFooter>
        <div className="text-md font-medium text-gray-500 dark:text-gray-300">

          Already registered? <Link to="/login" className="text-blue-700 hover:underline dark:text-blue-500">Login Here</Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
  
}
