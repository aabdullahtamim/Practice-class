
async function blogDetails({ params }) {

    const { id } = await params;

    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    console.log(await res.json());


    return (
        <div> this is blogDetails page </div>
    )
}

export default blogDetails;