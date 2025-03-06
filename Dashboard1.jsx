import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Dashboard() {
  return (
    <div className='container'>
        <div className="row">
            <div className="col-sm-12 col-lg-4">
                <div className="list-group" id="list-tab" role="tablist">
                    
                    <Link className="list-group-item list-group-item-action active fs-5 mt-5" id="list-account-settings-list" data-bs-toggle="list" to="#list-account-settings" role="tab" aria-controls="list-account-settings">Account Settings</Link>
                    <Link className="list-group-item list-group-item-action fs-5" id="list-preferences-list" data-bs-toggle="list" to="#list-preferences" role="tab" aria-controls="list-preferences">Preferences</Link>
                    <Link className="list-group-item list-group-item-action fs-5" id="list-security-settings-list" data-bs-toggle="list" to="#list-security-settings" role="tab" aria-controls="list-security-settings">Security Settings</Link>
                    <Link className="list-group-item list-group-item-action fs-5" id="list-subscription-billing-list" data-bs-toggle="list" to="#list-subscription-billing" role="tab" aria-controls="list-subscription-billing">Subscription & Billing</Link>
                    <Link className="list-group-item list-group-item-action fs-5" id="list-legal-policies-list" data-bs-toggle="list" to="#list-legal-policies" role="tab" aria-controls="list-legal-policies">Feedback</Link>
                </div>
            </div>
            <div className="col-sm-12 col-lg-8">
                <div className="card mt-5 p-3 tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show active" id="list-account-settings" role="tabpanel" aria-labelledby="list-account-settings-list">
                        <h1 className='ms-3'>Account Settings</h1>
                        <div className='ms-3 mt-3 me-3'>
                            <h4>Manage Your Personal Information and Security</h4>
                            <p>Update your personal details, email, password, and profile picture. Enhance security with two-factor authentication and keep your contact information current.</p>
                            <div className="list-group">
                                <Link to='/personaldetail' className="list-group-item list-group-item-action fs-5" >Personal Details</Link>
                                <Link to='#email-contact-info' className="list-group-item list-group-item-action fs-5">Email & Contact Information</Link>
                                <Link to='#account-deactivated' className="list-group-item list-group-item-action fs-5">Account Deactivated</Link>
                            </div>
                        </div>
                    </div>

                    <div className="tab-pane fade" id="list-preferences" role="tabpanel" aria-labelledby="list-preferences-list">
                        <h1 className='ms-3'>Preferences</h1>
                        <div className='ms-3 mt-3 me-3'>
                            <h4>Customize Your Experience and Notifications</h4>
                            <p>Customize your account by choosing your language, adjusting notifications, and switching between light and dark themes for a personalized experience.</p>
                            <div className="list-group">
                                <Link to='#preferred-language' className="list-group-item list-group-item-action fs-5">Set Your Preferred Language</Link>
                                <Link to='#notification-settings' className="list-group-item list-group-item-action fs-5">Manage Your Notification Settings</Link>
                                <Link to='#display-theme' className="list-group-item list-group-item-action fs-5">Choose Your Display Theme</Link>
                            </div>
                        </div>
                    </div>

                    <div className="tab-pane fade" id="list-security-settings" role="tabpanel" aria-labelledby="list-security-settings-list">
                        <h1 className='ms-3'>Security Settings</h1>
                        <div className='ms-3 mt-3 me-3'>
                            <h4>Account Protection and Monitor Activity</h4>
                            <p>Review recent logins, enable and manage connected devices to protect your account. Log out of any suspicious sessions for added security</p>
                            <div className="list-group">
                                <Link to='#recent-login-activity' className="list-group-item list-group-item-action fs-5">Recent Login Activity</Link>
                                <Link to='#change-password' className="list-group-item list-group-item-action fs-5">Change Password & Security Options</Link>
                                <Link to='#two-factor-authentication' className="list-group-item list-group-item-action fs-5">Secure Your Account with Two-Factor Authentication</Link>
                            </div>
                        </div>
                    </div>

                    <div className="tab-pane fade" id="list-subscription-billing" role="tabpanel" aria-labelledby="list-subscription-billing-list">
                        <h1 className='ms-3'>Subscription & Billing</h1>
                        <div className='ms-3 mt-3 me-3'>
                            <h4>Track Your Plan, Payment Methods, and Invoices</h4>
                            <p>Here you can view your current subscription plan and check its renewal status. You can add, update, or remove payment methods and review past billing information.</p>
                            <div className="list-group">
                                <Link to='#check-subscription-plan' className="list-group-item list-group-item-action fs-5">Check Your Subscription Plan and Usage</Link>
                                <Link to='#update-payment-info' className="list-group-item list-group-item-action fs-5">Update Your Payment Information</Link>
                                <Link to='#view-billing-invoices' className="list-group-item list-group-item-action fs-5">View Billing and Invoices</Link>
                            </div>
                        </div>
                    </div>

                    <div className="tab-pane fade" id="list-legal-policies" role="tabpanel" aria-labelledby="list-legal-policies-list">
                        <h1 style={{marginLeft:'35%'}}>Feedback</h1>
                        <div class='m-3'>
                         <input class=' p-2 m-3' type="text" name="name" id="text" placeholder='Full Name' style={{borderRadius:'10px' ,width:'90%'}} required />
                          <input class=' p-2 m-3' type="email" name="email" id="email" placeholder='Email' style={{borderRadius:'10px' ,width:'90%'}} required />
                          <input class=' p-2 m-3' type="tel" name="number" id="number" placeholder='Number' style={{borderRadius:'10px' ,width:'90%'}} required />
                          <textarea  class='p-2 m-3 ' type="message"  placeholder='Type your issue here....' style={{borderRadius:'10px' ,width:'90%'}} required name="message" rows="10" cols="30"></textarea>
                          <center>
                           <button className='p-2 m-3' style={{borderRadius:'10px' ,width:'30%',backgroundColor:'yellow'}}>Submit</button>
                           </center>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
<Outlet />
export default Dashboard;