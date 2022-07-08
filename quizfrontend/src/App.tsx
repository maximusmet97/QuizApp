import { useState } from "react";
import MainPage from "./components/MainPage";
import Questions from "./components/Questions";
import Result from "./components/Result";
import Header from "./components/Header";

function App(): JSX.Element {
  const [isTestStarted, setIsTestStarted] = useState<boolean>(false);
  const [isTestFinished, setIsTestFinished] = useState<boolean>(false);

  const startTest = (isStarted: boolean): void => {
    setIsTestStarted(isStarted);
  };

  const finishTest = (isFinished: boolean): void => {
    setIsTestFinished(isFinished);
  };

  return (
    <>
      <Header />
      {!isTestStarted && <MainPage startTestFn={startTest} />}
      {isTestStarted && !isTestFinished && (
        <Questions finishTestFn={finishTest} />
      )}
      {isTestFinished && <Result />}
    </>
  );
}

export default App;
