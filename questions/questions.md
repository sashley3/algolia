*Question 1*  

 
From: marissa@startup.com  
Subject:  Bad design  

Hello,  
  
Sorry to give you the kind of feedback that I know you do not want to hear, but I really hate the new dashboard design. Clearing and deleting indexes are now several clicks away. I am needing to use these features while iterating, so this is inconvenient.  
   
Thanks,  
Marissa  

--

Hey Marissa, thanks for your message. We welcome your feedback as it helps us improve our product for other customers such as yourself, and we especially appreciate that your feedback was constructive in nature. 

Our Product team is constantly working to make Algolia the best it can be. Part of their job involves making tough decisions on what features to prioritize, and while I know the new dashboard design wasn't exactly what you were looking for, I'd like to assure you that a lot of care and thought went into its design. 

Additionally, I wanted to provide a few thoughts and ideas to offer some assistance:

- It sounds like you have hands-on experience with the Algolia dashboard, but just a reminder that you can use the Clear option to maintain settings of a current Index, or alternatively use Delete to remove the index completely.

- Some of our customers have found it useful to create an index specifically for testing, and then periodically clearing as needed. 

- Algolia was initially created as an API-first platform, with much of our features and documentation geared towards creating a best-in-class developer experience. One of the benefits of this is that it allows your development team the full flexibility to create sophisticated custom applications that interact with your Index in ways that fit your particular business needs.

In the past, we've had customers develop test scripts for deletion of test records, which I know would be useful for the particular scenario you’ve described. Below is the relevant documentation if you're interested in working with your dev team towards a programmatic solution, but please let me know if I can elaborate or provide any additional clarification:

https://www.algolia.com/doc/api-reference/api-methods/delete-by/

Kind Regards,
Sunny




  
--

*Question 2*:   
  
From: carrie@coffee.com  
Subject: URGENT ISSUE WITH PRODUCTION!!!!  
  
Since today 9:15am we have been seeing a lot of errors on our website. Multiple users have reported that they were unable to publish their feedbacks and that an alert box with "Record is too big, please contact enterprise@algolia.com".  
  
Our website is an imdb like website where users can post reviews of coffee shops online. Along with that we enrich every record with a lot of metadata that is not for search. I am already a paying customer of your service, what else do you need to make your search work?  
  
Please advise on how to fix this. Thanks.   

--

Hi Carrie, thank you for providing those details. I’d be happy to assist you today.

Algolia will by default limit record size to optimize your account’s performance, and different account plans have different limits. The “Record is too big” alert is triggered whenever individual records exceed your account’s maximum record size. 

As I know you’re seeking an immediate solution, the quickest way to avoid the alert message is to remove any unused attributes (i.e. metadata that does not need to be searchable) prior to indexing your data.

Below are the current specific account limits for record size:

For Standard and Premium plans:
- 100 KB for any individual record
- 10 KB average record size across all records
For legacy plans (before July 1, 2020):
- 10 KB for Pro, Starter, or Free accounts
- 20 KB for Essential and Plus


As your business continues to grow in the long-term, you may find that your business’s needs evolve and that you require a larger maximum record size. 

If this is the case for your company, you may be interested in our Business and Enterprise accounts which have a 100 KB customizable limit. If this is an option you’re interested in exploring in the future, please reach out to enterprise@algolia.com and our Enterprise team would be happy to provide more details on the upgrade.

Kind Regards,
Sunny



  
--

*Question 3*:   


From: marc@hotmail.com  
Subject: Error on website  
  
Hi, my website is not working and here's the error:  
  
![error message](./error.png)  
  
Can you fix it please?  
--


Hello Marc, thank you for your message today.

I’ve reviewed the error message from your attached screenshot and I’d be eager to assist. However, it appears that the error in question is referencing a non-Algolia product or featureset.

So that I could better assist you, could you provide me with some additional information on what you’re looking to accomplish? 

Algolia provides several out-of-the-box widgets and features that makes implementation of a search solution relatively painless. Algolia excels at speed, relevance, and availability, and many of our customers are able to save considerable time getting up and running when compared to other code-heavy options. 

In addition to performance and reliability, there are also plenty of third-party integrations and advanced filtering options to customize your Algolia instance to your business’s particular needs. 

Ultimately we’re here to help, so please let me know if any of this sounds like it would be relevant to what you were trying to accomplish before you ran into this error message.

