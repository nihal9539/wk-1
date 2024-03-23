import RightSidwTwo from "./Components/RightSidwTwo/RightSidwTwo";
import Background from "./Components/Background/Background";
import Header from "./Components/Header/Header";
import LeftSide from "./Components/LeftSide/LeftSide";

function App() {
  return (

    <div className="  h-[1060px] bg-black text-white  ">
      <div className="absolute">
        <Background />
      </div>
      <Header />

      <div className="flex flex-row relative p-2 px-4 justify-start gap-2 ">
        <LeftSide />
        <RightSidwTwo/>
      </div>
    </div>
  );
}

export default App;
