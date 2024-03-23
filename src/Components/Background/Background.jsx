import "./Background.css"
const Background = () => {
  return (
    <div className="relative w-screen filter  overflow-hidden h-[1060px]">
         <div

        className="filter w-[700px] h-[700px]  animate-eclips-1 blur-3xl opacity-45  absolute   rounded-full "
        style={{
          backgroundImage: "linear-gradient(180deg, #8F00FF 0%, #00C8FF 100%)",
        }}
      ></div>
      {/* Second round */}
      
      <div
        className="filter w-[700px] h-[700px]      animate-eclips-2 opacity-45 blur-3xl   absolute  rounded-full "
        style={{
          background: "linear-gradient(180deg, #FF00FF 0%, #00EEC5 100%)",
        }}
      ></div>
    </div>
  );
};

export default Background;
