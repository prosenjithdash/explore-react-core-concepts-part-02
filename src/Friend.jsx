// 39-6 (Recap) Load Dynamic Data, API Call UseEffect Integrate State

// Display object data.
export default function Friend({ friend }) {
    const { name, username, email } = friend;
    return (
        <div>

            <div className="box">
                <p>Name: {name}</p>
                <p>User Name: {username}</p>
                <p>Email: {email}</p>

            </div>
        </div>
    )

}