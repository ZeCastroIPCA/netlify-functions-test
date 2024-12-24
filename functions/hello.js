exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Hello from your Netlify function!",
      timestamp: new Date().toISOString(),
    }),
  };
};