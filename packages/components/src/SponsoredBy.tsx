import React, { CSSProperties } from 'react'

const divStyle: CSSProperties = {
  display: 'flex',
  backgroundColor: '#3e1856',
  height: '50px',
  minHeight: '50px',
  padding: '0 0.25rem',
  marginBottom: '1rem',
}

const innerDivstyle: CSSProperties = {
  display: 'flex',
}

const aStyle: CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '100%',
  width: '100%',
}

const spanStyle: CSSProperties = {
  color: '#ffffff',
  fontSize: '10px',
  marginRight: '2rem',
}

const h2Style: CSSProperties = {
  fontFamily: 'Coolvetica, sans-serif',
  letterSpacing: '2px',
  color: '#f5b829',
  fontSize: '1rem',
  lineHeight: '1.5rem',
  fontWeight: '700',
  margin: 'auto 0.5rem',
}

const h3Style: CSSProperties = {
  fontFamily: 'Coolvetica, sans-serif',
  letterSpacing: '2px',
  color: '#f5b829',
  fontSize: '12px',
  lineHeight: '14px',
  fontWeight: '400',
}

interface SponsoredByProps {
  classes: string
}

export const SponsoredBy = ({ classes }: SponsoredByProps) => (
  <div style={divStyle} className={classes}>
    <a style={aStyle} href="https://tabletop.land" target="_new">
      <div style={innerDivstyle}>
        <span style={spanStyle}>Built &amp; Sponsored By</span>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://storage.googleapis.com/tabletopland/tabletopland.png"
          width="109"
          height="42"
          alt="tabletop.land"
        />
        <h2 style={h2Style}>Tabletop.Land</h2>
      </div>
      <h3 style={h3Style}>Buy &amp; Sell tabletop terrain, miniatures, or accessories!</h3>
      <div />
      <div />
      <div />
    </a>
  </div>
)
