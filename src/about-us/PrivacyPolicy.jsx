import React from 'react';
import { useTranslation } from 'react-i18next';

const PrivacyPolicy = () => {
    const { t } = useTranslation();

    return (
        <div className='font-Inter text-base overflow-x-hidden text-gray-800'>
            <div className="flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-gray-100">
                <div className="max-w-screen-1440 mx-auto mx-4 py-8 px-12 w-full flex flex-col gap-3">
                    <div className="flex justify-between items-center">
                        <h1 className='text-3xl font-bold py-8'>{t('privacyPolicy')}</h1>
                    </div>
                    <table className='w-fit mx-4 py-8 px-12 flex flex-col gap-3 bg-slate-200'>
                        <thead>
                            <tr className="table-header text-left">
                                <th>{t('quickView')}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><a href="#personal">1. {t('personalDataWeCollect')}</a></td>
                            </tr>
                            <tr>
                                <td><a href="#provided">2. {t('thirdPartyPersonalDataProvided')}</a></td>
                            </tr>
                            <tr>
                                <td><a href="#purpose">3. {t('purposeForDataProcessing')}</a></td>
                            </tr>
                            <tr>
                                <td><a href="#sharing">4. {t('sharingPersonalData')}</a></td>
                            </tr>
                            <tr>
                                <td><a href="#international">5. {t('internationalDataTransfer')}</a></td>
                            </tr>
                            <tr>
                                <td><a href="#storage">6. {t('dataStorageAndProcessingTime')}</a></td>
                            </tr>
                            <tr>
                                <td><a href="#rights">7. {t('rightsAndObligationsOfCustomers')}</a></td>
                            </tr>
                            <tr>
                                <td><a href="#protection">8. {t('dataProtection')}</a></td>
                            </tr>
                            <tr>
                                <td><a href="#cookies">9. {t('cookies')}</a></td>
                            </tr>
                            <tr>
                                <td><a href="#updating">10. {t('updatingDataProtectionPolicy')}</a></td>
                            </tr>
                        </tbody>
                    </table>

                    <div className="flex justify-between items-center">
                        <div className='text-3xl font-semibold py-5'>
                            <h2 className='text-2xl font-semibold py-5'>{t('thankYouForVisiting')}</h2>
                            <h3 className='text-xl font-semibold py-6'>{t('overview')}</h3>
                            <h4 className='text-base font-normal'>
                                <p className='pb-4'>{t('overviewText1')}</p>
                                <p className='pb-4'>{t('overviewText2')}</p>
                                <p className='pb-4'>{t('overviewText3')}</p>
                            </h4>
                            <p id='personal' className='text-xl font-semibold py-6'>1. {t('personalDataWeCollect')}</p>
                            <p className='text-base font-normal'>{t('dataCollectionIntro')}</p>
                            <p className='font-semibold text-lg py-6'>1.1 {t('personalData')}</p>
                            <p className='text-base font-normal py-6'>{t('personalDataDetails')}</p>
                            <p className='font-semibold text-lg py-6'>1.2 {t('personalDataCollectedAutomatically')}</p>
                            <p className='text-base font-normal py-6'>{t('automaticDataCollectionIntro')}</p>
                            <p className='text-lg font-semibold py-6'>1.2.1 {t('contactInformation')}</p>
                            <p className='text-base font-normal py-6'>{t('contactInformationDetails')}</p>
                            <p className='text-lg font-semibold py-6'>1.2.2 {t('financialInformation')}</p>
                            <p className='text-base font-normal py-6'>{t('financialInformationDetails')}</p>
                            <p className='text-lg font-semibold py-6'>1.2.3 {t('transactionInformation')}</p>
                            <p className='text-base font-normal py-6'>{t('transactionInformationDetails')}</p>
                            <p className='text-lg font-semibold py-6'>1.2.4 {t('behavioralInformation')}</p>
                            <p className='text-base font-normal py-6'>{t('behavioralInformationDetails')}</p>
                            <p className='text-lg font-semibold py-6'>1.2.5 {t('profileInformation')}</p>
                            <p className='text-base font-normal py-6'>{t('profileInformationDetails')}</p>
                            <p className='text-lg font-semibold py-6'>1.2.6 {t('marketingAndCommunicationInformation')}</p>
                            <p className='text-base font-normal py-6'>{t('marketingAndCommunicationDetails')}</p>
                            <p id='provided' className='text-lg font-semibold py-6'>2. {t('thirdPartyPersonalDataProvided')}</p>
                            <p className='text-base font-normal py-6'>{t('thirdPartyPersonalDataIntro')}</p>
                            <ul className='font-normal text-base' style={{ paddingLeft: '50px', listStyleType: 'disc' }}>
                                <li>{t('thirdPartyPersonalDataItem1')}</li>
                                <li>{t('thirdPartyPersonalDataItem2')}</li>
                                <li>{t('thirdPartyPersonalDataItem3')}</li>
                                <li>{t('thirdPartyPersonalDataItem4')}</li>
                                <li>{t('thirdPartyPersonalDataItem5')}</li>
                            </ul>
                            <p id='purpose' className='text-lg font-semibold py-6'>3. {t('purposeForData')}</p>
                            <p className='text-base font-normal py-6'>{t('scopePermitted')}</p>
                            <p className='font-semibold text-lg py-6'>3.1 Registration and Authentication</p>
                            <p className='text-base font-normal py-6'>We may Process your Data for the purpose of registration, verification, or authentication of your identity when we provide products/services to you and/or serve other purposes as required by law and this Policy.</p>
                            <p className='font-semibold text-lg py-6'>3.2 Relationship Management</p>
                            <p className='text-base font-normal py-6'>We may Process your Data to serve the purpose of contacting, communicating, managing customer files, processing information inquiries, requests, feedback, complaints upon your request related to the products we provide to you.</p>
                            <p className='font-semibold text-lg py-6'>3.3 Data Analysis</p>
                            <p className='text-base font-normal py-6'>We may Process your Data for the purpose of introducing products you may be interested in, identifying your preferences, and personalizing your experience; to learn more about you, the products you receive, and other products you may want to receive; to measure your level of interaction, perform data analysis, profile data, market research, surveys, behavior evaluations, statistics and segmentation, trends, and consumer models...</p>
                            <p className='font-semibold text-lg py-6'>3.4 Improving Products/Services</p>
                            <p className='text-base font-normal py-6'>We may Process your Data to serve the purpose of troubleshooting and diagnosing product malfunctions, errors, defects, providing customer care and support services; To assess, improve, and develop products based on your satisfaction and consumer behavior; to measure the effectiveness of marketing campaigns, communications as well as business models.</p>
                            <p className='font-semibold text-lg py-6'>3.5 To meet the functions on online pages</p>
                            <p className='text-base font-normal py-6'>We may Process your Data to perform the purpose of managing, operating, monitoring, supervising, and managing online websites and platforms, ensuring that websites function properly, efficiently, and securely; to create favorable conditions for your experience on our websites.</p>
                            <p className='font-semibold text-lg py-6'>3.6  Information Technology Management</p>
                            <p className='text-base font-normal py-6'><b>CourtStar</b> may Process your Data to perform the purpose of managing operations, improving, developing information technology systems which may include ensuring information security and data protection, ensuring the availability, integrity, and security of the system, ensuring the system's performance meets user needs.</p>
                            <p className='font-semibold text-lg py-6'>3.7 Protecting Common Interests</p>
                            <p className='text-base font-normal py-6'><b>CourtStar</b> may Process your Data to perform the purpose of protecting the security, integrity, and safety of data, our business operations; to exercise our rights or protect our legitimate interests when necessary. For example, to resolve complaints, lawsuits, detect, prevent and prosecute illegal activities; to ensure compliance with our terms and conditions under Contracts and/or any documents with third parties.</p>
                            <p className='font-semibold text-lg py-6'>3.8 Compliance with Legal Regulations</p>
                            <p className='text-base font-normal py-6'>may Process your Data to comply with legal regulations and requirements from competent authorities in Vietnam as well as in foreign countries where we operate legally.</p>
                            <p id='sharing' className='text-lg font-semibold py-6'>4. SHARING PERSONAL DATA</p>
                            <p className='text-base font-normal py-6'>We may disclose or transfer your Personal Data to the following third parties consistent with the Purposes in this Policy. These third parties may be in the territory of Vietnam or outside the territory of Vietnam.</p>
                            <p className='font-semibold text-lg py-6'>4.1  Websites, Social Media Platforms</p>
                            <p className='text-base font-normal py-6'>We may optionally provide you with a login feature on the <b>CourtStar</b> without requiring you to enter information into a form.</p>
                            <p className='font-semibold text-lg py-6'>4.2 Third Parties upon Request by Competent Government Authorities and/or Legal Requirements</p>
                            <p className='text-base font-normal py-6'>We commit to protecting your Personal Data and only disclosing or sharing it when requested by competent government authorities and/or legal requirements. In such cases, we will cooperate with competent government authorities or other third parties to comply with the law, protect our rights and yours, prevent fraud, secure or address information security issues.</p>
                            <p id='international' className='text-lg font-semibold py-6'>5. INTERNATIONAL DATA TRANSFER</p>
                            <p className='text-base font-normal py-6'>Your Personal Data may be transferred by us from Vietnam ("Home Country") to a location, city, country outside the territory of Vietnam ("Alternate Country"). When we transfer your Personal Data from the Home Country to the Alternate Country, we will comply with the legal obligations and regulations related to your Personal Data, including having a legal basis for transferring Personal Data and applying appropriate protective measures to ensure an adequate level of protection of Personal Data.</p>
                            <p className='text-base font-normal py-6'>The legal basis for us to carry out the transfer of Personal Data as stipulated herein will be your consent to the Policy and the protective measures as prescribed by law.</p>
                            <p id='storage' className='text-lg font-semibold py-6'>6. DATA STORAGE AND PROCESSING TIME</p>
                            <ul className='font-normal text-base' style={{ paddingLeft: '50px', listStyleType: 'disc' }}>
                                <li>We only store and process your Personal Data for the period that we need that information to serve the Purposes in the Policy for you or to comply with our legal obligations. Your Personal Data begins to be processed from the moment we access your Personal Data.</li>
                                <li>We will cease storing your Personal Data by safely cancelling the Personal Data in accordance with the legal regulations and the Policy as soon as (i) there is a reasonable cause to believe that such storage no longer serves the Purposes for which the Personal Data was collected and is no longer necessary for any legal or business Purpose and/or (ii) the storage term of the information expires as regulated by law and/or (iii) there is a request from you regarding the cancellation of Personal Data, objection, restriction of Data Processing or withdrawal of consent for allowing Data Processing of yours.</li>
                                <li>Notwithstanding the regulations above, we may retain some of your Personal Data to exercise our rights or comply with the regulations in the Policy or comply with legal regulations.</li>
                            </ul>
                            <p id='rights' className='text-lg font-semibold py-6'>7. RIGHTS AND OBLIGATIONS OF CUSTOMERS</p>
                            <p className='font-semibold text-lg py-6'>7.1. Right to know</p>
                            <p className='text-base font-normal py-6'>You have the right to clearly, transparently, and fully know about how we Process your Data and includes information about what rights and obligations you have regarding the Personal Data when being Processed by us, except where the law stipulates otherwise.</p>
                            <p className='font-semibold text-lg py-6'>7.2. Right to consent and withdraw consent</p>
                            <ul className='font-normal text-base' style={{ paddingLeft: '50px', listStyleType: 'disc' }}>
                                <li>You have the right to consent to allow us to Process your Data according to this Policy (specifically, we rely on consent as the legal basis for Data Processing).</li>
                                <li>You have the right to withdraw your consent, except where the law stipulates otherwise, at any time by informing us about this (although if you withdraw your consent, it does not mean that the Data Processing of your Personal Data up to that point was unlawful).</li>
                            </ul>
                            <p className='font-semibold text-lg py-6'>7.3. Right to access and modify</p>
                            <ul className='font-normal text-base' style={{ paddingLeft: '50px', listStyleType: 'disc' }}>
                                <li>You have the right to access to view, edit, or request us to edit any Personal Data about you that we are processing, except where the law stipulates otherwise.</li>
                                <li>We are not responsible for issues arising in the case Personal Data provided by you (i) is forged/inaccurate (partially or wholly) or (ii) causes misunderstanding or (iii) is incomplete/ not comprehensive/ irrelevant or (iv) not updated to us about any changes to the Personal Data of you such as the information that you provided to us and/or other cases as regulated by law.</li>
                            </ul>
                            <p className='font-semibold text-lg py-6'>7.4. Right to delete data</p>
                            <p className='text-base font-normal py-6'>You have the right to request us to delete a part or all of your Personal Data, except where the law stipulates otherwise. Please note that this is not an absolute demand in all cases, as we may have legal grounds to retain your personal information to serve the Purpose of complying with legal regulations and/or requests from competent state agencies.</p>
                            <p className='font-semibold text-lg py-6'>7.5. Right to restrict Data Processing</p>
                            <p className='text-base font-normal py-6'>You have the right to request to limit the Processing we carry out regarding your Personal Data, except where the law stipulates otherwise. This right means that the extent to which we Process Data regarding your Personal Data will be limited, therefore, we may store the information but may not further use or process the information.</p>
                            <p className='font-semibold text-lg py-6'>7.6. Right to be provided data</p>
                            <p className='text-base font-normal py-6'>You may request us to provide a copy of your Personal Data that we have.</p>
                            <p className='font-semibold text-lg py-6'>7.7. Right to object to Data Processing</p>
                            <p className='text-base font-normal py-6'>You have the right to object to Data Processing of yours to prevent or restrict the disclosure of Personal Data or use for the Purpose of advertising, marketing, except where the law stipulates otherwise.</p>
                            <p className='font-semibold text-lg py-6'>7.8. Right to complain</p>
                            <p className='text-base font-normal py-6'>Customers have the right to submit complaints about the disclosure of personal information to a third party to the Management Board of the CourtStar website according to the contact information in section 12. Upon receiving these responses, CourtStar will verify the information and must have the responsibility to respond to the reason and guide customers to check and secure the information again.</p>
                            <p className='font-semibold text-lg py-6'>7.9. Right to request compensation for damages</p>
                            <p className='text-base font-normal py-6'>You have the right to request compensation for damages as regulated by law when there is a basis to believe that we violated the regulations protecting your Personal Data, except where the parties have a different agreement or the law stipulates otherwise.</p>
                            <p className='font-semibold text-lg py-6'>7.10. Right to self-defense</p>
                            <ul className='font-normal text-base' style={{ paddingLeft: '50px', listStyleType: 'disc' }}>
                                <li>You have the right to self-defense as regulated by the Civil Code and current laws, or request competent agencies, organizations to carry out methods to protect your civil rights as regulated by the Civil Code.</li>
                                <li>We always try to process your requests quickly, fairly, and transparently. However, we reserve the right to reject requests that are baseless, repetitive or violate our legitimate rights and interests or those of any third party or are outside the authority/scope of data processing of ours. We will notify you of the reason for the refusal and how to remedy it if possible.</li>
                                <li>You may exercise these rights by sending us an email at the "Contact Us" section and attach relevant documents (when we request and/or the law allows). If the request is made by someone other than you but this person does not provide proof that the request is made on your behalf legally and with your valid consent, then the request will be denied.</li>
                                <li>For your own privacy and information security, we may require you to verify your identity before responding to the exercise of the rights mentioned in Article 7 of this Policy from you.</li>
                            </ul>
                            <p className='font-semibold text-lg py-6'>7.11 Obligations of customers</p>
                            <ul className='font-normal text-base' style={{ paddingLeft: '50px', listStyleType: 'disc' }}>
                                <li>Provide full, accurate Personal Data when you agree for us to Process Data.</li>
                                <li>Respect, protect the Personal Data of others.</li>
                                <li>Comply with other legal requirements and obligations regarding data subjects as regulated by law.</li>
                            </ul>
                            <p className='font-semibold text-lg py-6'>7.12. Notes on potential unwanted consequences and damages</p>
                            <ul className='font-normal text-base' style={{ paddingLeft: '50px', listStyleType: 'disc' }}>
                                <li>If you exercise one or more of your rights as the Policy, then we (i) may not be able to perform the necessary actions to achieve the Purposes of processing described in the Policy for you; and/or (ii) may not be able to perform, enter into contracts we have been or are trying to sign with you; and/or (iii) may not be able to provide you with our services.</li>
                                <li>Your exercise of your rights and the unwanted consequences will be considered as termination from your side of any relationship you have with us, and/or a violation of obligations, commitments under the contract. To clarify, we explicitly reserve our legal rights and remedies in those cases and will not be liable to you for any loss, damage, claims, or lawsuits arising from your exercise of your rights as stated above.</li>
                            </ul>
                            <p id='protection' className='text-lg font-semibold py-6 pb-6'>8. DATA PROTECTION</p>
                            <p className='text-base font-normal py-6 pb-4'>We have implemented and continue to implement various technical and organizational measures to protect and secure your Personal Data, such as:</p>
                            <ul className='font-normal text-base' style={{ paddingLeft: '50px', listStyleType: 'disc' }}>
                                <li>The personal information of members  is absolutely confidential according to the personal information protection policy of CourtStar. The collection and use of information from each member are only performed with the consent of that customer unless otherwise specified by law.</li>
                                <li>Implement policies, rules on information security, and technical measures to protect Personal Data and comply with legal requirements.</li>
                                <li>Conduct security checks on systems and devices, equipment used to process Personal Data before processing, irreversibly delete or destroy devices containing Personal Data.</li>
                                <li>We also require our service providers, or other third parties we cooperate with and have disclosed your personal data to, to implement similar standards and measures on security, privacy, and data security when they Process your Data.</li>
                                <li>In the event that the server storing information is attacked by hackers leading to the loss of customer personal data, CourtStar will be responsible for notifying the incident to the authorities for timely investigation and informing the customers concerned.</li>
                            </ul>
                            <p id='cookies' className='text-lg font-semibold py-6'>9. COOKIES</p>
                            <ul className='font-normal text-base' style={{ paddingLeft: '50px', listStyleType: 'disc' }}>
                                <li>A cookie is a text file placed on your hard disk by a web server. Cookies are not used to run programs or deliver viruses to your computer. Cookies are uniquely assigned to your computer and can only be read by a web server in the domain that issued the cookie to you.</li>
                                <li>We use "cookies" to help personalize and maximize the efficiency of your online time when accessing the website CourtStar without having to re-register available information.</li>
                                <li>You may accept or decline cookies. Most browsers automatically accept cookies, but you can modify your settings to decline all cookies if you prefer. However, if you choose to decline cookies, this may interfere with and adversely affect some services and features dependent on cookies at the website/app.</li>
                            </ul>
                            <p id='updating' className='text-lg font-semibold py-6'>10. UPDATING THE DATA PROTECTION POLICY</p>
                            <ul className='font-normal text-base' style={{ paddingLeft: '50px', listStyleType: 'disc' }}>
                                <li>We may review, modify, or automatically update this Policy on our websites CourtStar at our sole discretion at any time, to ensure that updates are consistent with our business operations as well as compliance with changes in legal regulations. If these changes are significant, we will provide a more noticeable notification (through a general announcement published on the website CourtStar or to the email address you provided).</li>
                                <li>You agree that you are responsible for regularly reviewing this Policy to stay informed about how we are Processing your Data and thus, your continued use of the website CourtStar or use of the services we provide after any modification to this Policy will constitute your consent to this Policy and all modifications (if any) and the Processing of your Data under this Policy and all modifications (if any).</li>
                            </ul>
                            <p className='text-lg font-semibold py-6'>CONSENT</p>
                            <ul className='font-normal text-base' style={{ paddingLeft: '50px', listStyleType: 'disc' }}>
                                <li>Please read this policy carefully and ensure that you have read, understood the entire content of the Policy, and agree, allowing us to Process your Data as regulated in this Policy.</li>
                                <li>If you do not agree with any content in the Policy, please do not continue to access the website or provide/send Personal Data to us. You have the right to submit your feedback, complaints, and inquiries at the section “CONTACT US” for clarification.</li>
                            </ul>
                        </div>


                    </div>






                </div>
            </div>

        </div>
    );
}

export default PrivacyPolicy;
