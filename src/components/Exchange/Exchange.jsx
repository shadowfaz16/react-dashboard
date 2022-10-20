import React from "react";
// import logo from "../../assets/images/logo-pxm.png";
import PaymentMethod from "./PaymentMethod";
import Swapp from "./Swapp";

const Exchange = () => {
  return (
    <section className="flex items-center justify-center md:justify-start">
      <div className="rounded-lg">
        <div className="lg:flex lg:flex-wrap">
          <div>
            <div>
              <form>
                <div className="mb-4">
                  <div className="mb-4">
                    <span className="text-white">Envía</span>
                    <Swapp />
                  </div>
                  <div>
                    <span className="text-white">Recibe</span>
                    <Swapp />
                  </div>
                </div>
                <PaymentMethod />
                <div className="text-center pt-1 mb-8 pb-1">
                  <button
                    className="bg-blue-600 inline-block px-6 py-3 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3 bg-gradient-to-r from-blue-600 to-blue-300"
                    type="button"
                  >
                    COTIZAR
                  </button>
                </div>
              </form>
            </div>
          </div>
          {/* <div className="hidden items-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none bg-gradient-to-br from-blue-600 to-blue-300 md:flex">
            <div className="text-black px-4 py-6 md:p-12 md:mx-6 bg-white rounded-lg md:w-full">
              <h4 className="text-xl font-semibold mb-6">Cotización</h4>
              <p className="text-sm flex justify-between">
                <span className="font-bold">Capital:</span>
                <span>$103,788 MXN</span>
              </p>
              <p className="text-sm flex justify-between">
                <span className="font-bold">Tipo de pago:</span> Transferencia
              </p>
              <p className="text-sm flex justify-between">
                <span className="font-bold">Precio USDT:</span> $20.25 MXN
              </p>
              <p className="text-sm flex justify-between pt-3 mt-2 border-t border-black">
                <span className="font-bold">Total USDT:</span> $5,000 USDT
              </p>
              <p className="text-sm flex justify-between pt-5">
                <span className="font-bold">
                  Confirmar si acepta trade con:
                </span>
                Cerrado
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Exchange;
