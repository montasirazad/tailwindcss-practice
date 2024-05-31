/* eslint-disable react/prop-types */
const IconBar3 = () => {
  return (
    <div className="w-[90px] bg-[#555]">
      <Icon iconName={"home"} />
      <Icon iconName={"search"} />
      <Icon iconName={"envelope"} />
      <Icon iconName={"globe"} />
      <Icon iconName={"trash"} />
    </div>
  );
};

export default IconBar3;

const Icon = ({ iconName }) => {
  return (
    <a
      className="text-4xl block text-center p-4 hover:bg-yellow-500  text-white transition delay-300"
      href={`#${iconName}`}
    >
      <i className={`fa fa-${iconName}`}></i>
    </a>
  );
};
