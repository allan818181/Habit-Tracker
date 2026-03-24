import { useState } from "react";

function Habits() {
  const [habits, setHabits] = useState([
    { name: "Exercise", completed: false },
    { name: "Reading", completed: false },
    { name: "Meditation", completed: false },
  ]);

  const toggleHabit = (index) => {
    const updated = [...habits];
    updated[index].completed = !updated[index].completed;
    setHabits(updated);
  };

  return (
    <>
      <style>
        {`
          .habits-container {
            min-height: 100vh;
            width: 100vw;
            padding: 40px;
            background: #eef2f5;
            font-family: Arial, sans-serif;
          }

          .habits-card {
            max-width: 600px;
            margin: auto;
            background: white;
            padding: 30px;
            border-radius: 8px;
            box-shadow: 0 4px 10px rgba(0,0,0,0.1);
          }

          .habit-item {
            display: flex;
            align-items: center;
            margin-bottom: 15px;
            font-size: 18px;
          }

          .habit-item input {
            margin-right: 10px;
            transform: scale(1.2);
          }

          .completed {
            text-decoration: line-through;
            color: green;
          }
        `}
      </style>

      <div className="habits-container">
        <div className="habits-card">
          <h2>Habit Tracking</h2>
          <p>Chagua habits ulizofanya leo</p>

          {habits.map((habit, index) => (
            <div className="habit-item" key={index}>
              <input
                type="checkbox"
                checked={habit.completed}
                onChange={() => toggleHabit(index)}
              />
              <span className={habit.completed ? "completed" : ""}>
                {habit.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Habits;
