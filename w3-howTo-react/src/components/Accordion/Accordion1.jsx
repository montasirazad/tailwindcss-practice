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
       bg-gray-300 p-4 outline-none
        hover:text-white hover:bg-blue-500 
        border border-red-600
        cursor-pointer`}
      >
        Section {value}
      </button>
      <div
        className={`p-2 transition-all ease-in-out duration-1000 ${
          value === openValue ? "block" : "hidden"
        } bg-orange-300 border border-red-600`}
      >
        {children}
      </div>
    </div>
  );
}
export default Accordion1;
