import ShowcasingTimeline from "./ShowcasingTimeline";
// import VideoShot from "./VideoShot";
import FounderDetails from "./FounderDetails";
import Banner from "../Helper/Banner";

export default  function About () {
    return  (
        <>
        {/* <Banner /> */}
        <div className="bg-gradient-to-r from-[#0E5543] to-[#0E5543] py-16 text-white text-center ">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 mt-10">About Us</h1>
            <p className="text-xl md:text-2xl opacity-90">Discover Our Journey in Stone Excellence</p>
        </div>
        <ShowcasingTimeline/>
        {/* <VideoShot/> */}
        <FounderDetails/>
        </>
    )
}