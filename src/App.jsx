import { useState } from 'react'
import './App.css'

function App() {
	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		email: '',
		queryType: '',
		message: '',
		okayToContact: true,
	})

	const [isHidden, setIsHidden] = useState(false)

	function handleChange(event) {
		let { name, value, type, checked } = event.target
		setFormData((prevFormData) => {
			return {
				...prevFormData,
				[name]: type === 'checkbox' ? checked : value,
			}
		})
	}

	function handleSubmit(event) {
		event.preventDefault()
		setIsHidden(!isHidden)
	}

	return (
		<>
			<main className={isHidden ? 'hidden' : ''}>
				<h1>Contact Us</h1>
				<form className='form' onSubmit={handleSubmit}>
					<label htmlFor='firstName' className='form-label'>
						First Name *
						<input
							type='text'
							id='firstName'
							className='form-input'
							onChange={handleChange}
							value={formData.firstName}
							name='firstName'
							required
						/>
					</label>

					<label htmlFor='lastName' className='form-label'>
						Last Name *
						<input
							type='text'
							id='lastName'
							className='form-input'
							onChange={handleChange}
							value={formData.lastName}
							name='lastName'
							required
						/>
					</label>

					<label htmlFor='email' className='form-label'>
						Email Address *
						<input
							type='email'
							id='email'
							className='form-input'
							onChange={handleChange}
							value={formData.email}
							name='email'
							required
						/>
					</label>

					<fieldset>
						<legend>Query Type *</legend>

						<label className='radio' htmlFor='general-enquiry'>
							<input
								type='radio'
								id='general-enquiry'
								value='general-enquiry'
								className='form-input'
								name='queryType'
								onChange={handleChange}
								required
							/>
							General Enquiry
						</label>

						<label className='radio' htmlFor='support-request'>
							<input
								type='radio'
								id='support-request'
								value='support-request'
								className='form-input'
								name='queryType'
								onChange={handleChange}
								required
							/>
							Support Request
						</label>
					</fieldset>

					<label htmlFor='message' className='form-label'>
						Message *
						<textarea
							id='message'
							className='form-input'
							onChange={handleChange}
							value={formData.message}
							name='message'
							required
						></textarea>
					</label>

					<label htmlFor='consent'>
						<input
							type='checkbox'
							id='consent'
							onChange={handleChange}
							checked={formData.okayToContact}
							name='okayToContact'
							required
						/>
						I consent to being contacted by the team *
					</label>

					<button id='submit'>Submit</button>
				</form>
			</main>

			<div id='post-submit' className={isHidden ? '' : 'hidden'}>
				Thank you for contacting us! We'll get back to you soon!
			</div>
		</>
	)
}

export default App
