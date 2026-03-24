import { Link } from "react-router-dom";

function Home() {
  const BACKGROUND_IMAGE_URL =
    "https://images.unsplash.com/photo-1506784983877-45594efa4cbe";

  return (
    <>
      <style>
        {`
          .home-bg {
            min-height: 100vh;
            overflow-x: hidden;
            width: 100vw;
            background-image: url("${BACKGROUND_IMAGE_URL}");
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            position: relative;
            font-family: Arial, sans-serif;
          }

          .overlay {
            min-height: 100vh;
            overflow-x: hidden;
            background: rgba(0, 0, 0, 0.6);
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
          }

          .home-content {
            overflow-x: hidden;
            max-width: 850px;
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(6px);
            padding: 40px;
            border-radius: 12px;
            color: #e3e6eb;
            text-align: center;
          }

          .home-title {
            font-size: 42px;
            margin-bottom: 10px;
          }

          .home-subtitle {
            font-size: 20px;
            margin-bottom: 25px;
            color: #ddd;
          }

          .home-description {
            font-size: 17px;
            line-height: 1.6;
            margin-bottom: 30px;
          }

          .features {
            text-align: left;
            max-width: 500px;
            margin: 0 auto 30px;
          }

          .features li {
            margin-bottom: 10px;
          }

          .buttons button {
            padding: 12px 25px;
            margin: 5px;
            border: none;
            border-radius: 6px;
            font-size: 16px;
            cursor: pointer;
            color: #fff;
            background: #3498db;
          }

          .buttons .secondary {
            background: #2ecc71;
          }

          .buttons button:hover {
            opacity: 0.9;
          }
        `}
      </style>

      <div className="home-bg">
        <div className="overlay">
          <div className="home-content">
            <h1 className="home-title">Habit Tracker System</h1>
            <p className="home-subtitle">
              Build consistency, one day at a time
            </p>

            <p className="home-description">
              Habit Tracker ni mfumo wa kufuatilia habits za kila siku
              kama exercise, reading, meditation na nyingine muhimu.
              Mfumo huu unakusaidia kuona streak, maendeleo, na
              progress yako kwa uwazi ili ujenge nidhamu ya muda mrefu.
            </p>
{/* 
            <ul className="features">
              <li>✔ Rekodi habits za kila siku</li>
              <li>🔥 Fuata streak zako mfululizo</li>
              <li>📊 Angalia maendeleo yako</li>
              <li>📅 Pata muhtasari wa maendeleo</li>
            </ul> */}

            <div className="buttons">
              <Link to="/habits">
                <button>Start Tracking</button>
              </Link>
              <Link to="/progress">
                <button className="secondary">View Progress</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
