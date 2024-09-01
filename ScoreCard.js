let score = 0;
let wicket = 0;
let ballWiseRes = [];
let hit = 0;
let inputRef = React.createRef();   // to get the value from input


// function oneClicked () {
//     score += 1;
//     rootElement.render(<App/>);
// }

function addScore(num) {
  // if (wicket < 10) {
  // ballWiseRes.push(num);
  // score += num;
  hit = num;
  rootElement.render(<App />);
  // console.log(ballWiseRes);
}
// }
function addWicket() {
  // if (wicket < 10) {
  // ballWiseRes.push("W");
  // wicket += 1;
  hit = 'W';
  rootElement.render(<App />);
  // console.log(ballWiseRes);
}
// }

const ScoreButtons = () => (
  <div>
    <button onClick={() => addScore(0)}>0</button>
    <button onClick={() => addScore(1)}>1</button>
    <button onClick={() => addScore(2)}>2</button>
    <button onClick={() => addScore(3)}>3</button>
    <button onClick={() => addScore(4)}>4</button>
    <button onClick={() => addScore(6)}>6</button>
    <button onClick={addWicket}>Wicket</button>
  </div>
);

const Result = () => (
  <div>
    {ballWiseRes.map((res, index) => (
      <>
        {index % 6 === 0 ? <br /> : null}
        <span key={index}> {res === 0 ? <strong>.</strong> : res} </span> &nbsp;
        &nbsp;{' '}
      </>
    ))}
  </div>
);

function handleSubmit(event) {
  event.preventDefault();

  if(hit === "W") {
    wicket += 1;
  }else{
    score += hit;
  }
    
  ballWiseRes.unshift(
    <span>{`${hit},${inputRef.current.value}`}</span>
  );

  hit = 0;
  inputRef.current.value = ""; 
//   console.log(inputRef.current.value);

  rootElement.render(<App />);
}

const Form = () => (
  <form onSubmit={handleSubmit}>
    <input value={hit} />
    <input ref={inputRef} placeholder="Add a comment" />    
    <button>Submit</button>
  </form>
);

const App = () => {
  return (
    <>
      <h1>Score Card</h1>
      <h2>
        Score: {score}/{wicket}{' '}
      </h2>
      <ScoreButtons />
      {/* <Result />  */}
      <br />

      <Form />
      <hr />
      <div>
        {ballWiseRes.map((res, index) => (
          <p key={index}>{res}</p>
        ))}
      </div>
    </>
  );
};

const rootElement = ReactDOM.createRoot(document.getElementById('root'));
rootElement.render(<App />);

