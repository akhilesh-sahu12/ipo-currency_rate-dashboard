import React from "react";
import {
  BsFillEnvelopeFill,
  BsFillGrid3X3GapFill,
  BsFillGearFill,
  BsBarChartLine,
} from "react-icons/bs";

function Home() {
  return (
    <main className="main-container">
      <div className="main-title">
        <h3>Home</h3>
      </div>

      <div className="main-cards">
        <div className="card">
          <div className="card-inner">
            <h3>IPOs</h3>
            <BsFillGrid3X3GapFill className="card_icon" />
          </div>
          <h1>1000</h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>Currency Rates</h3>
            <BsFillEnvelopeFill className="card_icon" />
          </div>
          <h1>10</h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>Charts</h3>
            <BsBarChartLine className="card_icon" />
          </div>
          <h1>5</h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>Settings</h3>
            <BsFillGearFill className="card_icon" />
          </div>
          <h1>2</h1>
        </div>
      </div>

        {/* General Information */}
        <div className="general-info">
          <p>
            This dashboard allows you to view upcoming Initial Public Offerings (IPOs) and track the latest currency exchange rates.
          </p>
          <p>
            Utilize the navigation to explore different sections of the dashboard.
          </p>
        </div>

        {/* User Features */}
        <div className="user-features">
          <h2>User Features</h2>
          <ul>
            <li>User Authentication: Log in or register to access personalized features.</li>
            <li>Upcoming IPO Calendar: View a calendar of upcoming IPOs.</li>
            <li>Currency Exchange Rates: Track the latest currency rates.</li>
            <li>Data Refresh: Refresh data periodically or on user request.</li>
          </ul>
        </div>

        {/* Mobile Features */}
        <div className="mobile-features">
          <h2>Mobile-Specific Features</h2>
          <p>
            The mobile app provides enhanced user experience with mobile-specific features and gestures.
          </p>
        </div>
        {/* General Information */}
        <div className="general-info">
          <p>
            This dashboard allows you to view upcoming Initial Public Offerings (IPOs) and track the latest currency exchange rates.
          </p>
          <p>
            Utilize the navigation to explore different sections of the dashboard.
          </p>
        </div>

        {/* User Features */}
        <div className="user-features">
          <h2>User Features</h2>
          <ul>
            <li>User Authentication: Log in or register to access personalized features.</li>
            <li>Upcoming IPO Calendar: View a calendar of upcoming IPOs.</li>
            <li>Currency Exchange Rates: Track the latest currency rates.</li>
            <li>Data Refresh: Refresh data periodically or on user request.</li>
          </ul>
        </div>

        {/* Mobile Features */}
        <div className="mobile-features">
          <h2>Mobile-Specific Features</h2>
          <p>
            The mobile app provides enhanced user experience with mobile-specific features and gestures.
          </p>
        </div>
    </main>
  );
}

export default Home;
