import '../assets/Home.css';
import bgPic from '../images/homebg.jpg';
import sidePic from '../images/yogurt.jpg';

const Home = () => {
    return(
		<>
			<div id="body" className="home">
				<div className="header">
					<img src={"https://hospitalityinsights.ehl.edu/hubfs/Blog-EHL-Insights/Blog-Header-EHL-Insights/AdobeStock_264542845.jpeg"} alt=""/>
					<div>
						<p>Freeze Delight</p>
					</div>
				</div>
			</div>
		</>
    );
};

export default Home;