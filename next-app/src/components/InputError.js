const InputError = ({ messages = [], className = "" }) => (
  <>
    {messages.length > 0 && (
      <>
        {messages.map((message, index) => (
          <p className={`${className} text-sm font-bold text-[#da290a]`} key={index}>
            {message}
          </p>
        ))}
      </>
    )}
  </>
);

export default InputError
