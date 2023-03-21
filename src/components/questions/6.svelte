<script>
	import { next, answers, activity_options as options } from '../../stores';
	console.log($options.filter((o) => o.value == $answers.activity));

	function onChange(event) {
		// let step = $options.filter((o) => o.value == $answers.length_of_stay)[0].step;
		next.set(step);
	}
</script>

<div>What kind of activity are you currently involved in?</div>
<hr style="opacity:0.3; margin: 20px 30px 20px 30px" />

{#each $options as option}
	<div>
		<label>
			<input
				type="radio"
				bind:group={$answers.activity}
				on:change={onChange}
				name="options"
				value={option.value}
				checked={option.value == $answers.activity ? true : false}
			/>
			{option.text}
		</label>
	</div>
{/each}
<hr style="opacity:0.3; margin: 20px 30px 20px 30px" />