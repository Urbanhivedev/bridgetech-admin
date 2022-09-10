import FuseScrollbars from '@fuse/core/FuseScrollbars';
import FuseUtils from '@fuse/utils';
import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import List from '@material-ui/core/List';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import { useTheme } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { motion } from 'framer-motion';
import { useMemo, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchChats } from 'redux/actions/chat.action';
import { fetchConnectedUsers, fetchConnectedUsers2, fetchRealTimeUsers } from 'redux/actions/user.action';
import ContactListItem from './ContactListItem';
import ContactListItem2 from './ContactListItem2';
import StatusIcon from './StatusIcon';
import { getChat } from './store/chatSlice';
import { selectContacts } from './store/contactsSlice';
import { closeMobileChatsSidebar, openUserSidebar } from './store/sidebarsSlice';
import { updateUserData } from './store/userSlice';

const statusArr = [
  {
    title: 'Online',
    value: 'online',
  },
  {
    title: 'Away',
    value: 'away',
  },
  {
    title: 'Do not disturb',
    value: 'do-not-disturb',
  },
  {
    title: 'Offline',
    value: 'offline',
  },
];

function InboxSidebar(props) {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  // const user = useSelector(({ chatApp }) => chatApp.user);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [searchText, setSearchText] = useState('');
  const [statusMenuEl, setStatusMenuEl] = useState(null);
  const [moreMenuEl, setMoreMenuEl] = useState(null);

  //New Hooks
  const [chatStarted, setChatStarted] = useState(false);
  const [chatUser, setChatUser] = useState('');
  const [message, setMessage] = useState('');
  const [userUid, setUserUid] = useState(null);
  const { user } = useSelector((state) => state.login);
  const { allUsers, connectedUsers, connects, connects2, isLoading } = useSelector((state) => state.user);
  let unsubscribe;
  
  useEffect(() => {
    console.log('All Users', allUsers);
  }, [])
 
  useEffect(() => {

    unsubscribe = dispatch(fetchConnectedUsers(user.uid))
    unsubscribe = dispatch(fetchConnectedUsers2(user.uid))
    .then(unsubscribe => {
      return unsubscribe;
    })
    .catch(error => {
      console.log(error);
    })
  }, []);
  
    //componentWillUnmount
    useEffect(() => {
      return () => {
        //cleanup
        unsubscribe.then(f => f()).catch(error => console.log(error));
      }
    }, []);
  


  function handleMoreMenuClick(event) {
    setMoreMenuEl(event.currentTarget);
  }

  function handleMoreMenuClose(event) {
    setMoreMenuEl(null);
  }

  function handleStatusMenuClick(event) {
    event.preventDefault();
    event.stopPropagation();
    setStatusMenuEl(event.currentTarget);
  }

  function handleStatusSelect(event, status) {
    event.preventDefault();
    event.stopPropagation();
    dispatch(
      updateUserData({
        ...user,
        status,
      })
    );
    setStatusMenuEl(null);
  }

  function handleStatusClose(event) {
    event.preventDefault();
    event.stopPropagation();
    setStatusMenuEl(null);
  }

  function handleSearchText(event) {
    setSearchText(event.target.value);
  }


  const initChat = (user2, isMobile) => {
   const user1 = user.uid;
    setChatStarted(true)
    setChatUser(user2.name)
    setUserUid(user2.uid);

     
     dispatch(fetchChats(user1, user2))
     console.log('IsMobile: ', isMobile);
     if (isMobile) {
        dispatch(closeMobileChatsSidebar());
      }
  }

  const testConnections = () => {
    
  const connectsById = Object.fromEntries(
    connects2.map(({ user1, type, status, invited_amt, skipped_amt }) => [user1, { type, status, invited_amt, skipped_amt }])
      );
      
    const connectedUsersOutput = connectedUsers.map(({ uid, name, email, city, intro, skillset, skills_needed, 
      lookingFor, lastActive, isTechnical, photoUrl, password}) => ({
        uid, name, email, city, intro, skillset, skills_needed, 
        lookingFor, lastActive, isTechnical, photoUrl, password,
      ...(connectsById[uid] || { type: '', status: '', invited_amt: '', skipped_amt: ''})
    }));

    console.log('Connected Users Mapped: ', connectedUsersOutput);
  }





  const connectsById = Object.fromEntries(
    connects2.map(({ user1, type, status, invited_amt, skipped_amt }) => [user1, { type, status, invited_amt, skipped_amt }])
      );
      
    const connectedUsersOutput = connectedUsers.map(({ uid, name, email, city, intro, skillset, skills_needed, 
      lookingFor, lastActive, isTechnical, photoUrl, password}) => ({
        uid, name, email, city, intro, skillset, skills_needed, 
        lookingFor, lastActive, isTechnical, photoUrl, password,
      ...(connectsById[uid] || { type: '', status: '', invited_amt: '', skipped_amt: ''})
    }));


  return (
    <div className="flex flex-col flex-auto h-full">
      <AppBar position="static" color="default" elevation={0}>
        {/* Top header with profile icon and 3 dot btn */}
        {/* <Toolbar className="flex justify-between items-center px-4">
          {user && (
            <div
              className="relative w-40 h-40 p-0 mx-12 cursor-pointer"
              onClick={() => dispatch(openUserSidebar())}
              onKeyDown={() => dispatch(openUserSidebar())}
              role="button"
              tabIndex={0}
            >
              <Avatar src={user.photoUrl} alt={user.name} className="w-40 h-40">
                {!user.photoUrl || user.photoUrl === '' ? user.name[0] : ''}
              </Avatar>
              <div
                className="absolute right-0 bottom-0 -m-4 z-10 cursor-pointer"
                aria-owns={statusMenuEl ? 'switch-menu' : null}
                aria-haspopup="true"
                onClick={handleStatusMenuClick}
                onKeyDown={handleStatusMenuClick}
                role="button"
                tabIndex={0}
              >
                <StatusIcon status={user.status} /> 
                <StatusIcon status={"Welcome to bridge tech, a platform that gives you to ability to connect with minded likes"} />
              </div>

              <Menu
                id="status-switch"
                anchorEl={statusMenuEl}
                open={Boolean(statusMenuEl)}
                onClose={handleStatusClose}
              >
                {statusArr.map((status) => (
                  <MenuItem
                    onClick={(ev) => handleStatusSelect(ev, status.value)}
                    key={status.value}
                  >
                    <ListItemIcon className="min-w-40">
                      <StatusIcon status={status.value} />
                    </ListItemIcon>
                    <ListItemText primary={status.title} />
                  </MenuItem>
                ))}
              </Menu>
            </div>
          )}

          <div>
            <IconButton
              aria-owns={moreMenuEl ? 'chats-more-menu' : null}
              aria-haspopup="true"
              onClick={handleMoreMenuClick}
            >
              <Icon>more_vert</Icon>
            </IconButton>
            <Menu
              id="chats-more-menu"
              anchorEl={moreMenuEl}
              open={Boolean(moreMenuEl)}
              onClose={handleMoreMenuClose}
            >
              <MenuItem onClick={handleMoreMenuClose}>Profile</MenuItem>
              <MenuItem onClick={handleMoreMenuClose}>Logout</MenuItem>
            </Menu>
          </div>
        </Toolbar> */}
        {useMemo(
          () => (
            <Toolbar className="px-16">
              <Paper className="flex p-4 items-center w-full px-8 py-4 shadow">
                <Icon color="action">search</Icon>

                <Input
                  placeholder="Search or start new chat"
                  className="flex flex-1 px-8"
                  disableUnderline
                  fullWidth
                  value={searchText}
                  inputProps={{
                    'aria-label': 'Search',
                  }}
                  onChange={handleSearchText}
                />
              </Paper>
            </Toolbar>
          ),
          [searchText]
        )}
      </AppBar>

      {/* Chats List */}
      <FuseScrollbars className="overflow-y-auto flex-1">
        <List className="w-full">
          {useMemo(() => {
            function getFilteredArray(arr, _searchText) {
              if (_searchText.length === 0) {
                return arr;
              }
              return FuseUtils.filterArrayByString(arr, _searchText);
            }

            const chatListContacts =
              contacts.length > 0 && user && user.chatList
                ? user.chatList.map((_chat) => ({
                    ..._chat,
                    ...contacts.find((_contact) => _contact.id === _chat.contactId),
                  }))
                : [];
            const filteredContacts = getFilteredArray([...contacts], searchText);
            const filteredChatList = getFilteredArray([...chatListContacts], searchText);

            const container = {
              show: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            };

            const item = {
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 },
            };

            return (
              <motion.div
                className="flex flex-col flex-shrink-0"
                variants={container}
                initial="hidden"
                animate="show"
              >
             {/* <button onClick={() => testConnections()}>Please Click Me😌</button> */}
             {connectedUsersOutput.length > 0 && (
                  <motion.div variants={item}>
                    <Typography className="font-medium text-20 px-16 py-24" color="secondary">
                      Chats
                    </Typography>
                  </motion.div>
                )}

                {connectedUsersOutput.map((user) => (
                  <motion.div variants={item} key={user.uid}>
                    <ContactListItem
                      user={user}
                    //   onContactClick={(contactId) => dispatch(getChat({ contactId, isMobile }))}
                      onContactClick={() => initChat(user, isMobile)}
                    />
                  </motion.div>
                ))}

                {/* {filteredContacts.length > 0 && (
                  <motion.div variants={item}>
                    <Typography className="font-medium text-20 px-16 py-24" color="secondary">
                      Pending Invites
                    </Typography>
                  </motion.div>
                )}

                {filteredContacts.map((contact) => (
                  <motion.div variants={item} key={contact.id}>
                    <ContactListItem2
                      contact={contact}
                      onContactClick={(contactId) => dispatch(getChat({ contactId, isMobile }))}
                    />
                  </motion.div>
                ))} */}
              </motion.div>
            );
          }, [contacts, user, searchText, dispatch, isMobile])}
        </List>
      </FuseScrollbars>
    </div>
  );
}

export default InboxSidebar;
