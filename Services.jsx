// Services.jsx — with animated slide-in menu overlay
const SERVICES_DATA = [
  {
    category: 'Коса',
    items: [
      { name: 'Подстригване (дамско)', price: '40 лв.' },
      { name: 'Подстригване (мъжко)', price: '25 лв.' },
      { name: 'Сешоар', price: '30 лв.' },
      { name: 'Изправяне', price: '35 лв.' },
    ]
  },
  {
    category: 'Боядисване',
    items: [
      { name: 'Балаж', price: 'от 120 лв.' },
      { name: 'Омбре', price: 'от 100 лв.' },
      { name: 'Цялостно боядисване', price: 'от 60 лв.' },
      { name: 'Кичури', price: 'от 80 лв.' },
    ]
  },
  {
    category: 'Прически',
    items: [
      { name: 'Официална прическа', price: 'от 80 лв.' },
      { name: 'Ежедневна прическа', price: 'от 40 лв.' },
      { name: 'Плитка', price: 'от 50 лв.' },
    ]
  },
  {
    category: 'Нокти',
    items: [
      { name: 'Маникюр (класически)', price: '25 лв.' },
      { name: 'Маникюр (гел)', price: '40 лв.' },
      { name: 'Педикюр (класически)', price: '30 лв.' },
      { name: 'Педикюр (СПА)', price: '50 лв.' },
    ]
  },
  {
    category: 'Грим',
    items: [
      { name: 'Дневен грим', price: '60 лв.' },
      { name: 'Вечерен грим', price: '80 лв.' },
      { name: 'Сватбен грим', price: 'от 150 лв.' },
    ]
  },
  {
    category: 'Масаж',
    items: [
      { name: 'Релаксиращ масаж', price: '70 лв.' },
      { name: 'Антицелулитен масаж', price: '80 лв.' },
    ]
  },
];

const FRESHA_URL = 'https://www.fresha.com';

const ServiceCard = ({ service }) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: '#1a1a1a',
        border: `1px solid ${hovered ? 'rgba(201,168,76,0.65)' : 'rgba(201,168,76,0.3)'}`,
        borderRadius: '12px',
        boxShadow: hovered
          ? 'inset 0 0 24px rgba(201,168,76,0.1), 0 8px 40px rgba(0,0,0,0.8), 0 0 24px rgba(201,168,76,0.2)'
          : 'inset 0 0 20px rgba(201,168,76,0.05), 0 4px 24px rgba(0,0,0,0.6)',
        padding: '36px 24px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        transform: hovered ? 'scale(1.02)' : 'scale(1)',
        transition: 'all 0.4s ease',
        position: 'relative',
        overflow: 'hidden',
        minHeight: '140px',
        gap: '8px',
      }}
    >
      <div style={{
        position:'absolute', inset:0,
        background:`radial-gradient(ellipse at center, ${hovered ? 'rgba(201,168,76,0.07)' : 'rgba(201,168,76,0.03)'} 0%, transparent 70%)`,
        transition:'all 0.4s ease', pointerEvents:'none',
      }} />
      <div style={{
        fontFamily:"'Great Vibes',cursive",
        fontSize:'36px',
        background:'linear-gradient(135deg,#f5e6a3 0%,#c9a84c 50%,#8b6914 100%)',
        WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text',
        lineHeight:1.1, position:'relative', zIndex:1, textAlign:'center',
      }}>{service.category}</div>
      <div style={{
        fontFamily:"'Cormorant Garamond',serif",
        fontSize:'11px', letterSpacing:'0.14em',
        textTransform:'uppercase', color:'#9e8e6a',
        position:'relative', zIndex:1,
      }}>{service.items.length} услуги</div>
    </div>
  );
};

// Full-page animated services overlay
const ServicesOverlay = ({ open, onClose }) => {
  const [activeCategory, setActiveCategory] = React.useState(0);
  const [itemsVisible, setItemsVisible] = React.useState(false);

  React.useEffect(() => {
    if (open) {
      setItemsVisible(false);
      const t = setTimeout(() => setItemsVisible(true), 200);
      return () => clearTimeout(t);
    }
  }, [open, activeCategory]);

  React.useEffect(() => {
    if (open) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 200,
      pointerEvents: open ? 'all' : 'none',
    }}>
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position:'absolute', inset:0,
          background:'rgba(0,0,0,0.92)',
          backdropFilter:'blur(8px)',
          opacity: open ? 1 : 0,
          transition:'opacity 0.5s ease',
        }}
      />

      {/* Panel slides up from bottom */}
      <div style={{
        position:'absolute',
        bottom: 0, left: 0, right: 0,
        height: '85vh',
        background: '#0f0f0f',
        borderTop: '1px solid rgba(201,168,76,0.25)',
        transform: open ? 'translateY(0)' : 'translateY(100%)',
        transition: 'transform 0.55s cubic-bezier(0.16,1,0.3,1)',
        display:'flex',
        flexDirection:'column',
        overflow:'hidden',
      }}>
        {/* Gold top accent line */}
        <div style={{ height:'2px', background:'linear-gradient(90deg,transparent,#c9a84c 30%,#f5e6a3 50%,#c9a84c 70%,transparent)', flexShrink:0 }} />

        {/* Header bar */}
        <div style={{
          display:'flex', alignItems:'center', justifyContent:'space-between',
          padding:'24px 48px 16px',
          borderBottom:'1px solid rgba(201,168,76,0.1)',
          flexShrink:0,
        }}>
          <div>
            <h2 style={{
              fontFamily:"'Great Vibes',cursive",
              fontSize:'42px',
              background:'linear-gradient(135deg,#f5e6a3,#c9a84c 50%,#8b6914)',
              WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text',
              lineHeight:1,
            }}>Нашите услуги</h2>
          </div>
          <button
            onClick={onClose}
            style={{
              background:'transparent', border:'1px solid rgba(201,168,76,0.3)',
              borderRadius:'50%', width:'40px', height:'40px',
              color:'#c9a84c', fontSize:'18px', cursor:'pointer',
              display:'flex', alignItems:'center', justifyContent:'center',
              transition:'all 0.3s ease',
              fontFamily:'sans-serif',
            }}
            onMouseEnter={e=>{e.currentTarget.style.background='rgba(201,168,76,0.1)';}}
            onMouseLeave={e=>{e.currentTarget.style.background='transparent';}}
          >✕</button>
        </div>

        {/* Body — category tabs + items */}
        <div style={{ display:'flex', flex:1, overflow:'hidden' }}>

          {/* Left — category list */}
          <div style={{
            width:'240px', flexShrink:0,
            borderRight:'1px solid rgba(201,168,76,0.1)',
            padding:'24px 0',
            overflowY:'auto',
          }}>
            {SERVICES_DATA.map((cat, i) => (
              <div
                key={i}
                onClick={() => { setActiveCategory(i); setItemsVisible(false); setTimeout(()=>setItemsVisible(true),80); }}
                style={{
                  padding:'14px 32px',
                  cursor:'pointer',
                  fontFamily:"'Cinzel',serif",
                  fontSize:'12px',
                  letterSpacing:'0.12em',
                  textTransform:'uppercase',
                  color: activeCategory===i ? '#c9a84c' : 'rgba(240,232,208,0.5)',
                  background: activeCategory===i ? 'rgba(201,168,76,0.06)' : 'transparent',
                  borderLeft: activeCategory===i ? '2px solid #c9a84c' : '2px solid transparent',
                  transition:'all 0.25s ease',
                }}
                onMouseEnter={e=>{ if(activeCategory!==i) e.currentTarget.style.color='rgba(240,232,208,0.8)'; }}
                onMouseLeave={e=>{ if(activeCategory!==i) e.currentTarget.style.color='rgba(240,232,208,0.5)'; }}
              >
                {cat.category}
                <span style={{
                  display:'block',
                  fontFamily:"'Cormorant Garamond',serif",
                  fontSize:'11px',
                  textTransform:'none',
                  letterSpacing:'0.04em',
                  color:'rgba(158,142,106,0.6)',
                  marginTop:'2px',
                  fontStyle:'italic',
                }}>{cat.items.length} услуги</span>
              </div>
            ))}
          </div>

          {/* Right — service items */}
          <div style={{
            flex:1, padding:'24px 48px',
            overflowY:'auto',
          }}>
            {/* Category heading */}
            <div style={{
              fontFamily:"'Great Vibes',cursive",
              fontSize:'36px',
              background:'linear-gradient(135deg,#f5e6a3,#c9a84c 50%,#8b6914)',
              WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text',
              marginBottom:'8px',
            }}>{SERVICES_DATA[activeCategory].category}</div>
            <div style={{ width:'40px', height:'1px', background:'linear-gradient(90deg,#f5e6a3,#c9a84c)', marginBottom:'28px' }} />

            {/* Service rows */}
            <div style={{ display:'flex', flexDirection:'column', gap:'0' }}>
              {SERVICES_DATA[activeCategory].items.map((item, i) => (
                <div
                  key={i}
                  style={{
                    display:'flex',
                    alignItems:'center',
                    justifyContent:'space-between',
                    padding:'16px 0',
                    borderBottom:'1px solid rgba(201,168,76,0.08)',
                    opacity: itemsVisible ? 1 : 0,
                    transform: itemsVisible ? 'translateX(0)' : 'translateX(-16px)',
                    transition: `opacity 0.4s ease ${i*0.06}s, transform 0.4s ease ${i*0.06}s`,
                  }}
                >
                  {/* Service name */}
                  <div>
                    <div style={{
                      fontFamily:"'Cormorant Garamond',serif",
                      fontSize:'18px', fontWeight:400,
                      color:'#f0e8d0', letterSpacing:'0.04em',
                    }}>{item.name}</div>
                    <div style={{
                      fontFamily:"'Cinzel',serif",
                      fontSize:'9px', letterSpacing:'0.14em',
                      color:'rgba(201,168,76,0.5)', textTransform:'uppercase',
                      marginTop:'2px',
                    }}>{SERVICES_DATA[activeCategory].category}</div>
                  </div>

                  {/* Price + CTA */}
                  <div style={{ display:'flex', alignItems:'center', gap:'20px', flexShrink:0 }}>
                    <span style={{
                      fontFamily:"'Cormorant Garamond',serif",
                      fontSize:'18px', fontWeight:600,
                      color:'#c9a84c', letterSpacing:'0.04em',
                    }}>{item.price}</span>
                    <a
                      href={FRESHA_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontFamily:"'Cinzel',serif",
                        fontSize:'10px', fontWeight:600,
                        letterSpacing:'0.14em', textTransform:'uppercase',
                        color:'#0a0a0a',
                        background:'linear-gradient(90deg,#f5e6a3,#c9a84c,#8b6914)',
                        border:'none', borderRadius:'4px',
                        padding:'9px 18px',
                        cursor:'pointer',
                        textDecoration:'none',
                        display:'inline-block',
                        transition:'all 0.3s ease',
                        boxShadow:'0 2px 12px rgba(201,168,76,0.25)',
                        whiteSpace:'nowrap',
                      }}
                      onMouseEnter={e=>{e.currentTarget.style.opacity='0.85';e.currentTarget.style.boxShadow='0 4px 20px rgba(201,168,76,0.45)';}}
                      onMouseLeave={e=>{e.currentTarget.style.opacity='1';e.currentTarget.style.boxShadow='0 2px 12px rgba(201,168,76,0.25)';}}
                    >Запази сега</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Services = ({ onNavigate }) => {
  const [overlayOpen, setOverlayOpen] = React.useState(false);

  return (
    <>
      <ServicesOverlay open={overlayOpen} onClose={() => setOverlayOpen(false)} />
      <section style={{
        background:'#111111',
        padding:'100px 40px',
        position:'relative',
        overflow:'hidden',
      }}>
        <div style={{ position:'absolute', bottom:0, left:0, width:'300px', height:'300px',
          background:'radial-gradient(circle,rgba(201,168,76,0.06) 0%,transparent 70%)', pointerEvents:'none' }} />
        <div style={{ position:'absolute', top:0, right:0, width:'200px', height:'200px',
          background:'radial-gradient(circle,rgba(201,168,76,0.05) 0%,transparent 70%)', pointerEvents:'none' }} />

        <div style={{ maxWidth:'1200px', margin:'0 auto' }}>
          {/* Section header */}
          <div style={{ textAlign:'center', marginBottom:'60px' }}>
            <div style={{ display:'flex', alignItems:'center', gap:'16px', marginBottom:'12px' }}>
              <div style={{ flex:1, height:'1px', background:'linear-gradient(90deg,transparent,rgba(201,168,76,0.4))' }} />
              <span style={{ color:'#c9a84c', fontSize:'16px' }}>✦</span>
              <div style={{ flex:1, height:'1px', background:'linear-gradient(90deg,rgba(201,168,76,0.4),transparent)' }} />
            </div>
            <h2 style={{
              fontFamily:"'Great Vibes',cursive", fontSize:'56px',
              background:'linear-gradient(135deg,#f5e6a3,#c9a84c 50%,#8b6914)',
              WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text',
              margin:'0 0 12px',
            }}>Нашите услуги</h2>
            <div style={{ width:'60px', height:'2px', background:'linear-gradient(90deg,#f5e6a3,#c9a84c,#8b6914)', margin:'0 auto' }} />
          </div>

          {/* Cards */}
          <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'24px', marginBottom:'48px' }}>
            {SERVICES_DATA.map((s,i) => <ServiceCard key={i} service={s} />)}
          </div>

          {/* CTA */}
          <div style={{ textAlign:'center' }}>
            <button
              onClick={() => setOverlayOpen(true)}
              style={{
                fontFamily:"'Cormorant Garamond',serif",
                fontSize:'14px', fontWeight:600,
                letterSpacing:'0.18em', textTransform:'uppercase',
                color:'#c9a84c', background:'transparent',
                border:'1.5px solid rgba(201,168,76,0.5)',
                borderRadius:'6px', padding:'13px 40px',
                cursor:'pointer', transition:'all 0.4s ease',
              }}
              onMouseEnter={e=>{e.target.style.background='#c9a84c';e.target.style.color='#0a0a0a';e.target.style.boxShadow='0 0 20px rgba(201,168,76,0.4)';}}
              onMouseLeave={e=>{e.target.style.background='transparent';e.target.style.color='#c9a84c';e.target.style.boxShadow='none';}}
            >Вижте повече</button>
          </div>
        </div>
      </section>
    </>
  );
};

Object.assign(window, { Services, ServiceCard, ServicesOverlay });
