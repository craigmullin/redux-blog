import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'; // like anchor tag
import { fetchPosts } from '../actions';
import _ from 'lodash';


class PostList extends Component {
  componentDidMount() {
    // Lifecycle method
    this.props.fetchPosts();
  }

  renderPosts() {
    return _.map(this.props.posts, post => {
      return (
        <li className="list-group-item" key={post.id}>
          {post.title}
        </li>
      ); 
    });
  }

  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link className="btn btn-primary" to="/posts/new">
            New Posts
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

function mapStateToProps(state) {
  return { posts: state.posts };
}

export default connect(mapStateToProps, { fetchPosts })(PostList);