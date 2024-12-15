import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { Context } from "../context/Context";

const Card = () => {
  const { cardClick } = useContext(Context);

  const data = [
    {
      paragraph: "summerize the concept: world system theory",
      image: assets.message_icon,
      onClick: () => cardClick("summerize the concept: world system theory"),
    },
    {
      paragraph: "Suggest me a road trip idea",
      image: assets.compass_icon,
      onClick: () => cardClick("Suggest me a road trip idea"),
    },
    {
      paragraph: "Brainstorm ideas for new workout routine",
      image: assets.bulb_icon,
      onClick: () => cardClick("Brainstorm ideas for new workout routine"),
    },
    {
      paragraph: "help me write code",
      image: assets.code_icon,
      onClick: () => cardClick("help me write code"),
    },
  ];

  return (
    <>
      {data.map((card, idx) => {
        return (
          <div
            key={idx}
            onClick={card.onClick}
            className="relative bg-[#1b1b1b]/30 backdrop-blur-md border-r border-slate-500/50  border-b border-b-slate-500/20 hover:bg-slate-700 h-48 p-4 rounded-lg  cursor-pointer text-slate-50 border-t border-t-slate-500  border-l border-l-slate-500/20 shadow-xl shadow-black/30 transition duration-300"
          >
            <p className="text-white">{card.paragraph}</p>

            <img
              src={card.image}
              alt="kalu"
              className="w-9 absolute p-1 bg-[#0a101e] right-[10px] bottom-[10px] rounded-full"
            />
          </div>
        );
      })}
    </>
  );
};

export default Card;

// return (
//     <>
//         <div
//             onClick={() =>
//                 cardClick("summerize the concept: world system theory")
//             }
//             className="card"
//         >
//             <p>summerize the concept: world system theory </p>
//             <img src={assets.message_icon} alt="icon images" />
//         </div>

//         <div
//             onClick={() => cardClick("Suggest me a road trip idea")}
//             className="card"
//         >
//             <p>Suggest me a road trip idea</p>
//             <img src={assets.compass_icon} alt="icon images" />
//         </div>

//         <div
//             onClick={() =>
//                 cardClick("Brainstorm ideas for new workout routine")
//             }
//             className="card"
//         >
//             <p>Brainstorm ideas for new workout routine</p>
//             <img src={assets.bulb_icon} alt="icon images" />
//         </div>

//         <div
//             onClick={() => cardClick("help me write code")}
//             className="card"
//         >
//             <p>help me write code</p>
//             <img src={assets.code_icon} alt="icon images" />
//         </div>
//     </>
// )
