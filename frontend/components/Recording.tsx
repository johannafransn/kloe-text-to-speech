import { useState } from 'react'

const Recording = () => {
	const [isRecording, setIsRecording] = useState(false)
	const [blobUrl, setBlobUrl] = useState('')
	const [isBlocked, setIsBlocked] = useState(false)

	return <>Recording</>
}

export default Recording
