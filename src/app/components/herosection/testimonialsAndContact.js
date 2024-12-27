'use client'
import React, { useState } from 'react';
import { FaQuoteLeft, FaMapMarkerAlt, FaEnvelope, FaPhone, FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa';

const testimonials = [
  {
    quote: "Working closely with the people really was excellent. Highly experienced and helpful staff. I would definitely visit your store again for my future projects.",
    author: "Prakash Gupta",
    company: "Royal Architects, Bangalore",
    rating: 5
  },
  {
    quote: "Exceptional service and quality products. The team's expertise made our project a breeze.",
    author: "Anita Sharma",
    company: "Modern Interiors, Mumbai",
    rating: 5
  },
  {
    quote: "Innovative solutions and prompt delivery. Truly a one-stop shop for all architectural needs.",
    author: "Rajesh Patel",
    company: "Urban Designs, Delhi",
    rating: 4
  }
];

const TestimonialsAndContact = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="w-full bg-zinc-900 py-8 md:py-16" id='CONTACT'>
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Testimonials Section */}
          <div className="space-y-4">
            <div className="space-y-2">
              <h2 className="text-sm text-zinc-400">What people are saying</h2>
              <h3 className="text-3xl font-bold tracking-tighter text-white">
                Our Happy <span className="text-white">Customers</span>
              </h3>
            </div>
            <div className="rounded-lg border border-zinc-800 bg-zinc-950/50 p-6">
              <FaQuoteLeft className="h-8 w-8 text-zinc-600" />
              <blockquote className="mt-4 text-lg text-zinc-100">
                {testimonials[currentTestimonial].quote}
              </blockquote>
              <div className="mt-4">
                <div className="font-semibold text-white">{testimonials[currentTestimonial].author}</div>
                <div className="text-sm text-zinc-400">{testimonials[currentTestimonial].company}</div>
                <div className="mt-2 flex">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <FaStar key={i} className="h-5 w-5 text-yellow-500" />
                  ))}
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <button 
                onClick={prevTestimonial} 
                className="p-2 bg-zinc-800 rounded-full text-white hover:bg-zinc-700 transition-colors"
                aria-label="Previous testimonial"
              >
                <FaChevronLeft className="h-6 w-6" />
              </button>
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={`h-2 w-2 rounded-full ${
                    i === currentTestimonial ? "bg-white" : "bg-zinc-600"
                  }`}
                  onClick={() => setCurrentTestimonial(i)}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
              <button 
                onClick={nextTestimonial} 
                className="p-2 bg-zinc-800 rounded-full text-white hover:bg-zinc-700 transition-colors"
                aria-label="Next testimonial"
              >
                <FaChevronRight className="h-6 w-6" />
              </button>
            </div>
          </div>

          {/* Contact Section */}
          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold tracking-tighter text-white">Contact Us</h3>
            </div>
            <div className="space-y-4">
              <div className="overflow-hidden rounded-lg border border-zinc-800">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1000!2d0!3d0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMDDCsDAwJzAwLjAiTiAwMMKwMDAnMDAuMCJF!5e0!3m2!1sen!2s!4v1639125245428!5m2!1sen!2s"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Maps"
                ></iframe>
              </div>
              <div className="space-y-2 text-zinc-400">
                <p className="flex items-center">
                  <FaMapMarkerAlt className="mr-2 h-4 w-4" /> 
                   Gogad Granites pvt. Ltd, 4th Phase, Pali Rajasthan 306401
                </p>
                <p className="flex items-center">
                  <FaEnvelope className="mr-2 h-4 w-4" /> 
                  bhansali.rajkumar@yahoo.in
                </p>
                <p className="flex items-center">
                  <FaPhone className="mr-2 h-4 w-4" /> 
                  +91 98290 28265
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* <div className="mt-12 border-t border-zinc-800 pt-6 text-center text-sm text-zinc-400">
        © 2024 Gogad Granite
      </div> */}
    </section>
  );
};

export default TestimonialsAndContact;
