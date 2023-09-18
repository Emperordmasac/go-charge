import "@/styles/circular-progress-bar.css";

const CircularProgressUsers = ({ value }) => {
  const circleWidth = 200;
  const radius = 85;

  const dashArray = radius * Math.PI * 2;
  const dashOffest = dashArray - (dashArray * value) / 100;

  return (
    <div>
      <svg
        width={circleWidth}
        height={circleWidth}
        viewBox={`0 0 ${circleWidth} ${circleWidth}`}
        className="w-[30vw]"
      >
        <circle
          cx={circleWidth / 2}
          cy={circleWidth / 2}
          strokeWidth="15px"
          r={radius}
          // className={`stroke-[${stroke}] fill-none`}
          className="circle-bg-users"
        />

        <circle
          cx={circleWidth / 2}
          cy={circleWidth / 2}
          strokeWidth="15px"
          r={radius}
          className="circle-progress-users"
          // className={`stroke-[${progress}] fill-none`}
          style={{
            strokeDasharray: dashArray,
            strokeDashoffset: dashOffest,
          }}
          transform={`rotate(-90 ${circleWidth / 2} ${circleWidth / 2}) `}
        />
        <text
          x="50%"
          y="50%"
          dy="0.3em"
          textAnchor="middle"
          className="text-[40px] font-medium"
          fill="#757886"
        >
          {value} %
        </text>
        <text
          x="50%"
          y="70%"
          dy="0.3em"
          textAnchor="middle"
          className="text-[16px] font-medium"
          fill="#757886"
        >
          Active
        </text>
      </svg>
    </div>
  );
};

const CircularProgressEnergy = ({ value }) => {
  const circleWidth = 200;
  const radius = 85;

  const dashArray = radius * Math.PI * 2;
  const dashOffest = dashArray - (dashArray * value) / 100;

  return (
    <div>
      <svg
        width={circleWidth}
        height={circleWidth}
        viewBox={`0 0 ${circleWidth} ${circleWidth}`}
        className="w-[30vw]"
      >
        <circle
          cx={circleWidth / 2}
          cy={circleWidth / 2}
          strokeWidth="15px"
          r={radius}
          // className={`stroke-[${stroke}] fill-none`}
          className="circle-bg-energy"
        />

        <circle
          cx={circleWidth / 2}
          cy={circleWidth / 2}
          strokeWidth="15px"
          r={radius}
          className="circle-progress-energy"
          // className={`stroke-[${progress}] fill-none`}
          style={{
            strokeDasharray: dashArray,
            strokeDashoffset: dashOffest,
          }}
          transform={`rotate(-90 ${circleWidth / 2} ${circleWidth / 2}) `}
        />
        <text
          x="50%"
          y="50%"
          dy="0.3em"
          textAnchor="middle"
          className="text-[40px] font-medium"
          fill="#757886"
        >
          {value} %
        </text>
        <text
          x="50%"
          y="70%"
          dy="0.3em"
          textAnchor="middle"
          className="text-[16px] font-medium"
          fill="#757886"
        >
          Active
        </text>
      </svg>
    </div>
  );
};

const CircularProgressRepairmen = ({ value }) => {
  const circleWidth = 200;
  const radius = 85;

  const dashArray = radius * Math.PI * 2;
  const dashOffest = dashArray - (dashArray * value) / 100;

  return (
    <div>
      <svg
        width={circleWidth}
        height={circleWidth}
        viewBox={`0 0 ${circleWidth} ${circleWidth}`}
        className="w-[30vw]"
      >
        <circle
          cx={circleWidth / 2}
          cy={circleWidth / 2}
          strokeWidth="15px"
          r={radius}
          // className={`stroke-[${stroke}] fill-none`}
          className="circle-bg-repairmen"
        />

        <circle
          cx={circleWidth / 2}
          cy={circleWidth / 2}
          strokeWidth="15px"
          r={radius}
          className="circle-progress-repairmen"
          // className={`stroke-[${progress}] fill-none`}
          style={{
            strokeDasharray: dashArray,
            strokeDashoffset: dashOffest,
          }}
          transform={`rotate(-90 ${circleWidth / 2} ${circleWidth / 2}) `}
        />
        <text
          x="50%"
          y="50%"
          dy="0.3em"
          textAnchor="middle"
          className="text-[40px] font-medium"
          fill="#757886"
        >
          {value} %
        </text>
        <text
          x="50%"
          y="70%"
          dy="0.3em"
          textAnchor="middle"
          className="text-[16px] font-medium"
          fill="#757886"
        >
          Active
        </text>
      </svg>
    </div>
  );
};

export {
  CircularProgressUsers,
  CircularProgressEnergy,
  CircularProgressRepairmen,
};
