import "./ChatContent.css";
import userAvatar from "../../../assets/user-avatar.png";

const ChatContent = () => {
    const message: string = "Chat content";
    const messageDate: string = "06/25/2022 10:59 AM";

    return (
        <div className="chat-main">
            <div className="chat-main-wrap">
                <ul className="chat-messages">

                    <li className="chat-message">
                        <div className="chat-message-header">
                            <img className="author-avatar" src={userAvatar} alt="avatar" />
                        </div>
                        <div className="chat-message-wrap">


                            <div className="chat-message-body">
                                <div className="chat-message-metadate">
                                    <span className="chat-message-author">Jane Doe. I'm a full stack web developer.</span>
                                    <span className="message-date">
                                        {messageDate}
                                    </span>
                                </div>
                                <div className="chat-message">
                                    <p>
                                        {message}
                                    </p>
                                </div>
                            </div>

                        </div>
                    </li>

                    <li className="chat-message">
                        <div className="chat-message-header">
                            <img className="author-avatar" src={userAvatar} alt="avatar" />
                        </div>
                        <div className="chat-message-wrap">


                            <div className="chat-message-body">
                                <div className="chat-message-metadate">
                                    <span className="chat-message-author">Jane Doe. I'm a full stack web developer.</span>
                                    <span className="message-date">
                                        {messageDate}
                                    </span>
                                </div>
                                <div className="chat-message">
                                    <p>
                                        {message}
                                    </p>
                                </div>
                            </div>

                        </div>
                    </li>

                    <li className="chat-message">
                        <div className="chat-message-header">
                            <img className="author-avatar" src={userAvatar} alt="avatar" />
                        </div>
                        <div className="chat-message-wrap">


                            <div className="chat-message-body">
                                <div className="chat-message-metadate">
                                    <span className="chat-message-author">Jane Doe. I'm a full stack web developer.</span>
                                    <span className="message-date">
                                        {messageDate}
                                    </span>
                                </div>
                                <div className="chat-message">
                                    <p>
                                        {message}
                                    </p>
                                </div>
                            </div>

                        </div>
                    </li>

                </ul>
            </div>

            <div className="chat-form">
                <div className="chat-form-wrap">
                    <div className="chat-form-body">
                        <form>
                            <div className="chat-form-input-wrap">
                                <input type="text" className="chat-form-input" placeholder="Type a message" />
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChatContent;