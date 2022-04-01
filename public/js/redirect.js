//redirect back to the main page closing the popup
const { AuthProvider } = window.arcana.auth;
AuthProvider.handleRedirectPage(`http://localhost:3000/`);
