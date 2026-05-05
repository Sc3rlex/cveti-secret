// Footer.jsx — Cveti's Secret footer
const Footer = ({ onNavigate }) => {
  const navLinks = [
    { id: 'home', label: 'Начало' },
    { id: 'services', label: 'Услуги' },
    { id: 'salon', label: 'Салонът' },
    { id: 'gallery', label: 'Галерия' },
    { id: 'contact', label: 'Контакти' },
  ];

  return (
    <footer style={{
      background: '#080808',
      borderTop: '1px solid rgba(201,168,76,0.15)',
      padding: '64px 40px 32px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Top glow */}
      <div style={{
        position:'absolute', top:0, left:'50%', transform:'translateX(-50%)',
        width:'500px', height:'1px',
        background:'linear-gradient(90deg,transparent,rgba(201,168,76,0.4),transparent)',
        pointerEvents:'none',
      }} />

      <div style={{ maxWidth:'1200px', margin:'0 auto' }}>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:'48px', marginBottom:'48px' }}>

          {/* Brand column */}
          <div>
            <div style={{
              fontFamily:"'Cinzel',serif",
              fontSize:'18px', fontWeight:700,
              letterSpacing:'0.2em', textTransform:'uppercase',
              background:'linear-gradient(90deg,#f5e6a3,#c9a84c,#8b6914)',
              WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text',
              marginBottom:'6px',
            }}>Cveti's Secret</div>
            <div style={{
              fontFamily:"'Cormorant Garamond',serif",
              fontSize:'13px', fontStyle:'italic',
              color:'#9e8e6a', letterSpacing:'0.14em',
              marginBottom:'16px',
            }}>Beauty Salon</div>
            <p style={{
              fontFamily:"'Cormorant Garamond',serif",
              fontSize:'14px', fontWeight:300,
              color:'#6e5e42', lineHeight:1.7,
              letterSpacing:'0.04em',
            }}>Вашето ексклузивно убежище за красота в сърцето на София.</p>
          </div>

          {/* Navigation column */}
          <div>
            <div style={{
              fontFamily:"'Cinzel',serif",
              fontSize:'10px', letterSpacing:'0.2em',
              textTransform:'uppercase', color:'rgba(201,168,76,0.5)',
              marginBottom:'18px',
            }}>Навигация</div>
            <div style={{ display:'flex', flexDirection:'column', gap:'10px' }}>
              {navLinks.map(link => (
                <span
                  key={link.id}
                  onClick={() => onNavigate(link.id)}
                  style={{
                    fontFamily:"'Cormorant Garamond',serif",
                    fontSize:'15px', fontWeight:300,
                    color:'#9e8e6a', cursor:'pointer',
                    letterSpacing:'0.06em',
                    transition:'color 0.3s ease',
                  }}
                  onMouseEnter={e => e.target.style.color='#c9a84c'}
                  onMouseLeave={e => e.target.style.color='#9e8e6a'}
                >{link.label}</span>
              ))}
            </div>
          </div>

          {/* Contact / Hours column */}
          <div>
            <div style={{
              fontFamily:"'Cinzel',serif",
              fontSize:'10px', letterSpacing:'0.2em',
              textTransform:'uppercase', color:'rgba(201,168,76,0.5)',
              marginBottom:'18px',
            }}>Работно Време</div>
            <div style={{ display:'flex', flexDirection:'column', gap:'8px' }}>
              {[
                ['Пон – Пет', '09:00 – 20:00'],
                ['Събота', '10:00 – 18:00'],
                ['Неделя', 'Почивен'],
              ].map(([day, time]) => (
                <div key={day} style={{ display:'flex', justifyContent:'space-between', gap:'16px' }}>
                  <span style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'14px', fontWeight:300, color:'#6e5e42' }}>{day}</span>
                  <span style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'14px', color:time==='Почивен'?'#4a3e2a':'#d4c5a0' }}>{time}</span>
                </div>
              ))}
            </div>
            <div style={{
              marginTop:'20px',
              fontFamily:"'Cormorant Garamond',serif",
              fontSize:'13px', fontStyle:'italic',
              color:'#9e8e6a', letterSpacing:'0.06em',
            }}>София, Лозенец</div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height:'1px', background:'linear-gradient(90deg,transparent,rgba(201,168,76,0.2),transparent)', marginBottom:'24px' }} />

        {/* Copyright */}
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
          <div style={{
            fontFamily:"'Cormorant Garamond',serif",
            fontSize:'12px', color:'#4a3e2a',
            letterSpacing:'0.06em',
          }}>© {new Date().getFullYear()} Cveti's Secret. Всички права запазени.</div>
          <div style={{ display:'flex', gap:'20px' }}>
            {['Facebook','Instagram'].map(s => (
              <span key={s} style={{
                fontFamily:"'Cinzel',serif",
                fontSize:'10px', letterSpacing:'0.14em',
                color:'#6e5e42', cursor:'pointer',
                textTransform:'uppercase', transition:'color 0.3s ease',
              }}
              onMouseEnter={e=>e.target.style.color='#c9a84c'}
              onMouseLeave={e=>e.target.style.color='#6e5e42'}
              >{s}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

Object.assign(window, { Footer });
