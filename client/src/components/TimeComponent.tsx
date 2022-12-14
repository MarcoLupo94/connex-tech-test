interface TimeComponentProps {
  time: string;
}

const TimeComponent = (props: TimeComponentProps) => {
  return (
    <section>
      <h2>Time</h2>
      <p>{props.time}</p>
      <p>Local Machine Time difference</p>
    </section>
  );
};

export default TimeComponent;
