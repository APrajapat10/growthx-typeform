import { useState, useRef } from "react";
import Button from "./components/Button";
import ErrorMsg from "./components/ErrorMsg";

import { industriesData } from "./data/industriesData";

function App() {
  const [submitScreen, setSubmitScreen] = useState(false);
  const [widthArray, setWidthArray] = useState([0, 0, 0, 0, 0, 0, 0]);
  const [selectBlock, setSelectedBlock] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  const topWidthBar = widthArray.reduce((partialSum, a) => partialSum + a, 0);

  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const [errorMsg, setErrorMsg] = useState({
    firstName: false,
    lastName: false,
    email: false,
    phone: false,
    industry: false,
    role: false,
    goals: false,
  });

  const firstNameInputRef = useRef(null);
  const lastNameInputRef = useRef(null);
  const inputRef = useRef(null);
  const roleRef = useRef(null);

  function handleSelectBlockClick(item) {
    setSelectedBlock(false);
    setSearchInput(item);
    roleRef.current.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }
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
          <div className="flex justify-center items-center flex-1 text-white px-6 md:px-0 min-h-screen snap-center">
            <div className="w-full max-w-2xl relative">
              <span className="absolute -left-8 md:-left-10 top-1 md:top-0">
                1 →
              </span>
              <p className="text-xl md:text-2xl">What's your first name? *</p>
              <br />
              <input
                type="text"
                ref={firstNameInputRef}
                className="w-full block border-b bg-transparent pb-1 text-2xl md:text-4xl opacity-70 focus-within:opacity-100 focus:outline-none focus:border-b-white"
                placeholder="Type your answer here"
                onChange={(e) =>
                  setFormValues({ ...formValues, firstName: e.target.value })
                }
              />
              {errorMsg.firstName && formValues.firstName === "" && (
                <ErrorMsg />
              )}
              <br />
              <Button
                tick={true}
                action={() => {
                  lastNameInputRef.current.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                  });
                  lastNameInputRef.current.focus({
                    preventScroll: true,
                  });
                }}
              />
            </div>
          </div>
          <div className="flex justify-center items-center flex-1 text-white px-6 md:px-0 min-h-screen snap-center">
            <div className="w-full max-w-2xl relative">
              <span className="absolute -left-8 md:-left-10 top-1 md:top-0">
                2 →
              </span>
              <p className="text-xl md:text-2xl">
                and your last name,{" "}
                {formValues.firstName && formValues.firstName}?*
              </p>
              <br />
              <input
                type="text"
                ref={lastNameInputRef}
                className="w-full block border-b bg-transparent pb-1 text-2xl md:text-4xl opacity-70 focus-within:opacity-100 focus:outline-none focus:border-b-white"
                placeholder="Type your answer here"
                onChange={(e) =>
                  setFormValues({ ...formValues, lastName: e.target.value })
                }
              />
              {errorMsg.lastName && formValues.lastName === "" && <ErrorMsg />}
              <br />
              <Button
                tick={true}
                action={() => {
                  inputRef.current.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                  });
                  inputRef.current.focus({
                    preventScroll: true,
                  });
                }}
              />
            </div>
          </div>
          <div
            className="flex justify-center items-center flex-1 text-white px-6 md:px-0 min-h-screen snap-center outline-none"
            tabIndex="0"
          >
            <div className="w-full max-w-2xl relative">
              <span className="absolute -left-8 md:-left-10 top-1 md:top-0">
                3 →
              </span>
              <p className="text-xl md:text-2xl mb-2">
                What industry is your company in? *
              </p>
              <p className="text-base md:text-xl opacity-70">
                We will personalize your learning experience accordingly
              </p>
              <br />
              <div
                className={`${
                  selectBlock || searchInput ? "opacity-100" : "opacity-70"
                } flex items-center justify-between border-b`}
              >
                <input
                  type="text"
                  className="w-full block bg-transparent pb-1 text-2xl md:text-4xl focus:outline-none"
                  placeholder="Type or select an option"
                  onChange={(e) => setSearchInput(e.target.value)}
                  ref={inputRef}
                  value={searchInput}
                  onFocus={() => setSelectedBlock(true)}
                />
                {!selectBlock && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 cursor-pointer"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    onClick={() => setSelectedBlock(true)}
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
                {selectBlock && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 cursor-pointer"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    onClick={() => setSelectedBlock(false)}
                  >
                    <path
                      fillRule="evenodd"
                      d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </div>
              {selectBlock && (
                <div className="block overflow-y-auto max-h-52 space-y-1 mt-1">
                  {industriesData
                    .filter((industry) =>
                      industry.toLowerCase().includes(searchInput.toLowerCase())
                    )
                    .map((item, idx) => (
                      <p
                        key={idx}
                        className="border border-white px-3 py-1 rounded-md text-base md:text-xl bg-[#211f1f] cursor-pointer hover:bg-[#4D4D4D]"
                        onClick={() => {
                          handleSelectBlockClick(item);
                        }}
                      >
                        {item}
                      </p>
                    ))}
                </div>
              )}
              {errorMsg.industry && searchInput === "" && <ErrorMsg />}
              <br />
              <Button
                tick={true}
                action={() => {
                  roleRef.current.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
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
