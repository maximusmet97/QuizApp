interface IMainPage {
  startTestFn: (arg: boolean) => void;
}

const MainPage = ({ startTestFn }: IMainPage): JSX.Element => {
  return (
    <>
      <button onClick={() => startTestFn(true)}>Start Test</button>
    </>
  );
};

export default MainPage;
