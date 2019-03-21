import axios from "axios";
import querystring from "querystring";

export default class API {
  constructor({ configuration }) {
    this._acbeUrl = configuration.ACBE_URL;
    this._fsUrl = configuration.FS_URL;
    this._authPath = configuration.AUTHORIZATION_ACBE_URI;
    this._tokenPath = configuration.TOKEN_ACBE_URI;
    this._acbeToken = configuration.TOKEN_ACBE;
    this._logoutBackPath = configuration.LOGOUT_ACBE_URI;
    this._logoutFrontPath = configuration.LOGOUT_FS_PATH;
    this._state = configuration.STATE;
    this._nonce = configuration.NONCE;
  }

  /**
   * get headers requested to access to agentConnect backoffice
   * @return {Object} Headers
   */
  _getHeaders() {
    return {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Bearer ${this._acbeToken}`
    };
  }

  /**
   * get URL authentification throught agentConnect backoffice
   * @return {Object} { success, uri }
   */
  getAuthenticationAuthorization_AC() {
    return new Promise((resolve, reject) => {
      const body = {
        state: this._state,
        nonce: this._nonce
      };

      axios({
        url: `${this._acbeUrl}${this._authPath}`,
        method: "post",
        headers: this._getHeaders(),
        data: querystring.stringify(body)
      })
        .then(res => {
          if (res.status !== 200) {
            // redirect on error page
            reject(new Error());
          }
          resolve(res.data);
        })
        .catch(err => {
          console.log("err", err);
          reject();
        });
    });
  }

  /**
   * Retrieve user infos
   * @param {String} code
   * @return {Object}
   */
  getUserInfo_AC(code) {
    return new Promise((resolve, reject) => {
      if (!code) {
        reject(new Error());
      }

      axios({
        url: `${this._acbeUrl}${this._tokenPath}/${code}`,
        method: "get",
        headers: this._getHeaders()
      })
        .then(res => {
          if (res.status !== 200) {
            // redirect on error page
            reject(new Error());
          }
          resolve(res.data);
        })
        .catch(err => {
          console.log("error", err);
          reject(new Error());
        });
    });
  }

  /**
   * Retrieve logout URL for FC
   * @return {Object} { success, uri }
   */
  setLogout_AC() {
    return new Promise((resolve, reject) => {
      const body = {
        state: this._state
      };

      axios({
        url: `${this._acbeUrl}${this._logoutBackPath}`,
        method: "post",
        headers: this._getHeaders(),
        data: querystring.stringify(body)
      })
        .then(res => {
          if (res.status !== 200) {
            // redirect on error page
            reject(new Error());
          }
          resolve(res.data);
        })
        .catch(err => {
          console.log("err", err);
          reject();
        });
    });
  }
}
