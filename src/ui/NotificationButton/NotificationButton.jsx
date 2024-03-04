import  { useState } from "react";
import { IoIosNotifications } from "react-icons/io";

const NotificationButton = () => {
  const [activeTab, setActiveTab] = useState(null);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <button onClick={() => handleTabClick("Notification")}>
        <IoIosNotifications className="text-24 ml-3" />
      </button>
      <button onClick={() => handleTabClick("Message")}>Message</button>

      {activeTab === "Notification" && <NotificationContent />}
      {activeTab === "Message" && <MessageContent />}
    </div>
  );
};

const NotificationContent = () => {
  return <div>Notification Content</div>;
};

const MessageContent = () => {
  return <div>Message Content</div>;
};

export default NotificationButton;
