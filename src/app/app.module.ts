import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeScreenPage } from './pages/home/home-screen/home-screen.page';
import { AccountHistoryPage } from './pages/home/account-history/account-history.page';
import { VerifyFederalEin } from './pages/home/verify-federal-ein/verify-federal-ein.page';
import { AccountHistoryDetailsPage } from './pages/home/account-history-details/account-history-details.page';
import { Header } from './components/header/header.page';
import { VerifyEmailPage } from './components/verify-email/verify-email.page';
import { VerificationPage } from './components/verification/verification.page';
import { HowCanWeHelpPage } from './components/how-can-we-help/how-can-we-help.page';
import { UsernamePasswordPage } from './components/username-password/username-password.page';
import { UserAgreementsPage } from './components/user-agreements/user-agreements.page';
import { VerificationSuccessfulPage } from './components/verification-successful/verification-successful.page';
import {TellUsAboutYourselfPage} from './components/tell-us-about-yourself/tell-us-about-yourself.page';
import { HomePage } from './pages/home/home.page';
import { LoginPage } from './pages/login/login.page';
import { SignUpPage } from './pages/signup/signup.page';
import { StartPage } from './pages/start/start.page';
import { CompanyProfilePage } from './pages/home/company-profile/company-profile.page';
import { UserProfilePage } from './pages/home/user-profile/user-profile.page';

import { AccountNotesPage } from './pages/home/account-notes/account-notes.page';
import { DocumentsPage } from './pages/home/documents/documents.page';
import { DocumentListPage } from './pages/home/document-list/document-list.page';
import { DocumentUploadPage } from './pages/home/document-upload/document-upload.page';
import { BankingInformationPage } from './pages/home/banking-information/banking-information.page';
import { VerifyMobileBankingPage } from './pages/home/verfiy-mobile-banking/verify-mobile-banking.page';
import { SearchFilterPipe } from './pipes/search-filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BolHistoryPage } from './components/bol-history/bol-history.page';
import { PaymentHistoryPage } from './components/payment-history/payment-history.page';
import { FaqPage } from './components/faq/faq.page';
import { ForgotPasswordPage } from './components/forgot-password/forgot-password.page';
import { ContactYourRepPage } from './components/contact-your-rep/contact-your-rep.page';
import { FilterPage } from './components/filter/filter.page';
import { ResetPasswordPage } from './components/reset-password/reset-password.page';

@NgModule({
  declarations: [AppComponent, StartPage, HomePage, LoginPage, SignUpPage, CompanyProfilePage, UserProfilePage, Header, VerifyEmailPage,VerificationPage,VerificationSuccessfulPage,TellUsAboutYourselfPage,HowCanWeHelpPage,UsernamePasswordPage,UserAgreementsPage,BolHistoryPage,PaymentHistoryPage,FaqPage,ForgotPasswordPage,ContactYourRepPage,FilterPage,ResetPasswordPage,UserProfilePage, HomeScreenPage, AccountHistoryPage, VerifyFederalEin, AccountHistoryDetailsPage , AccountNotesPage, DocumentsPage, DocumentListPage, DocumentUploadPage, BankingInformationPage, VerifyMobileBankingPage , SearchFilterPipe],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }