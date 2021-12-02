import userService from "@/services/user.service";
import { LOAD_USER_LIST, ADD_NEW_USER, LOAD_USER_DETAIL } from "./actions.type";

const state = {
  userList: null,
  addedUser: null,
  updatingUser: null,
};

const actions = {
  LOAD_USER_LIST(context) {
    userService.getAll().then((response) => {
      context.commit(LOAD_USER_LIST, response.data);
    });
  },
  ADD_NEW_USER(context, user) {
    userService.addOne(user).then((response) => {
      context.commit(ADD_NEW_USER, response.data);
    });
  },
  LOAD_USER_DETAIL(context, userid) {
    userService.getDetail(userid).then((response) => {
      context.commit(LOAD_USER_DETAIL, response.data);
    });
  },
  UPDATE_USER(context, user) {
    userService.updateOne(user).then((response) => {
      // updated
      console.log(response.data);
    });
  },
  DELETE_USER(context, userid) {
    userService.deleteOne(userid).then((response) => {
      // deleted
      console.log(response.data);
    });
  },
};

// in store
const getters = {
  getUserList(state) {
    return state.userList;
  },
  getUserDetail(state) {
    return state.updatingUser;
  },
};

const mutations = {
  LOAD_USER_LIST(state, userList) {
    state.userList = userList;
  },
  ADD_NEW_USER(state, newUser) {
    state.userList.push(newUser);
  },
  LOAD_USER_DETAIL(state, updatingUser) {
    state.updatingUser = updatingUser;
  },
};

export default {
  state,
  actions,
  mutations,
  getters,
};
