export default function Form() {
  return (
    <form>
      <div className="input-type">
        <input
          type="text"
          name="firstname"
          placeholder="First Name"
          className="border w-full px-5 py-3 focus:outline-none rounded-md"
        />
      </div>
      <div className="input-type">
        <input
          type="text"
          name="lastname"
          placeholder="Last Name"
          className="border w-full px-5 py-3 focus:outline-none rounded-md"
        />
      </div>
      <div className="input-type">
        <input
          type="text"
          name="email"
          placeholder="Email"
          className="border w-full px-5 py-3 focus:outline-none rounded-md"
        />
      </div>
      <div className="input-type">
        <input
          type="text"
          name="salary"
          placeholder="Salary"
          className="border w-full px-5 py-3 focus:outline-none rounded-md"
        />
      </div>
      <div className="form-check">
        <input
          type="radio"
          value="Active"
          id="radioDefault1"
          name="status"
          className="form-check-input 
          appearance-none rounded-full h-4 w-4 
          border border-gray-300 bg-white 
          checked:bg-green-500 checked:border-green-500 
          focus:outline-none transition 
          duration-200 mt-1 align-top bg-no-repeat 
          bg-center bg-contain float-left mr-2 cursor-pointer"
        />
        <label htmlFor="radioDefault1" className="inline-block tet-gray-800">
          Active
        </label>
      </div>
    </form>
  );
}
