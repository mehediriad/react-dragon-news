import moment from 'moment';
import { Link } from 'react-router-dom';
import { CiBookmark } from "react-icons/ci";
import { CiShare2 } from "react-icons/ci";
import { FaEye } from "react-icons/fa";

const NewsCard = ({news}) => {
    const {author,title,image_url,details,rating,total_view} = news;
    
    return (
        <div className='border border-[#F3F3F3] rounded'>
            <div className='bg-[#F3F3F3] p-4 flex justify-between'>
                <div className='flex items-center gap-3'>
                    <div className='w-8 '>
                        <img className='w-full rounded-full' src={author.img} alt="" />
                    </div>
                    <div>
                        <h3 className='text-md font-bold'>{author.name}</h3>
                        
                        <p>{moment(author.published_date).format("YYYY-MM-DD")}</p>
                    </div>
                    
                </div>
                <div className='flex gap-4 items-center text-3xl'>
                    <button><CiBookmark /></button>
                    <button><CiShare2 /></button>
                </div>
                
            </div>



            <div className='p-5 space-y-6'>
                <div>
                    <h2 className='text-2xl'>{title}</h2>
                </div>
                <div>
                    <img src={image_url} alt="" />
                </div>
                <div>
                    
                        {
                            details.length>190 ? 
                            <p>{details.slice(0,190)}<Link to={`news/${news._id}`} className='btn btn-link btn-secondary'>Read More...</Link></p> :
                            <p>{details}</p>
                        }
                    
                </div>
                <div className='flex justify-between items-center border-t pt-4'>
                    <div className='flex gap-4 items-center text-lg'>
                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input
                                type="radio"
                                name="rating-2"
                                className="mask mask-star-2 bg-orange-400"
                                defaultChecked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        </div>
                        <p>{rating.number}</p>
                    </div>
                    <div className='flex gap-4 items-center text-lg'>
                        <FaEye />
                        <span>{total_view}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;