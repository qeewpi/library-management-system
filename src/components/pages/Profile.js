import React from 'react'
import SideNavBar from "components/SideNavBar";
import NavBar from "../NavBar";
import ProfileDetail from './ProfileDetail';
function Profile() {
return (
    <div>
        <div className="sticky top-0">
            <NavBar />
        </div>

        <div className="flex h-ful">
            <div className="hidden md:flex flex-col flex-grow w-3/12 md:w-4/12">
                <SideNavBar />
            </div>
            <div className="contentDiv px-8 py-16 flex flex-col flex-grow h-full w-full bg-[#EDEDED] gap-y-6">
                <div className="w-full">
                    <ProfileDetail />
                </div>
            </div>
        </div>
    </div>
);
}

export default Profile