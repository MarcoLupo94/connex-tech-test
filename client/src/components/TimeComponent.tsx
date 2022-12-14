interface TimeComponentProps {
  time: number | string;
  timeDifference: string;
}

const TimeComponent = (props: TimeComponentProps) => {
  return (
    <section>
      <h2>Time</h2>
      {props.time ? <p>{props.time}</p> : <p>Loading...</p>}{' '}
      <p>Local Machine Time difference</p>
      {props.timeDifference ? (
        <p>{props.timeDifference}</p>
      ) : (
        <p>Loading...</p>
      )}{' '}
    </section>
  );
};

export default TimeComponent;
