export default function ContactPage() {
  return (
    <section>
      <h1 className="text-3xl font-bold text-digitalLavender mb-4">
        Contact Us
      </h1>
      <p className="max-w-2xl">
        Have questions or want to collaborate? Reach out at{' '}
        <a
          href="mailto:info@advancebiotech.com"
          className="text-apricotCrush underline"
        >
          info@advancebiotech.com
        </a>
        .
      </p>
    </section>
  );
}
