import { Link } from "react-router-dom";

const Nav: React.FC = () => {
  return (
    <Link
      to='/'
      className='text-2xl text-blue-400 font-bold py-4 py-8 uppercase'
    >
      visiBuy
    </Link>
  );
};

export default Nav;
