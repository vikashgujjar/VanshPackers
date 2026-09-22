// Renders a JSON-LD <script> tag. Centralized so every page serializes
// structured data the same safe way — `<` is escaped so a value containing
// "</script>" can never prematurely close the tag.
export default function JsonLd({ data }: { data: object }) {
  const json = JSON.stringify(data).replace(/</g, "\\u003c");
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}
