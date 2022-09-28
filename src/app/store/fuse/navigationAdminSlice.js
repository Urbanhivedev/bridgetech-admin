import { createSelector, createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import navigationConfig from 'app/fuse-configs/navigationConfig';
import navigationConfigAdmin from 'app/fuse-configs/navigationConfigAdmin';
import FuseUtils from '@fuse/utils';
import i18next from 'i18next';
import _ from '@lodash';

const navigationAdapter = createEntityAdapter();
const emptyInitialState = navigationAdapter.getInitialState();
const initialState = navigationAdapter.upsertMany(emptyInitialState, navigationConfigAdmin);



export const appendNavigationItem = (item, parentId) => (dispatch, getState) => {
  const navigation = selectNavigationAll(getState());

  return dispatch(setNavigation(FuseUtils.appendNavItem(navigation, item, parentId)));
};

export const prependNavigationItem = (item, parentId) => (dispatch, getState) => {
  const navigation = selectNavigationAll(getState());

  return dispatch(setNavigation(FuseUtils.prependNavItem(navigation, item, parentId)));
};

export const updateNavigationItem = (id, item) => (dispatch, getState) => {
  const navigation = selectNavigationAll(getState());

  return dispatch(setNavigation(FuseUtils.updateNavItem(navigation, id, item)));
};

export const removeNavigationItem = (id) => (dispatch, getState) => {
  const navigation = selectNavigationAll(getState());

  return dispatch(setNavigation(FuseUtils.removeNavItem(navigation, id)));
};

export const {
  selectAll: selectNavigationAll,
  selectIds: selectNavigationIds,
  selectById: selectNavigationItemById,
} = navigationAdapter.getSelectors((state) => state.fuse.navigation);

const getUserisAdmin = /*(state) => state.login.user.isAdmin THIS STATE.LOGIN DOESNT WORK */ false;

const navigationAdminSlice = createSlice({
  name: 'navigationAdmin',
  initialState: initialState,
  reducers: {
    setNavigation: navigationAdapter.setAll,
    resetNavigation: (state, action) => initialState,
  },
});

export const { setNavigation, resetNavigation } = navigationAdminSlice.actions;

const getUserRole = (state) => state.login.user.name;



/*the select navigation FOR ADMINS */
export const selectNavigationAdmin = createSelector(
  [selectNavigationAll, ({ i18n }) => i18n.language, getUserRole],
  (navigation, language, userRole) => {
    function setTranslationValues(data) {
      // loop through every object in the array
      return data.map((item) => {
        if (item.translate && item.title) {
          item.title = i18next.t(`navigationAdmin:${item.translate}`);
        }

        // see if there is a children node
        if (item.children) {
          // run this function recursively on the children array
          item.children = setTranslationValues(item.children);
        }
        return item;
      });
    }

    return setTranslationValues(
      _.merge(
        [],
        FuseUtils.filterRecursive(navigation, (item) =>
          FuseUtils.hasPermission(item.auth, userRole)
        )
      )
    );
  }
);


export const selectFlatNavigationAdmin = createSelector([selectNavigationAdmin], (navigation) =>
  FuseUtils.getFlatNavigation(navigation)
);

export default navigationAdminSlice.reducer;
