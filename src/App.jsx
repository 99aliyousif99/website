import Container from "./Components/Container/Container";
function App() {
  return (
    <>
      <Container>
        <div className="flex items-center justify-between">
          <h1 className="font-mediunm text-3xl ">DeceptiConf</h1>
          <p className="text-[#2266FC]">04-06 of April, 2022 Los Angeles, CA</p>
          <button>Get your ticket </button>
        </div>
      </Container>
    </>
  );
}

export default App;
