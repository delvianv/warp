export default function Home() {
  return (
    <main className="m-8 grow">
      <form action="" className="flex flex-col gap-2">
        <label className="input w-full">
          <span className="label">City</span>
          <input type="text" />
        </label>

        <button className="btn btn-primary">Submit</button>
      </form>
    </main>
  );
}
