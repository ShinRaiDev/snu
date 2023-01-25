import React from "react";

import { AiOutlinePlusCircle,AiOutlineMinusCircle } from "react-icons/ai";

function expandcard(props:any) {
  
  return (
    <div>
      <div className={`${props.exp? "h-96 bg-orange-300 border-b-[11px]":""} transition-all	ease-linear delay-150 border-black border-2 border-b-8 bg-white p-5 rounded-2xl w-96   `}>
        <div className="flex justify-between">
          <div className={`${props.exp?"font-extrabold text-2xl underline underline-offset-4":"font-bold text-xl"} `}>expand</div>
          <div className="" ><button onClick={props.HandleClick} >{!props.exp ? <AiOutlinePlusCircle size={30}/> : <AiOutlineMinusCircle size={30}/>}</button></div>
        </div>
        <div className={`${props.exp?"":"hidden"} mt-9 p-5`}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate adipisci pariatur repellat sequi dolore props.explicabo porro corrupti, saepe eos. Dolorum, itaque error! Voluptas aperiam quae dolores sunt culpa nostrum soluta facere totam cum itaque beatae fuga hic ipsum corrupti libero id nesciunt, provident error atque porro dicta iste iusto at.
        </div>
      </div>
    </div>
  );
}

export default expandcard;
