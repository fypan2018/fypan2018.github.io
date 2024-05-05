<template>
	<nav>
		<ul>
			<li>
				<router-link to="/">主页 | Home</router-link>
			</li>
			<li>
				<router-link to="/views/team">团队成员 | Team Members</router-link>
			</li>
			<li>
				<router-link to="/views/research">科研 | Research</router-link>
			</li>
			<li>
				<router-link to="/views/teaching">教学 | Teaching</router-link>
			</li>
			<li>
				<router-link to="/views/awards">获奖 | Awards</router-link>
			</li>
			<li>
				<router-link to="/views/cv">简历 | CV</router-link>
			</li>
		</ul>
	</nav>
</template>
<script>
	export default {
		name: 'Navigation',
	};
</script>
<style scoped>
	nav {
		background-color: #333;
		padding: 1rem;
	}

	ul {
		list-style-type: none;
		margin: 0;
		padding: 0;
		display: flex;
		justify-content: space-around;
	}

	li {
		margin: 0 1rem;
	}

	a {
		color: #fff;
		text-decoration: none;
		font-size: 1.2rem;
		font-weight: bold;
		padding: 0.5rem;
		border-radius: 5px;
		transition: background-color 0.3s ease;
	}

	a:hover {
		background-color: #555;
	}

	.router-link-active {
		background-color: #555;
	}
</style>
