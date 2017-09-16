import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { routing } from './app.router';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/blocks/footer/footer.component';
import { LeftMenuComponent } from './components/blocks/left-menu/left-menu.component';
import { ViewerComponent } from './components/blocks/viewer/viewer.component';
import { SearchMenuComponent } from './components/blocks/search-menu/search-menu.component';
import { LoginComponent } from './components/main/login/login.component';
import { BlogComponent } from './components/main/blog/blog.component';
import { DonatComponent } from './components/main/donat/donat.component';
import { ApplicationComponent } from './components/main/application/application.component';
import { ProfileComponent } from './components/viewers/profile/profile.component';
import { ContactsComponent } from './components/viewers/contacts/contacts.component';
import { MessagesComponent } from './components/viewers/messages/messages.component';
import { ChatsComponent } from './components/viewers/chats/chats.component';
import { GroupsComponent } from './components/viewers/groups/groups.component';
import { ProjectsComponent } from './components/viewers/projects/projects.component';
import { EventsComponent } from './components/viewers/events/events.component';
import { SettingsComponent } from './components/viewers/settings/settings.component';
import { ResultsComponent } from './components/blocks/results/results.component';
import { NavigatorComponent } from './components/blocks/navigator/navigator.component';

import { AuthService } from './services/login/auth.service';
import { GuardService } from './services/guard/guard.service';
import { Http,HttpModule } from '@angular/http';
import { ProfileDisplayComponent } from './components/showman/profile-display/profile-display.component';
import { ChatDisplayComponent } from './components/showman/chat-display/chat-display.component';
import { ProjectDisplayComponent } from './components/showman/project-display/project-display.component';
import { DialogDisplayComponent } from './components/showman/dialog-display/dialog-display.component';
import { EventDisplayComponent } from './components/showman/event-display/event-display.component';
import { GroupDisplayComponent } from './components/showman/group-display/group-display.component';
import { IncidentsComponent } from './components/viewers/incidents/incidents.component';
import { EditGeneralComponent } from './components/viewers/profile/edit-general/edit-general.component';
import { EditContactsComponent } from './components/viewers/profile/edit-contacts/edit-contacts.component';
import { EditOtherComponent } from './components/viewers/profile/edit-other/edit-other.component';
import { AllContactsComponent } from './components/viewers/contacts/all-contacts/all-contacts.component';
import { OnlineContactsComponent } from './components/viewers/contacts/online-contacts/online-contacts.component';
import { AllEventsComponent } from './components/viewers/events/all-events/all-events.component';
import { MyEventsComponent } from './components/viewers/events/my-events/my-events.component';
import { CreateEventsComponent } from './components/viewers/events/create-events/create-events.component';
import { GeneralSettingsComponent } from './components/viewers/settings/general-settings/general-settings.component';
import { NoticeSettingsComponent } from './components/viewers/settings/notice-settings/notice-settings.component';
import { AllProjectsComponent } from './components/viewers/projects/all-projects/all-projects.component';
import { MyProjectsComponent } from './components/viewers/projects/my-projects/my-projects.component';
import { CreateProjectComponent } from './components/viewers/projects/create-project/create-project.component';
import { AllGroupsComponent } from './components/viewers/groups/all-groups/all-groups.component';
import { MyGroupsComponent } from './components/viewers/groups/my-groups/my-groups.component';
import { CreateGroupComponent } from './components/viewers/groups/create-group/create-group.component';
import { SearchResultsComponent } from './components/showman/search-results/search-results.component';
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    LeftMenuComponent,
    ViewerComponent,
    SearchMenuComponent,
    LoginComponent,
    BlogComponent,
    DonatComponent,
    ApplicationComponent,
    ProfileComponent,
    ContactsComponent,
    MessagesComponent,
    ChatsComponent,
    GroupsComponent,
    ProjectsComponent,
    EventsComponent,
    SettingsComponent,
    ResultsComponent,
    NavigatorComponent,
    ProfileDisplayComponent,
    ChatDisplayComponent,
    ProjectDisplayComponent,
    DialogDisplayComponent,
    EventDisplayComponent,
    GroupDisplayComponent,
    IncidentsComponent,
    EditGeneralComponent,
    EditContactsComponent,
    EditOtherComponent,
    AllContactsComponent,
    OnlineContactsComponent,
    AllEventsComponent,
    MyEventsComponent,
    CreateEventsComponent,
    GeneralSettingsComponent,
    NoticeSettingsComponent,
    AllProjectsComponent,
    MyProjectsComponent,
    CreateProjectComponent,
    AllGroupsComponent,
    MyGroupsComponent,
    CreateGroupComponent,
    SearchResultsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    AuthService,
    GuardService,
    Http
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
