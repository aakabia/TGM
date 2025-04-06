import QuoteFormScript from "../../components/quotePage/QuoteFormScript.jsx"

export default function QuoteLayout({ children }) {
  return (
    <div>
      {children}
      {/* Script loads only for /quote and its subpages */}
      <QuoteFormScript/>
    </div>
  );
}

// QuoteLayout renders our script from QuoteFormScript and displays the children.
// this happens for every page qithin quote directory.
