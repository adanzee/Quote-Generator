import { useState, } from 'react'
import './App.css'
import './index.css'
import quotes from './quotes.js'

function App() {

  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [error, setError] = useState(null);
  const [copied, setCopied] = useState(false);
  


  const handleCopy = () => {
  const textToCopy = `"${quote}" - ${author}`;
  navigator.clipboard.writeText(textToCopy)
    .then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // hide after 2 sec
    })
    .catch((err) => {
      console.error("Failed to copy: ", err);
    });
};



  const fetchQuote = () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  setQuote(quotes[randomIndex].content);
  setAuthor(quotes[randomIndex].author);
  setError(null);
};


  return (
    <>
    <div className="relative bg-[#a86b67] lg:h-screen w-full overflow-hidden">
      <img className='bg-no-repeat bg-[#a86b67] bg-cover bg-center lg:h-screen w-full h-64 sm:h-96 md:h-[32rem]' 
      src="/4-removebg-preview.png" alt="" />
      
      <img className='absolute -top-15 left-10 w-auto h-190 object-center object-cover'
       src="/5-removebg-preview.png" alt="" />
       <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center p-6 space-y-8">

       
       <h1 className='flex justify-center items-center  text-[#403d39] text-7xl text-center mt-20'>Quote Generator</h1>
       <div>
        {error ? (
          <p className='text-red-600 text-2xl mt-10 relative top-45 left-95'>{error}</p>
        ) : (
          <>
            <p className='text-[#403d39] text-3xl mt-10 flex mx-auto max-w-3xl'>"{quote}"</p>
            <p className='text-[#754b4d] text-2xl mt-5 flex justify-center items-center'>- {author}</p>
          </>
        )}
       </div>
       <div className='flex items-center justify-center  mt-10 gap-x-75 '>
       <button onClick={fetchQuote} className='bg-[#754b4d] hover:bg-[#4e2f31]  text-[#f9fafb] p-2 px-6 inline  rounded-full  text-3xl cursor-pointer'>Quote</button>
       <button onClick={handleCopy} className='bg-[#754b4d] hover:bg-[#4e2f31] px-6 text-[#f9fafb] p-2 rounded-full text-3xl cursor-pointer'>Copy</button>

       {copied && (
        <span className="text-[#403d39] fixed  text-xl ml-4">Copied!</span>
        )}

       </div>

        </div>
       </div>
      
    </>
  )
}

export default App
