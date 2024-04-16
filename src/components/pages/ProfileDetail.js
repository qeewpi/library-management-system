import React from 'react'

function ProfileDetail() {
return (
    <div className="text-xl bg-white font-semibold p-6 rounded-xl">
        <div className="border-b-4">
            <h1>
                <span className="text-primaryblack">Profile</span>
            </h1>   
                <span className="text-gray-500 text-base">Update your personal details here.</span>
        </div>

        <div className="border-b-4">
            <h1>
                <span className="text-primaryblack">Username</span>
            </h1>
        </div>
    </div>
)
}

export default ProfileDetail