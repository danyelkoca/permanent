<script>
	import GiJapan from 'svelte-icons/gi/GiJapan.svelte';
	import { base } from '$app/paths';
</script>

<header>
	<nav>
		<a href="{base}/" class="logo">
			<div class="logo-svg">
				<GiJapan style="width:100%;" />
			</div>
			<span>Japan Permanent Residency</span>
		</a>
	</nav>

	<nav>
		<a href="{base}/">Home</a>
		<a href="{base}/form">Calculator</a>
		<a href="{base}/about">About</a>
	</nav>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
		background-color: rgb(15, 23, 42);
		padding: 10px;
		margin: 0;
	}

	nav {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	a {
		color: white;
		margin: 0 10px 0 10px;
	}

	.logo {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.logo-svg {
		width: 40px;
		height: 40px;
		display: inline-block;
		margin-right: 10px;
	}
</style>
