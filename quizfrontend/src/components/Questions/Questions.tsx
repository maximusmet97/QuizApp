interface IQuestions {
  finishTestFn: (arg: boolean) => void;
}

const Questions = ({ finishTestFn }: IQuestions) => {
  return (
    <>
      <h1>Questions</h1>
      <button onClick={() => finishTestFn(true)}>Finish test</button>
    </>
  );
};

export default Questions;
