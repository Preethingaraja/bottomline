import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    const phone = '919994886943';
    const message = 
`Hello Bottomline Consultants! 👋

*New Enquiry from Website*

👤 *Name:* ${data.name}
📧 *Email:* ${data.email}
🏢 *Company:* ${data.company || 'Not provided'}
📞 *Phone:* ${data.phone || 'Not provided'}
🌍 *Country:* ${data.country || 'Not provided'}
🔧 *Service Interested In:* ${data.service || 'Not specified'}

💬 *Message:*
${data.message}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phone}?text=${encodedMessage}`;
    
    setSubmitStatus({ type: 'success', message: 'Redirecting you to WhatsApp to send your message...' });
    reset();
    
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 800);
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Bottomline Consultants</title>
        <meta name="description" content="Get in touch with Bottomline SCF Management Consultants for expert financial advisory and cost management solutions." />
      </Helmet>

      {/* Hero Section */}
      <section 
        className="relative py-32 mt-16 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&q=80&w=1920")' }}
      >
        <div className="absolute inset-0 bg-green-900/80"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Contact Us</h1>
          <p className="text-xl text-green-100 max-w-2xl mx-auto">
            Ready to transform your business? Reach out to us for a free consultation.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Contact Information */}
            <div className="lg:w-1/3">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-green-50 p-3 rounded-lg text-primary">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">Phone</p>
                      <a href="tel:+919994886943" className="text-gray-600 hover:text-primary transition-colors">
                        +91 99948 86943
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-green-50 p-3 rounded-lg text-primary">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">Email</p>
                      <a href="mailto:rkshah2018@gmail.com" className="text-gray-600 hover:text-primary transition-colors">
                        rkshah2018@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-green-50 p-3 rounded-lg text-primary">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">Location</p>
                      <p className="text-gray-600">
                        India<br/>
                        Serving clients globally.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Map (Placeholder embedded style) */}
                <div className="mt-8 rounded-xl overflow-hidden h-48 bg-gray-200">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15655073.46824367!2d70.02495379999998!3d22.3850051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sus!4v1714500000000!5m2!1sen!2sus" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="India Location"
                  ></iframe>
                </div>

              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:w-2/3">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
                
                {submitStatus.message && (
                  <div className={`p-4 mb-6 rounded-lg ${submitStatus.type === 'success' ? 'bg-green-50 text-green-800 border border-green-200' : 'bg-red-50 text-red-800 border border-red-200'}`}>
                    {submitStatus.message}
                  </div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                      <input
                        id="name"
                        type="text"
                        {...register('name', { required: 'Name is required' })}
                        className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-primary focus:border-primary'} focus:outline-none focus:ring-2`}
                        placeholder="John Doe"
                      />
                      {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>}
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                      <input
                        id="email"
                        type="email"
                        {...register('email', { 
                          required: 'Email is required',
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address"
                          }
                        })}
                        className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-primary focus:border-primary'} focus:outline-none focus:ring-2`}
                        placeholder="john@example.com"
                      />
                      {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Company */}
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                      <input
                        id="company"
                        type="text"
                        {...register('company')}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-primary focus:border-primary focus:outline-none focus:ring-2"
                        placeholder="Your Company Ltd"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                      <input
                        id="phone"
                        type="tel"
                        {...register('phone')}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-primary focus:border-primary focus:outline-none focus:ring-2"
                        placeholder="+1 234 567 890"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Country */}
                    <div>
                      <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-2">Country</label>
                      <input
                        id="country"
                        type="text"
                        {...register('country')}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-primary focus:border-primary focus:outline-none focus:ring-2"
                        placeholder="e.g. UAE, UK, India"
                      />
                    </div>

                    {/* Service */}
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">Service Interested In</label>
                      <select
                        id="service"
                        {...register('service')}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-primary focus:border-primary focus:outline-none focus:ring-2 bg-white"
                      >
                        <option value="">Select a service...</option>
                        <option value="CFO Services">CFO Services</option>
                        <option value="Strategic Cost Management">Strategic Cost Management</option>
                        <option value="NRI Wealth Management">NRI Wealth Management</option>
                        <option value="Audit Preparation">Audit Preparation</option>
                        <option value="Accounting & Bookkeeping">Accounting & Bookkeeping</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                    <textarea
                      id="message"
                      rows="5"
                      {...register('message', { required: 'Message is required' })}
                      className={`w-full px-4 py-3 rounded-lg border ${errors.message ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-primary focus:border-primary'} focus:outline-none focus:ring-2`}
                      placeholder="How can we help you?"
                    ></textarea>
                    {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto bg-primary hover:bg-green-800 text-white font-bold py-4 px-10 rounded-lg transition-colors inline-flex justify-center items-center gap-2 disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
