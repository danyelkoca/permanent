<script>
	import {
		next,
		answers,
		HSP_options_yes_no as options_yes_no,
		HSP_options_type as options_type,
		HSP_options_time as options_time,
		HSP_options_points as options_points,
		HSP_options_nexts as nexts
	} from '../../stores';

	function onChange(event) {
		if (!$answers.HSP.yes_no) {
			// HSP: No
			next.set($nexts[0]); // Usual point system
		} else {
			if (!$answers.HSP.time) {
				if (!$answers.HSP.points) {
					// HSP: Yes, 1 year ago, Point: 70
					next.set($nexts[1]); // Need to wait for 3 years
				} else {
					// HSP: Yes, 1 year ago, Point: 80
					next.set($nexts[2]); // HSP Page
				}
			} else {
				if (!$answers.HSP.points) {
					// HSP: Yes, 3 years ago, Point: 70
					next.set($nexts[2]); // HSP page
				} else {
					// HSP: Yes, 3 years ago, Point: 80
					next.set($nexts[2]); // HSP page
				}
			}
		}
	}
</script>

<div>
	You have been staying in Japan for {$answers.length_of_stay}.
</div>
<hr style="opacity:0.3; margin: 20px 30px 20px 30px" />

<div>Do you have HSP (Highly Skilled Professional) Visa?</div>
{#each $options_yes_no as option}
	<div>
		<label>
			<input
				type="radio"
				bind:group={$answers.HSP.yes_no}
				on:change={onChange}
				name="options_yes_no"
				value={option.value}
				checked={option.value == $answers.HSP.yes_no ? true : false}
			/>
			{option.text}
		</label>
	</div>
{/each}
{#if $answers.HSP.yes_no}
	<hr style="opacity:0.3; margin: 20px 30px 20px 30px" />
	<div>What type of HSP visa do you have?</div>
	{#each $options_type as option}
		<div>
			<label>
				<input
					type="radio"
					bind:group={$answers.HSP.type}
					on:change={onChange}
					name="options_type"
					value={option.value}
					checked={option.value == $answers.HSP.type ? true : false}
				/>
				{option.text}
			</label>
		</div>
	{/each}
	<hr style="opacity:0.3; margin: 20px 30px 20px 30px" />
	<div>When did you get your HSP?</div>
	{#each $options_time as option}
		<div>
			<label>
				<input
					type="radio"
					bind:group={$answers.HSP.time}
					on:change={onChange}
					name="options_time"
					value={option.value}
					checked={option.value == $answers.HSP.time ? true : false}
				/>
				{option.text}
			</label>
		</div>
	{/each}

	<hr style="opacity:0.3; margin: 20px 30px 20px 30px" />
	<div>How much HSP points did you have at the time of obtaining visa?</div>
	{#each $options_points as option}
		<div>
			<label>
				<input
					type="radio"
					bind:group={$answers.HSP.points}
					on:change={onChange}
					name="options_points"
					value={option.value}
					checked={option.value == $answers.HSP.points ? true : false}
				/>
				{option.text}
			</label>
		</div>
	{/each}
{/if}
<!-- <hr style="opacity:0.3; margin: 20px 30px 20px 30px" />

{#if answer == 0}
	<div>Selected: You DONT have HSP Visa</div>
{:else}
	<div>Selected: You HAVE HSP Visa</div>
{/if} -->
