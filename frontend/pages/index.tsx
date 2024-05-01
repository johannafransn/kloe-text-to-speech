import React, { useState } from 'react'
import Page from '@/components/page'
import Section from '@/components/section'
import Button from '@/components/button'
import { useRouter } from 'next/navigation'
import ApiService from '@/api/service'
import Recording from '@/components/Recording'

const Index = () => {
	const [dataFetched, setDataFetched] = useState<string | null>(null)
	const [error, setError] = useState<string | null>(null)

	const handleFetchData = async () => {
		/* 	try {
			const data = await ApiService.getAuthenticatedData()
			setDataFetched(data.data)
			setError(null)
		} catch (err) {
			console.log(err, 'what is err?')
		} */
	}

	return (
		<div className='flex items-center justify-center min-h-screen'>
			<Page>
				<Section>
					<div className='flex flex-col items-center justify-center gap-6 min-h-full'>
						<h2 className='font-gotham-regular text-purple-700 dark:text-purple-200 lg:text-7xl text-5xl text-center px-8 md:p-20 pb-10'>
							Kloe AI Example
						</h2>

						<Recording />
						<Button onClick={handleFetchData} text={'Fetch data'} />
						{error ? `${error} Unauthorized` : dataFetched}
					</div>
				</Section>
			</Page>
		</div>
	)
}

export default Index
