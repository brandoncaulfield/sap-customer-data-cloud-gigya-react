const gigyaWebSDK = window.gigya;

/**
 * Gigya Facebook login
 * @param {Object} e - a synthetic event
 */
export const facebookGigyaLogin = () => {
  console.log(`Facebook`);
  const params = {
    //   callback: onLogin(),
    provider: "facebook",
  };
  gigyaWebSDK.socialize.login(params);
};

/**
 * Gigya Twitter login
 * @param {Object} e - a synthetic event
 */
export const twitterGigyaLogin = () => {
  console.log(`Twitter`);
  const params = {
    //   callback: onLogin(),
    provider: "Twitter",
  };
  gigyaWebSDK.socialize.login(params);
};

/**
 * Gigya LinkedIn login
 * @param {Object} e - a synthetic event
 */
export const linkedinGigyaLogin = () => {
  console.log(`LinkedIn`);
  const params = {
    //   callback: onLogin(),
    provider: "LinkedIn",
  };
  gigyaWebSDK.socialize.login(params);
};

/**
 * Gigya Yahoo login
 * @param {Object} e - a synthetic event
 */
export const yahooGigyaLogin = (callback) => {
  console.log(`Yahoo`);
  const params = {
    callback: callback,
    provider: "Yahoo",
  };
  gigyaWebSDK.socialize.login(params);
};

export default gigyaWebSDK;
