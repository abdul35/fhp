import ChatContent from "./ChatContent/ChatContent";
import ChatHeader from "./ChatHeader/ChatHeader";
import "./Chat.css"
import ChatMembers from "./ChatMembers/ChatMembers";

const Chat = (): JSX.Element => {
    return (
        <section className="chat">
            <ChatHeader />
            <div className="content">
                <ChatContent />
                <ChatMembers />
            </div>
        </section>
    );
}

export default Chat;