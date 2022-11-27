import { useState } from "react";

function App() {
  const [submitScreen, setSubmitScreen] = useState(false);
  const [widthArray, setWidthArray] = useState([0, 0, 0, 0, 0, 0, 0]);
  const topWidthBar = widthArray.reduce((partialSum, a) => partialSum + a, 0);
  return (
    <div className="bg-black pt-5 p-4 relative flex flex-col h-screen overflow-y-auto snap-y snap-mandatory">
      {!submitScreen && (
        <>
          <div className="fixed top-0 left-0 w-full h-1 bg-[#0077ff] opacity-50"></div>
          <div
            className="fixed top-0 left-0 h-1 bg-[#0077ff] transition-all ease-in-out duration-500"
            style={{
              width: `${(topWidthBar / 7) * 100}%`,
            }}
          ></div>
        </>
      )}
      <div className="w-24 h-auto fixed">
        <img src="/GX-logo.png" alt="growthx-logo" className="object-contain" />
      </div>
    </div>
  );
}

export default App;
