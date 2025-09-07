import { useEffect, useState } from "react"


function App() {

  // const [count, setCount] = useState({
  //   id: 1,
  //   title: "this is title",
  //   number: 0
  // });

  // const [Text, setText] = useState('');
  // console.log('this is app component');
  // const increment = () => {

  //   // count.number = 5;

  //   setCount({
  //     ...count,
  //     number: count.number + 1
  //   });

  //   console.log(count);
  // }

  // const [username, setUsername] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  // const [data, setData] = useState({
  //   username: '',
  //   email: '',
  //   password: '',
  //   address: ''
  // });

  // const submitForm = (e) => {
  //   e.preventDefault();

  //   // const formData = {
  //   //   username,
  //   //   email,
  //   //   password
  //   // }
  // }

  // const formHandler = (e) => {
  //   setData({
  //     ...data,
  //     [e.target.name]: e.target.value
  //   })
  //   console.log(data);
  // }

  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('hello');

  }, [count])

  return (
    // <div className="mt-3.5 ml-3.5">
    //   <Button onClick={increment}>Click me </Button>
    //   <div>
    //     {count.number}
    //   </div>
    //   <Button onClick={() => setText('hello')}>Set Text </Button>
    // </div>


    <div className="max-w-screen-sm mx-auto mt-8 p-8">

      <h1 onClick={() => setCount((prev) => prev + 1)}>hello: {count}</h1>

      {/* <form onSubmit={submitForm}>
        <Input value={data.username} onChange={formHandler} name="username" className="mb-2" type="name" placeholder="your name " />
        <Input value={data.email} onChange={formHandler} name="email" className="mb-2" type="email" placeholder="your email " />
        <Input value={data.password} onChange={formHandler} name="password" className="mb-2" type="password" placeholder="your password" />
        <Input value={data.address} onChange={formHandler} name="address" className="mb-2" type="text" placeholder="your address" />
        <Button className="w-full cursor-pointer">login</Button>
      </form> */}
    </div>
  )
}

export default App
