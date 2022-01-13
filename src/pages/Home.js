import '../assets/Home.css';
import bgPic from '../images/bg-home.jpg';
import sidePic from '../images/yogurt.jpg';

const Home = () => {
    return(
        <div id="body" className="home">
			<div className="header">
				<img src={bgPic} alt=""/>
				<div>
					<p>Freeze Delight</p>
				</div>
			</div>
			<div className="body">
				<div>
					<div>
						<h1>NEW FEATURE</h1>
						<h2>Random text</h2>
						<p>If you put images inside the src folder and those will be processed by the webpack. This means that when you build your app for production, then images will be bundles minified.</p>
					</div>
					<img src={sidePic} alt=""/>
				</div>
			</div>
        </div>
    );
};

export default Home;