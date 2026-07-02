import { useState } from "react";

/* eslint-disable react/prop-types */
const Accordion1 = () => {
  const [open, setOpen] = useState(null);

  const handleOpen = (value) => {
    if (open == value) {
      setOpen(null);
    } else {
      setOpen(value);
    }
  };
  return (
    <div>
      <Section value={1} openValue={open} onOpen={handleOpen}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id deleniti ad
        fugit itaque reiciendis! Earum ducimus culpa reiciendis molestiae
        voluptatibus!
      </Section>

      <Section value={2} openValue={open} onOpen={handleOpen}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id deleniti ad
        fugit itaque reiciendis! Earum ducimus culpa reiciendis molestiae
        voluptatibus!
      </Section>

      <Section value={3} openValue={open} onOpen={handleOpen}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id deleniti ad
        fugit itaque reiciendis! Earum ducimus culpa reiciendis molestiae
        voluptatibus!
      </Section>
    </div>
  );
};
function Section({ value, children, onOpen, openValue }) {
  return (
    <div className="w-1/2">
      <button
        onClick={() => onOpen(value)}
        className={`w-full ${value === openValue && "bg-blue-500"} ${
          value === openValue ? "after:content-['-']" : "after:content-['+']"
        } after:float-right text-left
       bg-gray-300 p-4  
        hover:text-white hover:bg-blue-500 border-b-2 border-white
       bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
        cursor-pointer rounded-md m-1`}
      >
        Section {value}
      </button>
      <div
        className={`p-2  m-2 ${
          value === openValue ? "block" : "hidden"
        } bg-gradient-to-r from-cyan-500 via-cyan-800 to-cyan-500 text-white text-justify`}
      >
        {children}
      </div>
    </div>
  );
}
export default Accordion1;
