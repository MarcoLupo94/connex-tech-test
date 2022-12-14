interface TimeComponentProps {
  time: any;
}

const TimeComponent = (props: TimeComponentProps) => {
  return (
    <section>
      <h2>Time</h2>
      {props.time.properties ? (
        <p>{props.time.properties.epoch.description}</p>
      ) : (
        <p>Loading...</p>
      )}{' '}
      <p>Local Machine Time difference</p>
    </section>
  );
};

export default TimeComponent;
