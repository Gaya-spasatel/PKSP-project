export const getIsAuthorized = () => (state) => state.authorization.is_authorized;
export const getToken = () => (state) => state.authorization.token;
export const getAuthorization = () => (state) => state.authorization;
export const getInputRegistrationState= () => (state) => state.input_registration;
export const getAllState = () => (state) => state;