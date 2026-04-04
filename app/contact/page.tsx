import type { Metadata } from "next";
import HeroBanner from "@/components/HeroBanner";

export const metadata: Metadata = {
  title: "Contact Riya Mumbai Escorts | Book Premium Escort Services",
  description:
    "Contact Riya Escorts in Mumbai for premium and discreet escort services. Available 24/7. Call or email us to book your exclusive experience.",
  alternates: { canonical: "https://riyamumbaiescorts.com/contact" },
};

const contactInfo = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: "Phone",
    value: "+91 9038976363",
    href: "tel:+919038976363",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: "Address",
    value: "Lokhandwala, Andheri East, Mumbai, Maharashtra",
    href: null,
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: "Email",
    value: "sanjanadotsingh@gmail.com",
    href: "mailto:sanjanadotsingh@gmail.com",
  },
];

export default function ContactPage() {
  return (
    <>
      <HeroBanner title="Contact Riya Mumbai Escorts" />

      <main>
        <section className="py-20 bg-dark">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Contact info cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {contactInfo.map((item) => (
                <div
                  key={item.label}
                  className="bg-dark-card border border-dark-border rounded-2xl p-8 text-center hover:border-gold/40 transition-all duration-300 group"
                >
                  <div className="w-14 h-14 mx-auto mb-5 rounded-xl bg-dark-surface border border-dark-border flex items-center justify-center text-gold group-hover:bg-gold/5 group-hover:border-gold/30 transition-all duration-300">
                    {item.icon}
                  </div>
                  <p className="text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-3">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-gray-300 hover:text-gold transition-colors text-sm font-medium"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-gray-400 text-sm leading-relaxed">{item.value}</p>
                  )}
                </div>
              ))}
            </div>

            {/* Contact Form */}
            <div className="bg-dark-card border border-dark-border rounded-2xl p-8 md:p-12">
              <div className="text-center mb-10">
                <h2 className="font-playfair text-3xl font-bold text-white mb-3">
                  Send Us a Message
                </h2>
                <p className="text-gray-500 text-sm">
                  We&apos;ll respond within minutes. All enquiries are strictly confidential.
                </p>
              </div>

              <form method="post" action="./" className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-gray-400 text-xs font-medium tracking-wider uppercase">
                    Full Name <span className="text-gold">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Your name"
                    className="bg-dark-surface border border-dark-border rounded-xl px-5 py-3.5 text-gray-100 text-sm placeholder:text-gray-600 focus:outline-none focus:border-gold/60 focus:bg-dark-surface transition-all duration-200"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-gray-400 text-xs font-medium tracking-wider uppercase">
                    Email Address <span className="text-gold">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="your@email.com"
                    className="bg-dark-surface border border-dark-border rounded-xl px-5 py-3.5 text-gray-100 text-sm placeholder:text-gray-600 focus:outline-none focus:border-gold/60 transition-all duration-200"
                  />
                </div>

                <div className="flex flex-col gap-2 md:col-span-2">
                  <label htmlFor="subject" className="text-gray-400 text-xs font-medium tracking-wider uppercase">
                    Subject <span className="text-gold">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    placeholder="How can we help?"
                    className="bg-dark-surface border border-dark-border rounded-xl px-5 py-3.5 text-gray-100 text-sm placeholder:text-gray-600 focus:outline-none focus:border-gold/60 transition-all duration-200"
                  />
                </div>

                <div className="flex flex-col gap-2 md:col-span-2">
                  <label htmlFor="message" className="text-gray-400 text-xs font-medium tracking-wider uppercase">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    placeholder="Tell us more about what you&apos;re looking for..."
                    className="bg-dark-surface border border-dark-border rounded-xl px-5 py-3.5 text-gray-100 text-sm placeholder:text-gray-600 focus:outline-none focus:border-gold/60 transition-all duration-200 resize-none"
                  />
                </div>

                <div className="md:col-span-2 flex justify-center pt-2">
                  <button
                    type="submit"
                    className="flex items-center gap-3 bg-gradient-to-r from-gold to-gold-dark text-black font-bold text-base px-12 py-4 rounded-full hover:opacity-90 hover:scale-105 transition-all duration-300 shadow-[0_8px_30px_rgba(232,25,91,0.2)]"
                  >
                    Send Message
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
