import React from "react";
import { Mail, Phone, MessageSquare } from "lucide-react";

function Contact() {
  return (
    <div id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions about our smart farming solutions? We're here to help!
          </p>
        </div>
        <div className="max-w-2xl mx-auto">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <Mail className="h-5 w-5 text-gray-400 mb-2" />
              <input type="email" className="w-full p-2 border rounded-lg" placeholder="Your email" />
            </div>
            <div>
              <Phone className="h-5 w-5 text-gray-400 mb-2" />
              <input type="tel" className="w-full p-2 border rounded-lg" placeholder="Your phone number" />
            </div>
            <div>
              <MessageSquare className="h-5 w-5 text-gray-400 mb-2" />
              <textarea rows={4} className="w-full p-2 border rounded-lg" placeholder="Your message"></textarea>
            </div>
            <button className="w-full bg-orange-600 text-white py-3 rounded-lg">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
