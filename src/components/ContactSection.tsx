import { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Instagram, Twitter, Send } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const ContactSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you soon.",
    });
    setFormData({ name: '', email: '', message: '' });
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
      className="relative py-24 md:py-32"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className={`font-cinzel text-3xl md:text-5xl font-bold frost-text mb-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Contact Us
          </h2>
          <p
            className={`text-winter-silver/70 text-lg max-w-2xl mx-auto transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Have questions? We'd love to hear from you
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h3 className="font-cinzel text-2xl font-semibold text-winter-frost mb-8">
              Get in Touch
            </h3>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-winter-cyan/10 border border-winter-cyan/30 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-winter-cyan" />
                </div>
                <div>
                  <p className="text-winter-silver/60 text-sm">Email</p>
                  <a
                    href="mailto:contact@esummit.co.in"
                    className="text-winter-frost hover:text-winter-cyan transition-colors"
                  >
                    contact@esummit.co.in
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-winter-cyan/10 border border-winter-cyan/30 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-winter-cyan" />
                </div>
                <div>
                  <p className="text-winter-silver/60 text-sm">Phone</p>
                  <a
                    href="tel:+919876543210"
                    className="text-winter-frost hover:text-winter-cyan transition-colors"
                  >
                    +91 98765 43210
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-winter-cyan/10 border border-winter-cyan/30 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-winter-cyan" />
                </div>
                <div>
                  <p className="text-winter-silver/60 text-sm">Location</p>
                  <p className="text-winter-frost">
                    NIT Hamirpur, Himachal Pradesh
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-10">
              <p className="text-winter-silver/60 text-sm mb-4">Follow Us</p>
              <div className="flex gap-4">
                {[
                  { icon: Linkedin, label: 'LinkedIn' },
                  { icon: Instagram, label: 'Instagram' },
                  { icon: Twitter, label: 'Twitter' },
                ].map(({ icon: Icon, label }) => (
                  <a
                    key={label}
                    href="#"
                    className="w-12 h-12 rounded-xl bg-winter-cyan/10 border border-winter-cyan/30 flex items-center justify-center hover:bg-winter-cyan/20 hover:border-winter-cyan/50 transition-all duration-300 group"
                    aria-label={label}
                  >
                    <Icon className="w-5 h-5 text-winter-cyan group-hover:scale-110 transition-transform" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={`transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="glass-card glow-border p-8">
              <h3 className="font-cinzel text-2xl font-semibold text-winter-frost mb-6">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-winter-silver/80 text-sm mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="input-frost"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-winter-silver/80 text-sm mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="input-frost"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-winter-silver/80 text-sm mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="input-frost resize-none"
                    placeholder="Your message..."
                  />
                </div>

                <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2 font-rajdhani text-lg">
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
