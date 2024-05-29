const IconBar1 = () => {
  return (
    <div>
      <h1 className="text-4xl m-5">Vertical icon bar</h1>
      <div className="w-[90px] bg-[#555] ml-3">
        <a
          className="block text-center p-4 text-white text-[36px] transition duration-400 hover:bg-black"
          href="#"
        >
          <i className="fa fa-home"></i>
        </a>
        <a
          href="#"
          className="block text-center p-4 text-white text-[36px] transition duration-400 hover:bg-black"
        >
          <i className="fa fa-search"></i>
        </a>
        <a
          href="#"
          className="block text-center p-4 text-white text-[36px] transition duration-400 hover:bg-black"
        >
          <i className="fa fa-envelope"></i>
        </a>
        <a
          href="#"
          className="block text-center p-4 text-white text-[36px] transition duration-400 hover:bg-black"
        >
          <i className="fa fa-globe"></i>
        </a>
        <a
          href="#"
          className="block text-center p-4 text-white text-[36px] transition duration-400 hover:bg-black"
        >
          <i className="fa fa-trash"></i>
        </a>
      </div>
    </div>
  );
};

export default IconBar1;
