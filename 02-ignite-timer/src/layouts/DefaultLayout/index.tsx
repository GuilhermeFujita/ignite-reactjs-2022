import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'
import { LayoutCountainer } from './styles'

export function DefaultLayout() {
  return (
    <LayoutCountainer>
      <Header />
      <Outlet />
    </LayoutCountainer>
  )
}
