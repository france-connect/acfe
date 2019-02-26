"use strict";

import {
  USER_LOGOUT_AC,
  USER_ERROR_AC,
  USER_INFO_AC,
  USER_INFO_SUCCESS_AC
} from "@/store/actions/user";
import { AUTH_SUCCESS_AC, AUTH_ERROR_AC } from "@/store/actions/auth";

import config from "@/../config/configManager";
import API from "@/utils/api";

const api = new API({
  configuration: config
});

const state = {
  status: "",
  userInfo: {},
  error: ""
};

const getters = {
  userInfos: state => state.userInfo
};

const actions = {
  [USER_INFO_AC]: ({ commit }, code) => {
    return new Promise((resolve, reject) => {
      commit(USER_INFO_AC);
      api
        .getUserInfo_AC(code)
        .then(response => {
          commit(USER_INFO_SUCCESS_AC, response);
          commit(AUTH_SUCCESS_AC);
          resolve();
        })
        .catch(error => {
          commit(USER_ERROR_AC, error);
          commit(AUTH_ERROR_AC);
          reject(error);
        });
    });
  }
};

const mutations = {
  [USER_INFO_AC]: state => {
    state.status = "loading";
  },
  [USER_INFO_SUCCESS_AC]: (state, userInfo) => {
    state.status = "success";
    state.userInfo = userInfo;
  },
  [USER_LOGOUT_AC]: state => {
    state.status = "logout";
    state.userInfo = {};
    state.error = "";
  },
  [USER_ERROR_AC]: (state, error) => {
    state.status = "failed";
    state.error = error.message;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
