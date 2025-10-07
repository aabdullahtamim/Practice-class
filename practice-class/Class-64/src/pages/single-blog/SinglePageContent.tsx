import { Badge } from "@/components/ui/badge"


function SinglePageContent() {
    return (
        <div className="min-h-screen w-full flex flex-col gap-16 items-center justify-center px-6 py-16">
            <div className="text-center max-w-3xl">

                <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl md:leading-[1.2] font-semibold tracking-tighter">
                    Customized Shadcn UI Blocks & Components
                </h1>
                <div className="flex items-center gap-3 justify-center py-5">
                    <Badge className="bg-primary/5 text-primary hover:bg-primary/5 shadow-none">
                        Technology
                    </Badge>
                    <span className="font-medium text-xs text-muted-foreground">
                        5 min read
                    </span>
                </div>
            </div>
            <div className="container mx-auto">
                <img className="w-full" src="https://i.postimg.cc/BvBzvt7f/laptop.jpg" alt="laptop" />
            </div>
            <div className="container mx-auto bg-accent rounded-xl">
                <div className="p-6 leading-[25px]">
                    <p className="text-foreground">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit id reprehenderit veniam earum saepe ut molestias repellat totam, ipsam dolorem est, facilis, laboriosam unde minima natus molestiae vel explicabo nobis dignissimos harum quisquam? Eum porro dolorum corrupti sint impedit reiciendis, libero voluptatem. Officia reiciendis nihil ullam quam nesciunt omnis architecto laborum numquam nulla. Optio ex ullam dignissimos libero voluptatem recusandae excepturi quo sunt explicabo. Impedit inventore, rerum sit dolorem illo error illum ipsa asperiores nulla iusto ipsam consequuntur! Nostrum molestias, laboriosam dignissimos odio, atque debitis ducimus, exercitationem hic quo eius quaerat. Ullam ipsa consectetur reiciendis dignissimos. Nulla possimus quaerat id. Reprehenderit quam quia deserunt, molestiae minima voluptates, voluptatum non quas sequi doloribus ea tempore atque consectetur ducimus eveniet obcaecati minus aliquam! Pariatur ullam est explicabo doloremque minus molestias accusamus nam in suscipit libero reprehenderit dolorum praesentium vitae, deserunt velit cum nobis eaque inventore corporis exercitationem beatae tenetur delectus officia? Hic rerum cupiditate quas, excepturi magni neque quam eum autem fuga ipsa odio vitae exercitationem eaque dolore ad. Nemo similique quia ullam? Unde architecto, mollitia nesciunt incidunt quisquam et, tenetur nostrum doloribus ipsam possimus labore aut magnam eligendi quaerat? Quisquam minima animi dignissimos voluptatibus laudantium id repudiandae rerum eos voluptatem, error iure expedita cumque, fugit nisi sequi quo blanditiis enim ex iusto ea, neque illo. Quod fugit commodi, alias minima ratione soluta ea vel praesentium culpa nulla cum cupiditate iste magnam quam eum expedita libero doloribus maiores dolorum nobis in. Perspiciatis nisi dicta sint ullam aut! Quisquam quod nostrum id adipisci!</p>
                </div>
            </div>

        </div>
    )
}

export default SinglePageContent