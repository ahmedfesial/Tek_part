import React from 'react'
import { Outlet } from 'react-router-dom'
import LeftBanner from '../LeftBanner/LeftBanner'
import SideBar from '../SideBar/SideBar'
import TitlesPage from '../TiltesPage/TitlesPage'

export default function Layout() {
  return <>

  <div className="grid grid-cols-[379px_1fr_5px] md:grid-cols-[379px_1fr_131px]">
    <LeftBanner/>
    <Outlet />
    <TitlesPage/>
    <SideBar/>
  </div>
  </>
}
