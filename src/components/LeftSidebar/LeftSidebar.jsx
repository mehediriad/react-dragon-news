import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CiCalendar } from "react-icons/ci";
import moment from 'moment';


const LeftSidebar = () => {
    const [categories,setCategories] = useState([]);
    const [news,setNews] = useState([]);
    

    useEffect(()=>{
        fetch('news.json')
        .then(res => res.json())
        .then(data => setNews(data))
    },[])
   

    useEffect(()=>{
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])
    return (
        <div className="space-y-8">
            <div>
                <h2 className="text-lg font-bold mb-3">All Caterogy</h2>
                <div className="space-y-2">
                    {
                        categories.map(category =><Link
                            key={category.id}
                            to={`/category/${category.id}`}
                            className="block py-2 px-6 hover:bg-[#E7E7E7] hover:font-bold hover:text-black rounded"
                        >
                            {category.name}
                        </Link> )
                    }
                </div>
            </div>

            <div className="space-y-8">
                {
                    news.slice(0,5).map(aNews=> <div
                    key={aNews._id}
                    className="space-y-4"
                    >
                        <div >
                            <img className="w-full" src={aNews.thumbnail_url} alt="" />
                        </div>
                        <div>
                            <h2 className="text-lg font-bold">{aNews.title}</h2>
                        </div>
                        <div className="flex gap-4 items-center">
                              
                                
                            <p>
                                Sports
                            </p>
                            <p className="flex items-center gap-2"><CiCalendar/> <span>{moment().format("MMM d, YYYY")}</span></p>
                        </div>
                    </div> )
                }
            </div>
        </div>
    );
};

export default LeftSidebar;