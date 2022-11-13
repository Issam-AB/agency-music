import Image from "next/image";
import { useRef } from "react";
import close from "../images/close-outline.svg";
import menu from "../images/menu-outline.svg";

const Header = () => {
	let resMenu = useRef(null);
	let resMenuHeader = useRef(null);
	let resMenuItem1 = useRef(null);
	let resMenuItem2 = useRef(null);
	let resMenuItem3 = useRef(null);
	let resMenuItem4 = useRef(null);

	const menuOpen = () => {
		console.log("hello");
	};

	return (
		<div>
			<div
				ref={resMenu}
				className="fixed w-full top-0 left-0 overflow-hidden h-screen bg-black -translate-y-[1200px]"
			>
				<div
					className="flex item-start justify-between w-[100%] h-fit py-[50px]"
					ref={resMenuHeader}
				>
					<div className="mx-[5px] mix-blend-difference font-monument font-semibold text-[20px] leading-none">
						Issam <br />
						ABOULFADL
					</div>
					<div className="block md:hidden cursor-pointer mx-[5px]">
						<Image
							src={close}
							className="w-9 object-contain invert"
							alt="close"
						/>
					</div>
				</div>
				<div className="mx-2 my-10 space-y-1">
					<span className="overflow-hidden block">
						<div
							ref={resMenuItem1}
							className="font-neutralFace font-bold text-[30px]"
						>
							WORK
						</div>
					</span>
					<span className="overflow-hidden block">
						<div
							ref={resMenuItem2}
							className="font-neutralFace font-bold text-[30px]"
						>
							ABOUT
						</div>
					</span>
					<span className="overflow-hidden block">
						<div
							ref={resMenuItem3}
							className="font-neutralFace font-bold text-[30px]"
						>
							PUBLICATION
						</div>
					</span>
					<span className="overflow-hidden block">
						<div
							ref={resMenuItem4}
							className="font-neutralFace font-bold text-[30px]"
						>
							OFFICE
						</div>
					</span>
				</div>
			</div>
			<div className="absolute bg-black top-0 py-[5px] font-neutralFace h[20vh] flex justify-between w-[100%] flex-col">
				<div
					id="header"
					className="flex item-start justify-between w-[100%] h-fit"
				>
					<div className="mx-[5px] mix-blend-difference font-neutralFace font-bold text-[30px]">
						Issam <br /> ABOULFADL
					</div>
					<div className="mx-1 md:block hidden mix-blend-difference font-neutralFace font-bold text-[30px]">
						WORK
					</div>
					<div className="mx-1 md:block hidden mix-blend-difference font-neutralFace font-bold text-[30px]">
						ABOUT
					</div>
					<div className="mx-1 md:block hidden mix-blend-difference font-neutralFace font-bold text-[30px]">
						PUBLICATION
					</div>
					<div className="mx-1 md:block hidden mix-blend-difference font-neutralFace font-bold text-[30px]">
						OFFICE
					</div>
					<div
						onClick={menuOpen}
						className="block md:hidden cursor-pointer mx-[5px]"
					>
						<Image
							src={menu}
							alt="menu"
							className="w-9 object-contain invert"
						/>
					</div>
				</div>
				<div className="flex items-start text-sm justify-between sm:justify-evenly px-5 w-[100%] h-fit">
					<div>
						An independent <br /> music agency
					</div>
					<div>Amsterdam</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
