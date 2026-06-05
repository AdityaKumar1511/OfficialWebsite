import type { Metadata } from 'next';
import { GALLERY_IMAGES, GALLERY_CATEGORIES } from '@/lib/data/gallery';
import GalleryGrid from '@/components/gallery/GalleryGrid';

export const metadata: Metadata = {
  title: 'Gallery',
  description: 'Explore the visual journey of Web & Coding Club NIT Patna through past events, workshops, and hackathons.',
  alternates: {
    canonical: '/gallery',
  },
};

export default function GalleryPage() {
  return (
    <main className="pt-24 min-h-screen relative overflow-hidden bg-[#050505]">
      {/* Repeating Grunge Background */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden bg-[#050505]">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'url("/images/bg/bg_grunge_5_1779981354268.png")',
            backgroundRepeat: 'repeat',
          }}
        />
      </div>

      <div className="relative z-10">
        <section className="section-padding">
          <div className="container-wide">
            <p className="text-mono text-xs mb-4 tracking-[0.2em]">// GALLERY</p>
            <h1 className="text-display text-[#51C4F9]">Gallery</h1>
            <p className="text-body max-w-2xl text-lg mb-12">
              A visual journey through our events, workshops, and community moments.
              Click any image to view in full screen.
            </p>

            <GalleryGrid images={GALLERY_IMAGES} categories={GALLERY_CATEGORIES} />
          </div>
        </section>
      </div>
    </main>
  );
}
