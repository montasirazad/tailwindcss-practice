const IconBar2 = () => {
  return (
    <div>
        <p>Icon bar 2</p>
      <div className="w-[90px] bg-[#555] ml-3">
        <a
          className="block p-4 text-center text-white text-[36px] transition duration-300 hover:bg-black active:bg-green-400"
          href="#"
        >
          <i className="fa fa-home"></i>
        </a>
        <a
          className="block p-4 text-center text-white text-[36px] transition duration-300 hover:bg-black "
          href="#search"
        >
          <i className="fa fa-search"></i>
        </a>
        <a
          className="block p-4 text-center text-white text-[36px] transition duration-300 hover:bg-black "
          href="#"
        >
          <i className="fa fa-envelope"></i>
        </a>
        <a
          className="block p-4 text-center text-white text-[36px] transition duration-300 hover:bg-black "
          href="#"
        >
          <i className="fa fa-globe"></i>
        </a>
        <a
          className="block p-4 text-center text-white text-[36px] transition duration-300 hover:bg-black "
          href="#"
        >
          <i className="fa fa-trash"></i>
        </a>
      </div>
    </div>
  );
};

export default IconBar2;
