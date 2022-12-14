interface MetricsComponentProps {
  metrics: string;
}

const MetricsComponent = (props: MetricsComponentProps) => {
  return (
    <section>
      <h2>Metrics</h2>
      {props.metrics ? <pre>{props.metrics}</pre> : <p>Loading...</p>}{' '}
    </section>
  );
};

export default MetricsComponent;
