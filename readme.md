# Netlify Serverless Functions
This is a simple example to test Netlify Serverless Functions with plain HTML and JavaScript.

# How it works
## Set up the netlify.toml file
Create a `netlify.toml` file in the root of your project with the following content:
```toml
[functions]
  directory = "functions"
```
## Create functions
The `functions` folder contains the serverless functions that will be deployed to Netlify.

Here a example of a function that returns a simple JSON object:
```javascript
exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Hello World' }),
  };
};
```

## Use functions in the client side
Then, you can call this function from the client side using the `fetch` API:
```javascript
try {
  const response = await fetch('/.netlify/functions/hello');
  const data = await response.json();
  return data.message;
} catch (error) {
  console.error(error);
}
```

## Environment variables
If you need to store API keys or other sensitive information, you can use environment variables. You can set them in the Netlify dashboard under `Site configuration > Environment variables > Add a variable`.
