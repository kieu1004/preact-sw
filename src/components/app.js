import { h } from 'preact';
import { Router } from 'preact-router';

import Header from './header';
import style from '../style'

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';
import Article from '../routes/article/article';
import Blog from '../routes/blog/blog';
import Profile from '../routes/profile';

const App = () => (
	<div id={style['app']}>
		<Header />
		<main id={style['content']}>
			<Router>
				<Home path="/" />
				<Article path="/article" />
				<Blog path="/blog" />
				<Profile path="/profile/" user="me" />
				<Profile path="/profile/:user" />
			</Router>
		</main>
	</div>
);

export default App;
