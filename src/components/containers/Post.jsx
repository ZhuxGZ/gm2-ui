const Post = ({ date, title, description }) => {
	return (
		<article className="post">
			<p className="date">{date}</p>
			<h2 className="title">{title}</h2>
			<p className="description">{description}</p>
			<a href="">Read article</a>
		</article>
	);
};

export default Post;
