import React, { useState, useEffect } from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './App.css';

function App() {
  const [currentUsage, setCurrentUsage] = useState(245);
  const [flowRate, setFlowRate] = useState(12.5);
  const [temperature, setTemperature] = useState(22);
  const [pressure, setPressure] = useState(45);

  // Simulate real-time data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentUsage(prev => Math.max(200, Math.min(300, prev + (Math.random() - 0.5) * 10)));
      setFlowRate(prev => Math.max(10, Math.min(15, prev + (Math.random() - 0.5) * 0.5)));
      setTemperature(prev => Math.max(20, Math.min(25, prev + (Math.random() - 0.5) * 0.3)));
      setPressure(prev => Math.max(40, Math.min(50, prev + (Math.random() - 0.5) * 1)));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Historical data for charts
  const usageData = [
    { time: '00:00', usage: 180 },
    { time: '04:00', usage: 150 },
    { time: '08:00', usage: 280 },
    { time: '12:00', usage: 320 },
    { time: '16:00', usage: 290 },
    { time: '20:00', usage: 245 },
    { time: '24:00', usage: 200 }
  ];

  const dailyData = [
    { day: 'Mon', consumption: 1850 },
    { day: 'Tue', consumption: 1920 },
    { day: 'Wed', consumption: 1780 },
    { day: 'Thu', consumption: 2100 },
    { day: 'Fri', consumption: 1950 },
    { day: 'Sat', consumption: 2200 },
    { day: 'Sun', consumption: 2050 }
  ];

  const features = [
    {
      title: 'Real-Time Monitoring',
      description: 'Track water usage, flow rate, temperature, and pressure in real-time with instant updates.',
      icon: '📊'
    },
    {
      title: 'Leak Detection',
      description: 'Advanced algorithms detect unusual patterns and alert you to potential leaks immediately.',
      icon: '💧'
    },
    {
      title: 'Usage Analytics',
      description: 'Comprehensive analytics and historical data to help you understand and optimize water consumption.',
      icon: '📈'
    },
    {
      title: 'Smart Alerts',
      description: 'Receive instant notifications for anomalies, high usage, or system issues via mobile or email.',
      icon: '🔔'
    }
  ];

  return (
    <div className="App">
      {/* Hero Section */}
      <header className="hero">
        <div className="hero-content">
          <h1 className="hero-title">AquaSync Smart Water Monitor</h1>
          <p className="hero-subtitle">
            Monitor, analyze, and optimize your water usage with intelligent real-time tracking
          </p>
          <button className="cta-button">Get Started</button>
        </div>
        <div className="hero-wave"></div>
      </header>

      {/* Features Section */}
      <section className="features">
        <h2 className="section-title">Powerful Features</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Live Dashboard */}
      <section className="dashboard">
        <h2 className="section-title">Live Dashboard</h2>
        <div className="metrics-grid">
          <div className="metric-card">
            <div className="metric-icon">💧</div>
            <div className="metric-content">
              <h3 className="metric-label">Current Usage</h3>
              <p className="metric-value">{currentUsage.toFixed(1)} <span className="metric-unit">L/h</span></p>
            </div>
          </div>
          <div className="metric-card">
            <div className="metric-icon">🌊</div>
            <div className="metric-content">
              <h3 className="metric-label">Flow Rate</h3>
              <p className="metric-value">{flowRate.toFixed(1)} <span className="metric-unit">L/min</span></p>
            </div>
          </div>
          <div className="metric-card">
            <div className="metric-icon">🌡️</div>
            <div className="metric-content">
              <h3 className="metric-label">Temperature</h3>
              <p className="metric-value">{temperature.toFixed(1)} <span className="metric-unit">°C</span></p>
            </div>
          </div>
          <div className="metric-card">
            <div className="metric-icon">⚡</div>
            <div className="metric-content">
              <h3 className="metric-label">Pressure</h3>
              <p className="metric-value">{pressure.toFixed(1)} <span className="metric-unit">PSI</span></p>
            </div>
          </div>
        </div>
      </section>

      {/* Charts Section */}
      <section className="charts">
        <h2 className="section-title">Usage Analytics</h2>
        <div className="charts-grid">
          <div className="chart-card">
            <h3 className="chart-title">Today's Water Usage</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={usageData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                <XAxis dataKey="time" stroke="#666" />
                <YAxis stroke="#666" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#fff', border: '1px solid #ddd', borderRadius: '8px' }}
                />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="usage" 
                  stroke="#0ea5e9" 
                  strokeWidth={3}
                  dot={{ fill: '#0ea5e9', r: 5 }}
                  activeDot={{ r: 7 }}
                  name="Usage (L/h)"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="chart-card">
            <h3 className="chart-title">Weekly Consumption</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={dailyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                <XAxis dataKey="day" stroke="#666" />
                <YAxis stroke="#666" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#fff', border: '1px solid #ddd', borderRadius: '8px' }}
                />
                <Legend />
                <Bar 
                  dataKey="consumption" 
                  fill="#06b6d4" 
                  radius={[8, 8, 0, 0]}
                  name="Consumption (L)"
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>AquaSync</h3>
            <p>Smart water monitoring for a sustainable future</p>
          </div>
          <div className="footer-section">
            <h4>Product</h4>
            <ul>
              <li>Features</li>
              <li>Pricing</li>
              <li>Documentation</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Company</h4>
            <ul>
              <li>About Us</li>
              <li>Contact</li>
              <li>Support</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Legal</h4>
            <ul>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 AquaSync. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
