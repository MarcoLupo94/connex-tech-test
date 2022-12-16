interface TimeComponentProps {
  time: number | string;
  timeDifference: string;
}

const TimeComponent = (props: TimeComponentProps) => {
  return (
    <section>
      <div style={{ position: 'fixed' }}>
        <h2>Time</h2>
        <p>
          Server Time: <b>{props.time}</b>
        </p>
        <p>
          Local machine difference: <b>{props.timeDifference}</b>
        </p>
      </div>
    </section>
  );
};

export default TimeComponent;
