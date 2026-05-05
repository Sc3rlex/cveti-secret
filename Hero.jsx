// Hero.jsx — Cveti's Secret · matches reference billboard design
const Hero = ({ onNavigate }) => {
  const [titleVisible, setTitleVisible] = React.useState(false);
  const [tagVisible, setTagVisible] = React.useState(false);
  const [btnVisible, setBtnVisible] = React.useState(false);
  const [imgVisible, setImgVisible] = React.useState(false);

  React.useEffect(() => {
    // Staggered entrance animations
    const t1 = setTimeout(() => setTagVisible(true), 200);
    const t2 = setTimeout(() => setTitleVisible(true), 500);
    const t3 = setTimeout(() => setBtnVisible(true), 900);
    const t4 = setTimeout(() => setImgVisible(true), 300);
    return () => [t1,t2,t3,t4].forEach(clearTimeout);
  }, []);

  return (
    <section style={{
      position: 'relative',
      width: '100%',
      minHeight: '100vh',
      background: '#0d0d0d',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      paddingTop: '64px', // header height
    }}>

      {/* Background — very dark, matches reference */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse at 30% 60%, rgba(20,15,5,1) 0%, #0a0a0a 60%, #080808 100%)',
      }} />

      {/* Subtle gold glow bottom-left */}
      <div style={{
        position: 'absolute', bottom: '-80px', left: '-60px',
        width: '400px', height: '300px',
        background: 'radial-gradient(circle, rgba(201,168,76,0.07) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Content wrapper — full width two-column */}
      <div style={{
        position: 'relative', zIndex: 2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        minHeight: 'calc(100vh - 64px)',
        padding: '0 0 0 5vw',
      }}>

        {/* LEFT — text content */}
        <div style={{
          flex: '0 0 auto',
          maxWidth: '420px',
          paddingBottom: '40px',
          paddingTop: '20px',
        }}>

          {/* Tag line — "С над 10 години опит" */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            marginBottom: '20px',
            opacity: tagVisible ? 1 : 0,
            transform: tagVisible ? 'translateY(0)' : 'translateY(12px)',
            transition: 'opacity 0.6s ease, transform 0.6s ease',
          }}>
            <div style={{
              width: '28px', height: '2px',
              background: 'linear-gradient(90deg, #f5e6a3, #c9a84c)',
            }} />
            <span style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '13px',
              fontWeight: 400,
              letterSpacing: '0.08em',
              color: 'rgba(240,232,208,0.7)',
            }}>С над 10 години опит</span>
          </div>

          {/* Main heading — large italic serif, matches reference style */}
          <h1 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(28px, 3.5vw, 44px)',
            fontWeight: 400,
            fontStyle: 'italic',
            lineHeight: 1.35,
            color: '#f0e8d0',
            margin: '0 0 36px',
            letterSpacing: '0.02em',
            opacity: titleVisible ? 1 : 0,
            transform: titleVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.8s ease, transform 0.8s ease',
          }}>
            От Чикаго до България –<br />
            Cveti's Secret започва с<br />
            експертиза в русите коси и<br />
            балеажа и се развива в<br />
            пространство за цялостна<br />
            грижа за визията.
          </h1>

          {/* CTA Button — outlined with arrow, matches reference */}
          <div style={{
            opacity: btnVisible ? 1 : 0,
            transform: btnVisible ? 'translateY(0)' : 'translateY(16px)',
            transition: 'opacity 0.7s ease, transform 0.7s ease',
          }}>
            <button
              onClick={() => onNavigate('contact')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                fontFamily: "'Cinzel', serif",
                fontSize: '12px',
                fontWeight: 400,
                letterSpacing: '0.12em',
                color: '#f0e8d0',
                background: 'transparent',
                border: '1px solid rgba(240,232,208,0.5)',
                borderRadius: '4px',
                padding: '12px 20px 12px 24px',
                cursor: 'pointer',
                transition: 'all 0.35s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = '#c9a84c';
                e.currentTarget.style.color = '#c9a84c';
                e.currentTarget.style.boxShadow = '0 0 16px rgba(201,168,76,0.2)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(240,232,208,0.5)';
                e.currentTarget.style.color = '#f0e8d0';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              Запази час
              {/* Arrow circle */}
              <span style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '28px',
                height: '28px',
                borderRadius: '50%',
                background: 'rgba(240,232,208,0.12)',
                fontSize: '14px',
                lineHeight: 1,
                color: 'inherit',
              }}>↗</span>
            </button>
          </div>
        </div>

        {/* RIGHT — team photo, positioned right edge, fills height */}
        <div style={{
          flex: '1 1 auto',
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
          alignSelf: 'stretch',
          position: 'relative',
          opacity: imgVisible ? 1 : 0,
          transform: imgVisible ? 'translateX(0)' : 'translateX(40px)',
          transition: 'opacity 1s ease, transform 1s ease',
        }}>
          <img
            src="assets/team-billboard.jpg"
            alt="Cveti's Secret Team"
            style={{
              height: '100%',
              maxHeight: 'calc(100vh - 64px)',
              width: 'auto',
              objectFit: 'contain',
              objectPosition: 'right bottom',
              display: 'block',
              // Left fade so image blends into dark background
              maskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.4) 20%, black 45%)',
              WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.4) 20%, black 45%)',
            }}
          />
        </div>
      </div>
    </section>
  );
};

Object.assign(window, { Hero });
