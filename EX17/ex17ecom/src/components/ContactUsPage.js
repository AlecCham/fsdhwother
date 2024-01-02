import React from 'react';

function ContactUsPage() {
    return (
        <div className="container mt-5 pt-5">
            <h2 className="text-center mb-4">Submit the form below to contact us</h2>
            <form>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name:</label>
                    <input type="text" className="form-control" id="name" name="Name" placeholder="Enter your name" />
                </div>
                <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message:</label>
                    <textarea className="form-control" id="message" name="Message" rows="4" placeholder="Enter your message"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default ContactUsPage;
