// Once the application is deployed, copy an API id here so that the frontend could interact with it
const apiId = 'tz4w7uz36c'
export const apiEndpoint = `https://${apiId}.execute-api.eu-central-1.amazonaws.com/dev`
//export const apiEndpoint = `http://localhost:3003/dev`

export const authConfig = {
  // Create an Auth0 application and copy values from it into this map
  domain: 'dev-rb0wcurs.eu.auth0.com',          // Auth0 domain
  clientId: 'WA4LAmAz3beIWrKGmZhzjSWcSvT41fVY', // Auth0 client id
  callbackUrl: 'http://localhost:3000/callback'
}
