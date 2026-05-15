"use client";

export default function Home() {
  return (
    <main style={{ padding: 60 }}>
      <h1>My Portfolio</h1>

      <div className="grid">
        <div className="card">Project One</div>
        <div className="card">Project Two</div>
        <div className="card">Project Three</div>
      </div>

      <style jsx>{`
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
          margin-top: 40px;
        }

        .card {
          padding: 40px;
          border-radius: 16px;
          border: 1px solid #ddd;
          background: white;
          transition: all 0.25s ease;
          cursor: pointer;
        }

        .card:hover {
          transform: translateY(-10px) scale(1.03);
          box-shadow: 0 12px 30px rgba(0,0,0,0.15);
        }
      `}</style>
    </main>
  );
}