import { element } from "prop-types";
import React, { useState } from "react";

//include images into your bundle

//create your first component
const Trafficligth = () => {

	let [color, setColor] = useState("")

	let colores = ["green", "yellow", "red"]

	return (

		<div className="d-flex justify-content-center">
			<div className="bg-dark semaforo">
				{colores.map((el) => (

					<div onClick={() => setColor(el)}

						className={el + "  " + (color === el ? "luz" : "")}>

					</div>
				))
				}

			</div>
		</div>
	);
};

export default Trafficligth;
