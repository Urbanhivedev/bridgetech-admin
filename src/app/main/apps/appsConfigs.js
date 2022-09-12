// import AcademyAppConfig from './academy/AcademyAppConfig';
// import CalendarAppConfig from './calendar/CalendarAppConfig';
// import ChatAppConfig from './chat/ChatAppConfig';
// import ContactsAppConfig from './contacts/ContactsAppConfig';
// import AnalyticsDashboardAppConfig from './dashboards/analytics/AnalyticsDashboardAppConfig';
// import ProjectDashboardAppConfig from './dashboards/project/ProjectDashboardAppConfig';
// import ECommerceAppConfig from './e-commerce/ECommerceAppConfig';
// import FileManagerAppConfig from './file-manager/FileManagerAppConfig';
// import MailAppConfig from './mail/MailAppConfig';
// import NotesAppConfig from './notes/NotesAppConfig';
// import ScrumboardAppConfig from './scrumboard/ScrumboardAppConfig';
// import TodoAppConfig from './todo/TodoAppConfig';
import CandidateAppConfig from './urbanhive-candidates/CandidateAppConfig';
import ComingSoonPageConfig from './urbanhive-coming-soon/ComingSoonPageConfig';
import Error404PageConfig from './urbanhive-errors/404/Error404PageConfig';
import Error500PageConfig from './urbanhive-errors/500/Error500PageConfig';
// import InboxAppConfig from './urbanhive-inbox2/InboxAppConfig';
import InboxAppConfig from './urbanhive-inbox/InboxAppConfig';
import ProfileConfig from './urbanhive-profile/ProfileConfig';
import LoginConfig from './urbanhive-login/LoginConfig';
import RegisterConfig from './urbanhive-register/RegisterConfig';
import SessionsConfig from './urbanhive-sessions/SessionsConfig';
import BookDevConfig from './urbanhive-bookdev/BookDevConfig';
import RegisteredUsersConfig from './urbanhive-admin-registered-users/RegisteredUsersConfig';
import DeveloperListConfig from './urbanhive-admin-developer-list/DeveloperListConfig';
import CreateNewDeveloperConfig from './urbanhive-admin-create-developer/CreateNewDeveloperConfig';

const appsConfigs = [
  LoginConfig,
  RegisterConfig,
  CandidateAppConfig,
  InboxAppConfig,
  ProfileConfig,
  ProfileConfig,
  ComingSoonPageConfig,
  Error404PageConfig,
  Error500PageConfig,
  SessionsConfig,
  BookDevConfig,
  RegisteredUsersConfig,
  DeveloperListConfig,
  CreateNewDeveloperConfig
  // AnalyticsDashboardAppConfig,
  // ProjectDashboardAppConfig,
  // MailAppConfig,
  // TodoAppConfig,
  // FileManagerAppConfig,
  // ContactsAppConfig,
  // CalendarAppConfig,
  // ChatAppConfig,
  // ECommerceAppConfig,
  // ScrumboardAppConfig,
  // // AcademyAppConfig,
  // NotesAppConfig,
];

export default appsConfigs;
