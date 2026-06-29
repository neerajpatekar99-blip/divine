import ScrollytellingBackground from "@/components/ScrollytellingBackground";
import GlassSurface from "@/components/GlassSurface";
import Header from "@/components/Header";
import FadeInSection from "@/components/FadeInSection";

export default function Home() {
  return (
    <>
      <ScrollytellingBackground />
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-end pt-16 bg-transparent overflow-hidden">
        <div className="relative z-10 px-margin-mobile pb-section-gap flex flex-col gap-unit-4 max-w-3xl">
          <h1 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-secondary-fixed tracking-tight drop-shadow-md">The Art of Serenity.</h1>
          <p className="font-body-lg text-body-lg text-primary-fixed max-w-xs drop-shadow-sm">Bespoke beauty rituals designed for the modern soul.</p>
          <div className="mt-gutter">
            <button className="bg-secondary-fixed text-primary px-8 py-4 rounded-lg font-label-md text-label-md shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300">
              Book Appointment
            </button>
          </div>
        </div>
      </section>

      {/* Services Menu */}
      <FadeInSection>
        <section className="py-section-gap px-margin-mobile bg-transparent rounded-t-[40px] max-w-7xl mx-auto w-full">
          <div className="text-center mb-section-gap">
            <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-primary drop-shadow-md">Curation of Care</h2>
            <div className="gold-divider mt-4 mx-auto w-24"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Service Card 1 */}
            <div className="group transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <GlassSurface width="100%" height="auto" className="rounded-xl signature-shadow border border-secondary/10">
                <div className="p-8 flex flex-col gap-unit-4 h-full relative z-10">
                  <span className="material-symbols-outlined text-secondary text-4xl">content_cut</span>
                  <h3 className="font-headline-md text-headline-md text-primary">Hair Artistry</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">Precision cutting and bespoke coloring tailored to your unique structure.</p>
                  <button className="text-secondary font-label-md text-label-md flex items-center gap-2 mt-2 group-hover:translate-x-1 transition-transform">Discover <span className="material-symbols-outlined text-sm">arrow_forward</span></button>
                </div>
              </GlassSurface>
            </div>
            {/* Service Card 2 */}
            <div className="group transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <GlassSurface width="100%" height="auto" className="rounded-xl signature-shadow border border-secondary/10">
                <div className="p-8 flex flex-col gap-unit-4 h-full relative z-10">
                  <span className="material-symbols-outlined text-secondary text-4xl">auto_awesome_motion</span>
                  <h3 className="font-headline-md text-headline-md text-primary">Nail Lounge</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">Manicure rituals using non-toxic pigments for a high-gloss, healthy finish.</p>
                  <button className="text-secondary font-label-md text-label-md flex items-center gap-2 mt-2 group-hover:translate-x-1 transition-transform">Discover <span className="material-symbols-outlined text-sm">arrow_forward</span></button>
                </div>
              </GlassSurface>
            </div>
            {/* Service Card 3 */}
            <div className="group transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <GlassSurface width="100%" height="auto" className="rounded-xl signature-shadow border border-secondary/10">
                <div className="p-8 flex flex-col gap-unit-4 h-full relative z-10">
                  <span className="material-symbols-outlined text-secondary text-4xl">spa</span>
                  <h3 className="font-headline-md text-headline-md text-primary">Spa Retreat</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">Deep-tissue therapy and hydro-facials within our soundproof sanctuary.</p>
                  <button className="text-secondary font-label-md text-label-md flex items-center gap-2 mt-2 group-hover:translate-x-1 transition-transform">Discover <span className="material-symbols-outlined text-sm">arrow_forward</span></button>
                </div>
              </GlassSurface>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Testimonials */}
      <FadeInSection delay={0.2}>
        <section className="py-section-gap px-margin-mobile bg-transparent text-center max-w-4xl mx-auto w-full">
          <span className="material-symbols-outlined text-secondary text-5xl mb-unit drop-shadow-md">format_quote</span>
          <div className="flex flex-col gap-gutter overflow-x-auto pb-gutter no-scrollbar snap-x snap-mandatory">
            <div className="min-w-full flex flex-col gap-unit-4 px-4 snap-center">
              <div className="flex justify-center gap-1 text-secondary drop-shadow-md">
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              </div>
              <p className="font-body-lg text-body-lg text-on-background italic drop-shadow-lg">
                "Divine Studio is my sanctuary. The meticulous attention to detail and organic products they use are unmatched. I leave feeling rejuvenated every single time."
              </p>
              <p className="font-label-md text-label-md text-primary mt-2 uppercase tracking-widest drop-shadow-md">- Sarah J.</p>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Pricing / Packages */}
      <FadeInSection delay={0.1}>
        <section className="py-section-gap px-margin-mobile bg-transparent rounded-t-[40px] max-w-5xl mx-auto w-full">
          <div className="text-center mb-section-gap">
            <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-primary drop-shadow-md">Signature Packages</h2>
            <div className="gold-divider mt-4 mx-auto w-24"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="group transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <GlassSurface width="100%" height="auto" className="rounded-xl border border-secondary/10">
                 <div className="p-6 flex flex-col justify-between items-start h-full relative z-10">
                   <div>
                     <h3 className="font-headline-md text-headline-md text-primary mb-2 group-hover:text-gold-400 transition-colors">The Divine Glow</h3>
                     <p className="font-body-md text-body-md text-on-surface-variant">Includes signature haircut, glossing treatment, and a 30-min scalp massage.</p>
                   </div>
                   <p className="font-display-lg-mobile text-display-lg-mobile text-secondary mt-4">$150</p>
                 </div>
              </GlassSurface>
            </div>
            <div className="group transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <GlassSurface width="100%" height="auto" className="rounded-xl border border-secondary/10">
                 <div className="p-6 flex flex-col justify-between items-start h-full relative z-10">
                   <div>
                     <h3 className="font-headline-md text-headline-md text-primary mb-2 group-hover:text-gold-400 transition-colors">Opulent Oasis</h3>
                     <p className="font-body-md text-body-md text-on-surface-variant">Full body deep tissue massage, gold-leaf facial, and aromatherapy.</p>
                   </div>
                   <p className="font-display-lg-mobile text-display-lg-mobile text-secondary mt-4">$280</p>
                 </div>
              </GlassSurface>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Footer Contact */}
      <footer className="py-section-gap px-margin-mobile bg-black/90 backdrop-blur-xl text-surface-container-lowest flex flex-col gap-gutter">
        <div>
          <h2 className="font-headline-lg-mobile text-headline-lg-mobile mb-4 text-primary">Visit Us</h2>
          <p className="font-body-md text-body-md opacity-80">123 Luxury Lane, Emerald City, EC 90210</p>
          <p className="font-body-md text-body-md opacity-80 mt-2">Mon - Sat: 9:00 AM - 8:00 PM</p>
          <p className="font-body-md text-body-md opacity-80 mt-2">Sun: Closed</p>
        </div>
        <div className="flex flex-col gap-4 mt-4">
          <button className="w-full bg-secondary text-primary px-6 py-4 rounded-lg font-label-md text-label-md uppercase tracking-wider text-center flex items-center justify-center gap-2">
            <span className="material-symbols-outlined">phone</span> Call Us
          </button>
          <button className="w-full bg-transparent border border-secondary text-secondary px-6 py-4 rounded-lg font-label-md text-label-md uppercase tracking-wider text-center flex items-center justify-center gap-2">
            <span className="material-symbols-outlined">mail</span> Email Us
          </button>
        </div>
        <div className="gold-divider mt-8"></div>
        <p className="text-center font-label-sm text-label-sm mt-4 opacity-50">&copy; 2026 Divine Studio. All rights reserved.</p>
      </footer>
    </>
  );
}
