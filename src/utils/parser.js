/**
 * Retrieve user infos without claims
 * @param {Object} rawUserInfos : user infos with claims, mandatory / optional fields
 * @returns {Object} mandatory and optional fields
 */
function getUserInfosSerialized(rawUserInfos) {
  return new Promise(resolve => {
    let userInfos = {};
    if (typeof rawUserInfos === "object") {
      for (let key in rawUserInfos) {
        const regex = /^_[a-zA-Z_]*/g;
        if (!key.match(regex)) {
          userInfos[key] = rawUserInfos[key];
        }
      }
    } else {
      userInfos = rawUserInfos;
    }
    resolve(userInfos);
  });
}

/**
 * Retrieve mandatory user infos
 * @param {Object} rawUserInfos : user infos with claims, mandatory / optional fields
 * @returns {Object} mandatory fields
 */
//function getMandatoryUserInfos(rawUserInfos) {}

/**
 * Retrieve optional user infos
 * @param {Object} rawUserInfos : user infos with claims, mandatory / optional fields
 * @returns {Object} optional fields
 */
//function getOptionalUserInfos(rawUserInfos) {}

module.exports = {
  getUserInfosSerialized
  //getMandatoryUserInfos,
  //getOptionalUserInfos
};
