import { useState } from "react";
import "./Faqabc.css";
export default function Faq() {
  const faqs = [
    {
      questions: "What kind of church is RCCG Goshen?",
      answers:
        "RCCG Goshen is a parish of the Redeemed Christian Church of God (RCCG), a Bible-believing, Holy Spirit-led church where people grow in faith, experience God’s love, and discover purpose. Our mission is simple: to make heaven and help as many people as possible get there.",
    },
    {
      questions: "How can I contact or reach the church?",
      answers:
        "You can reach us through our Contact Us page, where you’ll find our address, phone number, and email. You can also connect with us on social media for updates, announcements, and encouragement throughout the week.",
    },
    {
      questions: "Do you stream your services live?",
      answers:
        "Yes! You can join us from anywhere through our live coverage every Sunday via our YouTube channel and Facebook page. We also post past sermons so you can watch or rewatch at your convenience.",
    },
    {
      questions: "What should I expect when I visit?",
      answers:
        "You’ll be warmly welcomed by a loving community. Expect uplifting worship, inspiring messages, and a family atmosphere where everyone feels at home. Whether it’s your first time or you’ve been attending for years, you belong here.",
    },
    {
      questions: "What time are your services?",
      answers: "By 8PM",
    },
  ];
  return (
    <div className="faq-section">
      <div className="faq-heading text-center">
        <h3>Frequently Asked Questions</h3>
        <p>
          Answers to the most common questions about our services and solutions.
        </p>
      </div>
      <div className="faq-container">
        {faqs.map((faq, value) => {
          return <Accordion faq={faq} value={value} key={value} />;
        })}
      </div>
    </div>
  );
}
function Accordion({ faq, value }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={`faq ${isOpen && "open"}`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <p className="number">{value < 10 ? `0${value + 1}` : `${value + 1}`}</p>
      <p className="heading">{faq.questions}</p>
      <p className="sign">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="info">{faq.answers}</div>}
    </div>
  );
}
