import type { Metadata } from 'next';
import ContactFormFull from '@/components/contact/ContactFormFull';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with the Web & Coding Club NIT Patna for collaborations, queries, or joining the community.',
  alternates: {
    canonical: '/contact',
  },
};

export default function ContactPage() {
  return (
    <main>
      <ContactFormFull />
    </main>
  );
}
