// 39-6 (Recap) Load Dynamic Data, API Call UseEffect Integrate State

// Display object data.
export default function Friend({ friend }) {
    return (
        <div>

            <div className="box">
                <p>Name: {friend.name}</p>
                <p>User Name: {friend.username}</p>
                <p>Email: {friend.email}</p>

            </div>
        </div>
    )

}