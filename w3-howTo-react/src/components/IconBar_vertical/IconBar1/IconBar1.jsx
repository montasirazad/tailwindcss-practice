/* eslint-disable react/prop-types */
const IconBar1 = () => {
  return (
    <div>
      <h1 className="text-4xl m-5">Vertical icon bar</h1>
      <div className="w-[90px] bg-[#555] ml-3">
        <Icon iconName="home" />
        <Icon iconName="search" />
        <Icon iconName="envelope" />
        <Icon iconName="globe" />
        <Icon iconName="trash" />
      </div>
    </div>
  );
};

export default IconBar1;

const Icon = ({ iconName }) => {
  return (
    <a
      href={`#${iconName}`}
      className="block text-center p-4 text-white text-[36px] transition duration-400 hover:bg-black"
    >
      <i className={`fa fa-${iconName}`}></i>
    </a>
  );
};
