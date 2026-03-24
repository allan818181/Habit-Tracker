function Progress() {
  const completed = 2; // mfano (baadaye itatoka kwenye data halisi)
  const total = 3;
  const percentage = Math.round((completed / total) * 100);

  return (
    <>
      <style>
        {`
          .progress-container {
            min-height: 100vh;
            width: 100vw;
            padding: 40px;
            background: #f4f6f8;
            font-family: Arial, sans-serif;
          }

          .progress-card {
            max-width: 600px;
            margin: auto;
            background: white;
            padding: 30px;
            border-radius: 8px;
            box-shadow: 0 4px 10px rgba(0,0,0,0.1);
            text-align: center;
          }

          .progress-bar {
            width: 100%;
            background: #ddd;
            border-radius: 20px;
            overflow: hidden;
            margin-top: 20px;
          }

          .progress-fill {
            height: 20px;
            width: ${percentage}%;
            background: #2ecc71;
          }
        `}
      </style>

      <div className="progress-container">
        <div className="progress-card">
          <h2>Progress Overview</h2>
          <p>Muhtasari wa maendeleo yako ya leo</p>

          <h3>{percentage}% Completed</h3>

          <div className="progress-bar">
            <div className="progress-fill"></div>
          </div>

          <p style={{ marginTop: "15px" }}>
            Umefanya habits {completed} kati ya {total}
          </p>
        </div>
      </div>
    </>
  );
}

export default Progress;
