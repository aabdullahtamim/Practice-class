
import { z } from "zod"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"



const formSchema = z.object({
    full_name: z
        .string()
        .min(5, "Full name must be at least 5 characters long.")
        .max(50, "Full name can’t exceed 50 characters."),

    message: z
        .string()
        .min(15, "Full name must be at least 5 characters long.")
        .max(50, "Full name can’t exceed 50 characters."),

    email: z
        .string()
        .email("Please enter a valid email address (e.g., name@example.com).")
        .max(50, "Email can’t exceed 50 characters."),
})


function Contact() {

    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            full_name: "",
            email: "",
            message: "",
        },
    })


    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
        toast.success("Thank you for your message")

        form.reset()
    }


    return (
        <>
            <div className="w-full flex flex-col gap-16 items-center justify-center px-6 pt-14">
                <div className="text-center max-w-3xl">

                    <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl md:leading-[1.2] font-semibold tracking-tighter">
                        Contact Us
                    </h1>

                </div>

            </div>

            <div className="max-w-screen-md mx-auto my-6 bg-accent rounded-2xl p-6">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <FormField
                            control={form.control}
                            name="full_name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>full_name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="full_name" {...field} />
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
                                    <FormLabel>email</FormLabel>
                                    <FormControl>
                                        <Input placeholder="email" {...field} />
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>message</FormLabel>
                                    <FormControl>
                                        <Textarea placeholder="message" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button className="w-full" type="submit">Send Message</Button>
                    </form>
                </Form>
            </div>
        </>
    )
}

export default Contact;