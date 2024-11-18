import { useLoaderData, useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import RightSidebar from "../../components/RightSidebar/RightSidebar";


const News = () => {
    const news = useLoaderData()
    const {id} = useParams()

    const currentNews = news.find(aNews => aNews._id === id);
    
    const {title,image_url,details} = currentNews;
    
    return (
        <div>
            <Header/>
            <Navbar/>
            <div className="grid grid-cols-4 gap-8">
                <div className="col-span-3">
                <h2 className="text-lg font-bold mb-3">Dragon News</h2>
                {/* <div className='border border-[#F3F3F3] rounded'>
                    



                    <div className='p-5 space-y-6'>
                        <div>
                            <img src={image_url} alt="" />
                        </div>
                        <div>
                            <h2 className='text-2xl'>{title}</h2>
                        </div>
                        <div>
                            
                            <p>{details}</p>     
                            
                        </div>
                       
                    </div>
                </div> */}

                <div className="card bg-base-100 shadow-xl">
                    <figure>
                        <img
                        src={image_url}
                        alt="Shoes" />
                    </figure>
                    <div className="card-body space-y-6">
                        <h2 className="card-title text-2xl font-bold ">{title}</h2>
                        <p>{details}</p>
                        <div className="card-actions justify-start">
                        <button className="btn btn-secondary">All news in this category</button>
                        </div>
                    </div>
                </div>
                </div>
                <div>
                    <RightSidebar/>
                </div>
            </div>
        </div>
    );
};

export default News;