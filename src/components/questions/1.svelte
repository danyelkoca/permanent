<script>
	import { next, answers, length_of_stay_options as options } from '../../stores';

	function onChange(event) {
		let step = $options.filter((o) => o.value == $answers.length_of_stay)[0].step;
		next.set(step);
	}
</script>

<div>How long have you been living in Japan?</div>
<hr style="opacity:0.3; margin: 20px 30px 20px 30px" />

{#each $options as option}
	<div>
		<label>
			<input
				type="radio"
				bind:group={$answers.length_of_stay}
				on:change={onChange}
				name="options"
				value={option.value}
				checked={option.value == $answers.length_of_stay ? true : false}
			/>
			{option.text}
		</label>
	</div>
{/each}
<hr style="opacity:0.3; margin: 20px 30px 20px 30px" />

<div>
	Selected: You have lived in japan for {$options.filter(
		(o) => o.value == $answers.length_of_stay
	)[0].text}
</div>
