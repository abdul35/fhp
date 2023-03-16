import "./ChatMembers.css"
import userAvatar from '../../../assets/user-avatar.png';

const ChatMembers = () => {
    const onlineMembersCount = 4;
    const offlineMembersCount = 0;

    return (
        <aside className="chat-members">
            <div className="chat-members-wrap">
                <div className="members-online-wrap">
                    <h3 className="members-group">ONLINE — {onlineMembersCount}</h3>
                    <ul className="online-members">
                        <li className="online-member member">
                            <img className="member-img" src={userAvatar} alt="member-image" />
                            <span className="member-name">Jane Doe</span>
                        </li>
                    </ul>
                </div>
                <div className="members-offline-wrap">
                    <h3 className="members-group">OFFLINE — {offlineMembersCount}</h3>
                    <ul className="offline-members">
                        <li className="offline-member member">
                            <img className="member-img" src={userAvatar} alt="member-image" />
                            <span className="member-name">Jane Doe</span>
                        </li>
                    </ul>
                </div>
            </div>
        </aside>
    );
}

export default ChatMembers;