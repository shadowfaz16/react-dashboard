import React from "react";

const PaymentMethod = () => {
  return (
    <div className="flex flex-col justify-between md:flex-row">
      <div className="flex items-start mb-3">
        <div className="flex h-5 items-center">
          <input
            id="efectivo"
            name="efectivo"
            type="checkbox"
            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
          />
        </div>
        <div className="ml-2 text-sm">
          <p className="text-white">Depósito en efectivo</p>
        </div>
      </div>
      <div className="flex items-start mb-3">
        <div className="flex h-5 items-center">
          <input
            id="transferencia"
            name="transferencia"
            type="checkbox"
            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
          />
        </div>
        <div className="ml-2 text-sm">
          <p className="text-white">Transferencia bancaria</p>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethod;
