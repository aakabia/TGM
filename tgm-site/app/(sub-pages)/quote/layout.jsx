import QuoteFormScript from "../../components/quotePage/QuoteFormScript.jsx"

export default function QuoteLayout({ children }) {
  const FormID = process.env.NEXT_PUBLIC_FORM_ID;
  return (
    <div>
      {children}
      {/* Script loads only for /quote and its subpages */}
      <QuoteFormScript/>
    </div>
  );
}

// QuoteLayout renders our script from QuoteForm and displays the children
