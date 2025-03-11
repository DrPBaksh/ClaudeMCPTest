import React, { useState } from 'react';
import '../styles/Resources.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SnowEffect from '../components/SnowEffect';
import { Link } from 'react-router-dom';

const Resources = () => {
  const [activeTab, setActiveTab] = useState('guides');

  const renderTabContent = () => {
    switch(activeTab) {
      case 'guides':
        return <GuidesTab />;
      case 'visas':
        return <VisasTab />;
      case 'remote-work':
        return <RemoteWorkTab />;
      case 'housing':
        return <HousingTab />;
      case 'healthcare':
        return <HealthcareTab />;
      default:
        return <GuidesTab />;
    }
  };

  return (
    <div className="resources-page">
      <Header />
      
      <div className="page-hero">
        <SnowEffect intensity="light" />
        <div className="page-hero-content">
          <h1>Relocation Resources</h1>
          <p>Everything you need to know about moving to the Alps</p>
        </div>
      </div>
      
      <main className="resources-content">
        <div className="container">
          <section className="intro-section">
            <div className="intro-content">
              <h2>Your Alpine Relocation Guide</h2>
              <p>Moving to a new country is a significant life change. Our comprehensive resources will help you navigate every aspect of relocating to the Alps, from legal requirements to practical considerations.</p>
            </div>
          </section>
          
          <section className="resources-tabs">
            <div className="tabs-navigation">
              <button 
                className={`tab-btn ${activeTab === 'guides' ? 'active' : ''}`}
                onClick={() => setActiveTab('guides')}
              >
                Relocation Guides
              </button>
              <button 
                className={`tab-btn ${activeTab === 'visas' ? 'active' : ''}`}
                onClick={() => setActiveTab('visas')}
              >
                Visas & Permits
              </button>
              <button 
                className={`tab-btn ${activeTab === 'remote-work' ? 'active' : ''}`}
                onClick={() => setActiveTab('remote-work')}
              >
                Remote Work
              </button>
              <button 
                className={`tab-btn ${activeTab === 'housing' ? 'active' : ''}`}
                onClick={() => setActiveTab('housing')}
              >
                Housing
              </button>
              <button 
                className={`tab-btn ${activeTab === 'healthcare' ? 'active' : ''}`}
                onClick={() => setActiveTab('healthcare')}
              >
                Healthcare
              </button>
            </div>
            
            <div className="tabs-content">
              {renderTabContent()}
            </div>
          </section>
          
          <section className="faq-section">
            <h2 className="section-title">Frequently Asked Questions</h2>
            
            <div className="faq-grid">
              <div className="faq-item">
                <h3>What are the biggest challenges when moving to the Alps?</h3>
                <p>The most common challenges include language barriers, adapting to local bureaucracy, finding suitable housing, and adjusting to seasonal changes in tourist-focused communities. Our relocation service helps address these challenges proactively.</p>
              </div>
              
              <div className="faq-item">
                <h3>Which Alpine regions are best for families with children?</h3>
                <p>Regions in Bavaria (Germany), parts of Austria such as Innsbruck, and certain Swiss cantons like Vaud offer excellent educational systems, family-friendly infrastructure, and strong international schools. The French Alps around Annecy and Grenoble are also popular with families.</p>
              </div>
              
              <div className="faq-item">
                <h3>Is it expensive to live in the Alps?</h3>
                <p>Cost of living varies significantly across Alpine regions. Switzerland and high-end resort towns are the most expensive, while rural areas in the Italian and French Alps can be surprisingly affordable. Our cost calculator can help you estimate expenses for specific locations.</p>
              </div>
              
              <div className="faq-item">
                <h3>Can I work remotely while living in the Alps?</h3>
                <p>Yes, many Alpine areas now have excellent internet infrastructure and are increasingly popular with digital nomads and remote workers. Many towns and even smaller villages offer co-working spaces, and high-speed internet is widely available in developed areas.</p>
              </div>
              
              <div className="faq-item">
                <h3>What about healthcare in Alpine regions?</h3>
                <p>Healthcare standards are generally excellent across the Alps. Switzerland, Austria, France, and Germany all have world-class healthcare systems. Italy's system varies by region but is also strong in the northern Alpine regions. Private insurance options are available in all countries.</p>
              </div>
              
              <div className="faq-item">
                <h3>Do I need to speak the local language?</h3>
                <p>While you can get by with English in tourist areas and larger cities, learning the local language significantly enhances your integration experience. Even basic skills in German, French, Italian, or the local dialect will be appreciated by locals and help with day-to-day tasks.</p>
              </div>
            </div>
          </section>
          
          <section className="resources-cta">
            <div className="cta-content">
              <h2>Download Our Complete Relocation Guide</h2>
              <p>Our 50-page guide covers everything you need to know about relocating to the Alps, with detailed information on residency requirements, finding housing, healthcare systems, and more.</p>
              <button className="btn btn-large">Get Your Free Guide</button>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

// Tab Components
const GuidesTab = () => (
  <div className="tab-panel">
    <h3 className="tab-title">Country-Specific Relocation Guides</h3>
    <div className="guides-grid">
      <div className="guide-card">
        <div className="guide-icon france"></div>
        <h4>Moving to the French Alps</h4>
        <p>Our comprehensive guide to relocating to France covers everything from visa requirements to finding property in popular regions like Chamonix, Annecy, and Grenoble.</p>
        <a href="#" className="guide-link">Read Guide</a>
      </div>
      
      <div className="guide-card">
        <div className="guide-icon switzerland"></div>
        <h4>Moving to the Swiss Alps</h4>
        <p>Navigate the complexities of Swiss residency permits, cantonal regulations, and property purchase restrictions for non-residents with our detailed guide.</p>
        <a href="#" className="guide-link">Read Guide</a>
      </div>
      
      <div className="guide-card">
        <div className="guide-icon austria"></div>
        <h4>Moving to the Austrian Alps</h4>
        <p>From vibrant Innsbruck to charming Tyrolean villages, learn everything about relocating to Austria's Alpine regions with our expert guide.</p>
        <a href="#" className="guide-link">Read Guide</a>
      </div>
      
      <div className="guide-card">
        <div className="guide-icon italy"></div>
        <h4>Moving to the Italian Alps</h4>
        <p>Discover the more affordable side of Alpine living in regions like South Tyrol and the Aosta Valley with our Italian relocation guide.</p>
        <a href="#" className="guide-link">Read Guide</a>
      </div>
      
      <div className="guide-card">
        <div className="guide-icon germany"></div>
        <h4>Moving to the Bavarian Alps</h4>
        <p>Our guide to Germany's Alpine region covers residency, integration, healthcare, and finding property in this family-friendly region.</p>
        <a href="#" className="guide-link">Read Guide</a>
      </div>
      
      <div className="guide-card">
        <div className="guide-icon compare"></div>
        <h4>Comparing Alpine Regions</h4>
        <p>Not sure which Alpine country is right for you? Our comparison guide breaks down the pros and cons of each region based on your priorities.</p>
        <a href="#" className="guide-link">Read Guide</a>
      </div>
    </div>
  </div>
);

const VisasTab = () => (
  <div className="tab-panel">
    <h3 className="tab-title">Visa & Residency Information</h3>
    <div className="visa-content">
      <div className="visa-intro">
        <p>Visa and residency requirements vary significantly between Alpine countries. EU/EEA citizens have freedom of movement rights, while non-EU citizens face different regulations in each country. Below we've outlined the main residency options for each Alpine nation.</p>
      </div>
      
      <div className="visa-cards">
        <div className="visa-card">
          <h4>France</h4>
          <ul className="visa-list">
            <li><strong>Long-Stay Visa:</strong> Required for stays over 90 days for non-EU citizens</li>
            <li><strong>Carte de Séjour:</strong> Residence permit required after arrival</li>
            <li><strong>Passport Talent:</strong> Visa for entrepreneurs, investors, and skilled professionals</li>
            <li><strong>Retiree Visa:</strong> For those with sufficient passive income</li>
          </ul>
          <a href="#" className="visa-link">Detailed Requirements</a>
        </div>
        
        <div className="visa-card">
          <h4>Switzerland</h4>
          <ul className="visa-list">
            <li><strong>B Permit:</strong> Initial residence permit (quotas apply for non-EU)</li>
            <li><strong>C Permit:</strong> Permanent residence after 5-10 years</li>
            <li><strong>Lump-Sum Taxation:</strong> Special arrangements for wealthy foreigners</li>
            <li><strong>Self-Employment:</strong> Requires business plan and proof of viability</li>
          </ul>
          <a href="#" className="visa-link">Detailed Requirements</a>
        </div>
        
        <div className="visa-card">
          <h4>Austria</h4>
          <ul className="visa-list">
            <li><strong>Red-White-Red Card:</strong> For qualified workers and entrepreneurs</li>
            <li><strong>Settlement Permit:</strong> Various categories based on purpose</li>
            <li><strong>Digital Nomad Visa:</strong> For remote workers</li>
            <li><strong>Residence Permit for Self-Employed:</strong> For business owners</li>
          </ul>
          <a href="#" className="visa-link">Detailed Requirements</a>
        </div>
        
        <div className="visa-card">
          <h4>Italy</h4>
          <ul className="visa-list">
            <li><strong>Elective Residence Visa:</strong> For retirees and passive income</li>
            <li><strong>Self-Employment Visa:</strong> Subject to quota system</li>
            <li><strong>Investor Visa:</strong> For significant investments in Italian companies</li>
            <li><strong>New Digital Nomad Visa:</strong> Recently introduced</li>
          </ul>
          <a href="#" className="visa-link">Detailed Requirements</a>
        </div>
      </div>
      
      <div className="visa-note">
        <p><strong>Note:</strong> Immigration rules change frequently. Our relocation consultants can provide up-to-date information and personalized guidance for your specific situation.</p>
      </div>
    </div>
  </div>
);

const RemoteWorkTab = () => (
  <div className="tab-panel">
    <h3 className="tab-title">Remote Work in the Alps</h3>
    <div className="remote-work-content">
      <div className="remote-intro">
        <p>The Alpine region has embraced remote work culture, with many areas offering excellent digital infrastructure alongside breathtaking natural environments. Whether you're a digital nomad looking for a seasonal base or a remote employee planning a permanent move, the Alps offer numerous advantageous locations.</p>
      </div>
      
      <h4 className="remote-subtitle">Digital Infrastructure</h4>
      <div className="remote-cards">
        <div className="remote-card">
          <h5>Internet Connectivity</h5>
          <p>Most developed Alpine areas now offer high-speed fiber connections. Switzerland, Austria, and France lead in internet infrastructure, with even smaller towns typically offering reliable broadband. Some remote villages may still have connectivity challenges, so research specific locations.</p>
        </div>
        
        <div className="remote-card">
          <h5>Co-Working Spaces</h5>
          <p>Alpine resort towns and cities have seen a boom in co-working spaces. Locations like Chamonix, Innsbruck, Annecy, and Bolzano offer multiple professional work environments with mountain views, networking opportunities, and flexible membership options.</p>
        </div>
      </div>
      
      <h4 className="remote-subtitle">Legal Considerations</h4>
      <div className="remote-cards">
        <div className="remote-card">
          <h5>Visa Requirements</h5>
          <p>Several Alpine countries now offer specific digital nomad or remote worker visas. Austria's Red-White-Red card, Italy's new digital nomad visa, and various self-employment options in France and Switzerland can accommodate remote workers depending on your circumstances.</p>
        </div>
        
        <div className="remote-card">
          <h5>Tax Implications</h5>
          <p>Remote workers typically become tax residents after spending 183+ days in a country. Each Alpine nation has different tax structures, with Switzerland offering potentially advantageous arrangements depending on your canton of residence. Professional tax advice is essential.</p>
        </div>
      </div>
      
      <div className="remote-locations">
        <h4 className="remote-subtitle">Top Remote Work Locations</h4>
        <ul className="remote-list">
          <li><strong>Chamonix, France:</strong> International community, excellent internet, multiple co-working spaces</li>
          <li><strong>Innsbruck, Austria:</strong> University town with urban amenities and mountain access</li>
          <li><strong>Annecy, France:</strong> Beautiful lakeside setting with fast TGV connections to Paris</li>
          <li><strong>Bolzano/Bozen, Italy:</strong> Bilingual city with more affordable living costs</li>
          <li><strong>Lucerne, Switzerland:</strong> Central location with exceptional quality of life</li>
        </ul>
      </div>
    </div>
  </div>
);

const HousingTab = () => (
  <div className="tab-panel">
    <h3 className="tab-title">Finding Your Alpine Home</h3>
    <div className="housing-content">
      <div className="housing-intro">
        <p>The Alpine property market varies dramatically between countries and even valleys. From strict regulations in Switzerland to more accessible markets in France and Italy, understanding the local property landscape is essential before making a move.</p>
      </div>
      
      <div className="housing-types">
        <h4>Housing Options</h4>
        <div className="housing-cards">
          <div className="housing-card">
            <div className="housing-icon chalet"></div>
            <h5>Traditional Chalets</h5>
            <p>Iconic Alpine wooden homes, often with historical character. Typically more expensive and may require renovation if purchasing older properties.</p>
          </div>
          
          <div className="housing-card">
            <div className="housing-icon apartment"></div>
            <h5>Mountain Apartments</h5>
            <p>Modern apartments in resort developments offer convenience and often come with amenities like pools and gyms. More affordable entry point in most regions.</p>
          </div>
          
          <div className="housing-card">
            <div className="housing-icon farmhouse"></div>
            <h5>Renovated Farmhouses</h5>
            <p>Rural properties with land, particularly in the Italian and French Alps, offer space and privacy at lower prices than resort properties.</p>
          </div>
          
          <div className="housing-card">
            <div className="housing-icon town"></div>
            <h5>Town Properties</h5>
            <p>Alpine towns offer a blend of mountain lifestyle with urban conveniences. Properties range from historical buildings to modern developments.</p>
          </div>
        </div>
      </div>
      
      <div className="buying-tips">
        <h4>Key Considerations</h4>
        <ul className="tips-list">
          <li><strong>Foreign Ownership Restrictions:</strong> Switzerland and Austria have significant limitations on foreign property purchases. Italy and France are more accessible to non-resident buyers.</li>
          <li><strong>Seasonal Concerns:</strong> Consider access in winter conditions, snow removal, heating costs, and structural considerations for high-altitude living.</li>
          <li><strong>Rental Potential:</strong> Many areas allow vacation rentals, providing income when you're not using the property.</li>
          <li><strong>Notary Costs:</strong> Property transactions in most Alpine countries involve notary fees and transfer taxes that can add 5-15% to the purchase price.</li>
          <li><strong>Financing:</strong> Mortgage options vary by country, with local banks typically offering 50-80% financing depending on residency status.</li>
        </ul>
      </div>
      
      <div className="property-search">
        <h4>Working With Us</h4>
        <p>Our property specialists have deep knowledge of Alpine real estate markets. We can help with:</p>
        <ul>
          <li>Identifying suitable regions based on your budget and priorities</li>
          <li>Accessing off-market properties through our local networks</li>
          <li>Navigating purchase restrictions and regulations</li>
          <li>Coordinating with notaries and legal advisors</li>
          <li>Arranging property viewings and virtual tours</li>
        </ul>
        <Link to="/contact" className="btn property-btn">Book Property Consultation</Link>
      </div>
    </div>
  </div>
);

const HealthcareTab = () => (
  <div className="tab-panel">
    <h3 className="tab-title">Healthcare in Alpine Countries</h3>
    <div className="healthcare-content">
      <div className="healthcare-intro">
        <p>Alpine countries are known for their high-quality healthcare systems, but coverage, costs, and access vary between nations. Understanding healthcare options is an essential part of planning your relocation.</p>
      </div>
      
      <div className="healthcare-systems">
        <div className="healthcare-card">
          <h4>France</h4>
          <div className="healthcare-details">
            <p><strong>System Type:</strong> Universal health insurance (Protection Universelle Maladie)</p>
            <p><strong>Coverage for Expats:</strong> Legal residents can apply for coverage after 3 months</p>
            <p><strong>Private Insurance:</strong> Complementary insurance (mutuelle) recommended to cover co-pays</p>
            <p><strong>Quality:</strong> World-class healthcare with excellent specialist care in larger cities</p>
            <p><strong>Mountain Considerations:</strong> Good emergency services in major ski areas, but remote areas may have longer response times</p>
          </div>
        </div>
        
        <div className="healthcare-card">
          <h4>Switzerland</h4>
          <div className="healthcare-details">
            <p><strong>System Type:</strong> Mandatory private health insurance (Krankenversicherung/Assurance Maladie)</p>
            <p><strong>Coverage for Expats:</strong> Must obtain Swiss insurance within 3 months of arrival</p>
            <p><strong>Private Insurance:</strong> Basic insurance mandatory, supplementary policies optional</p>
            <p><strong>Quality:</strong> Exceptional quality with very short wait times but highest costs in Europe</p>
            <p><strong>Mountain Considerations:</strong> Excellent emergency services with helicopter rescue coverage included in basic insurance</p>
          </div>
        </div>
        
        <div className="healthcare-card">
          <h4>Austria</h4>
          <div className="healthcare-details">
            <p><strong>System Type:</strong> Social health insurance system (Sozialversicherung)</p>
            <p><strong>Coverage for Expats:</strong> Employed residents covered through employer contributions</p>
            <p><strong>Private Insurance:</strong> Available for enhanced coverage and private rooms</p>
            <p><strong>Quality:</strong> High standard of care with well-equipped facilities</p>
            <p><strong>Mountain Considerations:</strong> Strong emergency infrastructure in Alpine regions</p>
          </div>
        </div>
        
        <div className="healthcare-card">
          <h4>Italy</h4>
          <div className="healthcare-details">
            <p><strong>System Type:</strong> National Health Service (Servizio Sanitario Nazionale)</p>
            <p><strong>Coverage for Expats:</strong> Legal residents can register with local health authority</p>
            <p><strong>Private Insurance:</strong> Recommended for shorter wait times and additional services</p>
            <p><strong>Quality:</strong> Good standard in northern regions, with some regional variation</p>
            <p><strong>Mountain Considerations:</strong> Alpine regions typically have better facilities than southern Italy</p>
          </div>
        </div>
      </div>
      
      <div className="healthcare-advice">
        <h4>Healthcare Tips for Alpine Living</h4>
        <ul className="advice-list">
          <li>Consider specific coverage for mountain sports and activities if you're active</li>
          <li>Verify emergency service access and response times for remote properties</li>
          <li>Some areas have "seasonal" medical services that expand during tourist seasons</li>
          <li>European Health Insurance Card (EHIC/GHIC) covers temporary stays for EU/UK citizens but is not sufficient for residents</li>
          <li>Many mountain areas have specific health considerations (altitude, isolation, weather) that might affect existing conditions</li>
        </ul>
      </div>
    </div>
  </div>
);

export default Resources;