"use strict";

import {
  AUTH_REQUEST_AC,
  AUTH_PENDING_AC,
  AUTH_SUCCESS_AC,
  AUTH_LOGOUT_AC,
  AUTH_ERROR_AC
} from "@/store/actions/auth";

import { USER_LOGOUT_AC } from "@/store/actions/user";

import config from "@/../config/configManager";
import API from "@/utils/api";
import router from "../../router";

const api = new API({
  configuration: config
});

const state = {
  status: ""
};

const getters = {
  authStatus: state => state.status
};

const actions = {
  [AUTH_REQUEST_AC]: ({ commit }) => {
    commit(AUTH_REQUEST_AC);
    api
      .getAuthenticationAuthorization_AC()
      .then(res => {
        commit(AUTH_PENDING_AC);
        window.location.href = res.uri;
      })
      .catch(err => {
        commit(AUTH_ERROR_AC, err);
        new Error(err);
      });
  },
  [AUTH_LOGOUT_AC]: ({ commit }) => {
    commit(AUTH_LOGOUT_AC);
    commit(USER_LOGOUT_AC);
    router.push({ name: "agentConnect" });
  }
};

const mutations = {
  [AUTH_REQUEST_AC]: state => {
    state.status = "loading";
  },
  [AUTH_PENDING_AC]: state => {
    state.status = "pending";
  },
  [AUTH_SUCCESS_AC]: state => {
    state.status = "success";
  },
  [AUTH_ERROR_AC]: state => {
    state.status = "failed";
  },
  [AUTH_LOGOUT_AC]: state => {
    state.status = "Not Connected";
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
