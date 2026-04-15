import ContactHeroSection from "../sections/contact/ContactHeroSection";
import ContactListSection from "../sections/contact/ContactListSection";
import ContactInfoSection from "../sections/contact/ContactInfoSection";

function Contact() {
  return (
    <main>
      <ContactHeroSection />
      <div className="lg:mt-8 lg:grid lg:grid-cols-2 gap-5 lg:w-full lg:max-w-480 lg:mx-auto">
        <ContactListSection />
        <ContactInfoSection />
      </div>
    </main>
  );
}

export default Contact;
