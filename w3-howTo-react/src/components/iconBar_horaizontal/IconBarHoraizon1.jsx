/* eslint-disable react/prop-types */
const IconBarHoraizon1 = () => {
  return (
    <div className="w-full overflow-auto m-2">
      <Icon iconName="home" />
      <Icon iconName="search" />
      <Icon iconName="envelope" />
      <Icon iconName="globe" />
      <Icon iconName="trash" />
    </div>
  );
};

export default IconBarHoraizon1;

function Icon({ iconName }) {
  return (
    <a
      className="text-white float-left w-[20%] bg-[#555] text-center p-4 text-[36px] hover:bg-green-700 transition delay-200"
      href={`#${iconName}`}
    >
      <i className={`fa fa-${iconName}`}></i>
    </a>
  );
}
