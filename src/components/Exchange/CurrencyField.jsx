import React from "react";

const CurrencyField = (props) => {
  const getPrice = (value) => {
    props.getSwapPrice(value);
  };
  return (
    // currency input
    <div className="flex items-start justify-between text-right">
      <div>
        {props.loading ? (
          <div>
            <props.spinner />
          </div>
        ) : (
          <input
            type="number"
            className="currencyInputField rounded-md p-1 bg-transparent md:text-3xl"
            placeholder="0"
            value={props.value}
            onBlur={(e) =>
              props.field === "input" ? getPrice(e.target.value) : null
            }
          />
        )}
      </div>
      <div className="tokenContainer">
        <span className="tokenName">{props.tokenName}</span>
        <div className="balanceContainer">
          <span className="balanceAmount text-sm">
            Balance: {props.balance?.toFixed(3)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CurrencyField;
