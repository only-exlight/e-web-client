import { Routes, RouterModule } from '@angular/router';
import { GuardService } from './services/guard/guard.service';
/*MAIN COMPONENTS*/
import { LoginComponent } from './components/main/login/login.component';
import { BlogComponent } from './components/main/blog/blog.component';
import { DonatComponent } from './components/main/donat/donat.component';
import { ApplicationComponent } from './components/main/application/application.component';
/*VIEWERS COMPONENTS*/
import { ContactsComponent } from './components/viewers/contacts/contacts.component';
import { ProfileComponent } from './components/viewers/profile/profile.component';
import { MessagesComponent } from './components/viewers/messages/messages.component';
import { ChatsComponent } from './components/viewers/chats/chats.component';
import { GroupsComponent } from './components/viewers/groups/groups.component';
import { ProjectsComponent } from './components/viewers/projects/projects.component';
import { EventsComponent } from './components/viewers/events/events.component';
import { IncidentsComponent } from './components/viewers/incidents/incidents.component';
import { SettingsComponent } from './components/viewers/settings/settings.component';
/*VIEWERS CHILDREN COMPONENTS*/
/*PROFILE*/
import { EditGeneralComponent } from './components/viewers/profile/edit-general/edit-general.component';
import { EditContactsComponent } from './components/viewers/profile/edit-contacts/edit-contacts.component';
import { EditOtherComponent } from './components/viewers/profile/edit-other/edit-other.component';
/*CONTACTS*/
import { AllContactsComponent } from './components/viewers/contacts/all-contacts/all-contacts.component';
import { OnlineContactsComponent } from './components/viewers/contacts/online-contacts/online-contacts.component';
/*CHATS*/
/*GROUPS*/
import { AllGroupsComponent } from './components/viewers/groups/all-groups/all-groups.component';
import { MyGroupsComponent } from './components/viewers/groups/my-groups/my-groups.component';
import { CreateGroupComponent } from './components/viewers/groups/create-group/create-group.component';
/*PROJECTS*/
import { AllProjectsComponent } from './components/viewers/projects/all-projects/all-projects.component';
import { MyProjectsComponent } from './components/viewers/projects/my-projects/my-projects.component';
import { CreateProjectComponent } from './components/viewers/projects/create-project/create-project.component';
/*EVENTS*/
import { AllEventsComponent } from './components/viewers/events/all-events/all-events.component';
import { MyEventsComponent } from './components/viewers/events/my-events/my-events.component';
import { CreateEventsComponent } from './components/viewers/events/create-events/create-events.component';
/*SETTINGS*/
import { GeneralSettingsComponent } from './components/viewers/settings/general-settings/general-settings.component';
import { NoticeSettingsComponent } from './components/viewers/settings/notice-settings/notice-settings.component';
/*SHOWMAN COMPONENTS*/
import { ChatDisplayComponent } from './components/showman/chat-display/chat-display.component';
import { DialogDisplayComponent } from './components/showman/dialog-display/dialog-display.component';
import { EventDisplayComponent } from './components/showman/event-display/event-display.component';
import { GroupDisplayComponent } from './components/showman/group-display/group-display.component';
import { ProfileDisplayComponent } from './components/showman/profile-display/profile-display.component';
import { ProjectDisplayComponent } from './components/showman/project-display/project-display.component';
import { SearchResultsComponent } from './components/showman/search-results/search-results.component';

const childrenRoutes: Routes = [
    {path: 'profile', component: ProfileComponent, outlet: 'viewer', children: [
        { path: 'edit-general', component: EditGeneralComponent, outlet: 'profile_outlet' },
        { path: 'edit-contacts', component: EditContactsComponent, outlet: 'profile_outlet' },
        { path: 'edit-other', component: EditOtherComponent, outlet:'profile_outlet' }
    ]},
    { path: 'contacts', component: ContactsComponent, outlet: 'viewer', children: [
        { path: 'all', component: AllContactsComponent, outlet: 'contacts_outlet'},
        { path: 'online', component: OnlineContactsComponent, outlet: 'contacts_outlet'}
    ]},
    { path: 'messages', component: MessagesComponent, outlet: 'viewer' },
    { path: 'chats', component: ChatsComponent, outlet: 'viewer' },
    { path: 'groups', component: GroupsComponent, outlet: 'viewer', children: [
        { path: 'all', component: AllGroupsComponent, outlet: 'group_outlet'},
        { path: 'my', component: MyGroupsComponent, outlet: 'group_outlet'},
        { path: 'create', component: CreateGroupComponent, outlet: 'group_outlet'}
    ]},
    { path: 'projects', component: ProjectsComponent, outlet: 'viewer', children: [
        { path: 'all', component: AllProjectsComponent, outlet: 'project_outlet'},
        { path: 'my',component: MyProjectsComponent, outlet: 'project_outlet'},
        { path: 'create', component: CreateProjectComponent, outlet: 'project_outlet'}
    ]},
    { path: 'events', component: EventsComponent, outlet: 'viewer', children: [
        { path: 'all', component: AllEventsComponent, outlet: 'events_outlet'},
        { path: 'my', component: MyEventsComponent, outlet: 'events_outlet'},
        { path: 'create', component: CreateEventsComponent, outlet: 'events_outlet'}
    ]},
    { path: 'incidents', component: IncidentsComponent, outlet: 'viewer' },
    { path: 'settings', component: SettingsComponent, outlet: 'viewer', children: [
        { path: 'general', component: GeneralSettingsComponent, outlet: 'settings_outlet'},
        { path: 'notice', component: NoticeSettingsComponent, outlet: 'settings_outlet'}
    ]},
    { path: 'chat-display/:id', component: ChatDisplayComponent, outlet: 'showman' },
    { path: 'dialog-display/:id', component: DialogDisplayComponent, outlet: 'showman' },
    { path: 'event-display/:id', component: EventDisplayComponent, outlet: 'showman' },
    { path: 'group-display/:id', component: GroupDisplayComponent, outlet: 'showman' },
    { path: 'profile-display/:id', component: ProfileDisplayComponent, outlet: 'showman' },
    { path: 'project-display/:id', component: ProjectDisplayComponent, outlet: 'showman' },
    { path: 'results', component: SearchResultsComponent, outlet: 'showman'}
];

const appRoutes: Routes = [
    { path: 'main', component: ApplicationComponent, canActivate: [GuardService],children: childrenRoutes },
    { path: 'login', component: LoginComponent },
    { path: 'blog', component: BlogComponent },
    { path: 'donat', component: DonatComponent },
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);