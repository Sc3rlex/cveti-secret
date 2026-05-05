// Team.jsx — Cveti's Secret team section
const TEAM = [
  { id: 1, name: 'Цвети Иванова', role: 'Основател & Стилист' },
  { id: 2, name: 'Мария Петрова', role: 'Колорист' },
  { id: 3, name: 'Елена Георгиева', role: 'Маникюрист' },
  { id: 4, name: 'Николета Димова', role: 'Гримьор' },
];

const TeamMember = ({ member }) => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', gap: '14px',
        cursor: 'pointer',
        transition: 'all 0.4s ease',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
      }}
    >
      {/* Avatar ring */}
      <div style={{
        width: '130px', height: '130px',
        borderRadius: '50%',
        background: 'linear-gradient(135deg, #2a1e08 0%, #1a1208 50%, #1a1a1a 100%)',
        boxShadow: hovered
          ? '0 0 0 3px #c9a84c, 0 0 28px rgba(201,168,76,0.65)'
          : '0 0 0 3px #c9a84c, 0 0 12px rgba(201,168,76,0.4)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        transition: 'box-shadow 0.4s ease',
        overflow: 'hidden',
        flexShrink: 0,
      }}>
        {/* Avatar placeholder with initial */}
        <div style={{
          fontFamily: "'Cinzel',serif",
          fontSize: '32px', fontWeight: 600,
          background: 'linear-gradient(135deg,#f5e6a3,#c9a84c)',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
          opacity: 0.5,
        }}>{member.name.charAt(0)}</div>
      </div>

      {/* Name */}
      <div style={{ textAlign: 'center' }}>
        <div style={{
          fontFamily: "'Cinzel',serif",
          fontSize: '13px', fontWeight: 600,
          letterSpacing: '0.1em',
          color: hovered ? '#f5e6a3' : '#c9a84c',
          transition: 'color 0.3s ease',
          marginBottom: '4px',
        }}>{member.name}</div>
        <div style={{
          fontFamily: "'Cormorant Garamond',serif",
          fontSize: '13px', fontStyle: 'italic',
          color: '#9e8e6a', letterSpacing: '0.06em',
        }}>{member.role}</div>
      </div>
    </div>
  );
};

const Team = () => {
  return (
    <section style={{
      background: '#0a0a0a',
      padding: '100px 40px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Corner glows */}
      <div style={{ position:'absolute', top:0, left:'50%', transform:'translateX(-50%)', width:'400px', height:'200px',
        background:'radial-gradient(ellipse at center, rgba(201,168,76,0.06) 0%, transparent 70%)', pointerEvents:'none' }} />

      <div style={{ maxWidth:'1200px', margin:'0 auto' }}>
        {/* Section header */}
        <div style={{ textAlign:'center', marginBottom:'64px' }}>
          <div style={{ display:'flex', alignItems:'center', gap:'16px', marginBottom:'12px' }}>
            <div style={{ flex:1, height:'1px', background:'linear-gradient(90deg,transparent,rgba(201,168,76,0.4))' }} />
            <span style={{ color:'#c9a84c', fontSize:'16px' }}>✦</span>
            <div style={{ flex:1, height:'1px', background:'linear-gradient(90deg,rgba(201,168,76,0.4),transparent)' }} />
          </div>
          <h2 style={{
            fontFamily:"'Great Vibes',cursive",
            fontSize:'56px',
            background:'linear-gradient(135deg,#f5e6a3,#c9a84c 50%,#8b6914)',
            WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text',
            margin:'0 0 12px',
          }}>Нашият екип</h2>
          <div style={{ width:'60px', height:'2px', background:'linear-gradient(90deg,#f5e6a3,#c9a84c,#8b6914)', margin:'0 auto' }} />
        </div>

        {/* Team grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '48px 32px',
          justifyItems: 'center',
        }}>
          {TEAM.map(m => <TeamMember key={m.id} member={m} />)}
        </div>
      </div>
    </section>
  );
};

Object.assign(window, { Team, TeamMember });
