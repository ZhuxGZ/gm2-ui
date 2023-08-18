import Post from './Post';

const posts = [
	{
		id: 1,
		date: 'September 5, 2022',
		title: 'Crafting a design system for a multiplanetary future',
		description:
			'Most companies try to stay ahead of the curve when it comes to visual design, but for Planetaria we needed to create a brand that would still inspire us 100 years from now when humanity has spread across our entire solar system.',
	},
	{
		id: 2,
		date: 'September 5, 2022',
		title: 'Crafting a design system for a multiplanetary future',
		description:
			'Most companies try to stay ahead of the curve when it comes to visual design, but for Planetaria we needed to create a brand that would still inspire us 100 years from now when humanity has spread across our entire solar system.',
	},
	{
		id: 3,
		date: 'September 5, 2022',
		title: 'Crafting a design system for a multiplanetary future',
		description:
			'Most companies try to stay ahead of the curve when it comes to visual design, but for Planetaria we needed to create a brand that would still inspire us 100 years from now when humanity has spread across our entire solar system.',
	},
	{
		id: 4,
		date: 'September 5, 2022',
		title: 'Crafting a design system for a multiplanetary future',
		description:
			'Most companies try to stay ahead of the curve when it comes to visual design, but for Planetaria we needed to create a brand that would still inspire us 100 years from now when humanity has spread across our entire solar system.',
	},
];

const getPost = posts.map((post) => {
	return (
		<Post key={post.id} date={post.date} title={post.title} description={post.description} />
	);
});

const PostDisplay = () => {
	return <div className="postDisplay">{getPost}</div>;
};

export default PostDisplay;
