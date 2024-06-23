const data = [
  {
    id: 1,
    question1: "Q: What is a refurbished phone?",
    answer1:
      "A refurbished phone is a device that has been previously owned or used but has undergone repairs, testing, and restoration to ensure it meets manufacturer specifications and functions like new. Refurbished phones are typically sold at a lower price than brand new devices.",
  },
  {
    id: 2,
    question1: "Q: Are refurbished phones reliable?",
    answer1:
      "Refurbished phones can be reliable if they have been properly refurbished by reputable sellers or manufacturers. Before being resold, refurbished phones undergo rigorous testing and quality control processes to ensure they are in good working condition. However, reliability may vary depending on the refurbishment process and the seller's reputation.",
  },
  {
    id: 3,
    question1:
      "Q: What is the difference between a refurbished phone and a used phone?",
    answer1:
      "The main difference between a refurbished phone and a used phone lies in their condition and refurbishment process. Refurbished phones have been repaired, tested, and restored to a like-new condition, while used phones are typically sold as-is without any repairs or refurbishment.",
  },
  {
    id: 4,
    question1: "Q: Can I return a refurbished phone if I'm not satisfied?",
    answer1:
      "Whether you can return a refurbished phone if you're not satisfied depends on the seller's return policy. Many reputable sellers like MobileGoo offer return or exchange options within a specified period, allowing customers to return the device if they encounter any issues or are not satisfied with their purchase.",
  },
  {
    id: 5,
    question1: "Q: Are refurbished phones less expensive than new phones?",
    answer1:
      "Refurbished phones are generally cheaper than new phones because they have been previously owned or used. The cost savings can vary depending on factors such as the device's condition, age, and specifications. However, purchasing a refurbished phone can offer significant savings compared to buying a brand new device.",
  },
  {
    id: 6,
    question1: "Q: Can I get a warranty for a refurbished phone?",
    answer1:
      "Yes, it is possible to get a warranty for a refurbished phone. Many reputable sellers and manufacturers like MobileGoo offer warranties on refurbished devices to provide customers with peace of mind. The warranty terms may vary, so it's important to check the warranty coverage and duration before purchasing a refurbished phone.",
  },
  {
    id: 7,
    question1:
      "Q: How do I know if a refurbished phone is compatible with my carrier?",
    answer1:
      "To determine if a refurbished phone is compatible with your carrier, you can check the phone's specifications and ensure that it supports the network bands and technology (e.g., GSM, CDMA) used by your carrier. Additionally, you can contact your carrier directly or consult their website to verify compatibility.",
  },
  {
    id: 8,
    question1: "Q: Can I unlock a refurbished phone?",
    answer1:
      "Yes, in most cases, you can unlock a refurbished phone. Depending on the phone's model and the carrier it was originally locked to, you may be able to unlock it through the carrier's policies, third-party unlocking services, or by contacting the manufacturer.",
  },
  {
    id: 9,
    question1: "Q: Can I transfer my data from my old phone to a refurbished phone?",
    answer1:
      "Yes, you can transfer your data from your old phone to a refurbished phone. You can use various methods such as transferring data wirelessly through cloud services, using a computer and USB cable, or utilizing backup and restore features built into the operating systems of both phones.",
  },
  {
    id: 10,
    question1:
      "Q: How long does it take to receive a refurbished phone after ordering?",
    answer1:
      "The time it takes to receive a refurbished phone after ordering varies depending on factors such as the processing time, shipping method selected, and your location. Typically, we take very little time for the phone to be delivered.",
  },
  {
    id: 11,
    question1: "Q: Can I pay in installments for a refurbished phone?",
    answer1:
      "Whether you can pay in installments for a refurbished phone depends on the payment options and policies. Some sellers offer financing or installment plans, allowing you to spread out the cost of the phone over time. Be sure to check the website or contact customer service for information on payment options.",
  },
  {
    id: 12,
    question1: "Q: How do I know if a refurbished phone is authentic?",
    answer1:
      "To ensure that a refurbished phone is authentic, purchase from reputable sellers or manufacturers like MobileGoo who specialize in refurbished devices. Look for certifications, warranties, and return policies that guarantee the authenticity and quality of the refurbished phone. Additionally, verify the phone's IMEI or serial number with the manufacturer's database to confirm its authenticity.",
  },
  {
    id: 13,
    question1: "Q: Can I trade in my old phones for refurbished phones?",
    answer1:
      "Yes, we offer trade-in programs where you can exchange your old phone for credit towards the purchase of a refurbished phone or another device. This can be a convenient way to upgrade to a refurbished phone while also responsibly disposing of your old device.",
  },
  {
    id: 14,
    question1: "Q: How do I reset a refurbished phone to its factory settings?",
    answer1: `To reset a refurbished phone to its factory settings, you can typically find the option in the phone's settings menu. Look for an option like "Backup & reset" or "Reset" and select "Factory data reset." Follow the on-screen prompts to confirm the reset, which will erase all data and restore the phone to its original factory settings.`,
  },
  {
    id: 15,
    question1: "Q: Can I get technical support for a refurbished phone?",
    answer1:
      "Yes, you can often get technical support for a refurbished phone from MobileGoo. We offer customer support services to assist with setup, troubleshooting, and any issues you may encounter with your refurbished phone. You can typically reach out to us via phone, email, or live chat for assistance.",
  },
  {
    id: 17,
    question1: "Q: What are unboxed phones?",
    answer1:
      "Unboxed phones are devices that have been removed from their original packaging but have never been used. They are essentially brand new but may have been opened for various reasons such as display purposes, customer returns, or inventory clearance.",
  },
  {
    id: 18,
    question1: "Q: How are unboxed phones different from refurbished phones?",
    answer1:
      "Unboxed phones differ from refurbished or old phones in that they have never been used. Refurbished phones have been repaired or restored to a like-new condition after being used or returned, while old phones may have significant wear and tear from previous use.",
  },
  {
    id: 19,
    question1: "Q: Do unboxed phones come with a warranty?",
    answer1:
      "Whether unboxed phones come with a warranty depends on the seller or manufacturer. Some retailers may offer a limited warranty on unboxed phones, while others may not provide any warranty coverage. It's important to check the warranty terms before purchasing.",
  },
  {
    id: 20,
    question1: "Q: What is the difference between new and unboxed phones?",
    answer1:
      "The main difference between new and unboxed phones is that new phones are sealed in their original packaging and have never been opened, while unboxed phones have been removed from their packaging but are otherwise unused. Functionally, there should be no difference between the two.",
  },
  {
    id: 21,
    question1: "Q: Are unboxed phones cost-effective?",
    answer1:
      "Unboxed phones can be cost-effective compared to new phones because they are typically sold at a discount. Since they have never been used, they offer a similar experience to new phones but at a lower price point. However, the exact savings may vary depending on the seller and the specific device.",
  },
  {
    id: 22,
    question1: "Q: What is the condition of unboxed phones?",
    answer1:
      "The condition of unboxed phones is generally pristine, as they have never been used. However, there may be minor cosmetic imperfections or blemishes due to handling or storage outside of the original packaging. It's important to carefully inspect the device before purchasing to ensure that it meets your expectations.",
  },
  {
    id: 23,
    question1: "Q: What are unboxed/open box phones?",
    answer1: `At times, people who are fond of using the latest technology or change phones frequently may simply return or sell their phones after opening new packaging but with no or minimal usage. Such phones are categorized as "open box/unboxed phones".

    You may feel relaxed while buying open box phones, as they are just like new and come with extra savings. Buy Unbox, Buy Smart!!!
    
    As the seal of the phone is opened, they cannot be categorized as "New Phone." We have categorized such phones as "Unboxed Phones/Open Box Phones."`,
  },
  {
    id: 24,
    question1:
      "Q: How are unboxed/open box phones different from refurbished/old phones?",
    answer1: `Brand/Manufacturer Warranty:

            At Mobilehub.shop, if you buy any unboxed/open box phone, it will come with Brand/Manufacturer warranty. The warranty period may vary from 0-12 months. However, in the case of other old/refurbished phones, there is no brand warranty. However, such phones come with Mobilegoo warranty.
            
            Original Box:
            
            Unboxed/Open box phones come in the original brand box generally, however, other old/refurbished phones come with Mobilehub box.
            
            Condition:
            
            Open box phones always come in like new/superb condition i.e. having 1-2 minor scratches but no dents. However, the condition of other old/refurbished phones may vary.
            
            Original Parts Etc.:
            
            Open box phones come intact and have 100% original parts including battery, camera, display, etc. Also, these phones are never repaired and never tampered with. However, old/refurbished smartphones may have undergone minor repairs/replacements but are restored to their original working condition.`,
  },
  {
    id: 25,
    question1: "Q: What is the difference between new and unboxed phones?",
    answer1:
      "Technically, there is no difference. New phones are sealed box phones, however, unboxed phones are open box and have minimal signs of usage but look like new and come with brand warranty like new phones.",
  },
];

export default data;
