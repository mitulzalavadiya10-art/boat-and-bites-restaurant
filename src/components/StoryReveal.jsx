import { ScrollRevealSection } from './ScrollRevealSection';
import { Anchor } from 'lucide-react';

const StoryReveal = () => {
  return (
    <div className="bg-navy-900 overflow-hidden">
      <ScrollRevealSection
        titleComponent={
          <>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-cream-100 mb-4">
              Our Story of
              <br />
              <span className="text-gold-500">Excellence & Passion</span>
            </h2>
            <p className="text-cream-100/70 text-lg md:text-xl max-w-2xl mx-auto">
              A journey that began with a vision to redefine luxury dining
            </p>
          </>
        }
      >
        {/* Content inside the scrolling card */}
        <div className="h-full w-full flex items-center justify-center p-4 md:p-8">
          <div className="max-w-4xl">
            {/* Decorative Anchor Icon */}
            <div className="w-20 h-20 mx-auto mb-8 bg-gold-500/10 rounded-full flex items-center justify-center">
              <Anchor className="w-10 h-10 text-gold-500" />
            </div>

            {/* Story Content */}
            <div className="space-y-6 text-cream-100/80 text-base md:text-lg leading-relaxed">
              <p>
                Nestled in the heart of <span className="text-gold-500 font-semibold">Mota Varachha, Surat</span>, 
                Boat & Bites is more than just a restaurant—it's a journey into luxury dining with a unique nautical twist.
              </p>

              <p>
                Our vision was to create a space where the elegance of fine dining meets the adventurous spirit of the sea. 
                Every corner of our restaurant is thoughtfully designed to transport you to a world of <span className="text-gold-500 font-semibold">royal hospitality</span> and 
                <span className="text-gold-500 font-semibold"> boat-themed elegance</span>.
              </p>

              <p>
                We take pride in serving <span className="text-gold-500 font-semibold">100% pure vegetarian cuisine</span>, 
                crafted with the finest ingredients and presented with artistic flair. From intimate dinners to grand celebrations, 
                we ensure every moment at Boat & Bites becomes a cherished memory.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 pt-8 border-t border-gold-500/20">
                <div className="text-center">
                  <div className="text-4xl font-bold text-gold-500 mb-2">5+</div>
                  <div className="text-cream-100/60">Years of Excellence</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-gold-500 mb-2">10K+</div>
                  <div className="text-cream-100/60">Happy Guests</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-gold-500 mb-2">50+</div>
                  <div className="text-cream-100/60">Signature Dishes</div>
                </div>
              </div>

              {/* Quote */}
              <div className="mt-12 pt-8 border-t border-gold-500/20 text-center">
                <p className="font-serif text-2xl md:text-3xl text-gold-500 italic">
                  "Where every meal is a voyage of flavors"
                </p>
              </div>
            </div>
          </div>
        </div>
      </ScrollRevealSection>
    </div>
  );
};

export default StoryReveal;
