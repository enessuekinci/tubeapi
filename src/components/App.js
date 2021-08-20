import react from 'react';
import youtube from '../apis/youtube';
import SearchInput from './SearchInput';
import VideoDetail from './VideoDetail';
import VideoItems from './VideoItems';


class App extends react.Component {

	state = { videos: [], selectedVideo: null}

	onSearchSubmit = async (entry) => {
		const response = await youtube.get('/search', {
			params: {
				q: entry
			}
		})
		this.setState({videos:response.data})
	}

	onVideoSelect = (video) => {
		this.setState({selectedVideo: video})
	}

	render() {
		return (
			<div className='ui container' style={{marginTop: '1em'}}>
                <SearchInput onForSubmit={this.onForSubmit}/>
                <div className='ui grid'>
                    <div className="ui row">
						<div className="eleven wide column">
							<VideoDetail video={this.state.selectedVideo}/>
						</div>
						<div className="five wide column">
							<VideoItems video={this.state.entry}/>
						</div>
                    </div>
                </div>
            </div>
		)
	}
}

export default App;
