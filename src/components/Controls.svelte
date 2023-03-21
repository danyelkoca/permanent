<script>
	import ChevronCircleRight from 'svelte-icons/fa/FaChevronCircleRight.svelte';
	import ChevronCircleLeft from 'svelte-icons/fa/FaChevronCircleLeft.svelte';
	import { step, prev, next, questions } from '../stores';
	import { goto } from '$app/navigation';

	function prev_setter(q) {
		console.log(q);
		prev.set($questions.filter((qu) => qu.step == q)[0].prev);
		next.set($step);
		step.set(q);
		goto(`/form?q=${q}`);
	}

	function next_setter(q) {
		console.log(q);

		prev.set($step);
		next.set($questions.filter((qu) => qu.step == q)[0].next);
		step.set(q);
		goto(`/form?q=${q}`);
	}
</script>

<div class="icon-holder">
	<div class="icon-div">
		<button disabled={$prev == '' ? true : false} on:click={prev_setter($prev)} class="icon">
			<ChevronCircleLeft />
		</button>
	</div>
	<div>{$prev}---</div>
	<div>---{$next}</div>
	<div class="icon-div">
		<button disabled={$next == '' ? true : false} on:click={next_setter($next)} class="icon">
			<ChevronCircleRight />
		</button>
	</div>
</div>

<style>
	.icon-holder {
		display: flex;
		width: 100vw;
		color: rgb(15, 23, 42);
	}

	.icon-div {
		display: flex;
		flex: 1;
		justify-content: center;
		align-items: center;
		padding: 10px;
	}

	.icon {
		width: 32px;
		height: 32px;
	}

	button:disabled {
		opacity: 0.5;
		cursor: auto;
	}
</style>
