import Marquee from "react-fast-marquee";

const BreakingNews = () => {
    return (
        <div className="mb-2">
            <div className="flex bg-[#403F3F] p-2">
                <button className="btn btn-secondary btn-sm">Breaking News</button>
                <Marquee>
                        I can be a React component, multiple React components, or just some text.
                </Marquee>
            </div>
        </div>
    );
};

export default BreakingNews;