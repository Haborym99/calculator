function App() {
  const [input, setInput] = React.useState("");
  const [result, setResult] = React.useState(0);
  //###############_CALCULATOR LOGIC & DISPLAY_################
  const addIt = (inp) => {
    setInput((prev) => prev + inp);
    if (input[input.length - 1] == "=") {
      if (/[0-9.]/.test(inp)) {
        setInput(inp);
      } else {
        setInput(result + inp);
      }
    }
    if (
      inp === "+" &&
      (input[input.length - 1] === "*" ||
        input[input.length - 1] === "/" ||
        input[input.length - 1] === "+")
    ) {
      eraseIt();
    }
    if (
      inp === "-" &&
      (input[input.length - 3] === "-" ||
        input[input.length - 1] === "*" ||
        input[input.length - 1] === "/" ||
        input[input.length - 1] === "+")
    ) {
      eraseIt();
    }
    if (
      inp === "/" &&
      (input[input.length - 1] === "*" ||
        input[input.length - 1] === "/" ||
        input[input.length - 1] === "+")
    ) {
      eraseIt();
    }
    if (
      inp === "*" &&
      (input[input.length - 1] === "*" ||
        input[input.length - 1] === "/" ||
        input[input.length - 1] === "+")
    ) {
      eraseIt();
    }

    const expression = Array.from(input);
    let containDot = false;

    expression.map((number) => {
      if (number === ".") {
        containDot = true;
      } else if (
        number === "+" ||
        number === "-" ||
        number === "/" ||
        number === "*"
      ) {
        containDot = false;
      }
    });

    if (containDot && inp === ".") eraseIt();
  };

  const eraseItAll = () => {
    setInput("");
    setResult(0);
  };

  const eraseIt = () => {
    setInput((prev) =>
      prev
        .split("")
        .slice(0, prev.length - 1)
        .join("")
    );
    setResult(0);
  };

  const giveResult = () => {
    setResult(eval(input));
    setInput((prev) => prev + "=");
  };
  //###########################################################

  //###################_RENDERING PART_########################
  return (
    <div className="container">
      <div className="grid">
        <div className="display" id="display">
          <input
            type="text"
            className="input"
            value={input}
            placeholder="0"
            disabled
            id="display"
          ></input>
          <div className="result" id="display">
            {result}
          </div>
        </div>
        <div onClick={eraseItAll} className="button ac" id="clear">
          AC
        </div>
        <div onClick={eraseIt} className="button c">
          C
        </div>
        <div onClick={() => addIt("/")} className="button divide" id="divide">
          /
        </div>
        <div
          onClick={() => addIt("*")}
          className="button multiply"
          id="multiply"
        >
          *
        </div>
        <div onClick={() => addIt("7")} className="button seven" id="seven">
          7
        </div>
        <div onClick={() => addIt("8")} className="button eight" id="eight">
          8
        </div>
        <div onClick={() => addIt("9")} className="button nine" id="nine">
          9
        </div>
        <div onClick={() => addIt("+")} className="button add" id="add">
          +
        </div>
        <div onClick={() => addIt("4")} className="button four" id="four">
          4
        </div>
        <div onClick={() => addIt("5")} className="button five" id="five">
          5
        </div>
        <div onClick={() => addIt("6")} className="button six" id="six">
          6
        </div>
        <div
          onClick={() => addIt("-")}
          className="button subtract"
          id="subtract"
        >
          -
        </div>
        <div onClick={() => addIt("1")} className="button one" id="one">
          1
        </div>
        <div onClick={() => addIt("2")} className="button two" id="two">
          2
        </div>
        <div onClick={() => addIt("3")} className="button three" id="three">
          3
        </div>
        <div onClick={giveResult} className="button equal" id="equals">
          =
        </div>
        <div onClick={() => addIt("0")} className="button zero" id="zero">
          0
        </div>
        <div onClick={() => addIt(".")} className="button decimal" id="decimal">
          .
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
