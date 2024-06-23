import "./App.css";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import { useState, useEffect, useRef } from "react";
import Stopwatch from "./stopwatch";
function App() {
  const [count, setcount] = useState(0);
  const [showbtn, setshowbtn] = useState(false);
  const AD = useRef();

  const [Data, setdata] = useState([])
  const fetchdata = async ()=>{
    let a = await fetch("https://jsonplaceholder.typicode.com/posts");
    let data = await a.json()
    setdata (data)
    console.log(data)
  }
  useEffect(() => {
    setcount(count + 1);
    AD.current.style.color = "red";
    fetchdata()
  }, []);

  return (
    <>
      <Navbar />
      <main className="flex justify-around mt-5">
        <Card
          title="hi"
          desc="lorem5sdfsgsdg"
          src="https://img.freepik.com/free-photo/autumn-leaf-falling-revealing-intricate-leaf-vein-generated-by-ai_188544-9869.jpg?w=826&t=st=1717694460~exp=1717695060~hmac=5debf738afe0c49b716355367e964d3d1021cd964e2d8f41e6a8ffc3d40d3926"
        />
        <Card
          title="hi"
          desc="lorem5sdfsgsdg"
          src="https://img.freepik.com/free-photo/beautiful-isolated-feather_23-2151436660.jpg?t=st=1717694487~exp=1717698087~hmac=e2f9d37893c67c18186a51e72cb3ca34f10f01ebea0435b0a5fc1e17526e7c29&w=740"
        />
        <Card title="hi" desc="lorem5sdfsgsdg" />
        <Card title="hi" desc="lorem5sdfsgsdg" />
      </main>
      <div className="counter text-center mt-5">
        <h1 className="text-[30px] font-[700] ">Counter</h1>
        <p>{count}</p>
        <p></p>
        <button
          ref={AD}
          onClick={() => {
            setcount(count + 1);
            setshowbtn(!showbtn);
          }}
          className="border-[2px] border-black p-2 rounded-lg mt-5 "
        >
          Click ME
        </button>
        {showbtn ? (
          <button
            onClick={() => {}}
            className="border-[2px] border-black p-2 rounded-lg mt-5"
          >
            Click ME
          </button>
        ) : (
          ""
        )}
      </div>

      <button
        className="text-center"
        onClick={() => {
          AD.current.style.display = "none";
        }}
      >
        {" "}
        Gayeb
      </button>

      <div >
        {
         
          Data.map((card)=>{
            return <div  className="caardds border-[2px] border-black">
               <h1 className="red">{card.title}</h1>
               <h3 className="text-red">{card.body}</h3>
            </div>
          })
        }
      </div>

      <Stopwatch />
    </>
  );
}

export default App;
