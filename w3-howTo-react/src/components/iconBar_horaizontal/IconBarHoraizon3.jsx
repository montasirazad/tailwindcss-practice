/* eslint-disable react/prop-types */
const IconBarHoraizon3 = () => {
  return (
    <div className="w-full block">
      <Icon iconName={"home"} />
      <Icon iconName={"search"} />
      <Icon iconName={"envelope"} />
      <Icon iconName={"globe"} />
      <Icon iconName={"trash"} />
    </div>
  );
};

export default IconBarHoraizon3;

// eslint-disable-next-line no-unused-vars
const Icon = ({ iconName }) => {
  return (
    <a className="text-[36px] float-left transition delay-200 text-white hover:bg-yellow-500 text-center p-4 w-[20%] bg-[#555]" href={`#${iconName}`}>
      <i className={`fa fa-${iconName}`}></i>
    </a>
  );
};
