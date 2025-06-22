interface FormProps {
  handleSearch: (formData: FormData) => void;
}

export default function SearchForm({ handleSearch }: FormProps) {
  return (
    <form action={handleSearch} className="flex flex-col md:flex-row gap-2">
      <label className="input w-full">
        <span className="label">City</span>
        <input type="search" name="city" />
      </label>
      <button className="btn btn-info">Search</button>
    </form>
  );
}
