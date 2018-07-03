import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import _ from 'lodash';

//this is the action
import { fetchPosts } from '../actions';

class PostsIndex extends Component {

	//autimatically called when the component is rendered in the DOM
	componentDidMount = () => {
		this.props.fetchPosts();
	}

	renderPosts = () => {
		return _.map(this.props.posts, post => {
			return (
				<li className="list-group-item" key={post.id}> 
					{post.id}
				</li>
			);
		})
	}
	
	render() {
		console.log(this.props.posts)
		return (
			<div> 

				<div className="text-xs-right">
					<Link className="btn btn-primary" to="/posts/new" >
						Add a Post
					</Link>
				</div>

				<h3>Posts</h3>
				<ul className="list-group">
					{this.renderPosts()}
				</ul>
			</div>

		);
	}
}


function mapStateToProps(state){
	return { posts: state.posts };
}

//how to wire up the action creator

//instead of using mapStateToProps we are using this way below
//completely identical to mapStateToProps
//were doing that because its a shortcut in this situation
//you use mapStateToProps if you want to bind the dispatch function ahead of time
export default connect(mapStateToProps, { fetchPosts: fetchPosts })(PostsIndex);