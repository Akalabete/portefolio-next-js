import Script from 'next/script';

const TidioChat = () => {
  return (
    <Script
      src="//code.tidio.co/waugticn7jpx94w1d886k4pmqmoazbcg.js"
      strategy="lazyOnload"
      async
    />
  );
};

export default TidioChat;