import React from 'react';

function LoginPage() {
    return (
        <>
            <main className="flex-grow-1" style={{ paddingTop: '5rem' }}>
                <div className="container mt-5 pt-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 mb-4">
                            <section className="text-center">
                                <h1 className="display-5 fw-bold ls-tight" style={{ color: '#6c5b7b' }}>
                                    Join Little Village <br />
                                    <span style={{ color: '#333' }}>Explore Your Opportunities</span>
                                </h1>
                                <p style={{ color: '#333' }}>
                                    Be part of a vibrant community at Little Village. Fill out the form to start your journey with us.
                                </p>
                            </section>

                            <div className="card bg-white">
                                <div className="card-body">
                                    <form>
                                        <div className="form-outline mb-4">
                                            <input type="email" id="loginEmail" className="form-control" />
                                            <label className="form-label" htmlFor="loginEmail">Email address</label>
                                        </div>
                                        <div className="form-outline mb-4">
                                            <input type="password" id="loginPassword" className="form-control" />
                                            <label className="form-label" htmlFor="loginPassword">Password</label>
                                        </div>
                                        <button type="submit" className="btn btn-primary btn-block mb-4">Login</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default LoginPage;
