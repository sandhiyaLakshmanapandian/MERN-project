// frontend/src/components/Contact.js
import React, { useState } from 'react';
import axios from 'axios';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: null
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setStatus({ submitting: true, submitted: false, error: null });

    try {
      const response = await axios.post('/api/contact', formData);

      if (response.data.success) {
        setStatus({
          submitting: false,
          submitted: true,
          error: null
        });
        setFormData({ name: '', email: '', message: '' });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setStatus(prev => ({ ...prev, submitted: false }));
        }, 5000);
      }
    } catch (error) {
      setStatus({
        submitting: false,
        submitted: false,
        error: error.response?.data?.message || 'Failed to submit message. Please try again.'
      });
    }
  };

  return (
    <div className="contact-page">
      <div className="page-header bg-primary text-white py-5">
        <div className="container">
          <h1 className="display-4 fw-bold">Contact Us</h1>
          <p className="lead">We'd love to hear from you</p>
        </div>
      </div>

      <div className="container my-5">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div className="card shadow-sm">
              <div className="card-body p-4 p-md-5">
                <h2 className="h3 fw-bold mb-4 text-center">Get in Touch</h2>
                <p className="text-center text-muted mb-4">
                  Have questions about memory enhancement? Want to share your success story? 
                  Send us a message and we'll get back to you soon!
                </p>

                {status.submitted && (
                  <div className="alert alert-success alert-dismissible fade show" role="alert">
                    <i className="bi bi-check-circle-fill me-2"></i>
                    <strong>Success!</strong> Your message has been submitted successfully. 
                    We'll get back to you soon.
                    <button 
                      type="button" 
                      className="btn-close" 
                      onClick={() => setStatus(prev => ({ ...prev, submitted: false }))}
                    ></button>
                  </div>
                )}

                {status.error && (
                  <div className="alert alert-danger alert-dismissible fade show" role="alert">
                    <i className="bi bi-exclamation-triangle-fill me-2"></i>
                    <strong>Error!</strong> {status.error}
                    <button 
                      type="button" 
                      className="btn-close" 
                      onClick={() => setStatus(prev => ({ ...prev, error: null }))}
                    ></button>
                  </div>
                )}

                <form onSubmit={handleSubmit} noValidate>
                  <div className="mb-4">
                    <label htmlFor="name" className="form-label fw-bold">
                      Name <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      disabled={status.submitting}
                    />
                    {errors.name && (
                      <div className="invalid-feedback">{errors.name}</div>
                    )}
                  </div>

                  <div className="mb-4">
                    <label htmlFor="email" className="form-label fw-bold">
                      Email <span className="text-danger">*</span>
                    </label>
                    <input
                      type="email"
                      className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      disabled={status.submitting}
                    />
                    {errors.email && (
                      <div className="invalid-feedback">{errors.email}</div>
                    )}
                  </div>

                  <div className="mb-4">
                    <label htmlFor="message" className="form-label fw-bold">
                      Message <span className="text-danger">*</span>
                    </label>
                    <textarea
                      className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us what's on your mind..."
                      disabled={status.submitting}
                    ></textarea>
                    {errors.message && (
                      <div className="invalid-feedback">{errors.message}</div>
                    )}
                    <div className="form-text">
                      Minimum 10 characters required
                    </div>
                  </div>

                  <div className="d-grid">
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg"
                      disabled={status.submitting}
                    >
                      {status.submitting ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                          Sending...
                        </>
                      ) : (
                        <>
                          <i className="bi bi-send-fill me-2"></i>
                          Send Message
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-lg-10 mx-auto">
            <div className="row g-4">
              <div className="col-md-4">
                <div className="card text-center h-100 border-primary">
                  <div className="card-body p-4">
                    <i className="bi bi-envelope-fill text-primary display-4 mb-3"></i>
                    <h5 className="fw-bold">Email</h5>
                    <p className="text-muted mb-0">contact@memoryboost.com</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card text-center h-100 border-primary">
                  <div className="card-body p-4">
                    <i className="bi bi-clock-fill text-primary display-4 mb-3"></i>
                    <h5 className="fw-bold">Response Time</h5>
                    <p className="text-muted mb-0">Within 24-48 hours</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card text-center h-100 border-primary">
                  <div className="card-body p-4">
                    <i className="bi bi-chat-dots-fill text-primary display-4 mb-3"></i>
                    <h5 className="fw-bold">Support</h5>
                    <p className="text-muted mb-0">Friendly & Helpful</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;