/* eslint-disable react/prop-types */
const IconBarHoraizon2 = () => {
  return <div className="w-full overflow-auto">
    <Icon iconName={'home'}/>
    <Icon iconName={'search'}/>
    <Icon iconName={'envelope'}/>
    <Icon iconName={'globe'}/>
    <Icon iconName={'trash'}/>
  </div>;
};

export default IconBarHoraizon2;

function Icon({ iconName }) {
  return (
    <a className="text-[36px] w-[20%] transition duration-200 hover:bg-blue-500 text-white float-left p-4 text-center bg-[#555]" href={`#${iconName}`}>
      <i className={`fa fa-${iconName}`}></i>
    </a>
  );
}
