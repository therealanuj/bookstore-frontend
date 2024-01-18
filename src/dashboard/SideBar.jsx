import React, { useContext } from 'react'
import userImage from "../assets/profile.jpg"
import { Sidebar } from 'flowbite-react';
import { BiBuoy } from 'react-icons/bi';
import { HiArrowSmRight, HiChartPie, HiInbox, HiOutlineCloudUpload, HiShoppingBag, HiTable, HiUser, HiViewBoards } from 'react-icons/hi';
import { AuthContext } from '../contexts/AuthProvider';

const SideBar = () => {
    const { user } = useContext(AuthContext)

    return (
        <div>
            <Sidebar aria-label="Sidebar with content separator example">
                <div className='flex'> {user?.photoURL && <Sidebar.Logo href="#" img={user?.photoURL} imgAlt="picture">

                </Sidebar.Logo>}
                    <p className='mb-10 my-5'>{user?.displayName ? user?.displayName : user?.email}</p>
                </div>
                <Sidebar.Items>
                    <Sidebar.ItemGroup>
                        <Sidebar.Item href="/" icon={HiUser}>
                            Home
                        </Sidebar.Item>
                        <Sidebar.Item href="/user/dashboard" icon={HiChartPie}>
                            Dashboard
                        </Sidebar.Item>
                        <Sidebar.Item href="/user/dashboard/upload" icon={HiOutlineCloudUpload}>
                            Upload Book
                        </Sidebar.Item>
                        <Sidebar.Item href="/user/dashboard/manage" icon={HiInbox}>
                            Manage Books
                        </Sidebar.Item>
                        {(user?.email == "admin@admin.com") && <Sidebar.Item href="/user/dashboard/manage-all" icon={HiInbox}>
                            Manage All Books
                        </Sidebar.Item>}

                        <Sidebar.Item href="/shop" icon={HiShoppingBag}>
                            Shop
                        </Sidebar.Item>
                        <Sidebar.Item href="/login" icon={HiArrowSmRight}>
                            Sign In
                        </Sidebar.Item>
                        <Sidebar.Item href="/logout" icon={HiTable}>
                            Log Out
                        </Sidebar.Item>
                    </Sidebar.ItemGroup>

                </Sidebar.Items>
            </Sidebar>
        </div>
    )
}

export default SideBar