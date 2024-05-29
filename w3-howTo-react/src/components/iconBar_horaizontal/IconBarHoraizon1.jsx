const IconBarHoraizon1 = () => {
  return (
    <div className="w-full overflow-auto">
      <a
        className="text-white float-left w-[20%] bg-[#555] text-center p-4 text-[36px] active:bg-red-400 hover:bg-green-700 transition delay-200"
        href="#home"
      >
        <i className="fa fa-home"></i>
      </a>
      <a
        className="text-white float-left w-[20%] bg-[#555] text-center p-4 text-[36px] hover:bg-green-700 transition delay-200"
        href="#"
      >
        <i className="fa fa-search"></i>
      </a>
      <a
        className="text-white float-left w-[20%] bg-[#555] text-center p-4 text-[36px] hover:bg-green-700 transition delay-200"
        href="#"
      >
        <i className="fa fa-envelope"></i>
      </a>
      <a
        className="text-white float-left w-[20%] bg-[#555] text-center p-4 text-[36px] hover:bg-green-700 transition delay-200"
        href="#"
      >
        <i className="fa fa-globe"></i>
      </a>
      <a
        className="text-white float-left w-[20%] bg-[#555] text-center p-4 text-[36px] hover:bg-green-700 transition delay-200"
        href="#"
      >
        <i className="fa fa-trash"></i>
      </a>
    </div>
  );
};

export default IconBarHoraizon1;
