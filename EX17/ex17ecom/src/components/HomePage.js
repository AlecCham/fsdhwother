const HomePage = () => {
    const mainStyle = {
        flex: 1,
        paddingTop: '5rem',
        //backgroundImage: 'url("27.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      };
    return (
      <main style={mainStyle}>
        <img className="backgroundImage" src="27.jpg"/>
        <div className="container mt-5 pt-5">        
          <div className="content-section">
            <h2 style={{ color: 'chocolate' }}>Welcome to Little Village</h2>
            <p>Discover a place where community flourishes and the joy of discovery never ends. Little Village is more than a marketplace; it's a haven for those who seek connection, quality products, and unforgettable experiences.</p>
          </div>
          
          <div className="content-section">
            <h2 style={{ color: 'chocolate' }}>Our Products</h2>
            <p>From locally-sourced fresh produce to handcrafted goods, our stalls are brimming with treasures waiting to be uncovered. Each product tells a story of tradition, craftsmanship, and sustainability.</p>
          </div>
          
          <div className="content-section">
            <h2 style={{ color: 'chocolate' }}>Join Our Community</h2>
            <p>At Little Village, every visit is an opportunity to connect, learn, and grow. Join us for community events, workshops, and celebrations that bring us all closer together.</p>
          </div>    
        </div>
      </main>
    );
  }
  
  export default HomePage;