import { h } from 'preact';
import { Link } from 'preact-router';
import Card from '../tags/card';
import style from '../article/style'

export default function (props) {
	const title = props.title;
	return (
		<div class={style['page']}>
			<Card>
				<h1>{ title }: <small>A killer story</small></h1>
				<Link href="/blog" className="back">Back to Blog</Link>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam maiores necessitatibus nihil quo, cupiditate consectetur voluptatem cumque ipsum consequuntur aut repellat repellendus eligendi, placeat inventore perspiciatis dolores ipsa voluptates porro.</p>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam maiores necessitatibus nihil quo, cupiditate consectetur voluptatem cumque ipsum consequuntur aut repellat repellendus eligendi, placeat inventore perspiciatis dolores ipsa voluptates porro.</p>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam maiores necessitatibus nihil quo, cupiditate consectetur voluptatem cumque ipsum consequuntur aut repellat repellendus eligendi, placeat inventore perspiciatis dolores ipsa voluptates porro.</p>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam maiores necessitatibus nihil quo, cupiditate consectetur voluptatem cumque ipsum consequuntur aut repellat repellendus eligendi, placeat inventore perspiciatis dolores ipsa voluptates porro.</p>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam maiores necessitatibus nihil quo, cupiditate consectetur voluptatem cumque ipsum consequuntur aut repellat repellendus eligendi, placeat inventore perspiciatis dolores ipsa voluptates porro.</p>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam maiores necessitatibus nihil quo, cupiditate consectetur voluptatem cumque ipsum consequuntur aut repellat repellendus eligendi, placeat inventore perspiciatis dolores ipsa voluptates porro.</p>
			</Card>
		</div>
	);
}