import React from 'react';
//import picture from '../image/youtubelogo.png';


class SearchInput extends React.Component {

	state = { 
		term: '' 
	};
	
	onFormChange = (event) => {
		this.setState({
			term: event.target.value
		});
	};

	render() { 
		return(
			<div className='search-bar ui segment'>
                <form onSubmit={this.onFormSubmit} className='ui form'>
                    <div className='field'>
						<div className='ui massive icon input'>
							<label htmlFor="video-search">Youtube</label>
							<input 
								type="text"
								placeholder='search...'
								onChange={(event) => this.setState({entry:event.target.value})}
								value={this.state.event}
							/>
							<i className='search icon'></i>
						</div>                        
                    </div>
                </form>
            </div>
		)
	}
}

export default SearchInput;

