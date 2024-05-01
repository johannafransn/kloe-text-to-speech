import React, { useState } from 'react'
import Button from './button'
import ApiService from '@/api/service'

const activitiesList = [
	'I helped the patient with dressing and grooming',
	'I prepared meals and assisted with feeding',
	'I administered medication as prescribed',
	'I assisted the patient with mobility and transfers (e.g., walking, wheelchair transfers)',
	'I performed light housekeeping tasks (e.g., dusting, vacuuming)',
	'I provided companionship and emotional support to the patient',
	'I monitored the patient’s vital signs and reported any changes to healthcare professionals',
	'I assisted the patient with toileting and personal hygiene',
	'I engaged the patient in recreational activities (e.g., reading, puzzles, watching TV)',
	'I communicated with the patient’s family and healthcare team to coordinate care',
]

const Activities: React.FC = () => {
	const [tickedActivities, setTickedActivities] = useState<string[]>([])
	const [summarizedText, setSummarizedText] = useState<string>('')

	const handleActivityChange = (activity: string) => {
		if (tickedActivities.includes(activity)) {
			// If the activity is already ticked, remove it
			setTickedActivities(tickedActivities.filter((item) => item !== activity))
		} else {
			// If the activity is not ticked, add it
			setTickedActivities([...tickedActivities, activity])
		}
	}

	console.log(tickedActivities, 'ticked?')

	const handleFetchData = async () => {
		try {
			const data = await ApiService.postActivitiesAndGetText({
				activites: tickedActivities,
			})
			console.log(data, 'what is data??')
			setSummarizedText(data.data)
			//setError(null)
		} catch (err) {
			console.log(err, 'what is err?')
		}
	}

	return (
		<div className='flex flex-col'>
			{activitiesList.map((activity, index) => (
				<div key={index} className='mb-3 mt-3 flex items-center space-x-2'>
					<input
						type='checkbox'
						id={`activity-${index}`}
						checked={tickedActivities.includes(activity)}
						onChange={() => handleActivityChange(activity)}
						className='rounded-full appearance-none h-6 w-6 border-purple-500 border-2 checked:bg-purple-500 checked:border-transparent'
					/>
					<label htmlFor={`activity-${index}`} className='text-purple-300'>
						{activity}
					</label>
				</div>
			))}
			<br></br>
			<Button onClick={handleFetchData} text={'Fetch data'} />
			<br></br>
			<p className='mb-3 mt-3'>{summarizedText ? summarizedText : null}</p>
		</div>
	)
}

export default Activities
