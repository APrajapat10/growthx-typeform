import { useState, useRef } from "react";
import Button from "./components/Button";

function App() {
  const [submitScreen, setSubmitScreen] = useState(false);
  const [widthArray, setWidthArray] = useState([0, 0, 0, 0, 0, 0, 0]);
  const topWidthBar = widthArray.reduce((partialSum, a) => partialSum + a, 0);

  const firstNameInputRef = useRef(null);
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
      {!submitScreen && (
        <>
          <div className="flex justify-center items-center flex-1 text-white px-6 md:px-0 min-h-screen snap-center">
            <div className="w-full max-w-2xl">
              <p className="text-xl md:text-2xl">
                Up-skilling requires time commitment
              </p>
              <br />
              <div className="text-base md:text-xl opacity-70">
                <p>
                  The GrowthX experience is designed by keeping in mind the
                  working hours founders & full time operators typically work
                  in.
                </p>
                <br />
                <p>You will spend</p>
                <p>- 6 hours/week for the first 5 weeks</p>
                <p>- 15 hours/week for the last 3 weeks</p>
              </div>
              <br />
              <Button
                btnText={"I agree"}
                action={() => {
                  firstNameInputRef.current.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                  });
                  firstNameInputRef.current.focus({
                    preventScroll: true,
                  });
                }}
              />
            </div>
          </div>
        </>
      )}
      <div className="w-24 h-auto fixed">
        <img src="/GX-logo.png" alt="growthx-logo" className="object-contain" />
      </div>
    </div>
  );
}

export default App;
