<script>
	import {
		next,
		answers,
		five_ten_options as options,
		five_ten_options_nexts as nexts
	} from '../../stores';

	function onChange(event) {
		if ($answers.five_ten.length > 0) {
			next.set($nexts[1]);
		} else {
			next.set($nexts[0]);
		}
	}
</script>

<div>
	You have been staying in Japan for {$answers.length_of_stay}. Are you applicable to any of the
	below?
</div>
<hr style="opacity:0.3; margin: 20px 30px 20px 30px" />

{#each $options as option, index}
	<div>
		<label>
			<input
				type="checkbox"
				bind:group={$answers.five_ten}
				on:change={onChange}
				name="options"
				value={option.value}
				checked={$answers.five_ten.includes(index)}
			/>
			{option.text}
		</label>
	</div>
{/each}
<hr style="opacity:0.3; margin: 20px 30px 20px 30px" />
