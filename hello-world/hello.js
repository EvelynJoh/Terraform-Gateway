module.exports.handler = async (event) => {
  console.log('Event: ', event);

  let responseMessage = 'Hello, World!';

  if (event.queryStringParameters && event.queryStringParameters['Name']) {
    responseMessage = 'Hello, ' + event.queryStringParameters['Name'] + '!';
  }

  // Je nach HTTP-Methode den entsprechenden Endpunkt verarbeiten
  switch (event.httpMethod) {
    case 'GET':
      responseMessage = 'GET /say-hi';
      break;
    case 'POST':
      responseMessage = 'POST /save';
      break;
    case 'DELETE':
      responseMessage = 'DELETE /remove';
      break;
    default:
      responseMessage = 'Unknown endpoint';
  }

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: responseMessage,
    }),
  };
};