<script>
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
	import {progress} from '../stores';

	const prog = tweened(0, {
		duration: 400,
		easing: cubicOut
	});
	prog.set(progress);
</script>

<progress value={$progress} />

<style>
	progress {
		display: block;
		width: 100%;
		accent-color: rgb(15, 23, 42);
	}
</style>
