# Medical Devices (MDR)

In this article we will sum up the most important key facts you should know about the Medical Device Regulation (MDR)

## What is a medical device software?

A 'medical device' means any (...) software (...) intended by the manufacturer to be used, alone or in combination, for human beings for one or more of the following specific medical purposes: diagnosis, prevention, monitoring, prediction, prognosis, treatment or alleviation of disease. For full definition see MDR Article 2 (1).
In plain language: Your software tries to improve the health of patient? Odds are, that your software is regulated by the MDR as medical device software.


#### [Does my CDSS fulfill the definition as a medical device?](overview.md#does-my-cdss-fulfill-the-definition-as-a-medical-device)
> “Clinical Decision Support Systems are medical device software, as long as they don't just display raw data (e.g. laboratory value is displayed without changes, calculations or recommendations). The last clause is very theoretical - we've never seen a CDSS that isn't medical device software. However, the situation is different in other legislation (e.g. FDA) outside the EU. “

### Is the MDR the only regulation that matters?

No. You will need to follow: MDR > [AI Act](ai-act.md) > [GDPR](data-protection.md) (in order of workload)

### What is the aim of the MDR?

- Fair competition among medical device manufacturers
- Protecting citizens from products that, relative to their benefits, may pose excessive health risks

### What is NOT the aim of the MDR?

- A quality mark, which guarantees that the product genuinely helps the patient.
- Increasing evidence and assessing effectiveness

There is no equivalent to an EMA-like organization in the market of medical devices. Benefits are needed only to justify risk. Your product comes with low risks? Then the MDR CE mark is virtually independent of evidence that somebody will benefit. Your product comes with high risks? Then the MDR CE mark means that you were able to demonstrate to a 'notified body' that patients could benefit. At least some evidence here, but scientist be aware: these are rarely published, industry-funded studies and endpoints often differ significantly from marketing claims.

## How can I obtain MDR compliance?

There are two main ways to reach it. Most commonly, you develop your product as manufacture and get certified by a 'notified body' (e.g. TÜV). You obtain a CE mark for your product and you can sell it throughout Europe. Second commonly, you develop your product as health care facility as [in-house medical device.](in-house-mdsw.md) This means less bureaucracy and no involvement of a 'notified body', but it is prohibited to place it on the market. If you're in the process of building such an in-house medical device software, this wiki is the exact right place for you!

## Can I publish my MDR-compliant software as open source software?

When searching for 'medical device software' and 'open source', you usually find information on how to integrate OSS as SOUP into your medical device software. However, this does not answer the question posed. Here is the proper response: Worldwide, there is currently only a single medical device software published open source (Tidepool, USA, FDA clearance). A corresponding open-source release of a CE-marked product under the MDR [is analogously possible](https://doi.org/10.1111/dme.15246). For in-house devices, it is more complex. Here, some interpretations assume that an open-source release of an in-house device constitutes a "placement on the market" and is therefore prohibited. To avoid this uncertainty, we have developed a [regulatory framework](open-source.md) detailing how scientists (and others) can publish in-house devices partially as open source, yet in a way that still ensures transparency and reproducibility.

## What is the regulatory status of the frequently cited MDCG guidance documents?

Although MDCG guidance documents are not legally binding, courts reference them as authoritative indicators for interpreting regulatory criteria, giving them practical binding effect in regulatory enforcement. In short: MDCG guidance documents are not legally binding, but regulators enforce them as if they were.