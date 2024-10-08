import React from "react";
import "./App.css";
import possibleCategories from "./categories";
class App extends React.Component {
	state = { content: "", author: "",  isLoading: true };

	componentDidMount() {
		this.fetchAdvice();
	}

	fetchAdvice = async() => {
		this.setState({ content: "", author: "", isLoading: true });
	    	const api_url =`https://cors-anywhere.herokuapp.com/https://favqs.com/api/qotd`;
	    	try{

	      		const response = await fetch(api_url);
	      		var data = await response.json();
				console.log(data)
	
	      		const content = data.quote.body;
			const author = data.quote.author;
			
			const { isLoading } = false
	      		this.setState({ content, author, isLoading });

	    	} catch (error){
	      		console.log(error);
	    	}
  	}

	newShade = (hexColor, magnitude) => {
		hexColor = hexColor.replace(`#`, ``);
		if (hexColor.length === 6) {
			const decimalColor = parseInt(hexColor, 16);
			let r = (decimalColor >> 16) + magnitude;
			r > 255 && (r = 255);
			r < 0 && (r = 0);
			let g = (decimalColor & 0x0000ff) + magnitude;
			g > 255 && (g = 255);
			g < 0 && (g = 0);
			let b = ((decimalColor >> 8) & 0x00ff) + magnitude;
			b > 255 && (b = 255);
			b < 0 && (b = 0);
			return `#${(g | (b << 8) | (r << 16)).toString(16)}`;
		} else {
			return hexColor;
		}
	};

	render() {
		const { content, author, isLoading } = this.state;
		var colors = [
			'#FFEEEE',
			'#FFF6EA',
			'#F7E9D7',
			'#EBD8C3',
			'#FFF5E4',
			'#FFE3E1',
			'#FFD1D1',
			'#FF9494',
			'#DDFFBB',
			'#C7E9B0',
			'#B3C99C',
			'#A4BC92'
		];
		var color = Math.floor(Math.random() * colors.length);
		const btnShadow = [
			"10px 10px 20px" + this.newShade(colors[color], -15) + " inset",
			"-10px -10px 20px " + this.newShade(colors[color], 10) + " inset"
		]
		const divShadow = [
			"10px 10px 20px" + this.newShade(colors[color], -15),
			"-10px -10px 20px" + this.newShade(colors[color], 10)
		]
		const tweetLink = `https://twitter.com/intent/tweet?hashtags=quotes&text="${content}"%0a-${author}`
		return (
			<div className="app" style={{
					backgroundColor: colors[color]
				}}>
				{!isLoading ? 
				<div className="card" id="quote-box" style={{
					backgroundColor :  colors[color],
					boxShadow : divShadow
				}}>
					<h1 className="heading" id="text">"{content}"</h1>
          			<h4 className="author" id="author"><i>- <span>
						<a class="link_author" target="_blank" rel="noreferrer" href={`https://en.wikipedia.org/wiki/${author.replace(/ /g, "_")}`}>{author}</a>
						</span> | Quote</i></h4>
					<div className="btns">
						<button className="button twitter" style={{
							backgroundColor :  colors[color],
							boxShadow : btnShadow
						}}>
							<span><a href={tweetLink} className="twitter-a" id="tweet-quote">Tweet!</a></span>
						</button>

						<button className="button" id="new-quote" onClick={this.fetchAdvice} style={{
							backgroundColor :  colors[color],
							boxShadow : btnShadow
						}}>
							<span>New!</span>
						</button>
					</div>					
				</div>
				: <h1 className="headings">Loading...</h1>}
				<p className="author"><small><i>by Bhargav Jois</i></small></p>
			</div>
		);
	}
}

export default App;
