import { useState } from "react";

function App() {
  const [result, setResult] = useState<number>(0);
  const [operation, setOperation] = useState<string[]>([]);

  const generateValue = () => {
    const string = operation.join('')
      const result = eval(string);
      setResult(result)
  }

  const clear = () => {
    setResult(0);
    setOperation([])
  }

  return (
    <main className="bg-gunmetal flex h-screen justify-center items-center dark:bg-silver">
      <section className="h-[600px] w-[320px] bg-anti-flash-white dark:bg-gunmetal flex flex-col gap-10 rounded-2xl py-5 px-3">
        <section className="">
          <p className="text-gunmetal dark:text-anti-flash-white text-4xl mt-10 text-right">
            {Number(result).toLocaleString()}
          </p>
          <p className="text-gunmetal h-10 dark:text-silver text-right mt-14">
            {operation.join("")}
          </p>
        </section>
        <section className="flex-1 flex flex-col gap-4 mt-">
          <div className="grid grid-cols-4 w-full">
            <div className="col-span-1 flex justify-center items-center">
              <button onClick={clear} className="rounded-lg shadow-lg text-savety-orange w-12 h-12 bg-anti-flash-white dark:bg-gunmetal hover:bg-hover-white active:bg-hover-white dark:hover:bg-hover-dark dark:active:bg-hover-dark">
                AC
              </button>
            </div>
            <div className="col-span-1 flex justify-center items-center">
              <button  className="rounded-lg shadow-lg text-savety-orange w-12 h-12 bg-anti-flash-white dark:bg-gunmetal hover:bg-hover-white active:bg-hover-white dark:hover:bg-hover-dark dark:active:bg-hover-dark">
                Del
              </button>
            </div>
            <div className="col-span-1 flex justify-center items-center">
              <button className="rounded-lg shadow-lg text-savety-orange w-12 h-12 bg-anti-flash-white dark:bg-gunmetal hover:bg-hover-white active:bg-hover-white dark:hover:bg-hover-dark dark:active:bg-hover-dark">
                %
              </button>
            </div>
            <div className="col-span-1 flex justify-center items-center">
              <button className="rounded-lg shadow-lg text-savety-orange w-12 h-12 bg-anti-flash-white dark:bg-gunmetal hover:bg-hover-white active:bg-hover-white dark:hover:bg-hover-dark dark:active:bg-hover-dark">
                /
              </button>
            </div>
          </div>
          <div className="grid grid-cols-4 w-full">
            <div className="col-span-1 flex justify-center items-center">
              <button onClick={() => setOperation((prev: string[]) => [...prev, '7'])} className="rounded-lg shadow-lg text-gunmetal dark:text-silver w-12 h-12 bg-anti-flash-white dark:bg-gunmetal hover:bg-hover-white active:bg-hover-white dark:hover:bg-hover-dark dark:active:bg-hover-dark">
                7
              </button>
            </div>
            <div className="col-span-1 flex justify-center items-center">
              <button className="rounded-lg shadow-lg text-gunmetal dark:text-silver w-12 h-12 bg-anti-flash-white dark:bg-gunmetal hover:bg-hover-white active:bg-hover-white dark:hover:bg-hover-dark dark:active:bg-hover-dark">
                8
              </button>
            </div>
            <div className="col-span-1 flex justify-center items-center">
              <button className="rounded-lg shadow-lg text-gunmetal dark:text-silver w-12 h-12 bg-anti-flash-white dark:bg-gunmetal hover:bg-hover-white active:bg-hover-white dark:hover:bg-hover-dark dark:active:bg-hover-dark">
                9
              </button>
            </div>
            <div className="col-span-1 flex justify-center items-center">
              <button className="rounded-lg shadow-lg text-savety-orange w-12 h-12 bg-anti-flash-white dark:bg-gunmetal hover:bg-hover-white active:bg-hover-white dark:hover:bg-hover-dark dark:active:bg-hover-dark">
                x
              </button>
            </div>
          </div>
          <div className="grid grid-cols-4 w-full">
            <div className="col-span-1 flex justify-center items-center">
              <button className="rounded-lg shadow-lg text-gunmetal dark:text-silver w-12 h-12 bg-anti-flash-white dark:bg-gunmetal hover:bg-hover-white active:bg-hover-white dark:hover:bg-hover-dark dark:active:bg-hover-dark">
                4
              </button>
            </div>
            <div className="col-span-1 flex justify-center items-center">
              <button className="rounded-lg shadow-lg text-gunmetal dark:text-silver w-12 h-12 bg-anti-flash-white dark:bg-gunmetal hover:bg-hover-white active:bg-hover-white dark:hover:bg-hover-dark dark:active:bg-hover-dark">
                5
              </button>
            </div>
            <div className="col-span-1 flex justify-center items-center">
              <button className="rounded-lg shadow-lg text-gunmetal dark:text-silver w-12 h-12 bg-anti-flash-white dark:bg-gunmetal hover:bg-hover-white active:bg-hover-white dark:hover:bg-hover-dark dark:active:bg-hover-dark">
                6
              </button>
            </div>
            <div className="col-span-1 flex justify-center items-center">
              <button className="rounded-lg shadow-lg text-savety-orange w-12 h-12 bg-anti-flash-white dark:bg-gunmetal hover:bg-hover-white active:bg-hover-white dark:hover:bg-hover-dark dark:active:bg-hover-dark">
                -
              </button>
            </div>
          </div>
          <div className="grid grid-cols-4 w-full">
            <div className="col-span-1 flex justify-center items-center">
              <button className="rounded-lg shadow-lg text-gunmetal dark:text-silver w-12 h-12 bg-anti-flash-white dark:bg-gunmetal hover:bg-hover-white active:bg-hover-white dark:hover:bg-hover-dark dark:active:bg-hover-dark">
                1
              </button>
            </div>
            <div className="col-span-1 flex justify-center items-center">
              <button className="rounded-lg shadow-lg text-gunmetal dark:text-silver w-12 h-12 bg-anti-flash-white dark:bg-gunmetal hover:bg-hover-white active:bg-hover-white dark:hover:bg-hover-dark dark:active:bg-hover-dark">
                2
              </button>
            </div>
            <div className="col-span-1 flex justify-center items-center">
              <button className="rounded-lg shadow-lg text-gunmetal dark:text-silver w-12 h-12 bg-anti-flash-white dark:bg-gunmetal hover:bg-hover-white active:bg-hover-white dark:hover:bg-hover-dark dark:active:bg-hover-dark">
                3
              </button>
            </div>
            <div className="col-span-1 flex justify-center items-center">
              <button onClick={() => setOperation((prev: string[]) => [...prev, '+'])} className="rounded-lg shadow-lg text-savety-orange w-12 h-12 bg-anti-flash-white dark:bg-gunmetal hover:bg-hover-white active:bg-hover-white dark:hover:bg-hover-dark dark:active:bg-hover-dark">
                +
              </button>
            </div>
          </div>
          <div className="grid grid-cols-4 w-full">
            <div className="col-span-1 flex justify-center items-center">
              <button className="rounded-lg shadow-lg text-gunmetal dark:text-silver w-12 h-12 bg-anti-flash-white dark:bg-gunmetal hover:bg-hover-white active:bg-hover-white dark:hover:bg-hover-dark dark:active:bg-hover-dark">
                0
              </button>
            </div>
            <div className="col-span-1 flex justify-center items-center">
              <button className="rounded-lg shadow-lg text-gunmetal dark:text-silver w-12 h-12 bg-anti-flash-white dark:bg-gunmetal hover:bg-hover-white active:bg-hover-white dark:hover:bg-hover-dark dark:active:bg-hover-dark">
                .
              </button>
            </div>
            <div className="col-span-2 flex justify-center items-center">
              <button
              onClick={generateValue}
                className="rounded-lg shadow-lg text-anti-flash-white w-[120px] h-12 bg-savety-orange hover:bg-sandy-brown active:bg-sandy-brown"
              >
                =
              </button>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}

export default App;
