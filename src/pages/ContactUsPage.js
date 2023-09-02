import ContactUsForm from "../components/contact-us/ContactUsForm";
import Layout from "../components/contact-us/layout/Layout";

function ContactUsPage() {
  return (
    <>
      <head>
        <title>Flodz Branding - Contact Us</title>
      </head>
      <Layout>
        <ContactUsForm />
      </Layout>
    </>
  );
}

export default ContactUsPage;
