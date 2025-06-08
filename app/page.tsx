export default function Home() {
  return (
    <div className="card bg-base-100 card-lg shadow-sm">
      <div className="card-body">
        <form action="" className="flex gap-4">
          <label className="input w-lg">
            <span className="label">City</span>
            <input type="search" id="city" name="city" />
          </label>
          <button className="btn btn-neutral">Submit</button>
        </form>
      </div>
    </div>
  );
}
