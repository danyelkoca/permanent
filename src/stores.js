import { writable, readable, derived } from 'svelte/store';
import Question0 from './components/questions/0.svelte';
import Question1 from './components/questions/1.svelte';
import Question2 from './components/questions/2.svelte';
import Question3 from './components/questions/3.svelte';
import Question4 from './components/questions/4.svelte';
import Question5 from './components/questions/5.svelte';
import Question6 from './components/questions/6.svelte';
import Question7 from './components/questions/7.svelte';
import Question8 from './components/questions/8.svelte';

let questions_ = [
	{ step: '0', component: Question0, prev: '', next: '0-1' }, // welcome message
	{ step: '0-1', component: Question1, prev: '0', next: '0-1-2' }, // how long have you been living in Japan? next is 0-1-2 because default option is less than 1 year
	{ step: '0-1-2', component: Question2, prev: '0-1', next: '' }, // less than 1 year. Not eligible
	{ step: '0-1-3', component: Question3, prev: '0-1', next: '0-1-3-1' }, // 1-3 and 3-5. HSP question
	{ step: '0-1-4', component: Question4, prev: '0-1', next: '0-1-3' }, // Because automatically HSP visa should be asked if the person with 5-10 years is not applicable to any requirements
	{ step: '0-1-5', component: Question5, prev: '0-1', next: '' },
	{ step: '0-1-3-1', component: Question6, prev: '0-1-3', next: '0-1-3-3' }, // No. HSP > Activity check
	{ step: '0-1-3-2', component: Question7, prev: '0-1-3', next: '' }, // Need to wait for 3 years
	{ step: '0-1-3-3', component: Question8, prev: '0-1-3', next: '' } // Yes. HSP > Point system
];

let length_of_stay_options_array = [
	{ text: '< 1 year', value: 0, step: '0-1-2' },
	{ text: '1 - 3 years', value: 1, step: '0-1-3' },
	{ text: '3 - 5 years', value: 2, step: '0-1-3' },
	// Both 1-3 and 305 years are channeled to HSP question
	{ text: '5 - 10 years', value: 3, step: '0-1-4' },
	{ text: '> 10 years', value: 4, step: '0-1-5' }
];

let HSP_options_yes_no_ = [
	{ text: "No I don't have HSP Visa", value: 0 },
	{ text: 'Yes I have HSP Visa', value: 1 }
];

let HSP_options_type_ = [
	{ text: 'Advanced academic research activities', value: 0 },
	{ text: 'Advanced specialized/technical activities', value: 1 },
	{ text: 'Advanced business and management activities', value: 2 }
];

let HSP_options_time_ = [
	{ text: '1 year ago or more', value: 0 },
	{ text: '3 years ago or more', value: 1 }
];

let HSP_options_points_ = [
	{ text: '>= 70 Points', value: 0 },
	{ text: '>= 80 points', value: 1 }
];

let five_ten_options_ = [
	{
		text: 'The spouses of Japanese nationals, permanent residents, and special permanent residents must be\
	in a continuous marital relationship for more than three years and must have stayed in Japan for\
	over one year. The biological child of a Japanese national, permanent resident, or special\
	permanent resident must have resided in Japan continuously for over one year.',
		value: 0
	},
	{
		text: 'Applicants with\
	the "Long-Term Resident" status of residence must have resided in Japan continuously for over five years.',
		value: 1
	},
	{
		text: 'Applicants must be recognized as contributing to Japan in the fields of diplomacy,\
	society, economy, culture, etc., and have resided in Japan for more than five years. * Please\
	refer to the guideline regarding "applicants’ contributions to Japan."',
		value: 2
	}
];

let activity_options_ = [
	{ text: 'Academic research activities', value: 0 },
	{ text: 'Specialized/technical activities', value: 1 },
	{ text: 'Business and management activities', value: 2 }
];


let five_ten_options_nexts_ = { 0: '0-1-3', 1: '0-1-5' };
let HSP_options_nexts_ = ['0-1-3-1', '0-1-3-2', '0-1-3-3'];
// 0-1-3-1: Usual point system
// 0-1-3-2: Yes HSP, 1 year ago, 70: Need to wait for 3 years (+2 years)
// 0-1-3-3: Yes HSP, 1 year ago - 3 year ago, 80: Check HSP now, if > 80, then eligible
// 0-1-3-3: Yes HSP, 3 year ago, 70: Check HSP now, if > 70, then eligible
// 0-1-3-3: Yes HSP, 3 year ago, 80: Check HSP now, if > 80, then eligible



export const step = writable('0');
export const questions = readable(questions_);
export const question = derived(step, ($step) => questions_.filter((a) => a.step == $step)[0]);
export const progress = derived(step, ($step) => $step / (questions_.length - 1));
export const prev = writable('');
export const next = writable('0-1');
export const length_of_stay_options = readable(length_of_stay_options_array);
export const HSP_options_yes_no = readable(HSP_options_yes_no_);
export const HSP_options_type = readable(HSP_options_type_);
export const HSP_options_time = readable(HSP_options_time_);
export const HSP_options_points = readable(HSP_options_points_);
export const HSP_options_nexts = readable(HSP_options_nexts_);

export const five_ten_options = readable(five_ten_options_);
export const five_ten_options_nexts = readable(five_ten_options_nexts_);

export const activity_options = readable(activity_options_);

export const answers = writable({
	length_of_stay: 0,
	HSP: { yes_no: 0, type: 0, time: 0, points: 0 },
	five_ten: [],
	activity: 0,
});
