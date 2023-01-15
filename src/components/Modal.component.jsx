import React from "react";
import "./Modal.css"
import { Chart as ChartJs, Tooltip, Title, ArcElement, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
ChartJs.register(Tooltip, Title, ArcElement, Legend);

function Modal({ setOpenModal, jewelery, electronics, men, women }) {
    console.log("jewelery", jewelery, "electronics", electronics, "men", men, "women", women);
    const data = {
      datasets: [
        {
          data: [electronics, jewelery, men, women],
          backgroundColor: [
            "rgb(236,111,133)",
            "rgb(243,163,84)",
            "rgb(249,204,107)",
            "rgb(108,189,191)",
          ],
        },
      ],
      // These labels appear in the legend and in the tooltips when hovering different arcs
      labels: ["electronics", "jewelery", "men's clothing", "women's clothing"],
    };
  return (
    <div className="modalBackground flex w-[100vw] h-[100vh] justify-center items-center fixed left-0 top-0 bg-[rgba(0,0,0,0.4)]">
      <div className="modalContainer border-solid border-2 flex-col p-[25px]  w-[500px] h-[500px] flex rounded shadow-lg shadow-slate-600 bg-white">
        <div className="titleCloseBtn flex justify-end">
          <button
            className=" bg-transparent border-none cursor-pointer text-2xl"
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="body  w-[400px] h-[400px] m-auto">
          <Pie data={data} />
        </div>
      </div>
    </div>
  );
}

export default Modal;
