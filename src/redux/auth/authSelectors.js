export const selectorIsAuth = (state) => Boolean(state.auth.idToken);
export const selectorIdToken = (state) => state.auth.idToken;
export const selectorRefreshToken = (state) => state.auth.refreshToken;
