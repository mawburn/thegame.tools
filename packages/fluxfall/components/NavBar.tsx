import { NavBar as Nav } from '@thegametools/components'

const links = [
  { url: '/', render: 'Home' },
  {
    url: '/world',
    className: 'hidden',
    render: (
      <>
        World <span className="md:pl-1 md:not-sr-only sr-only">Gen</span>
      </>
    ),
  },
  {
    url: '/person',
    className: 'hidden',
    render: (
      <>
        Person <span className="md:pl-1 md:not-sr-only sr-only">Gen</span>
      </>
    ),
  },
  {
    url: '/booncomps',
    className: 'hidden',
    render: (
      <>
        Boon / Comp <span className="md:pl-1 md:not-sr-only sr-only">Gen</span>
      </>
    ),
  },
]

const NavBar = () => <Nav subText="For Fluxfall Horizon" links={links} />

export default NavBar
