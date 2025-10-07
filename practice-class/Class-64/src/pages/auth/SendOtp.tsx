

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import { z } from "zod";

const formSchema = z
    .object({
        email: z
            .string()
            .min(1, "Email is required")
            .email("Please enter a valid email address"),

    });

const SendOtp = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        defaultValues: {
            email: "",
        },
        resolver: zodResolver(formSchema),
    });

    const onSubmit = (data: z.infer<typeof formSchema>) => {
        console.log(data);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-muted">
            <div className="max-w-sm mt-20 mb-5 w-full flex flex-col items-center border rounded-lg px-4 py-6 shadow-sm/5 bg-card">
                <p className=" text-xl font-semibold tracking-tight">
                    Send OTP to your email
                </p>

                <div className="my-4 w-full flex items-center justify-center overflow-hidden">
                    <Separator />

                </div>

                <Form {...form}>
                    <form
                        className="w-full space-y-4"
                        onSubmit={form.handleSubmit(onSubmit)}
                    >
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="email"
                                            placeholder="Email"
                                            className="w-full"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <Button type="submit" className="mt-4 w-full">
                            Send OTP
                        </Button>
                    </form>
                </Form>

                <div className="mt-2 space-y-2">
                    <p className="text-sm text-center">
                        Don&apos;t have an account?
                        <Link to="/sign-up" className="ml-1 underline text-muted-foreground">
                            Create account
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};



export default SendOtp;
