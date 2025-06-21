export default function Home() {
  return (
    <main className="m-8 grow">
      <form
        action=""
        className="flex flex-col md:flex-row gap-2 justify-center"
      >
        <label className="input w-full md:w-md">
          <span className="label">City</span>
          <input type="text" />
        </label>

        <button className="btn btn-primary">Submit</button>
      </form>
    </main>
  );
}
