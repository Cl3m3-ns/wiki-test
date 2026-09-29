# Overview: The Regulatory Implementation Guide

Welcome! This regulatory implementation guide helps you to build your own MDR-compliant in-house Clinical Decision Support System. It starts with some basic knowledge you need. By the end, you'll know how to handle most of the pitfalls and how to use your new in-house medical device software in studies to generate more evidence.
![509](Images/Overview_AMPEL_Wiki_RF.png)

**Table of Contents:**
1. [Medical devices (MDR)](mdr-medical-devices.md)
2. [AI Act](ai-act.md)
3. [In-house medical device software (MDSW)](in-house-mdsw.md) 
4. [Quality management system (QMS)](quality-management-system.md)
5. [Data protection (GDPR)](data-protection.md)
6. [Studies](studies.md)
7. [Open source](open-source.md)
8. [Practical advice](practical-advice.md)
9. [More resources](resources.md)

## Why should I build an MDR-compliant in-house software?
Fortunately, there is a simple answer here. You want to use a software, which fulfills the definition as medical device, in routine care, or you want to study the influence of this software with patient outcomes? But your use case is so innovative, that there is no such CE-marked Software on the market? Then the only possibility you have left is to build your own. To push innovations, MDR Article 5 allows health care facilities many privileges building [in-house medical device software](in-house-mdsw.md). To be honest, it still involves a lot of work to develope it. Luckily, you've already found this platform. It will give you all you need to reach your goal as quickly as possible.

## Does my CDSS fulfill the definition as a medical device?
Clinical Decision Support Systems are [medical device software](mdr-medical-devices.md), as long as they don't just display raw data (e.g. laboratory value is displayed without changes, calculations or recommendations). The last clause is very theoretical - we've never seen a CDSS that isn't medical device software. However, the situation is different in other legislation (e.g. FDA) outside the EU.

## Are there other ways?
Not in routine care, but there are other pathways in [studies](studies.md). However, there are significant limitations conducting a study avoiding the use of a medical device software. These alternatives generally result in lower "evidence levels" because they cannot collect patient outcomes.

## Let's go! Where can I start? (==links outstanding==)
Just read the wiki. If it helps you, feel free to take a look at the the technical documentation (the quality management system documents), the technical implementation guide, and the source code as well. You might also find it helpful to take a look at our evidence collection. We try to avoid any redundancies, so the best way is to read all documents(!) here once. Your question is still open? Create an *issue* in our repository (maybe you have to create an GitHub account first) and write us your open question -  we will answer!