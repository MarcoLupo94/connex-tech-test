interface TimeComponentProps {
  time: number | string;
  timeDifference: string;
}

const TimeComponent = (props: TimeComponentProps) => {
  return (
    <section>
      <h2>Time</h2>
      <p>{props.time}</p>
      <p>{props.timeDifference}</p>
    </section>
  );
};

export default TimeComponent;
