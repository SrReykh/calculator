import { useState } from "react";

const Calculator = () => {
  const [valueNow, setValueNow] = useState(""); // This value appear in the main input
  const [firstValues, setFirstValues] = useState(""); // Array of digits selected by any operator be selected
  const [secondValues, setSecondValues] = useState(""); // Array of digits after the operator is selected
  const [operatorMode, changeOperatorMode] = useState(0); // Operator mode... 0 - Null, 1 - Addition...

  const OperatorModeChanger = (type: number) => {
    changeOperatorMode(type);
  };

  const handleClick = (value: number | string) => {
    if (operatorMode != 0) {
      setValueNow(valueNow + value.toString());
      setSecondValues(secondValues + value.toString());
      return;
    }

    setValueNow(valueNow + value.toString());
    setFirstValues(firstValues + value.toString());
  };

  const Result = () => {
    if (firstValues.length == 0 && secondValues.length == 0)
      return setValueNow("");

    let firstValuesResult: number = parseFloat(firstValues);
    let secondValuesResult: number = parseFloat(secondValues);

    let result: number;
    switch (operatorMode) {
      case 1:
        result = firstValuesResult + secondValuesResult;
        setValueNow(result.toString());
        break;
      case 2:
        result = firstValuesResult - secondValuesResult;
        setValueNow(result.toString());
        break;
      case 3:
        result = firstValuesResult * secondValuesResult;
        setValueNow(result.toString());
        break;
      case 4:
        result = firstValuesResult / secondValuesResult;
        setValueNow(result.toString());
        break;
    }

    changeOperatorMode(0);
    setFirstValues("");
    setSecondValues("");
  };

  return (
    <>
      <div className="flex flex-col gap-2">
        <input
          className="w-72 h-9 border-2 rounded border-zinc-700 text-2xl text-right"
          readOnly
          value={valueNow}
        ></input>

        <div className="w-72 h-64 grid grid-rows-4 grid-flow-col gap-4">
          <button
            className="bg-green-500 rounded hover:opacity-90 font-bold"
            onClick={() => {
              setValueNow("");
              setFirstValues("");
              setSecondValues("");
              OperatorModeChanger(0);
            }}
          >
            AC
          </button>
          <button
            className="bg-green-500 rounded hover:opacity-90 font-bold"
            onClick={() => {
              if (
                secondValues.length != 0 ||
                (firstValues == "" && secondValues == "")
              )
                return;
              OperatorModeChanger(1);
              setValueNow("");
            }}
          >
            +
          </button>
          <button
            className="bg-green-500 rounded hover:opacity-90 font-bold"
            onClick={() => {
              if (
                secondValues.length != 0 ||
                (firstValues == "" && secondValues == "")
              )
                return;
              OperatorModeChanger(2);
              setValueNow("");
            }}
          >
            -
          </button>
          <button
            className="bg-green-500 rounded hover:opacity-90 font-bold"
            onClick={() => {
              if (
                secondValues.length != 0 ||
                (firstValues == "" && secondValues == "")
              )
                return;
              OperatorModeChanger(3);
              setValueNow("");
            }}
          >
            *
          </button>
          <button
            className="bg-green-500 rounded hover:opacity-90 font-bold"
            onClick={() => {
              handleClick(7);
            }}
          >
            7
          </button>
          <button
            className="bg-green-500 rounded hover:opacity-90 font-bold"
            onClick={() => {
              handleClick(4);
            }}
          >
            4
          </button>
          <button
            className="bg-green-500 rounded hover:opacity-90 font-bold"
            onClick={() => {
              handleClick(1);
            }}
          >
            1
          </button>
          <button
            className="bg-green-500 rounded hover:opacity-90 font-bold"
            onClick={() => {
              if (
                secondValues.length != 0 ||
                (firstValues == "" && secondValues == "")
              )
                return;
              changeOperatorMode(4);
              setValueNow("");
            }}
          >
            ÷
          </button>
          <button
            className="bg-green-500 rounded hover:opacity-90 font-bold"
            onClick={() => {
              handleClick(8);
            }}
          >
            8
          </button>
          <button
            className="bg-green-500 rounded hover:opacity-90 font-bold"
            onClick={() => {
              handleClick(5);
            }}
          >
            5
          </button>
          <button
            className="bg-green-500 rounded hover:opacity-90 font-bold"
            onClick={() => {
              handleClick(2);
            }}
          >
            2
          </button>
          <button
            className="bg-green-500 rounded hover:opacity-90 font-bold"
            onClick={() => {
              if (firstValues == "") return;
              if (valueNow.indexOf(".") != -1) return;
              handleClick(".");
            }}
          >
            .
          </button>
          <button
            className="bg-green-500 rounded hover:opacity-90 font-bold"
            onClick={() => {
              handleClick(9);
            }}
          >
            9
          </button>
          <button
            className="bg-green-500 rounded hover:opacity-90 font-bold"
            onClick={() => {
              handleClick(6);
            }}
          >
            6
          </button>
          <button
            className="bg-green-500 rounded hover:opacity-90 font-bold"
            onClick={() => {
              handleClick(3);
            }}
          >
            3
          </button>
          <button
            className="bg-green-500 rounded hover:opacity-90 font-bold"
            onClick={() => handleClick(0)}
          >
            0
          </button>
        </div>
        <div className=" flex justify-end">
          <button
            className="w-36 h-9 border-2 rounded bg-green-500 hover:opacity-90 font-bold"
            onClick={() => Result()}
          >
            =
          </button>
        </div>
      </div>
    </>
  );
};

export default Calculator;
