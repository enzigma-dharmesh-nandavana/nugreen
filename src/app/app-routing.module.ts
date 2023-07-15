import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HomeScreenPage } from './pages/home/home-screen/home-screen.page';
import { AccountHistoryPage } from './pages/home/account-history/account-history.page';
import { VerifyFederalEin } from './pages/home/verify-federal-ein/verify-federal-ein.page';
import { AccountHistoryDetailsPage } from './pages/home/account-history-details/account-history-details.page';

import { VerifyEmailPage } from './components/verify-email/verify-email.page';
import { VerificationPage } from './components/verification/verification.page';
import { TellUsAboutYourselfPage } from './components/tell-us-about-yourself/tell-us-about-yourself.page';
import { HowCanWeHelpPage } from './components/how-can-we-help/how-can-we-help.page';
import { UsernamePasswordPage } from './components/username-password/username-password.page';
import { UserAgreementsPage } from './components/user-agreements/user-agreements.page';
import { VerificationSuccessfulPage } from './components/verification-successful/verification-successful.page';
import { CompanyProfilePage } from './pages/home/company-profile/company-profile.page';
import { HomePage } from './pages/home/home.page';
import { UserProfilePage } from './pages/home/user-profile/user-profile.page';
import { LoginPage } from './pages/login/login.page';
import { SignUpPage } from './pages/signup/signup.page';
import { StartPage } from './pages/start/start.page';
import { AccountNotesPage } from './pages/home/account-notes/account-notes.page';
import { DocumentsPage } from './pages/home/documents/documents.page';
import { DocumentListPage } from './pages/home/document-list/document-list.page';
import { DocumentUploadPage } from './pages/home/document-upload/document-upload.page';
import { BankingInformationPage } from './pages/home/banking-information/banking-information.page';
import { VerifyMobileBankingPage } from './pages/home/verfiy-mobile-banking/verify-mobile-banking.page';
import { BolHistoryPage } from './components/bol-history/bol-history.page';
import { PaymentHistoryPage } from './components/payment-history/payment-history.page';
import { FaqPage } from './components/faq/faq.page';
import { ForgotPasswordPage } from './components/forgot-password/forgot-password.page';
import { ContactYourRepPage } from './components/contact-your-rep/contact-your-rep.page';
import { FilterPage } from './components/filter/filter.page';
import { ResetPasswordPage } from './components/reset-password/reset-password.page';

const routes: Routes = [
  {
    path: '',
    component: StartPage
  },
  {
    path: 'tell-us-about-yourself',
    component: TellUsAboutYourselfPage
  },
  {
    path: 'how-can-we-help',
    component: HowCanWeHelpPage
  },
  {
    path: 'username-password',
    component: UsernamePasswordPage
  },
  {
    path: 'user-agreements',
    component:UserAgreementsPage
  },
  {
    path: 'bol-history',
    component:BolHistoryPage
  },
  {
    path: 'payment-history',
    component:PaymentHistoryPage
  },
  {
    path: 'faq',
    component:FaqPage
  },
  {
    path: 'login',
    component: LoginPage
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordPage
  },
  {
    path: 'contact-your-rep',
    component:ContactYourRepPage
  },
  {
    path: 'filter',
    component:FilterPage
  },
  {
    path: 'reset-password',
    component:ResetPasswordPage
  },
  {
    path: 'signup',
    component: SignUpPage,
       children: [
      {
        path: '',
        component:SignUpPage,
      },
      // {
      //   path: 'verify-email',
      //   component:VerifyEmailPage,
      // },
    ]
  },
  {
    path: 'home',
    component: HomePage,
    children: [
      {
        path: '',
        component: HomeScreenPage
      },
      {
        path: 'account-history',
        component: AccountHistoryPage
      },
      {
        path: 'account-history-details',
        component: AccountHistoryDetailsPage
      },
      {
        path: 'account-notes',
        component: AccountNotesPage
      },
      {
        path: 'user-profile',
        component: UserProfilePage
      },
      {
        path: 'company-profile',
        component: CompanyProfilePage
      },
      {
        path: 'documents',
        component: DocumentsPage
      },
      {
        path: 'document-list',
        component: DocumentListPage
      },
      {
        path: 'document-upload',
        component: DocumentUploadPage
      },
      {
        path: 'banking-information',
        component: BankingInformationPage
      },
      {
        path: 'verify-mobile-banking',
        component: VerifyMobileBankingPage
      },
      {
        path: 'verify-federal-ein',
        component: VerifyFederalEin
      },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
