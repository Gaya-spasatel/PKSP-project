export const getIsAuthorized = () => (state) => state.authorization.is_authorized;
export const getToken = () => (state) => state.authorization.token;
export const getAuthorization = () => (state) => state.authorization;