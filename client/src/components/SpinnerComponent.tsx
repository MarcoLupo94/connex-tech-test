import ClipLoader from 'react-spinners/ClipLoader';

const SpinnerComponent = () => {
  return (
    <div>
      {' '}
      <ClipLoader
        color={'#000000'}
        loading={true}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default SpinnerComponent;
