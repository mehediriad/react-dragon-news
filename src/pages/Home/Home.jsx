import Header from "../../components/Header/Header";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import Navbar from "../../components/Navbar/Navbar";
import RightSidebar from "../../components/RightSidebar/RightSidebar";
import BreakingNews from "./BreakingNews";


const Home = () => {
    return (
        <div>
            <Header/>
            <BreakingNews/>
            <Navbar/>
            <div className="grid md:grid-cols-4 gap-6">
                <div className="border-0">
                    <LeftSidebar/>
                </div>
                <div className="md:col-span-2 border-0">
                    <h2 className="text-lg">News comming soon...</h2>
                </div>
                <div className="border-0">
                    <RightSidebar/>
                </div>
            </div>
        </div>
    );
};

export default Home;