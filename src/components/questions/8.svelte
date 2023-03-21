<!-- <div>HSP point system</div> -->
<script>
	import { answers, HSP_options_type, activity_options } from '../../stores';
	console.log($answers);
</script>

{#if $answers.HSP.yes_no}
	<div>
		You have HSP and your HSP type is <strong
			>{$HSP_options_type.filter((o) => o.value == $answers.HSP.type)[0].text}</strong
		>
	</div>
{:else}
	<div>
		You don't have HSP and your activity type is <strong
			>{$activity_options.filter((o) => o.value == $answers.activity)[0].text}</strong
		>
	</div>{/if}
