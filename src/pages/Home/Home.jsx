import { useLoaderData } from "react-router-dom";
import Header from "../../components/Header/Header";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import Navbar from "../../components/Navbar/Navbar";
import NewsCard from "../../components/NewsCard/NewsCard";
import RightSidebar from "../../components/RightSidebar/RightSidebar";
import BreakingNews from "./BreakingNews";


const Home = () => {
    const news = useLoaderData()
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
                    <h2 className="text-lg font-bold mb-3">Dragon News Home</h2>
                    <div className="space-y-8">
                        {
                            news.map(aNews => <NewsCard
                            key={aNews._id}
                            news = {aNews}
                            > </NewsCard> )
                        }
                    </div>
                </div>
                <div className="border-0">
                    <RightSidebar/>
                </div>
            </div>
        </div>
    );
};

export default Home;