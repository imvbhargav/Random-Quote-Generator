import React from "react";
import "./App.css";
class App extends React.Component {
	state = { content: "Loading... because great things (and sometimes bugs) take time.", author: "Bhargav",  isLoading: true, error: false };

	async componentDidMount() {
		await this.fetchAdvice();
	}

	fetchAdvice = async() => {
		this.setState({ content: "Loading... because great things (and sometimes bugs) take time.", author: "Bhargav", isLoading: true });
		const api_url =`https://quoteslate.vercel.app/api/quotes/random`;
		try{
			const response = await fetch(api_url);
			let data = await response.json();
			const { content, author, isLoading, error } = { content: data.quote, author: data.author, isLoading: false, error: false };
			setTimeout(() => {
				this.setState({ content, author, isLoading, error });
			}, 1000)
		} catch (err){
			console.error(err);
			const errMessage = "An error is just your code's way of saying, 'Surprise! Bet you didn't see that coming!'";
			const { content, author, isLoading, error } = { content: errMessage, author: "Bhargav", isLoading: false, error: true };
			this.setState({ content, author, isLoading, error });
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
		const { content, author, isLoading, error } = this.state;
		const colors = [
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
		let color = Math.floor(Math.random() * colors.length);
		let bgcolor = colors[color];
		let textColor = '#000000';
		let btnShadow = isLoading ? [
			"10px 10px 20px" + this.newShade('#808080', -15),
			"-10px -10px 20px" + this.newShade('#808080', 10)
		] : [
			"10px 10px 20px" + this.newShade(colors[color], -15),
			"-10px -10px 20px " + this.newShade(colors[color], 10)
		]
		let divShadow = isLoading ? [
			"10px 10px 20px" + this.newShade('#808080', -15),
			"-10px -10px 20px" + this.newShade('#808080', 10)
		] : [
			"10px 10px 20px" + this.newShade(colors[color], -15),
			"-10px -10px 20px" + this.newShade(colors[color], 10)
		] ;
		if (error) {
			bgcolor = '#60000B';
			textColor = '#808080';
			btnShadow = [
				"10px 10px 20px" + this.newShade('#60000B', -15),
				"-10px -10px 20px " + this.newShade('#60000B', 10)
			];
			divShadow = [
				"10px 10px 20px" + this.newShade('#60000B', -15),
				"-10px -10px 20px" + this.newShade('#60000B', 10)
			];
		}
		const tweetLink = `https://twitter.com/intent/tweet?hashtags=quotes&text="${content}"%0a-${author}`
		return (
			<div className="app" style={{backgroundColor: isLoading ? '#808080' : bgcolor}}>
				<div className="card" id="quote-box" style={{ backgroundColor: isLoading ? '#808080' : bgcolor, boxShadow: divShadow??"" }}>
					<h1 className="heading" style={{ color: textColor }} id="text">"{content}"</h1>
					<h4 className="author" id="author" style={{ color: textColor }}><i>- <span>
						<a className="link_author" target="_blank" rel="noreferrer"
						   href={`https://en.wikipedia.org/wiki/${author.replace(/ /g, "_")}`}>{author}</a>
						</span> | Quote</i></h4>
					<div className="btns">
						<button className="button twitter" style={{
							backgroundColor: isLoading ? '#808080' : bgcolor,
							boxShadow: btnShadow ?? "",
						}}>
							<span><a href={tweetLink} className="twitter-a" style={{ color: textColor }} id="tweet-quote">Tweet!</a></span>
						</button>

						<button className="button" id="new-quote" onClick={this.fetchAdvice} style={{
							backgroundColor: isLoading ? '#808080' : bgcolor,
							boxShadow: btnShadow ?? "",
						}}>
							<span style={{ color: textColor }}>New!</span>
						</button>
					</div>
				</div>
				<p className="author" style={{ color: textColor }}><small><i>by Bhargav Jois</i></small></p>
			</div>
		)
	}
}

export default App;
