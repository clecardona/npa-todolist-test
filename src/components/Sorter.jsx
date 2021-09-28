//External imports
import Button from "./shared/Button";

export default function Sorter({ setSorting }) {
  return (
    <section className="section-sort">
      <Button
        type="btn-sort"
        onClick={() => {
          setSorting("title");
        }}
      >
        Title
      </Button>
      <Button
        type="btn-sort"
        onClick={() => {
          setSorting("timestamp");
        }}
      >
        Date
      </Button>
    </section>
  );
}
