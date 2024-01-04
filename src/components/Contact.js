import React, { useState } from 'react';
// import './index.css'; // Import your CSS file

const Contact = () => {
    const [subject, setSubject] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = { subject, email, message };

        try {
            const response = await fetch('http://localhost:3000/messages', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                console.log('Message sent successfully');
                // Reset form or navigate to a different page
            } else {
                console.error('Failed to send message');
            }
        } catch (error) {
            console.error('Error:', error);
        }

        // Reset form fields
        setSubject('');
        setEmail('');
        setMessage('');
    };

    return (
        <div className="contact-container">
            <h2 className='contacth2'>Contact Us</h2>
            <form className='contactform' onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="subject">Subject:</label>
                    <input type="text" id="subject" value={subject} onChange={(e) => setSubject(e.target.value)} />
                </div>
                <div className="form-group">
                    <label className='contactlabel' htmlFor="email">Email:</label>
                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea className='contacttextarea' id="message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                </div>
                <button className='contactbutton' type="submit">Send Message</button>
            </form>
        </div>
    );
};

export default Contact;
