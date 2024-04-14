const Newsletter = () => {
  return (
    <section>
      <div className="max-w-[1380px] mx-auto px-8 mb-32 text-sm text-gray-600">
        <div className="grid grid-cols-3">
          <div className="uppercase col-span-1">
            Keep your experience up to date
          </div>
          <div className="col-span-2">
            <form className="flex items-center gap-3 mb-4">
              <input 
                type="text"
                placeholder="Get news and updates from Meta"
                className="flex-1 px-4 py-6 border border-gray-300 rounded-md
                placeholder:text-lg placeholder:text-blue-500"
              />
              <button
                className="px-7 py-3 font-medium rounded-full border-2 border-gray-300 cursor-not-allowed"
                type="submit"
              >
                Sign Up
              </button>
            </form>

            <p className="text-xs mb-2">
              By signing up you agree to receive updates and marketing messages (e.g. email, social, etc.) from Meta about Meta’s existing and future products and services.  
            </p>

            <p className="text-xs mb-2">
              You may withdraw your consent and unsubscribe at any time by clicking the unsubscribe link included in our messages. 
            </p>

            <p className="text-xs mb-2">
              Your subscription is subject to the <a href="#" className="underline text-blue-600 hover:text-blue-500">Terms</a> and <a href="#" className="underline text-blue-600 hover:text-blue-500">Privacy Policy</a>. 
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Newsletter