import { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Instagram, Twitter, Send, Sparkles, Star, MessageCircle } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const ContactSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const formDataToSend = new FormData();
      formDataToSend.append("access_key", "5b1d3cba-49cd-4547-b240-c63daa42f5f4");
      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("message", formData.message);
      formDataToSend.append("subject", "New Contact Form Submission - E-Summit 2K26");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend
      });

      const data = await response.json();

      if (data.success) {
        toast({
          title: "Message Sent Successfully!",
          description: "Thank you for reaching out. We'll get back to you within 24-48 hours.",
          variant: "success" as any,
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        toast({
          title: "Oops! Something went wrong",
          description: "Failed to send your message. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Connection Error",
        description: "Unable to reach the server. Please check your internet connection and try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-32 md:py-40 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-winter-cyan/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse animation-delay-500" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          {/* Decorative Element */}
          <div className={`flex items-center justify-center gap-4 mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-winter-cyan/50" />
            <MessageCircle className="w-6 h-6 text-winter-cyan animate-pulse" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-winter-cyan/50" />
          </div>

          <h2
            className={`font-cinzel-decorative text-4xl md:text-6xl font-bold enchanted-text mb-6 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Contact Us
          </h2>
          <p
            className={`font-cormorant text-xl text-winter-silver/70 max-w-2xl mx-auto italic transition-all duration-1000 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Have questions? We'd love to hear from you
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h3 className="font-cinzel-decorative text-2xl font-semibold text-winter-frost mb-10 flex items-center gap-3">
              <Star className="w-6 h-6 text-winter-cyan" />
              Get in Touch
            </h3>

            <div className="space-y-8">
              {[
                { icon: Mail, label: 'Email', value: 'ecell@nith.ac.in', href: 'mailto:ecell@nith.ac.in' },
                { icon: Phone, label: 'Phone', value: '+91 98765 43210', href: 'tel:+919876543210' },
                { icon: MapPin, label: 'Location', value: 'NIT Hamirpur, Himachal Pradesh', href: null },
              ].map((item, index) => (
                <div 
                  key={item.label} 
                  className="group flex items-center gap-5 transition-all duration-500 hover:translate-x-2"
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                >
                  <div className="relative w-14 h-14 rounded-xl bg-gradient-to-br from-winter-cyan/10 to-winter-purple/10 border border-winter-cyan/30 flex items-center justify-center group-hover:border-winter-cyan/60 group-hover:from-winter-cyan/20 transition-all duration-300">
                    <item.icon className="w-6 h-6 text-winter-cyan" />
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-winter-cyan/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div>
                    <p className="text-winter-silver/60 text-sm font-rajdhani uppercase tracking-wider">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-winter-frost hover:text-winter-cyan transition-colors font-cormorant text-lg"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-winter-frost font-cormorant text-lg">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="mt-12">
              <p className="text-winter-silver/60 text-sm font-rajdhani uppercase tracking-wider mb-6">Follow Us</p>
              <div className="flex gap-4">
                {[
                  { icon: Linkedin, label: 'LinkedIn', color: 'hover:bg-blue-500/20 hover:border-blue-400/50', href: 'https://www.linkedin.com/company/entrepreneurshipcellnith/' },
                  { icon: Instagram, label: 'Instagram', color: 'hover:bg-blue-500/20 hover:border-blue-400/50', href: 'https://www.instagram.com/ecell_nith?igsh=MWZsaDAxcmc4cmZvcg==' },
                  { icon: Mail, label: 'Gmail', color: 'hover:bg-blue-500/20 hover:border-blue-400/50', href: 'mailto:ecell@nith.ac.in' },
                ].map(({ icon: Icon, label, color, href }) => (
                  <a
                    key={label}
                    href={href}
                    className={`group w-14 h-14 rounded-xl bg-winter-dark/50 border border-winter-cyan/30 flex items-center justify-center ${color} transition-all duration-300 hover:scale-110`}
                    aria-label={label}
                  >
                    <Icon className="w-6 h-6 text-winter-cyan group-hover:scale-110 transition-transform" />
                  </a>
                ))}
              </div>
            </div>

            {/* Decorative Quote */}
            <div className="mt-12 p-6 frosted-glass rounded-xl border border-winter-cyan/20">
              <blockquote className="font-cormorant text-lg text-winter-silver/80 italic">
                "Innovation distinguishes between a leader and a follower."
              </blockquote>
              <cite className="block mt-2 text-winter-cyan text-sm font-rajdhani">— Steve Jobs</cite>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="frosted-glass mystic-card rounded-2xl p-10 relative">
              {/* Corner Decorations */}
              <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-winter-cyan/30 rounded-tl-lg" />
              <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-winter-cyan/30 rounded-tr-lg" />
              <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-winter-cyan/30 rounded-bl-lg" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-winter-cyan/30 rounded-br-lg" />

              <h3 className="font-cinzel-decorative text-2xl font-semibold text-winter-frost mb-8 flex items-center gap-3">
                <Sparkles className="w-6 h-6 text-winter-cyan" />
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="group">
                  <label htmlFor="name" className="block text-winter-silver/80 text-sm mb-2 font-rajdhani uppercase tracking-wider">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="input-frost font-cormorant text-lg focus:ring-2 focus:ring-winter-cyan/30"
                    placeholder="Your name"
                  />
                </div>

                <div className="group">
                  <label htmlFor="email" className="block text-winter-silver/80 text-sm mb-2 font-rajdhani uppercase tracking-wider">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="input-frost font-cormorant text-lg focus:ring-2 focus:ring-winter-cyan/30"
                    placeholder="your@email.com"
                  />
                </div>

                <div className="group">
                  <label htmlFor="message" className="block text-winter-silver/80 text-sm mb-2 font-rajdhani uppercase tracking-wider">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="input-frost font-cormorant text-lg resize-none focus:ring-2 focus:ring-winter-cyan/30"
                    placeholder="Your message..."
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="group relative w-full btn-primary flex items-center justify-center gap-3 font-rajdhani text-lg py-4 overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-winter-deep/30 border-t-winter-deep rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                      Send Message
                      <Sparkles className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </>
                  )}
                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced Map Section */}
      <div className="container mx-auto px-4 mt-20">
        <div className={`max-w-6xl mx-auto transition-all duration-1000 delay-400 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {/* Map Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-winter-cyan/50" />
              <MapPin className="w-5 h-5 text-winter-cyan animate-pulse" />
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-winter-cyan/50" />
            </div>
            <h3 className="font-cinzel-decorative text-2xl md:text-3xl font-bold text-winter-frost mb-2">
              Find Us Here
            </h3>
            <p className="font-cormorant text-winter-silver/70 italic">
              Visit us at NIT Hamirpur, Himachal Pradesh
            </p>
          </div>

          {/* Map Container with Enhanced Styling */}
          <div className="relative frosted-glass mystic-card rounded-2xl overflow-hidden border border-winter-cyan/20 shadow-2xl">
            {/* Corner Decorations */}
            <div className="absolute top-4 left-4 w-10 h-10 border-l-2 border-t-2 border-winter-cyan/40 rounded-tl-xl z-10" />
            <div className="absolute top-4 right-4 w-10 h-10 border-r-2 border-t-2 border-winter-cyan/40 rounded-tr-xl z-10" />
            <div className="absolute bottom-20 left-4 w-10 h-10 border-l-2 border-b-2 border-winter-cyan/40 rounded-bl-xl z-10" />
            <div className="absolute bottom-20 right-4 w-10 h-10 border-r-2 border-b-2 border-winter-cyan/40 rounded-br-xl z-10" />
            
            {/* Decorative Glow Effects */}
            <div className="absolute top-0 left-1/4 w-32 h-32 bg-winter-cyan/10 rounded-full blur-3xl z-0" />
            <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl z-0" />
            
            {/* Map Iframe with Overlay */}
            <div className="relative">
              <iframe
                title="NIT Hamirpur Map"
                src="https://www.google.com/maps?q=NIT+Hamirpur+Himachal+Pradesh+177005&output=embed"
                width="100%"
                height="450"
                className="w-full h-80 md:h-96 border-0 relative z-[1]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{
                  filter: 'saturate(0.8) brightness(0.9) contrast(1.1)',
                }}
              />
              
              {/* Subtle Gradient Overlay for better integration */}
              <div className="absolute inset-0 bg-gradient-to-t from-winter-deep/30 via-transparent to-winter-deep/20 pointer-events-none z-[2]" />
            </div>
            
            {/* Enhanced Address Section */}
            <div className="relative bg-gradient-to-r from-winter-dark/90 via-winter-dark/80 to-winter-dark/90 backdrop-blur-sm border-t border-winter-cyan/20 p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-winter-cyan/10 border border-winter-cyan/30 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-winter-cyan" />
                </div>
                <div className="flex-1">
                  <p className="text-winter-silver/60 text-xs font-rajdhani uppercase tracking-wider mb-1">
                    Our Location
                  </p>
                  <p className="text-winter-frost font-cormorant text-lg md:text-xl">
                    National Institute of Technology Hamirpur
                  </p>
                  <p className="text-winter-silver/70 font-cormorant text-base mt-1">
                    Hamirpur, Himachal Pradesh 177005, India
                  </p>
                </div>
                <a
                  href="https://www.google.com/maps?q=NIT+Hamirpur+Himachal+Pradesh+177005"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group px-4 py-2 bg-winter-cyan/10 border border-winter-cyan/30 rounded-lg hover:bg-winter-cyan/20 hover:border-winter-cyan/50 transition-all duration-300 flex items-center gap-2"
                >
                  <span className="text-winter-cyan text-sm font-rajdhani">View on Maps</span>
                  <Sparkles className="w-4 h-4 text-winter-cyan group-hover:rotate-12 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
