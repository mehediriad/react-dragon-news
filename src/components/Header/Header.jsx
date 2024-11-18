import logo from "../../assets/logo.png"
import moment from 'moment';

const Header = () => {
    return (
        <div className="text-center m-8">
            <img className="mx-auto" src={logo} alt="Dragon-News" />
            <p className="my-4">Journalism Without Fear or Favour</p>
            <p>{moment().format("dddd, MMMM DD, YYYY")}</p>
        </div>
    );
};

export default Header;