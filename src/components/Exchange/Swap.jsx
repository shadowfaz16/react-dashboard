import React from "react";
import { useState, useEffect } from "react";
import CurrencyField from "./CurrencyField";

// import { BeatLoader } from "react-spinners";

const Swap = () => {
  const [timeLimit, setTimeLimit] = useState(15);
  const [inputAmount, setInputAmount] = useState(undefined);
  const [outputAmount, setOutputAmount] = useState(undefined);
  const [loading, setLoading] = useState(undefined);
  const [mxnAmount, setMxnAmount] = useState(undefined);
  const [usdtAmount, setUsdtAmount] = useState(undefined);
  const [mxnContract, setMxnContract] = useState(undefined);
  const [usdtContract, SetUsdtContract] = useState(undefined);
  const [ratio, setRatio] = useState(undefined);
  const [transaction, setTransaction] = useState(undefined);
  const [signer, setSigner] = useState(undefined);

  return (
    <div className="bg-gradient-to-b from-blue-200 to-white h-screen flex items-center">
      <div className="container bg-white max-w-md rounded-2xl p-5">
        <div className="flex justify-between">
          <div className="mb-3">Intercambia</div>
          <div>C</div>
        </div>
        {/* swap body */}
        <div className="bg-red-300 rounded-xl px-3 pb-7 pt-3 mb-3">
          <CurrencyField
            field="input"
            tokenName="MXN"
            //   getSwapPrice={getSwapPrice}
            signer={signer}
            balance={mxnAmount}
          />
        </div>
        <div className="container bg-blue-300 max-w-md rounded-2xl px-3 pb-7 pt-3">
          <CurrencyField
            field="output"
            tokenName="USDT"
            value={outputAmount}
            signer={signer}
            balance={usdtAmount}
            // spinner={BeatLoader}
            loading={loading}
          />
        </div>
      </div>
    </div>
  );
};

export default Swap;
