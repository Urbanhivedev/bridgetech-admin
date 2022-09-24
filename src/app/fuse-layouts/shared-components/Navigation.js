import FuseNavigation from '@fuse/core/FuseNavigation';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import clsx from 'clsx';
import { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectNavigation} from 'app/store/fuse/navigationSlice';
import { selectNavigationAdmin} from 'app/store/fuse/navigationAdminSlice';
import { navbarCloseMobile } from '../../store/fuse/navbarSlice';

function Navigation(props) {
  const { user } = useSelector((state) => state.login);

  console.log(user)
  const navigation = user.isAdmin ?useSelector(selectNavigationAdmin):useSelector(selectNavigation);
 
  const theme = useTheme();
  const mdDown = useMediaQuery(theme.breakpoints.down('md'));
  const dispatch = useDispatch();

  function handleItemClick(item) {
    if (mdDown) {
      dispatch(navbarCloseMobile());
    }
  }

  return (
    <FuseNavigation
      className={clsx('navigation', props.className)}
      navigation={navigation}
      layout={props.layout}
      dense={props.dense}
      active={props.active}
      onItemClick={handleItemClick}
    />
  );
}

Navigation.defaultProps = {
  layout: 'vertical',
};

export default memo(Navigation);
