import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Button } from "./components/Button";

const Error = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <div className="card">
        <div className="image-wrap">
          <img src="/error.svg" alt="404 Not Found" />
        </div>

        <h1 className="title">404</h1>
        <p className="subtitle">Oops! Page not found</p>
        <p className="desc">
          The page you’re looking for doesn’t exist or has been moved.
        </p>

        <div className="actions">
          <Button className="btn primary" onClick={() => navigate("/")}>
            Go Home
          </Button>

          <button className="btn ghost" onClick={() => navigate(-1)}>
            Go Back
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: 2rem;
  background: radial-gradient(1200px 600px at 20% 10%, #eef1ff 0%, transparent 60%),
              radial-gradient(800px 400px at 80% 20%, #f6f7ff 0%, transparent 60%),
              linear-gradient(135deg, #ffffff, #f3f5ff);

  .card {
    width: 100%;
    max-width: 720px;
    text-align: center;
    padding: 3rem 2.5rem;
    border-radius: 24px;
    background: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(14px);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.12);
    animation: fadeUp 0.7s ease both;
  }

  .image-wrap {
    position: relative;
    margin-bottom: 1.5rem;
  }

  .image-wrap img {
    width: 70%;
    max-width: 420px;
    animation: float 4s ease-in-out infinite;
  }

  .title {
    font-size: 6rem;
    line-height: 1;
    margin: 0.5rem 0 0.5rem;
    background: linear-gradient(135deg, #6c63ff, #8a84ff);
    -webkit-background-clip: text;
    color: transparent;
    letter-spacing: 2px;
  }

  .subtitle {
    font-size: 2rem;
    margin-bottom: 0.5rem;
    color: #222;
    font-weight: 600;
  }

  .desc {
    color: #666;
    font-size: 1.4rem;
    margin-bottom: 2rem;
  }

  .actions {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
  }

  .btn {
    border-radius: 999px;
    padding: 0.9rem 1.6rem;
    font-size: 1.3rem;
    cursor: pointer;
    transition: all 0.25s ease;
  }

  .btn.primary {
    background: linear-gradient(135deg, #6c63ff, #5a54e8);
    color: #fff;
    border: none;
    box-shadow: 0 10px 20px rgba(108, 99, 255, 0.35);
  }

  .btn.primary:hover {
    transform: translateY(-3px);
    box-shadow: 0 16px 30px rgba(108, 99, 255, 0.45);
  }

  .btn.ghost {
    background: transparent;
    border: 1px solid #6c63ff;
    color: #6c63ff;
  }

  .btn.ghost:hover {
    background: #6c63ff;
    color: #fff;
    transform: translateY(-3px);
  }

  /* Animations */
  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(20px) scale(0.98); }
    to { opacity: 1; transform: translateY(0) scale(1); }
  }

  /* Responsive */
  @media (max-width: 600px) {
    .title { font-size: 4.5rem; }
    .image-wrap img { width: 85%; }
  }
`;

export default Error;