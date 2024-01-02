import React from 'react';

function LoginPage() {
    return (
        <div className="container mt-5 pt-5">
            <section className="text-center text-lg-start">
                <div className="row gx-lg-5 align-items-center">
                    <div className="col-lg-6 mb-4">
                        <h1 className="display-5 fw-bold ls-tight" style={{ color: '#6c5b7b' }}>
                            Join Little Village <br />
                            <span style={{ color: '#333' }}>Explore Your Opportunities</span>
                        </h1>
                        <p style={{ color: '#333' }}>
                            Be part of a vibrant community at Little Village. Fill out the form to start your journey with us.
                        </p>
                    </div>
                    <div className="col-lg-6 mb-4">
                        <div className="card bg-white">
                            <div className="card-body">
                                {/* Form */}
                                <form>
                                    {/* Name Input */}
                                    <div className="form-outline mb-4">
                                        <input type="text" id="form3Example1" className="form-control" />
                                        <label className="form-label" htmlFor="form3Example1">First name</label>
                                    </div>
                                    {/* ... other form inputs ... */}
                                    {/* Submit Button */}
                                    <button type="submit" className="btn btn-primary btn-block mb-4">Sign up</button>
                                    {/* Social Media Buttons */}
                                    {/* ... */}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default LoginPage;
