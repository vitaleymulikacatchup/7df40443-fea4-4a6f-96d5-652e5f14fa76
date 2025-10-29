"use client";

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Coffee, MapPin, Star } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="pill"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "Home", id: "hero" },
            { name: "Menu", id: "products" },
            { name: "About", id: "about" },
            { name: "Reviews", id: "testimonials" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Brew & Bean"
          button={{
            text: "Order Now",
            href: "https://example.com/order"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Freshly Roasted Coffee Every Day"
          description="Experience the perfect blend of premium coffee beans, expertly crafted beverages, and a warm, welcoming atmosphere at Brew & Bean."
          tag="Premium Coffee"
          tagIcon={Coffee}
          buttons={[
            {
              text: "Order Now",
              href: "https://example.com/order"
            },
            {
              text: "View Menu",
              href: "products"
            }
          ]}
          imageSrc="https://images.pexels.com/photos/26492562/pexels-photo-26492562.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Cozy coffee shop interior"
          imagePosition="right"
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="Our Coffee Story"
          description={[
            "Since 2015, Brew & Bean has been serving the finest artisan coffee to our community. We source our beans directly from sustainable farms around the world.",
            "Every cup is crafted with passion, precision, and respect for the coffee tradition. From bean to cup, we ensure quality in every step of the process."
          ]}
          buttons={[
            {
              text: "Learn More",
              href: "about"
            }
          ]}
          showBorder={true}
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardTwo
          title="Coffee Menu"
          description="Discover our signature coffee drinks, each crafted with premium beans and expert technique"
          tag="Menu"
          tagIcon={Coffee}
          products={[
            {
              id: "1",
              brand: "Brew & Bean",
              name: "Signature Espresso",
              price: "$3.50",
              rating: 5,
              reviewCount: "2.1k",
              imageSrc: "https://images.pexels.com/photos/3363111/pexels-photo-3363111.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Rich espresso shot"
            },
            {
              id: "2",
              brand: "Brew & Bean",
              name: "Creamy Latte",
              price: "$4.75",
              rating: 5,
              reviewCount: "1.8k",
              imageSrc: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Latte with milk foam art"
            },
            {
              id: "3",
              brand: "Brew & Bean",
              name: "Classic Cappuccino",
              price: "$4.25",
              rating: 5,
              reviewCount: "1.5k",
              imageSrc: "https://images.pexels.com/photos/851555/pexels-photo-851555.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Traditional cappuccino"
            },
            {
              id: "4",
              brand: "Brew & Bean",
              name: "Cold Brew Special",
              price: "$4.00",
              rating: 4,
              reviewCount: "890",
              imageSrc: "https://images.pexels.com/photos/7282737/pexels-photo-7282737.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Refreshing cold brew coffee"
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="What Our Customers Say"
          description="Real reviews from coffee lovers who visit Brew & Bean every day"
          tag="Reviews"
          tagIcon={Star}
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "Marketing Manager",
              company: "TechCorp",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/3801426/pexels-photo-3801426.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Sarah Johnson"
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Software Engineer",
              company: "StartupXYZ",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/9052312/pexels-photo-9052312.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Michael Chen"
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              role: "Freelance Designer",
              company: "Creative Studio",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/4827509/pexels-photo-4827509.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Emily Rodriguez"
            },
            {
              id: "4",
              name: "David Kim",
              role: "Business Owner",
              company: "Local Business",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/6864505/pexels-photo-6864505.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of David Kim"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Visit Us"
          tagIcon={MapPin}
          title="Find Your Spot"
          description="Join our community of coffee enthusiasts and stay updated with our latest blends, events, and special offers."
          inputPlaceholder="Enter your email"
          buttonText="Subscribe"
          termsText="By subscribing, you agree to receive updates about our coffee offerings and events. Unsubscribe anytime."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="Brew & Bean"
          columns={[
            {
              items: [
                { label: "Menu", href: "products" },
                { label: "About Us", href: "about" },
                { label: "Location", href: "contact" }
              ]
            },
            {
              items: [
                { label: "Reviews", href: "testimonials" },
                { label: "Contact", href: "contact" },
                { label: "Order Online", href: "https://example.com/order" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}