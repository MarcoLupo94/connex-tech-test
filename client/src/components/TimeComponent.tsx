interface TimeComponentProps {
  time: number | string;
  timeDifference: string;
}

const TimeComponent = (props: TimeComponentProps) => {
  return (
    <section>
      <h2>Time</h2>
      <p>Local Machine Time difference</p>
      <p>{props.timeDifference}</p>
    </section>
  );
};

export default TimeComponent;
