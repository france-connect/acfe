import axios from "axios";
import querystring from "querystring";

export default class API {
  constructor({ configuration }) {
    this._acbeUrl = configuration.ACBE_URL;
    this._authPath = configuration.AUTHORIZATION_ACBE_URI;
    this._tokenPath = configuration.TOKEN_ACBE_URI;
    this._acbeToken = configuration.TOKEN_ACBE;
    this._state = configuration.STATE;
    this._nonce = configuration.NONCE;
  }

  _getHeaders() {
    return {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Bearer ${this._acbeToken}`
    };
  }

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

  setLogout_AC() {}
}
