
const Loader = () => {
  return (
    
    <>
    

<style>
{`.loader-container {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 200px;
      background: white;
      height:100vh;
    }

    .circle {
      fill: none;
      stroke-width: 4;
      animation: rotate 2s linear infinite;
    }

    .outer {
      stroke: #60a5fa;
      stroke-dasharray: 314;
      stroke-dashoffset: 314;
      animation: dash 2s ease-in-out infinite;
    }

    .inner {
      stroke: #2563eb;
      stroke-dasharray: 157;
      stroke-dashoffset: 157;
      animation: dash 2s ease-in-out infinite reverse;
      opacity: 0.6;
    }

    .dots {
      fill: #60a5fa;
      animation: pulse 2s ease-in-out infinite;
    }

    @keyframes rotate {
      100% {
        transform: rotate(360deg);
      }
    }

    @keyframes dash {
      0% {
        stroke-dashoffset: 314;
      }
      50% {
        stroke-dashoffset: 0;
      }
      100% {
        stroke-dashoffset: -314;
      }
    }

    @keyframes pulse {
      0%, 100% {
        opacity: 0.2;
      }
      50% {
        opacity: 1;
      }
    }`}
</style>

  <div className="loader-container">
    <svg width="100" height="100" viewBox="0 0 100 100">
      <circle className="circle outer" cx="50" cy="50" r="45" />
      
      <circle className="circle inner" cx="50" cy="50" r="25" />
      
      <circle className="dots" cx="50" cy="5" r="3" />
      <circle className="dots" cx="95" cy="50" r="3" />
      <circle className="dots" cx="50" cy="95" r="3" />
      <circle className="dots" cx="5" cy="50" r="3" />
    </svg>
  </div>

    </>
  )
}

export default Loader