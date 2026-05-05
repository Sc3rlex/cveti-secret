// Header.jsx — Cveti's Secret · matches reference design
const Header = ({ activePage, onNavigate }) => {
  const navLinks = [
    { id: 'home', label: 'Начало' },
    { id: 'services', label: 'Услуги' },
    { id: 'salon', label: 'Салонът' },
    { id: 'contact', label: 'Контакти' },
  ];

  return (
    <header style={{
      position: 'fixed',
      top: 0, left: 0, right: 0,
      zIndex: 100,
      background: 'rgba(10,10,10,0.96)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid rgba(255,255,255,0.06)',
      height: '64px',
      display: 'flex',
      alignItems: 'center',
      padding: '0 36px',
    }}>
      {/* Logo — left */}
      <div
        onClick={() => onNavigate('home')}
        style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0', flexShrink: 0 }}
      >
        <span style={{
          fontFamily: "'Cinzel', serif",
          fontSize: '15px',
          fontWeight: 600,
          letterSpacing: '0.08em',
          color: '#f0e8d0',
          whiteSpace: 'nowrap',
        }}>Cveti's Secret</span>
      </div>

      {/* Vertical divider */}
      <div style={{
        width: '1px',
        height: '22px',
        background: 'rgba(255,255,255,0.25)',
        margin: '0 28px',
        flexShrink: 0,
      }} />

      {/* Nav — right of divider */}
      <nav style={{ display: 'flex', gap: '36px', alignItems: 'center' }}>
        {navLinks.map(link => (
          <span
            key={link.id}
            onClick={() => onNavigate(link.id)}
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: '12px',
              letterSpacing: '0.06em',
              color: activePage === link.id ? '#c9a84c' : 'rgba(240,232,208,0.75)',
              cursor: 'pointer',
              transition: 'color 0.3s ease',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={e => e.target.style.color = '#c9a84c'}
            onMouseLeave={e => e.target.style.color = activePage === link.id ? '#c9a84c' : 'rgba(240,232,208,0.75)'}
          >{link.label}</span>
        ))}
      </nav>

      {/* Spacer */}
      <div style={{ flex: 1 }} />
    </header>
  );
};

Object.assign(window, { Header });
