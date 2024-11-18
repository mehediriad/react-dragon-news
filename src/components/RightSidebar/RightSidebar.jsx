import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import qZone1 from "../../assets/swimming.png"
import qZone2 from "../../assets/class.png"
import qZone3 from "../../assets/playground.png"
import adBg from "../../assets/bg.png"


const RightSidebar = () => {
    return (
        <div className="space-y-8">
            <div>
                <h2 className="text-lg font-bold mb-3">Login With</h2>
                <div className="space-y-2">
                    <button className="flex items-center btn btn-outline btn-info btn-sm w-full"><FaGoogle className="mr-2"/> Login With Google</button>
                    <button className="flex items-center btn btn-outline btn-sm w-full"><FaGithub className="mr-2"/> Login With Google</button>
                </div>
            </div>
            <div>
                <h2 className="text-lg font-bold mb-3">Find Us On</h2>
                <div>
                    <Link to="#" className="flex items-center gap-2 text-lg p-3 border border-[#E7E7E7] rounded-t-lg"> <FaFacebook/> <span>Facebook</span></Link>
                    <Link to="#" className="flex items-center gap-2 text-lg p-3 border-x border-[#E7E7E7]"> <FaTwitter/> <span>Twitter</span></Link>
                    <Link to="#" className="flex items-center gap-2 text-lg p-3 border border-[#E7E7E7] rounded-t-bg"> <FaInstagram/> <span>Instagram</span></Link>
                </div>
            </div>
            <div className="bg-[#F3F3F3] p-5 rounded">
                <h2 className="text-lg font-bold mb-3">Q-Zone</h2>
                <div className="space-y-4">
                    <div>
                        <img src={qZone1} alt="swimming" />
                    </div>
                    <div>
                        <img src={qZone2} alt="class" />
                    </div>
                    <div>
                        <img src={qZone3} alt="playground" />
                    </div>
                </div>
            </div>
            <div>
                <img src={adBg} alt="bg" />
            </div>
            
        </div>
    );
};

export default RightSidebar;