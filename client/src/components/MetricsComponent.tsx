interface MetricsComponentProps {
  metrics: string;
}

const MetricsComponent = (props: MetricsComponentProps) => {
  return (
    <section>
      <h2>Metrics</h2>
      <pre>Prometheus Metrics</pre>
    </section>
  );
};

export default MetricsComponent;
