<script>
	import '../../styles/main.css';
	import ProgressBar from '../../components/ProgressBar.svelte';
	import Controls from '../../components/Controls.svelte';
	import Navbar from '../../components/Navbar.svelte';
	import { step, questions, progress, question } from '../../stores';

	// import { page } from '$app/stores';
	// let q = $page.url.searchParams.get('q');
	// console.log()
	// step.set(q);

	// let comp = $questions.filter(a => a.step == q);
	// console.log(q, comp)
	console.log($step)
</script>

<div class="container">
	<Navbar />
	<div class="content-wrapper">
		<div class="content">
			<!-- <p style="text-align:center; margin: 5px 0 5px 0">Progress: {$progress * 100}%</p>
			<div style="margin: 10px"><ProgressBar /></div>
			<hr /> -->
			<div style="margin: 10px">
				<svelte:component this={$question.component} />
			</div>
		</div>
	</div>
	<Controls/>
</div>

<style>
	.container {
		display: flex;
		flex-flow: column;
		height: 100vh;
	}

	.content-wrapper {
		flex: 1; /* 1 and it will fill whole space left if no flex value are set to other children*/
		/* background: gold; */
		overflow: auto;
		display: flex;
		justify-content: center;
		align-items: center;
		padding-top: 10px;
	}

	.content {
		border-radius: 10px;
		width: 100%;
		height: 100%;
		max-width: 700px;
		background-color: aliceblue;
	}
</style>
